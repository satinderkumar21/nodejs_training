
// try {
//     const res = 'y';
//       if(res === 'y'){
//         throw new Error('good')
//       }
//     }

// catch (err) {
//     console.log(err.name);
//     console.log(err.message);
// }

// finally


// let ab = 18;

// console.log(ab);

// let value = 1;

// doSomething(() => {
//   value = 2;
// });

// console.log(value);

// const ab = setTimeout(() => {
//   console.log("Delayed for");
// }, 10000);


// console.log(ab);


// const abc = async function getData() {
//     const url = "https://example.org/products.json";
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
  
//       const json = await response.json();
//       console.log(json);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }

//   console.log(abc);


// const jsonText = `{
//     "browsers": {
//       "firefox": {
//         "name": "Firefox",
//         "pref_url": "about:config",
//         "releases": {
//           "1": {
//             "release_date": "2004-11-09",
//             "status": "retired",
//             "engine": "Gecko",
//             "engine_version": "1.7"
//           }
//         }
//       }
//     }
//   }`;
  
//   console.log(JSON.parse(jsonText));



// console.log(global);


// setTimeout(() => {
//     console.log("set tike out")
//     clearInterval(int)
// }, 3000)

// const int = setInterval(()=>{
//     console.log("12")
// }, 1000)

// console.log(__dirname);
// console.log(__filename);

// const http =  require('http');
// const fs = require('fs');

// const server  = http.createServer((req, res) =>{
    
//     console.log(req.url, req.method);

//     res.setHeader('content-type', 'text/html');

//     let path = './view/';

//     switch(req.url){
//         case '/' :
//         path +='index.html';
//         break;

//         case '/about':
//         path += 'about.html';
//         break;

//         default :
//         path += '404.html';
//         break;

//     }


//     fs.readFile( path , (err, data) => {
//        if(err){
//         console.log(err);
//         res.end();
//        }
//        else{
//         res.end(data);
//        }

//     })
    
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

// })


// server.listen(3000,'localhost', () => {
//     console.log('server is listening')
// })


const express = require('express');
const app = express();


app.get('/',(req, res) =>{
    res.sendFile('./serverview/about',{root:__dirname});
})

app.listen(3000,() => {
    console.log('server is listening good');
});