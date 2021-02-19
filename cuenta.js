const btnAltaRed = document.getElementById("btnAltaRed");
btnAltaRed.addEventListener('click', function() {
    $("#redError").empty();
    let redEmail = $("#emailRed").val();
    let passCuentaR = $("#passCuentaR").val();
    let redName = $("#nombreRed").val();
    let redPass = $("#passRed").val();
    let r = getRandomInt(0,10000) + getRandomInt(0,10000);
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
        let values = [[r,redName,redPass,encryptedText,redEmail]];
        let sql = "insert into redes values ?";
        console.log(values);
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
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function randomizer() {
    let passRan = "";
    let letras = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!#$&";
    for(let i=0; i<12; i++) {
        passRan += letras[getRandomInt(0,66)];
    }
    return passRan;
}
const btnAutoGen = document.getElementById("btnAutoGen");
btnAutoGen.addEventListener('click',function() {
    $("#passRed").val(randomizer());
});