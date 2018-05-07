var page, userid, pwd, url, result;

exports.pageLoaded = function (args) {
  page = args.object;
}

exports.get_login = function() { 
  userid = page.getViewById("userid");
  pwd = page.getViewById("pwd");
  //  alert(userid.text + pwd.text);
  url = "http://ip/?mode=1&userid=" + userid.text + "&pwd=" + pwd.text;
  
  fetch(url)
    .then((response) => response.text())
    .then((r) => {  

      result = JSON.parse(r);
      alert(result.msg);

    }).catch((e) => {     

      console.log("Error: ");
      console.log(e);      
      
    });
}
