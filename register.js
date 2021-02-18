const regBtn = document.getElementById("regBtn");
regBtn.addEventListener('click',function() {
    let regEmail = $("#regEmail").val();
    let regName = $("#regName").val();
    let regPass = $("#regPass").val();
    let mysql = require('mysql');
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Quintero03",
        database: "passmanager"
    });
    con.connect(function (err) {
        if(err) {
            throw err
        }
        let values = [[regEmail,regName,regPass]]
        let sql = "insert into usuarios values ?"
        con.query(sql,[values],function(err,result) {
            if(err) {
                $("#regError").append("Usuario ya registrado");
            }
            $("#regError").append("Registro Correcto");
        });
    });
});