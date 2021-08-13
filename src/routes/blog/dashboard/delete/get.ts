import Route from "../../../../core/route";
import Express from "express";
import fs from "fs";

const script = (req: Express.Request, res: Express.Response) => {
	const blogPosts = JSON.parse(fs.readFileSync("data/blogs.json", "utf8"));
	if (!req.session["authorized"] || !req.query.id) {
		return res.redirect("/blog/dashboard");
	} else {
		for (let i = 0; i < blogPosts.length; i++) {
			if (blogPosts[i].id === req.query.id) {
				blogPosts.splice(i, 1);
				fs.writeFileSync("data/blogs.json", JSON.stringify(blogPosts), "utf8");
				break;
			}
		}

		return res.redirect("/blog/dashboard");
	}
};

export default class BlogDashboardDeleteGet extends Route {
	/**
	 * super()
	 * @param path the URL path (/blog/dashboard/delete)
	 * @param method the Express routing method (GET)
	 * @param handler the Express middleware/handler function (script)
	 **/
	constructor() {
		super("/blog/dashboard/delete", "get", script);
	}
}
