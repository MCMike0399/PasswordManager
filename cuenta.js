function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const btnAltaRed = document.getElementById("btnAltaRed");
btnAltaRed.addEventListener('click', function() {
    $("#redError").empty();
    let redEmail = $("#emailRed").val();
    let passCuentaR = $("#passCuentaR").val();
    let redName = $("#nombreRed").val();
    let redPass = $("#passRed").val();
    let mysql = require('mysql');
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Quintero03",
        database: "passmanager"
    });
    con.connect(function(err) {
        const aes256 = require('aes256');
        let key = passCuentaR;
        let plaintext = redPass;
        let encryptedText = aes256.encrypt(key,plaintext);
        if(err) {
            throw err;
        }
        let r = getRandomInt(1,1000);
        let values = [[redName,redPass,encryptedText,redEmail]];
        let sql = "insert into redes values ?";
        con.query(sql,[values],function(err,result) {
            if(err) {
                $("#redError").append("Error");
            }
            else {
                $("#redError").append("Registro correcto");
            }
        });
    })
});