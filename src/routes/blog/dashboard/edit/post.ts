import Route from "../../../../core/route";
import Express from "express";
import fs from "fs";

// login
const script = (req: Express.Request, res: Express.Response) => {
	// gotta be logged in to post changes
	if (!req.session["authorized"]) return res.redirect("/blog/dashboard");
	else {
		const blogPosts = JSON.parse(fs.readFileSync("data/blogs.json", "utf8"));

		const blogPost = blogPosts.find(
			(blogPost: any) => blogPost.id === req.params.id
		);

		blogPost.title = req.body.title;
		blogPost.description = req.body.description;
		blogPost.content = req.body.content;

		console.log(blogPosts);
		fs.writeFileSync("data/blogs.json", JSON.stringify(blogPosts, null, 4));

		return res.redirect("/blog/dashboard");
	}
};

export default class BlogDashBoardEditPost extends Route {
	/**
	 * super()
	 * @param path the URL path (/blog/dashboard/edit)
	 * @param method the Express routing method (POST)
	 * @param handler the Express middleware/handler function (script)
	 **/
	constructor() {
		super("/blog/dashboard/edit/:id", "post", script);
	}
}
