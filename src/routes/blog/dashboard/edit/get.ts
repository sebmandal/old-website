import Route from "../../../../core/route";
import Express from "express";
import fs from "fs";

const script = (req: Express.Request, res: Express.Response) => {
	const blogPosts = JSON.parse(fs.readFileSync("data/blogs.json", "utf8"));
	if (!req.session["authorized"] || !req.query.id) {
		return res.redirect("/blog/dashboard");
	} else {
		return res.render("blog/edit", {
			session: req.session,
			post: blogPosts.find((post: any) => post.id === req.query.id),
		});
	}
};

export default class BlogDashboardEditGet extends Route {
	/**
	 * super()
	 * @param path the URL path (/blog/dashboard/edit)
	 * @param method the Express routing method (GET)
	 * @param handler the Express middleware/handler function (script)
	 **/
	constructor() {
		super("/blog/dashboard/edit", "get", script);
	}
}
