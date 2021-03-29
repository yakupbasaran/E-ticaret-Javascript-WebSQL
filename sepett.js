//-------------------------ANASAYFA BUTONU--------------------
function anasayfa() {
    window.location.href = "file:///C:/Users/Acer/Desktop/Anasayfag.html";
}
//-------------------------ANASAYFA BUTONU--------------------

var girisyapankisi = localStorage.getItem("idgir");
var girisyapankisininadi = localStorage.getItem("name");
document.getElementById("isimlik").innerHTML = girisyapankisininadi + ": " + girisyapankisi;

//***************************************************************************ÜRÜNLER*********************************************************** */

//---------------------------------------PROMİSE--------------
function ready() {
    first().then(function(results) {
        urunler(results);
    }).catch(function(err) {
        alert(err);
    });
}
//---------------------------------------PROMİSE--------------

function urunler(results, e) {

    var len = results.rows.length,
        i;

    for (i = 0; i < len; i++) {

        var fiyat = results.rows[i].fiyat;
        var id = results.rows[i].kitap_id;
        var stok = results.rows[i].stok;
        var resim = results.rows[i].resim;
        var barkod = results.rows[i].barkod;
        var siparis = results.rows[i].siparis_no;
        var urunadet = results.rows[i].urun_adet;
        var urunno = results.rows[i].urun_no;
        var kimin = results.rows[i].kullanan;
        var kitapad = results.rows[i].kitap_ad;
        var kitapyazar = results.rows[i].kitap_yazar;


        //-------------------------------------------resim---------
        var res = document.createElement("img");
        res.setAttribute("src", resim);
        res.setAttribute("class", "resimler");
        document.body.appendChild(res);
        //-------------------------------------------resim---------

        //-------------------------------------------fiyat---------
        var fiy = document.createElement("div");
        fiy.setAttribute("id", "fiyat" + id);
        fiy.setAttribute("class", "fiyat");
        fiy.innerText = "fiyat:" + fiyat;
        document.body.appendChild(fiy);
        //-------------------------------------------fiyat---------

        //--------------------------------------Kitap Bilgisi------
        var kitapbilgi = document.createElement("div");
        kitapbilgi.setAttribute("id", "kitapbilgi" + id);
        kitapbilgi.setAttribute("class", "kitapbilgi");
        kitapbilgi.innerText = kitapad + "\n" + kitapyazar;
        document.body.appendChild(kitapbilgi);
        //--------------------------------------Kitap Bilgisi------

        //------------------------------------------input----------
        var ade = document.createElement("input");
        ade.setAttribute("id", "input" + id);
        ade.setAttribute("class", "adet");
        ade.setAttribute("type", "text");
        ade.setAttribute("value", urunadet);
        document.body.appendChild(ade);
        //------------------------------------------input----------

        /************************************************************************************************************ */

        //-------------------------------------------azaltma butonu---------
        var az = document.createElement("button");
        az.setAttribute("id", "azalt" + id);
        az.setAttribute("class", "arttirazalt");
        az.setAttribute("onclick", "azalt(" + id + "," + fiyat + ")");
        az.innerText = "-";
        document.body.appendChild(az);
        //-------------------------------------------azaltma butonu---------
        //-------------------------------------------arttırma butonu---------
        var az = document.createElement("button");
        az.setAttribute("id", "arttir" + id);
        az.setAttribute("class", "arttirazalt");
        az.setAttribute("onclick", "arttir(" + id + "," + stok + "," + fiyat + ")");
        az.innerText = "+";
        document.body.appendChild(az);
        //-------------------------------------------arttırma butonu---------

        /************************************************************************************************************ */

        //-------------------------------------------urun toplam alanı-------
        var utop = document.createElement("div");
        utop.setAttribute("id", "uruntop" + id);
        utop.setAttribute("class", "fiyat");
        utop.innerText = fiyat * document.getElementById("input" + id).value;
        document.body.appendChild(utop);
        //-------------------------------------------urun toplam alanı--------

        //-------------------------------------------urunu çıkartma alanı-------
        var cikart = document.createElement("button");
        cikart.setAttribute("id", "cikart" + id);
        cikart.setAttribute("class", "cikart");
        cikart.innerText = "X";
        cikart.setAttribute("onclick", "cikart(" + siparis + ")");
        document.body.appendChild(cikart);
        //-------------------------------------------urunu çıkartma alanı--------

        //GENEL TOPLAMA DEĞER GÖNDERME
        var uruntopp = document.getElementById("uruntop" + id).innerHTML;
        geneltoplamana(uruntopp);
        //GENEL TOPLAMA DEĞER GÖNDERME

        var br = document.createElement("br");
        document.body.appendChild(br);
        var br = document.createElement("br");
        document.body.appendChild(br);
        var br = document.createElement("br");
        document.body.appendChild(br);
        var br = document.createElement("br");
        document.body.appendChild(br);
        var br = document.createElement("br");
        document.body.appendChild(br);

    }



} //Ana fonksiyon apostrofu


