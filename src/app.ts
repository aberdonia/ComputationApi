import express from "express";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import expressValidator from "express-validator";



// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env.example" });

// Controllers (route handlers)
import * as homeController from "./controllers/home";
import * as computationController from "./controllers/computation";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3330);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

/**
 * Primary app routes.
 */
app.get("/", homeController.index);

app.get("/test", computationController.displaySomething);
app.post("/test", computationController.testPost);

app.post("/computation", computationController.compute);


export default app;