const http=require('http');
const url=require('url')
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('welcome to home page hjgfds');
    }else if(req.url=='/about'){
        res.end('welcome to about page');  
    }
      else if (req.url=='/contact'){
        res.end('welcome to contact page');  
    }
    
})
server.listen(2500,'127.0.0.1',()=>{
    console.log('listing your local host in 2500');
})