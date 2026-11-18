// Autoteste do checkout: npx tsx scripts/checkout-check.ts
import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import { orderStatusFor, priceCart, verifyMercadoPagoSignature } from "../src/lib/checkout";
import type { Product } from "../src/types/product";

const base: Product = {
  id: "p1", slug: "p1", name: "Vestido", category: "vestidos", description: "", price: 99.9, images: ["/a.jpg"],
  sizes: ["P", "M"], colors: ["Preto"], inStock: true, featured: false, isNew: false, createdAt: "2026-01-01",
};
const conjunto: Product = { ...base, id: "p2", name: "Conjunto", purchaseOptions: [{ label: "Completo", price: 189.9 }, { label: "Só blusa", price: 89.9 }] };
const esgotado: Product = { ...base, id: "p3", inStock: false };
const catalog = [base, conjunto, esgotado];

// Preço vem do servidor e soma em centavos sem erro de ponto flutuante.
const ok = priceCart(catalog, [
  { productId: "p1", size: "M", color: "Preto", quantity: 3 },
  { productId: "p2", size: "P", color: "Preto", quantity: 1, purchaseOption: "Só blusa" },
]);
assert.ok(!("error" in ok));
assert.equal(ok.totalCents, 9990 * 3 + 8990);
assert.equal(ok.lines[1].unitPriceCents, 8990);

assert.ok("error" in priceCart(catalog, [{ productId: "x", size: "M", color: "Preto", quantity: 1 }]));
assert.ok("error" in priceCart(catalog, [{ productId: "p3", size: "M", color: "Preto", quantity: 1 }]));
assert.ok("error" in priceCart(catalog, [{ productId: "p1", size: "GG", color: "Preto", quantity: 1 }]));
assert.ok("error" in priceCart(catalog, [{ productId: "p1", size: "M", color: "Azul", quantity: 1 }]));
assert.ok("error" in priceCart(catalog, [{ productId: "p2", size: "M", color: "Preto", quantity: 1 }]));
assert.ok("error" in priceCart(catalog, [{ productId: "p1", size: "M", color: "Preto", quantity: 1, purchaseOption: "Completo" }]));

// Assinatura do webhook conforme o manifesto do Mercado Pago.
const secret = "segredo-de-teste";
const ts = "1742505638683";
const v1 = createHmac("sha256", secret).update(`id:123456;request-id:req-1;ts:${ts};`).digest("hex");
const good = { signature: `ts=${ts},v1=${v1}`, requestId: "req-1", dataId: "123456", secret };
assert.equal(verifyMercadoPagoSignature(good), true);
assert.equal(verifyMercadoPagoSignature({ ...good, dataId: "999" }), false);
assert.equal(verifyMercadoPagoSignature({ ...good, secret: "outro" }), false);
assert.equal(verifyMercadoPagoSignature({ ...good, signature: null }), false);
assert.equal(verifyMercadoPagoSignature({ ...good, signature: `ts=${ts},v1=zz` }), false);
const upper = createHmac("sha256", secret).update(`id:abc1;request-id:req-1;ts:${ts};`).digest("hex");
assert.equal(verifyMercadoPagoSignature({ ...good, dataId: "ABC1", signature: `ts=${ts},v1=${upper}` }), true);

assert.equal(orderStatusFor("approved"), "paid");
assert.equal(orderStatusFor("in_process"), "pending_payment");
assert.equal(orderStatusFor("rejected"), "payment_failed");
assert.equal(orderStatusFor("charged_back"), "refunded");

console.log("checkout-check: ok");
