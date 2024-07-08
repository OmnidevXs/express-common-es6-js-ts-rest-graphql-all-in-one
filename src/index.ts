import express, { Express, Request, Response } from 'express';      // 'express' is the module. express is the function in the module

const app: Express = express();              // express function createa an App object.

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});


const port = process.env.port || 3001;
app.listen(port, () => {
    console.log(`running typescript ${port}`)
})