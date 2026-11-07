import { config } from "dotenv";
import { eq } from "drizzle-orm";
import { requireDb } from "../src/db/client";
import { newsletterSubscribers, orders } from "../src/db/schema";
import {
  decryptPersonalData,
  encryptPersonalData,
  isEncryptedPersonalData,
  normalizeEmail,
  personalDataIndex,
} from "../src/lib/personal-data";

config({ path: ".env.local" });
config();

async function main() {
  const db = requireDb();
  const subscribers = await db.select().from(newsletterSubscribers);
  const orderRows = await db.select().from(orders);
  let protectedSubscribers = 0;
  let protectedOrders = 0;

  for (const subscriber of subscribers) {
    const email = normalizeEmail(isEncryptedPersonalData(subscriber.emailEncrypted)
      ? decryptPersonalData(subscriber.emailEncrypted)
      : subscriber.emailEncrypted);
    const emailEncrypted = isEncryptedPersonalData(subscriber.emailEncrypted)
      ? subscriber.emailEncrypted
      : encryptPersonalData(email);
    if (decryptPersonalData(emailEncrypted) !== email) throw new Error("Falha ao verificar criptografia de e-mail.");
    await db.update(newsletterSubscribers).set({
      emailEncrypted,
      emailHash: personalDataIndex(email),
      userAgent: null,
      updatedAt: new Date(),
    }).where(eq(newsletterSubscribers.id, subscriber.id));
    protectedSubscribers += 1;
  }

  for (const order of orderRows) {
    const customerNameEncrypted = order.customerNameEncrypted && !isEncryptedPersonalData(order.customerNameEncrypted)
      ? encryptPersonalData(order.customerNameEncrypted)
      : order.customerNameEncrypted;
    const customerPhoneEncrypted = order.customerPhoneEncrypted && !isEncryptedPersonalData(order.customerPhoneEncrypted)
      ? encryptPersonalData(order.customerPhoneEncrypted)
      : order.customerPhoneEncrypted;
    const metadata = order.metadata as Record<string, unknown>;
    const encryptedMetadata = typeof metadata.encrypted === "string" && Object.keys(metadata).length === 1
      ? metadata
      : Object.keys(metadata).length
        ? { encrypted: encryptPersonalData(JSON.stringify(metadata)) }
        : metadata;
    await db.update(orders).set({ customerNameEncrypted, customerPhoneEncrypted, metadata: encryptedMetadata, updatedAt: new Date() }).where(eq(orders.id, order.id));
    protectedOrders += 1;
  }

  console.log(JSON.stringify({ protectedSubscribers, protectedOrders }));
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
