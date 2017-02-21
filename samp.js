var my_http = require("http");

my_http.createServer(function(request,response,next){
  response.writeHeader(200, {"Content-Type": "text/html"});
 response.write('<html>'+'<body>'+'<form action=\"http://localhost:8080/process_post\" method=\"post\">'+'enter ur s.no'+'<input type=\"text\" name=\"sno\"/>'+'<br>'+'ur name'+'<input type=\"text\" name=\"uname\"/>'+
 '<br>'+'<center>'+'<input type=\"submit\" name=\"sub\" value=\"submit\" />'+'</center>'+'</form>'+
 
 '</body>'+'</html>');


  response.end();
}).listen(8080);
console.log("Server Running on 8080");
