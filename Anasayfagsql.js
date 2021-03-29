var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);


//----------------------------------------------------------------------------------------URUNLER-----------------------------------------
//--------------------------------------PROMİSE-------------
function ana() {
    return new Promise(function(resolve, reject) {


            db.transaction(function(tx) {
                tx.executeSql('SELECT * FROM kitaplar', [], function(tx, results) {

                    resolve(results);

                }, function(tx, error) {
                    reject("Kayıt başarısız:" + error.message);
                });
            })


        }) //promise kapat
}
//--------------------------------------PROMİSE-------------
//----------------------------------------------------------------------------------------URUNLER-----------------------------------------



//---------------------------------------------------------------------------------SEPET TABLOSU OLUŞTURMA-------------------------------



db.transaction(function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS sepet( kullanan INTEGER, urun_no INTEGER,urun_adet INTEGER, siparis_no INTEGER PRIMARY KEY, FOREIGN KEY(kullanan) REFERENCES KULLANICILAR(id), FOREIGN KEY(urun_no) REFERENCES kitaplar(kitap_id))', [], function(tx, results) {


    }, function(tx, error) {
        alert("Kayıt başarısız:" + error.message);
    });
})



//---------------------------------------------------------------------------------SEPET TABLOSU OLUŞTURMA-------------------------------



//--------------------------------------------------------------------------------SEPET TABLOSU KAYIT------------------------------------

function tablokayit(loginname, kitapid, uadet) {

    db.transaction(function(tx) {
        tx.executeSql('INSERT INTO sepet (kullanan,urun_no,urun_adet) VALUES (?,?,?)', [loginname, kitapid, uadet], function(tx, results) {
            alert("EKLEME İŞLEMİ GERÇEKLEŞTİ");

        }, function(tx, error) {
            alert("Kayıt başarısız:" + error.message);
        });
    })

}

//--------------------------------------------------------------------------------SEPET TABLOSU KAYIT------------------------------------