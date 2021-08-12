import Route from "../../core/route";
import Express from "express";

const script = (req: Express.Request, res: Express.Response) => {
	return res.render("index", req.session);
};

export default class Home extends Route {
	/**
	 * super()
	 * @param path the URL path (/)
	 * @param method the Express routing method (GET)
	 * @param handler the Express middleware/handler function (script)
	 **/
	constructor() {
		super("/", "get", script);
	}
}