//***************************************************************************ÜRÜNLER*********************************************************** */








//------------------------AZALTMA BUTONU--------------------------------
function azalt(id, fiyat) {
    var valu = document.getElementById("input" + id).value;
    if (valu == 1) {
        document.getElementById("input" + id).value = valu;
    } else {
        valu--;
        document.getElementById("input" + id).value = valu;
    }

    /* uruntoplam  */
    var urtop = fiyat * valu;
    document.getElementById("uruntop" + id).innerHTML = urtop;
    /* uruntoplam  */

    /*veritabanında adet güncelleme fonksiyonu*/
    adetupdatetablo(valu, id);
    /*veritabanında adet güncelleme fonksiyonu*/



    //değer 0 veya daha assa işlem yapmaması için
    if (valu !== "1")
        geneltoplamazaltma(fiyat, valu);


}
//------------------------AZALTMA BUTONU--------------------------------


//------------------------ARTTIRMA BUTONU--------------------------------
function arttir(id, stok, fiyat) {
    var valu = document.getElementById("input" + id).value;
    if (valu == stok) {
        document.getElementById("input" + id).value = valu;
    } else {
        valu++;
        document.getElementById("input" + id).value = valu;
    }

    /* uruntoplam  */
    var urtop = fiyat * valu;
    document.getElementById("uruntop" + id).innerHTML = urtop;
    /* uruntoplam  */

    /*veritabanında adet güncelleme fonksiyonu*/
    adetupdatetablo(valu, id);
    /*veritabanında adet güncelleme fonksiyonu*/

    geneltoplamarttirma(fiyat, valu, stok);

}
//------------------------ARTTIRMA BUTONU--------------------------------



//--------------------------------------------------GENEL TOPLAM ANA_______________________
function geneltoplamana(uruntopp) {

    document.getElementById("geneltoplam").innerHTML = parseInt(document.getElementById("geneltoplam").innerHTML) + parseInt(uruntopp) + "TL";

}
//--------------------------------------------------GENEL TOPLAM_______________________

//--------------------------------------------------GENEL TOPLAM AZALTMA_______________________
function geneltoplamazaltma(fiyat, valu) {
    valu = parseInt(valu);
    var deger = valu;
    if (deger > 0)
        document.getElementById("geneltoplam").innerHTML = parseInt(document.getElementById("geneltoplam").innerHTML) - parseInt(fiyat) + "TL";

}
//--------------------------------------------------GENEL TOPLAM AZALTMA_______________________

//--------------------------------------------------GENEL TOPLAM ARTTIRMA_______________________
function geneltoplamarttirma(fiyat, valu, stok) {
    valu = parseInt(valu);
    var deger = valu;
    if (deger < stok)
        document.getElementById("geneltoplam").innerHTML = parseInt(document.getElementById("geneltoplam").innerHTML) + parseInt(fiyat) + "TL";

}
//--------------------------------------------------GENEL TOPLAM ARTTIRMA_______________________

function satinal() {
    Satinal(girisyapankisi, part1);
}


//CALLBACK
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//--------------------------------------------------SATIN AL FONKSİYONLARI--------------------------------------------//
//-----------------------------PROMİSE--------------------------
function part1(results) {
    var len = results.rows.length,
        i;
    for (i = 0; i < len; i++) {
        var a1 = results.rows.item(i).urun_no;
        var a2 = results.rows.item(i).urun_adet;
        part2(a1, a2).then(function(results) {
            part3(results);
        }).catch(function(err) {
            alert(err);
        });
    }
}
//-----------------------------PROMİSE--------------------------

function part3(results, a1, a2) {
    var len = results.rows.length,
        i;
    for (i = 0; i < len; i++) {

        var a0 = results.rows.item(i).stok;
        var art1 = a1;
        var art2 = a2;
        var yeni = a0 - art2;
        guncelle3(a0, art1, art2, yeni);
        tablosil();
        alert("SATIN ALINDI :)");
    }
}