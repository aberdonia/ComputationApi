import { Computation } from "../models/Computation";
import { Pipe, pipes } from "../models/Pipe";
import app from "../app";
import { Request, Response } from "express";


export let compute = (req: Request, res: Response) => {
    console.log("hello");

const pipe_array: Array<Pipe> = [];
for (let i = 0; i < pipes.length; i++) {
    pipe_array.push(new Pipe(i));
}
console.log(pipe_array);

const c = new Computation(pipe_array);
c.compute();

console.log(c);

res.setHeader("Content-Type", "application/json");
res.send(c.geometry);




};

export let displaySomething = (req: Request, res: Response) => {
    res.send();
};