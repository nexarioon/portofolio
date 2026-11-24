const CANONICAL_HOST = "fendip.my.id";

export function onRequest(context) {
  const url = new URL(context.request.url);
  const isCanonicalHost = url.hostname === CANONICAL_HOST || url.hostname === "www." + CANONICAL_HOST;

  if (!isCanonicalHost) return context.next();

  const isCanonicalRequest = url.protocol === "https:" && url.hostname === CANONICAL_HOST;
  if (isCanonicalRequest) return context.next();

  url.protocol = "https:";
  url.hostname = CANONICAL_HOST;
  return Response.redirect(url.toString(), 301);
}
