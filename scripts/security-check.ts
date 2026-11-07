import assert from "node:assert/strict";
import { randomBytes } from "node:crypto";

process.env.DATA_ENCRYPTION_KEY = randomBytes(32).toString("base64url");

async function main() {
  const { decryptPersonalData, encryptPersonalData, indexesMatch, normalizeEmail, personalDataIndex } = await import("../src/lib/personal-data");
  const { readLimitedJson, RequestBodyError } = await import("../src/lib/request-security");
  const email = normalizeEmail("  Pessoa+Teste@Exemplo.com ");
  const encrypted = encryptPersonalData(email);
  assert.notEqual(encrypted, email);
  assert.equal(decryptPersonalData(encrypted), email);
  assert(indexesMatch(personalDataIndex(email), personalDataIndex(email)));
  assert.notEqual(personalDataIndex(email), personalDataIndex("outra@exemplo.com"));

  const valid = new Request("https://example.com/api", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ok: true }) });
  assert.deepEqual(await readLimitedJson(valid), { ok: true });
  const oversized = new Request("https://example.com/api", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ value: "x".repeat(5000) }) });
  await assert.rejects(() => readLimitedJson(oversized), (error: unknown) => error instanceof RequestBodyError && error.status === 413);
  console.log("Verificações de segurança concluídas.");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
