// routes that render a file
import indexPage from "../pages/index-page";

// redirect routes
import mandoRedirect from "../redirects/mando";
import teboneRedirect from "../redirects/tebone";
import CompRedirect from "../redirects/competent";
import GitHubRedirect from "../redirects/github";

export default {
	//render
	indexPage,

	//redirect
	mandoRedirect,
	teboneRedirect,
	CompRedirect,
	GitHubRedirect,
};
