var http = require("http");


var page;
var email;
var password;



exports.loaded = function (args) {
    page = args.object;    
}

exports.signIn = function () {
    userid = page.getViewById("userid");
    password = page.getViewById("password");    

    http.getJSON("http://ip/?userid=" + userid.text + "&pwd=" + password.text).then(function (r) {       
        var a = r.result;
        var b = r.msg;
        switch (a)
        {
            case "0":               
                    console.log("Correct");
                    break;
                
            default:                
                    alert(b);
            
        }
    }, function (e) {
       
    });
};

