const http=require('http')
let server=http.createServer((req,res)=>{
    console.log("Request Received");
    res.end("<b>hello</b>");
})
server.listen(2000,()=>{
    console.log("server started listening on port 2000");
})