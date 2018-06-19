import { Request, Response } from "express";

/**
 * GET /
 * Home page.
 */
export let index = (req: Request, res: Response) => {
  res.send("Hello, please send a post request to /computation. Use array of Pipe objects.");
};
