import { createCipheriv, createDecipheriv, createHmac, randomBytes, timingSafeEqual } from "node:crypto";

const VERSION = "v1";

function masterKey() {
  const raw = process.env.DATA_ENCRYPTION_KEY;
  if (!raw) throw new Error("DATA_ENCRYPTION_KEY não foi definida.");
  const key = Buffer.from(raw, "base64url");
  if (key.length !== 32) throw new Error("DATA_ENCRYPTION_KEY deve ter 32 bytes em base64url.");
  return key;
}

function deriveKey(purpose: "encrypt" | "index") {
  return createHmac("sha256", masterKey()).update(`divino-look:${purpose}:v1`).digest();
}

export function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

export function personalDataIndex(value: string) {
  return createHmac("sha256", deriveKey("index")).update(value).digest("base64url");
}

export function encryptPersonalData(value: string) {
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", deriveKey("encrypt"), iv);
  const encrypted = Buffer.concat([cipher.update(value, "utf8"), cipher.final()]);
  return [VERSION, iv.toString("base64url"), cipher.getAuthTag().toString("base64url"), encrypted.toString("base64url")].join(".");
}

export function isEncryptedPersonalData(value: string) {
  return value.startsWith(`${VERSION}.`);
}

export function decryptPersonalData(value: string) {
  const [version, encodedIv, encodedTag, encodedValue, extra] = value.split(".");
  if (version !== VERSION || !encodedIv || !encodedTag || !encodedValue || extra) throw new Error("Dado criptografado inválido.");
  const iv = Buffer.from(encodedIv, "base64url");
  const tag = Buffer.from(encodedTag, "base64url");
  if (iv.length !== 12 || tag.length !== 16) throw new Error("Dado criptografado inválido.");
  const decipher = createDecipheriv("aes-256-gcm", deriveKey("encrypt"), iv);
  decipher.setAuthTag(tag);
  return Buffer.concat([decipher.update(Buffer.from(encodedValue, "base64url")), decipher.final()]).toString("utf8");
}

export function indexesMatch(left: string, right: string) {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  return a.length === b.length && timingSafeEqual(a, b);
}
