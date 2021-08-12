import Route from "../../core/route";
import Express from "express";
import fs from "fs";

const script = (req: Express.Request, res: Express.Response) => {
	const blogPosts = JSON.parse(fs.readFileSync("data/blogs.json", "utf8"));
	return res.render("blog/blog", { blogPosts: blogPosts });
};

export default class Home extends Route {
	/**
	 * super()
	 * @param path the URL path (/blog)
	 * @param method the Express routing method (GET)
	 * @param handler the Express middleware/handler function (script)
	 **/
	constructor() {
		super("/blog", "get", script);
	}
}
