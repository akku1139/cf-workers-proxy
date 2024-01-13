export interface Env {
}

async function v1(url:String): Promise<Response>{
  return new Response('Hello World!');
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url:URL = new URL(request.url);
    switch (url.pathname) {
      case "/v1":
        return await v1(url.searchParams.get("url"));
        break;
      default:
        break;
    }
	}
};
