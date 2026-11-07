const DEFAULT_MAX_BYTES = 4096;

export class RequestBodyError extends Error {
  constructor(public readonly status: 400 | 413 | 415) {
    super(status === 413 ? "Requisição muito grande." : status === 415 ? "Tipo de conteúdo inválido." : "Dados inválidos.");
  }
}

export async function readLimitedJson(request: Request, maxBytes = DEFAULT_MAX_BYTES): Promise<unknown> {
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) throw new RequestBodyError(415);
  const declaredLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(declaredLength) && declaredLength > maxBytes) throw new RequestBodyError(413);
  if (!request.body) throw new RequestBodyError(400);

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let bytes = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > maxBytes) {
        await reader.cancel();
        throw new RequestBodyError(413);
      }
      chunks.push(value);
    }
    const body = new Uint8Array(bytes);
    let offset = 0;
    for (const chunk of chunks) {
      body.set(chunk, offset);
      offset += chunk.byteLength;
    }
    return JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(body)) as unknown;
  } catch (error) {
    if (error instanceof RequestBodyError) throw error;
    throw new RequestBodyError(400);
  } finally {
    reader.releaseLock();
  }
}
