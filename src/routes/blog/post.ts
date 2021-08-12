import Route from "../../core/route";
import Express from "express";
import fs from "fs";

// posting a new post
const script = (req: any, res: Express.Response) => {
	if (!req.session.authorized) return res.redirect("/blog"); // gotta be logged in to do this
	const blogPosts = JSON.parse(fs.readFileSync("data/blogs.json", "utf8"));
	const newBlog = {
		title: req.body.title,
		description: req.body.description,
		date: new Date(Date.now()).toLocaleString(),
		content: req.body.content,
	};
	blogPosts.unshift(newBlog); //unshift instead of push because latest is first
	fs.writeFileSync("data/blogs.json", JSON.stringify(blogPosts, null, 4));

	return res.redirect("/blog/dashboard");
};

export default class Home extends Route {
	/**
	 * super()
	 * @param path the URL path (/blog)
	 * @param method the Express routing method (POST)
	 * @param handler the Express middleware/handler function (script)
	 **/
	constructor() {
		super("/blog", "post", script);
	}
}
