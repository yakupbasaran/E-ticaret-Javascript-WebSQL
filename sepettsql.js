var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);


//---------------------------------------ÜRÜNLERİN SELECTİ-------------------------------------------------
//---------------------------------------PROMİSE--------------
function first() {

    return new Promise(function(resolve, reject) {

        db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM sepet LEFT OUTER JOIN kitaplar ON sepet.urun_no = kitaplar.kitap_id where kullanan=?', [localStorage.getItem("idgir")], function(tx, results) {


                resolve(results);

            }, function(tx, error) {
                reject("Kayıt başarısız:" + error.message);
            });
        });


    }); //Promise kapat

}
//---------------------------------------PROMİSE--------------
//---------------------------------------ÜRÜNLERİN SELECTİ-------------------------------------------------


//---------------------------------------ÜRÜN ADETİN TABLODA GÜNCELLEMESİ----------------------------------
function adetupdatetablo(valu, id) {

    db.transaction(function(tx) {
        tx.executeSql('UPDATE sepet SET urun_adet=? WHERE kullanan=? AND urun_no=?', [valu, girisyapankisi, id], function(tx, results) {

        }, function(tx, error) {
            alert("Kayıt başarısız:" + error.message);
        });
    });

}
//---------------------------------------ÜRÜN ADETİN TABLODA GÜNCELLEMESİ----------------------------------

//-------------------------------------------------URUNUN TABLODAN ÇIKARTILDIĞI ALAN____________
function cikart(siparis) {

    db.transaction(function(tx) {
        tx.executeSql('DELETE FROM sepet WHERE siparis_no=?', [siparis], function(tx, results) {
            alert("Ürününüz sepetten çıkartıldı.");
        }, function(tx, error) {
            alert("Kayıt başarısız:" + error.message);
        });
    });

}
//-------------------------------------------------URUNUN TABLODAN ÇIKARTILDIĞI ALAN____________

//function satinAl(id, callback) {
//   alert("selam")
//    callback()
//}





//****************************************************************************************************************************************************** */

//--------------------------------------------------SATIN AL BUTONU--------------------------------------------------------------
function Satinal(girisyapankisi, callback) {
    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM sepet WHERE sepet.kullanan = ?', [girisyapankisi], function(tx, results) {
            callback(results);
            console.log(results);
        }, function(tx, err) {
            console.log(err.message);
        });
    });
}

//--------------------------------------------------SATIN AL BUTONU--------------------------------------------------------------

//-------------------------------------------------SATIN AL-----------------------------------------
//----------------------------PROMİSE---------
function part2(a1, a2) {

    return new Promise(function(resolve, reject) {
        db.transaction(function(tx) {

            tx.executeSql('SELECT * FROM kitaplar WHERE kitap_id = ?', [a1], function(tx, results) {

                resolve(results, a1, a2);


            }, function(tx, err) {
                reject(err.message);
            });
        });
    });

}
//----------------------------PROMİSE---------
//-------------------------------------------------SATIN AL-----------------------------------------


//------------------------------------------------SATIN ALDA STOKTAN ÜRÜN ADETİNİ DÜŞME------------------------------------------
function guncelle3(a0, art1, art2, yeni) {

    db.transaction(function(tx) {
        tx.executeSql('UPDATE kitaplar SET stok=? WHERE kitap_id= ?', [yeni, art1]),
            function(tx, result) {
                alert("başarılı");
            },
            function(tx, error) {

                alert("hata:" + error);
            }
    });
}
//------------------------------------------------SATIN ALDA STOKTAN ÜRÜN ADETİNİ DÜŞME------------------------------------------


//---------------------------------------SATIN AL STOKTAN DÜŞTÜKTEN SONRA SEPETİ SİLME-------------------------------------------
function tablosil() {

    db.transaction(function(tx) {
        tx.executeSql('DELETE FROM sepet WHERE kullanan=?', [girisyapankisi]),
            function(tx, result) {

                alert("başarılı");
            },
            function(tx, error) {

                alert("hata:" + error);
            }
    });
}
//---------------------------------------SATIN AL STOKTAN DÜŞTÜKTEN SONRA SEPETİ SİLME-------------------------------------------