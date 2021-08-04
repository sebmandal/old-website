// routes that render a file
import indexPage from "../pages/index-page";
import trespassersShotPage from "../pages/trespassers";

// redirect routes
import mandoRedirect from "../redirects/mando";
import teboneRedirect from "../redirects/tebone";
import CompRedirect from "../redirects/competent";
import GitHubRedirect from "../redirects/github";

export default {
	//render
	indexPage,
	trespassersShotPage,

	//redirect
	mandoRedirect,
	teboneRedirect,
	CompRedirect,
	GitHubRedirect,
};
