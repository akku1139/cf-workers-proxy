export interface Env {
}

async function v1(req: Request): Response {
  return fetch((req=decodeURIComponent(new URL(req.url).searchParams.get("url"))));
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url:URL = new URL(request.url);
    switch (url.pathname) {
      case "/v1":
        return await v1(req);
      default:
        break;
    }
	}
};
