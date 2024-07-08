const http =  require('http');
const fs = require('fs');

const server  = http.createServer((req, res) =>{
    
    console.log(req.url, req.method);

    let path = './';

    switch(req.url){
        case '/' :
        path +='index.html';
        break;

        case '/about':
        path += 'about.html';
        break;

        default :
        path += '404.html';
        break;

    }


    fs.readFile( path , (err, data) => {
       if(err){
        console.log(err);
        res.end();
       }
       else{
        res.end(data);
       }

    })
    
    // console.log(req.url);
//     if(req.url == '/') {
//         res.end('server running from home');
//     } else if(req.url == '/about'){
//            res.end('serve is running from the about');
//     } else if(req.url == '/contact'){
//         res.end('server is runing contact')
//     }
// else{
//     res.writeHead(404);
//     res.end('404 error. does not exist')
// }
//     // res.end('ser');

})


server.listen(3000,'localhost', () => {
    console.log('server is listening')
})