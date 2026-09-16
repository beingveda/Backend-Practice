const http = require("http");

const server = http.createServer((req,res)=>{
    // res.end("Hello coder army");

    if(req.url==="/"){
        res.end("Hello Coder army");
    }
    else if(req.url==="/about"){
        res.end("This is our about page");
    }
    else if(req.url==="/contact"){
        res.end("This is our contact page");
    }
    else{
        res.end("error:Page not found")
    }
});

server.listen(3000,()=>{
    console.log("I am listening")
})