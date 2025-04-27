// functions/[...proxy].ts

export async function onRequest(request: Request) {
  const incomingUrl = new URL(request.url);
  const targetUrl = incomingUrl.searchParams.get('url');

  if (!targetUrl) {
    return new Response('Missing "?url=" query parameter.', { status: 400 });
  }

  try {
    const proxyResponse = await fetch(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: 'follow',
    });

    const response = new Response(proxyResponse.body, proxyResponse);

    // Allow CORS
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', '*');

    return response;
  } catch (err) {
    return new Response(`Proxy error: ${err}`, { status: 500 });
  }
}
