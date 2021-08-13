import Route from "../../core/route";
import Express from "express";

const script = (req: Express.Request, res: Express.Response) => {
	return res.redirect("https://github.com/sebmandal/mando");
};

export default class MandoRedirect extends Route {
	/**
	 * super()
	 * parameter 1: the URL path (/)
	 * parameter 2: the Express routing method (GET)
	 * parameter 3: the Express middleware/handler function (script)
	 **/
	constructor() {
		super("/mando", "get", script);
	}
}
