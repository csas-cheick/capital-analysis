export async function fetchStaticContent<T>(payload: T): Promise<T> {
  return payload;
}

export async function healthcheck(): Promise<{ ok: boolean }> {
  return { ok: true };
}
