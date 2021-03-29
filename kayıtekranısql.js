var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
//------------------------------------------KULLANICILAR TABLOSUNUN OLUŞTURULMASI---------------------------------------------
db.transaction(function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS KULLANICILAR (id INTEGER PRIMARY KEY, kul_adi VARCHAR(50), password VARCHAR(50) , email VARCHAR(50) , role byte)'); //TABLO OLUŞTURULUYOR:
});
//------------------------------------------KULLANICILAR TABLOSUNUN OLUŞTURULMASI---------------------------------------------
var a = "KAYIT EKLEME BAŞARILI :)";
//------------------------------------------KAYDIN TABLOYA EKLENMESİ---------------------------------------------
/*function kayitekle(kullaniciadi, kullanicisifre, kullaniciemail) {
    return new Promise(function(resolve, reject) {
        db.transaction(function(tx) {
            tx.executeSql('INSERT INTO KULLANICILAR (kul_adi,password,email,role) VALUES ( ? , ? , ? , 0)', [kullaniciadi, kullanicisifre, kullaniciemail]),
                function(a, results, tx) {
                    resolve(a, results, tx);
                },
                function(tx, error) {
                    reject(alert("başarısız" + error.message));
                }
        });
    })
}*/
//------------------------------------------KAYDIN TABLOYA EKLENMESİ---------------------------------------------
function kayitekle(kullaniciadi, kullanicisifre, kullaniciemail) {
    return new Promise(function(resolve, reject) {


        db.transaction(function(tx) {
            tx.executeSql('INSERT INTO KULLANICILAR (kul_adi,password,email,role) VALUES ( ? , ? , ? , 0)', [kullaniciadi, kullanicisifre, kullaniciemail], function(tx, results) {

                resolve(results);

            }, function(tx, error) {
                reject("Kayıt başarısız:" + error.message);
            });
        })


    })
}