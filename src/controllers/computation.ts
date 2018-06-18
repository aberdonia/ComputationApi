import { Computation } from "../models/Computation";
import { Pipe } from "../models/Pipe";
import app from "../app";
import { Request, Response } from "express";


export let compute = (req: Request, res: Response) => {
    console.log("hello");
    const p = new Pipe;

    p.description = "string";
p.horizontal_change = 300;
p.vertical_change = 250;
p.inner_diamter = 6;
p.roughness = 0.0015;
p.cores = 1;

const q = new Pipe;
q.description = "string";
q.horizontal_change = 100;
q.vertical_change = 200;
q.inner_diamter = 5;
q.roughness = 0.002;
q.cores = 1;

const c = new Computation([p, q]);
c.compute();

console.log(c);

res.setHeader("Content-Type", "application/json");
res.send(c.geometry);




};

export let displaySomething = (req: Request, res: Response) => {
    res.send();
};