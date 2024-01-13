export interface Env {
}

function v1(req: Request): Promise<Response> {
  let req2 = {...req};
  req2.url = decodeURIComponent(new URL(req.url).searchParams.get("url"));
  return fetch(req2);
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
