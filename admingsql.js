var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);


//-----------------------------------kitaplar tablosunun oluştuğu alan-------------------------------
db.transaction(function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS kitaplar (kitap_id INTEGER PRIMARY KEY, kitap_ad VARCHAR(50), kitap_yazar VARCHAR(50),icerik VARCHAR(30), sayfa_sayisi VARCHAR(50) ,barkod VARCHAR(50),stok INTEGER,fiyat INTEGER,resim VARCHAR(50) )');
});
//-----------------------------------kitaplar tablosunun oluştuğu alan-------------------------------


//----------------------------------------------------------------------------------GİRİLEN DEĞERLERİN TABLOYA INSERTÜ-----------------------------------------
function pages(kitapadi, yazaradi, icerik, sayfasayisi, barkod, stok, fiyat, a) {


    db.transaction(function(tx) {
        tx.executeSql('INSERT INTO kitaplar (kitap_ad,kitap_yazar,icerik,sayfa_sayisi,barkod,stok,fiyat,resim) VALUES (?,?,?,?,?,?,?,?)', [kitapadi, yazaradi, icerik, sayfasayisi, barkod, stok, fiyat, a], function(tx, result) {
                alert("Kayıt başarılı" + result);
                temizle00();

            },
            function(tx, error) {
                alert("Kayıt başarısız:" + error.message);
            });
    })

}
//----------------------------------------------------------------------------------GİRİLEN DEĞERLERİN TABLOYA INSERTÜ-----------------------------------------


//--------------------------------------------------------ADI GİRİLEN DEĞERİN TABLODAN SİLİNMESİ------------------------------
function sill(kitapadi) {

    db.transaction(function(tx) {

        tx.executeSql('DELETE FROM kitaplar WHERE kitap_ad=?', [kitapadi], function(tx, results) {

        }, function(tx, error) {
            alert("Kayıt başarısız:" + error.message);
        });
    })
}
//--------------------------------------------------------ADI GİRİLEN DEĞERİN TABLODAN SİLİNMESİ------------------------------ b

//-------------------------------------GÜNCELLEME TABLOSU------------------------------------------

db.transaction(function(tx) {
    tx.executeSql('SELECT * FROM kitaplar', [], function(tx, results) {


        degeral(results);




    }, function(tx, error) {
        alert("HATA: " + error.message);
    });
});


//-------------------------------------GÜNCELLEME TABLOSU------------------------------------------


//-------------------------------------AÇILIR PANELDEKİ DEĞERLERİ KAYDETME------------------------------------------
function bookupdate(k_ad, k_yazar, k_icerik, k_sayfa, k_barkod, k_stok, k_fiyat, k_resim) {

    db.transaction(function(tx) {

        tx.executeSql('UPDATE kitaplar SET kitap_ad=?,kitap_yazar=?,icerik=?,sayfa_sayisi=?,barkod=?,stok=?,fiyat=?,resim=? WHERE barkod=?', [k_ad, k_yazar, k_icerik, k_sayfa, k_barkod, k_stok, k_fiyat, k_resim, k_barkod], function(tx, results) {

            alert("GÜNCELLEME BAŞARILI");
            document.getElementById("update").innerHTML = "";
        }, function(tx, error) {
            alert("Kayıt başarısız:" + error.message);
        });
    })

}

//-------------------------------------AÇILIR PANELDEKİ DEĞERLERİ KAYDETME------------------------------------------


function kitapsilsql(barkodsil) {


    db.transaction(function(tx) {

        tx.executeSql('DELETE FROM kitaplar WHERE barkod=?', [barkodsil], function(tx, results) {

            alert("KİTAP SİLİNDİ");
        }, function(tx, error) {
            alert("Kayıt başarısız:" + error.message);
        });
    })


}

//---------------------------------------------------------------EKLEME PANELİNDEKİ VERİLERİ TABLOYA EKLEME------------------
function yenikitapinsert(adk, yazark, icerikk, sayfak, barkodk, stokk, fiyatk, d) {

    db.transaction(function(tx) {

        tx.executeSql('INSERT INTO kitaplar (kitap_ad,kitap_yazar,icerik,sayfa_sayisi,barkod,stok,fiyat,resim) VALUES (?,?,?,?,?,?,?,?)', [adk, yazark, icerikk, sayfak, barkodk, stokk, fiyatk, d], function(tx, results) {

            alert("KİTAP EKLENDİ");
            document.getElementById("update").innerHTML = "";
        }, function(tx, error) {
            alert("Kayıt başarısız:" + error.message);
        });
    })

}