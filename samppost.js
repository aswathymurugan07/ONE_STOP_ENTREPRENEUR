
var http=require("http");
var querystring=require("querystring");
var qs,Name,Sender,Subject;
function onRequest(req,res)
{
    var data1='';
    req.on('data',function(chunk)
    {
        console.log(chunk);
        data1+=chunk;
        console.log("data string format"+data1);
    });

req.on('end',function()
{
    qs=querystring.parse(data1);
    console.log(qs);
    Name=qs['Name'];
    Email=qs['Sender'];
    Password=qs['Suject']
    res.write("<body></body>");
res.write("<br><h1 style='font-size:35px;text-align:center'>LOGIN DETAILS</h1><br><hr><h1 style='float:right;'>Welcome "+Name+",<br></h3>")
res.write("<html><body bgcolor='pink'></body></html>");
res.write("<html><body><h2 style='margin-top:100px;margin-left:480px;margin-right:60px;font-style:cursive'>UserName: "+Name+"<br><br>Email id: "+Email+"<br><br>Password: "+Password+"<br></body></html></h2>"); 
res.write("<html><body><img src-'http://www.thepanelstation.com/htmlfiles/confirmation-template/images/thankyou-for-registration-confirmation-temp-eng.png'></body></html>");
res.end();
});
}
http.createServer(onRequest).listen(3002);
console.log('server has started');
