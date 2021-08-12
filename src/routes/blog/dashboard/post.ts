import Route from "../../../core/route";
import Express from "express";
import fs from "fs";

// login
const script = (req: Express.Request, res: Express.Response) => {
	let inputs = {
		name: req.body.name,
		password: req.body.password,
	};

	if (
		inputs.name === process.env.DASHBOARD_LOGIN! ||
		inputs.password === process.env.DASHBOARD_PASSWORD!
	) {
		req.session["authorized"] = true;
	}

	return res.redirect("/blog/dashboard");
};

export default class Home extends Route {
	/**
	 * super()
	 * @param path the URL path (/blog/dashboard)
	 * @param method the Express routing method (POST)
	 * @param handler the Express middleware/handler function (script)
	 **/
	constructor() {
		super("/blog/dashboard", "post", script);
	}
}
