import express from 'express';      // 'express' is the module. express is the function in the module
const app = express();              // express function createa an App object.
// Express是一个自身功能极简单，完全由路由和中间件构成的web开发框架，从本质上说，一个Express应用是在调用各种中间件。
// middleware是一个函数,他可以访问请求对象（request object(req)）响应对象（response object(res)）和web应用中处于请求-响应循环

// 1 - 应用级middleware绑定到app对象使用app.use和app.METHOD()-需要处理http请求的方法，例如GET、PUT、POST
// 1.1 没有挂载路径的中间件，应用中的每个请求都会执行该中间件
app.use((req,res,next) => {
    console.log('Time',Date.now());
    next(); // 传递request对象给下一个中间件
})

// 挂载至/user/:id的中间件，任何执行/user/:id的请求都会执行它
app.use('/user/:id',(req,res,next) => {
    console.log('Request Type',req.method);
    next();
})

// 路由和句柄函数（中间件系统），处理指向/user/:id的GET请求
app.get('/user/:id',(req,res,next)=>{
    console.log('USER');
})

// - 路由级中间件
// - 错误处理中间件
// - 内置中间件
// - 第三方中间件



app.get('/', (req, res) => {
    res.send('This is a call back');
})

const port = process.env.port || 3001;
app.listen(port,()=>{
    console.log(`running ${port}`)
})