import Route from "../../../core/route";
import Express from "express";
import fs from "fs";

const script = (req: any, res: Express.Response) => {
	const blogPosts = JSON.parse(fs.readFileSync("data/blogs.json", "utf8"));
	const blogPost = blogPosts.find(
		(blogPost: any) => blogPost.id === req.query.id
	);
	return res.render("blog/post", {
		post: blogPost,
	});
};

export default class Home extends Route {
	/**
	 * super()
	 * @param path the URL path (/blog/post)
	 * @param method the Express routing method (GET)
	 * @param handler the Express middleware/handler function (script)
	 **/
	constructor() {
		super("/blog/post", "get", script);
	}
}
