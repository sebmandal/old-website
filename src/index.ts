// Get config from .env file
import dotenv from "dotenv";
dotenv.config();

// Import modules
import express from "express";
import path from "path";

// Set up Express app (views, static files, etc.)
const app = express();
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(express.static("./public"));

// Session setup (cookies)
import session from "express-session";
app.set("trust proxy", 1);
app.use(
	session({
		secret: process.env.COOKIESECRET!,
		resave: false,
		saveUninitialized: true,
		cookie: {
			secure: true, // true if https (not http)
		},
	})
);

// Automatically configure Express routes
import routes from "./core/all_routes";
Object.entries(routes).forEach(([_, Route]) => {
	new Route().run(app);
});

// Start the Express server
app.listen(process.env.PORT || 3000);
