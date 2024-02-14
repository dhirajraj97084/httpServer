const http=require('http');
const url=require('url');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('<h1> welocome to home page </h1>');
    }else if(req.url==='/about'){
        res.end('<h1> welocome to about page </h1>');  
    }else if(req.url==='/contact'){
        res.end('<h1> welocome to contact page </h1>');  
    }else{
        res.writeHead(404 , {"Content-type" :"text/html"})
        res.end(" <h1> 404 page does not exit </h1> ");   
    }
    
})
server.listen(2300,'127.0.0.1',()=>{
    console.log('sucessful run your localhost:2300');
})