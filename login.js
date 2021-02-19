const logBtn = document.getElementById("logBtn");
logBtn.addEventListener('click',function() {
    const fs = require("fs");
    const mysql = require("mysql");
    let username = $("#username").val();
    let pass = $("#pass").val();
    console.log(username);
    console.log(pass);
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Quintero03",
        database: "passmanager"
    });
    con.connect(function (err) {
        if(err) {
            throw err;
        }
        let sql = "select correo,pass from usuarios where correo=? and pass=?";
        let values = [[username],[pass]];
        con.query(sql,values,function(err,results,fields) {
            if(err) {
                throw err;   
            }
            else {
                if(username==results[0].correo && pass==results[0].pass) {
                    console.log("entré");
                    fs.writeFile("user.txt",username,function(err){
                        if(err) {
                            throw err;
                        }
                    });
                    fs.writeFile("pass.txt",pass,function(err){
                        if(err) {
                            throw err;
                        }
                    });
                    window.location.href = "information.html";
                }
            }
        });
    });
});