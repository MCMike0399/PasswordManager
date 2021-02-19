const fs = require("fs");
const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Quintero03",
    database: "passmanager"
});
con.connect(function (err) {
    if(err) {
        throw err;
    }
    fs.readFile("user.txt","utf8",(err,data) => {
        if(err) {
            throw err;
        }
        let sql = "select redsocial,pass,passE from redes where correo=?";
        let values = [[data]];
        con.query(sql,values,function(err,result) {
            if(err) {
                throw err;
            }
            appendData(result);
        });
    });
    
});
function appendData(object) {
        $('#content').append('<table id="jsonTable"><thead><tr></tr></thead><tbody></tbody></table>');
        
      $.each(Object.keys(object[0]), function(index, key){
        $('#jsonTable thead tr').append('<th>' + key + '</th>');
      });	
      $.each(object, function(index, jsonObject){     
        if(Object.keys(jsonObject).length > 0){
          var tableRow = '<tr>';
          $.each(Object.keys(jsonObject), function(i, key){
             tableRow += '<td>' + jsonObject[key] + '</td>';
          });
          tableRow += "</tr>";
          $('#jsonTable tbody').append(tableRow);
        }
        });
}
const btnDelete = document.getElementById("btnDelete");
    btnDelete.addEventListener('click', function() {
        let redSocial = $("#textDelete").val();
        const mysql = require('mysql');
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Quintero03",
        database: "passmanager"
    });
    con.connect(function (err) {
        if(err) {
            throw err;
        }
        let sql = "delete from redes where redsocial=?";
        let values = [[redSocial]]
        con.query(sql,[values],function(err) {
            if(err) {
                throw err;   
            }
            else {
                window.location.href = "information.html";
            }
        });
    });
});
const btnBack = document.getElementById("btnBack");
btnBack.addEventListener('click',function() {
    fs.writeFile('user.txt', '', function(){console.log('done')});
    fs.writeFile('pass.txt', '', function(){console.log('done')});
    window.location.href = "index.html";
});