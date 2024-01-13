export interface Env {
}

function v1(r: Request): Promise<Response> {
  return fetch(decodeURIComponent(new URL(r.url).searchParams.get("url")), {
    /*
    method: r.method,
    headers: r.headers,
    body: r.body
    */
    ...r
  });
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url:URL = new URL(request.url);
    switch (url.pathname) {
      case "/v1":
        return v1(request);
      default:
        break;
    }
	}
};
