import { Computation } from "../models/Computation";
import { Pipe } from "../models/Pipe";
import app from "../app";
import { Request, Response } from "express";


export let compute = (req: Request, res: Response) => {

    // build pipe array
    console.log(req.body);
    const pipe_array: Array<Pipe> = req.body.pipes;
    // const pipe_array: Array<Pipe> = [];
    // for (let i = 0; i < pipes.length; i++) {
    //     pipe_array.push(new Pipe(i));
    // }
    console.log(pipe_array);

    // creat computation client and fit to pipe array
    const c = new Computation(pipe_array);
    // perform computation on pipe array
    c.compute();

    console.log(c);

    // // build chartData object and return
    // res.header("Access-Control-Allow-Origin", "*");

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000/");
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send(c.getChartData());

};

export let testPost = (req: Request, res: Response) => {
    const pipe_array: Array<Pipe> = req.body;

    res.send(pipe_array[0]);
};