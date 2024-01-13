export interface Env {
}

function v1(req: Request): Promise<Response> {
  req.url = decodeURIComponent(new URL(req.url).searchParams.get("url"));
  console.log(req);
  return fetch(req);
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    try{
    const url:URL = new URL(request.url);
    switch (url.pathname) {
      case "/v1":
        return v1(req);
      default:
        break;
    }
    } catch(e){
      console.log(e)
    }
	}
};
