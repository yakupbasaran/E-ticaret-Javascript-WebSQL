var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

//-------------------------------------------------------GİRİŞTE YAPILAN AD KONTROL----------------------------------------------
function giriskontrol(kullanici, sifre, callback, callback2) {
    db.transaction(function(tx) {



        tx.executeSql('SELECT * FROM KULLANICILAR where kul_adi=? AND password=? AND role=0', [kullanici, sifre], function(tx, results) {
            callback(kullanici, sifre, results);

        }, function(tx, error) {
            reject("Giriş başarısız:" + error.message);
        });
    });

    //-------------------------------------------------------GİRİŞTE YAPILAN AD KONTROL----------------------------------------------

    db.transaction(function(tx) {

        tx.executeSql('SELECT * FROM KULLANICILAR where kul_adi=? AND password=? AND role=1', [kullanici, sifre], function(tx, result) {
            callback2(kullanici, sifre, result);
        }, function(tx, error) {
            reject("Giriş başarısız:" + error.message);
        });
    });


}