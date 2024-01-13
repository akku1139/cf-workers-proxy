export interface Env {
}

function v1(req: Request): Promise<Response> {
  let req2 = req
  req2.url = decodeURIComponent(new URL(req.url).searchParams.get("url"));
  console.log(req);
  return fetch(req);
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url:URL = new URL(request.url);
    switch (url.pathname) {
      case "/v1":
        return v1(req);
      default:
        break;
    }
	}
};
