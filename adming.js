var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

function cikisyap() {
    window.location.href = 'file:///C:/Users/Acer/Desktop/giri%C5%9Fekran%C4%B1.html?';
}

var a;
var c;
var d;

function page() {

    var kitapadi = document.getElementById("kitap_ad").value;
    var yazaradi = document.getElementById("kitap_yazar").value;
    var icerik = document.getElementById("icerik").value;
    var sayfasayisi = document.getElementById("sayfa_sayisi").value;
    var barkod = document.getElementById("barkod").value;
    var stok = document.getElementById("stok").value;
    var fiyat = document.getElementById("fiyat").value;
    pages(kitapadi, yazaradi, icerik, sayfasayisi, barkod, stok, fiyat, a);
}


function update() {
    var kitapadig = document.getElementById("kitap_adg").value;
    var yazaradig = document.getElementById("kitap_yazarg").value;
    var icerikg = document.getElementById("icerikg").value;
    var sayfasayisig = document.getElementById("sayfa_sayisig").value;
    var barkodg = document.getElementById("barkodg").value;
    var stokg = document.getElementById("stokg").value;
    var fiyatg = document.getElementById("fiyatg").value;
    update2(kitapadig, yazaradig, icerikg, sayfasayisig, barkodg, stokg, fiyatg, b);
}


function previewFile() {
    const preview = document.querySelector('img');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function() {

        a = preview.src = reader.result;


    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}


function temizle00() {
    document.getElementById("kitap_ad").value = "";
    document.getElementById("kitap_yazar").value = "";
    document.getElementById("icerik").value = "";
    document.getElementById("sayfa_sayisi").value = "";
    document.getElementById("barkod").value = "";
    document.getElementById("stok").value = "";
    document.getElementById("fiyat").value = "";
}

//-------------------------------------------------------------------------------------------



function degeral(results) {
    var len = results.rows.length,
        i;
    for (i = 0; i < len; i++) {
        var kitapid = results.rows.item(i).kitap_id;
        var kitapadi = results.rows.item(i).kitap_ad;
        var kitapyazari = results.rows.item(i).kitap_yazar;
        var kitapbarkod = results.rows.item(i).barkod;
        var kitapfiyat = results.rows.item(i).fiyat;
        var kitapresim = results.rows.item(i).resim;
        var kitapicerik = results.rows.item(i).icerik;
        var kitapsayfa = results.rows.item(i).sayfa_sayisi;
        var kitapstok = results.rows.item(i).stok;
        güncelletablosu(i, kitapid, kitapadi, kitapyazari, kitapbarkod, kitapfiyat, kitapresim, kitapicerik, kitapsayfa, kitapstok);
    }
}


function güncelletablosu(i, kitapid, kitapadi, kitapyazari, kitapbarkod, kitapfiyat, kitapresim, kitapicerik, kitapsayfa, kitapstok) {




    //-------------kitap adı---------
    var ad = document.createElement("div");
    ad.setAttribute("class", "kad");
    ad.innerText = kitapadi;
    dis.appendChild(ad);
    //-------------kitap adı---------

    //-------------kitap yazarı---------
    var yazar = document.createElement("div");
    yazar.setAttribute("class", "kyazar");
    yazar.innerText = kitapyazari;
    dis.appendChild(yazar);
    //-------------kitap yazarı---------

    //-------------kitap fiyatı---------
    var fiyat = document.createElement("div");
    fiyat.setAttribute("class", "kfiyat");
    fiyat.innerText = kitapfiyat + " TL";
    dis.appendChild(fiyat);
    //-------------kitap fiyatı---------

    //-------------kitap barkodu---------
    var barkod = document.createElement("div");
    barkod.setAttribute("id", kitapbarkod);
    barkod.setAttribute("class", "kbarkod");
    barkod.innerText = kitapbarkod;
    dis.appendChild(barkod);
    //-------------kitap barkodu---------

    //-------------düzenle---------
    var düzenle = document.createElement("button");
    düzenle.setAttribute("class", "düzenle");
    düzenle.innerText = "DÜZENLE";
    düzenle.addEventListener('click', function(event) {
        var dvup = document.getElementById("update");
        //_------------------------------------------------------------------------------------------------
        dvup.innerHTML = "";
        //*************************RESİM*************************** 
        var ktpresim = document.createElement("img");
        ktpresim.setAttribute("id", "ktpresim");
        ktpresim.setAttribute("src", kitapresim);
        dvup.appendChild(ktpresim);
        //*************************RESİM*************************** 

        //*************************AD*************************** 
        var ktpad = document.createElement("input");
        ktpad.setAttribute("type", "text");
        ktpad.setAttribute("id", "ktpad");
        ktpad.setAttribute("value", kitapadi);
        dvup.appendChild(ktpad);
        //*************************AD*************************** 

        //*************************YAZAR*************************** 
        var ktpyazar = document.createElement("input");
        ktpyazar.setAttribute("type", "text");
        ktpyazar.setAttribute("id", "ktpyazar");
        ktpyazar.setAttribute("value", kitapyazari);
        dvup.appendChild(ktpyazar);
        //*************************YAZAR*************************** 

        //*************************İCERİK*************************** 
        var ktpicerik = document.createElement("input");
        ktpicerik.setAttribute("type", "text");
        ktpicerik.setAttribute("id", "ktpicerik");
        ktpicerik.setAttribute("value", kitapicerik);
        dvup.appendChild(ktpicerik);
        //*************************İCERİK*************************** 

        //*************************SAYFA*************************** 
        var ktpsayfa = document.createElement("input");
        ktpsayfa.setAttribute("type", "text");
        ktpsayfa.setAttribute("id", "ktpsayfa");
        ktpsayfa.setAttribute("value", kitapsayfa);
        dvup.appendChild(ktpsayfa);
        //*************************SAYFA*************************** 

        //*************************BARKOD*************************** 
        var ktpbarkod = document.createElement("input");
        ktpbarkod.setAttribute("type", "text");
        ktpbarkod.setAttribute("id", "lazim");
        ktpbarkod.setAttribute("class", "kbarkodd");
        ktpbarkod.setAttribute("value", kitapbarkod);
        dvup.appendChild(ktpbarkod);
        //*************************BARKOD*************************** 

        //*************************STOK*************************** 
        var ktpstok = document.createElement("input");
        ktpstok.setAttribute("type", "text");
        ktpstok.setAttribute("id", "ktpstok");
        ktpstok.setAttribute("value", kitapstok);
        dvup.appendChild(ktpstok);
        //*************************STOK*************************** 

        //*************************FİYAT*************************** 
        var ktpfiyat = document.createElement("input");
        ktpfiyat.setAttribute("type", "text");
        ktpfiyat.setAttribute("id", "ktpfiyat");
        ktpfiyat.setAttribute("value", kitapfiyat);
        dvup.appendChild(ktpfiyat);
        //*************************FİYAT*************************** 

        //*************************DOSYA*************************** 
        var ktpdosya = document.createElement("input");
        ktpdosya.setAttribute("type", "file");
        ktpdosya.setAttribute("id", "ktpdosya");
        ktpdosya.setAttribute("onchange", "previewFilee()");
        dvup.appendChild(ktpdosya);

        //*************************DOSYA*************************** 

        //*************************KAYDET*************************** 
        var kaydet = document.createElement("button");
        kaydet.setAttribute("id", "kaydet");
        kaydet.innerText = "KAYDET";
        kaydet.setAttribute("onclick", "kaydet()");
        dvup.appendChild(kaydet);

        //*************************KAYDET*************************** 
        var brr = document.createElement("br");
        dvup.appendChild(brr);
        var brr = document.createElement("br");
        dvup.appendChild(brr);
        var brr = document.createElement("br");
        dvup.appendChild(brr);
        //*************************KAYDET*************************** 
        var x = document.createElement("button");
        x.setAttribute("id", "x");
        x.innerText = "X";
        x.setAttribute("onclick", "x()");
        dvup.appendChild(x);

        //*************************KAYDET*************************** 

        //_------------------------------------------------------------------------------------------------
    });
    dis.appendChild(düzenle);
    //-------------düzenle---------

    //----------------------------KİTAP SİLME BUTONU--------------------------
    var kitapsil = document.createElement("img");
    kitapsil.setAttribute("src", "çöpkutusu.png");
    kitapsil.setAttribute("class", "kitapdelete");
    kitapsil.addEventListener('click', function(event) {
        kitapsil(kitapbarkod);

        function kitapsil(kitapbarkod) {
            var barkodsil = document.getElementById(kitapbarkod).innerHTML;
            kitapsilsql(barkodsil);
        }

    });
    dis.appendChild(kitapsil);
    //----------------------------KİTAP SİLME BUTONU--------------------------


    var br = document.createElement("br");
    dis.appendChild(br);
    var br = document.createElement("br");
    dis.appendChild(br);
    var br = document.createElement("br");
    dis.appendChild(br);
    var br = document.createElement("br");
    dis.appendChild(br);

}


//**********************************RESİM ALANI DOSYADAN GETİRME******************************** */

function previewFilee() {
    const preview = document.querySelector('#ktpresim');
    const file = document.querySelector('#ktpdosya').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function() {


        c = preview.src = reader.result;


    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}

//**********************************RESİM ALANI DOSYADAN GETİRME******************************** */


function kaydet() {
    var k_ad = document.getElementById("ktpad").value;
    var k_yazar = document.getElementById("ktpyazar").value;
    var k_icerik = document.getElementById("ktpicerik").value;
    var k_sayfa = document.getElementById("ktpsayfa").value;
    var k_barkod = document.getElementById("lazim").value;
    var k_stok = document.getElementById("ktpstok").value;
    var k_fiyat = document.getElementById("ktpfiyat").value;
    var k_resim = document.getElementById("ktpresim").src;
    bookupdate(k_ad, k_yazar, k_icerik, k_sayfa, k_barkod, k_stok, k_fiyat, k_resim);
}


function x() {
    document.getElementById("update").innerHTML = "";
}

//------------------------------------------------------------------EKLE PANİLİ----------------------------------------
function eklepaneli() {


    //******************************************************************************
    var dvup = document.getElementById("update");
    //_------------------------------------------------------------------------------------------------
    dvup.innerHTML = "";
    //*************************RESİM*************************** 
    var ktpresim = document.createElement("img");
    ktpresim.setAttribute("id", "ktpresim");
    //ktpresim.setAttribute("src", kitapresim);
    dvup.appendChild(ktpresim);
    //*************************RESİM*************************** 

    //*************************AD*************************** 
    var ktpad = document.createElement("input");
    ktpad.setAttribute("type", "text");
    ktpad.setAttribute("id", "ktpad");
    ktpad.setAttribute("value", "");
    ktpad.setAttribute("placeholder", "kitap adı");
    dvup.appendChild(ktpad);
    //*************************AD*************************** 

    //*************************YAZAR*************************** 
    var ktpyazar = document.createElement("input");
    ktpyazar.setAttribute("type", "text");
    ktpyazar.setAttribute("id", "ktpyazar");
    ktpyazar.setAttribute("value", "");
    ktpyazar.setAttribute("placeholder", "kitap yazarı");
    dvup.appendChild(ktpyazar);
    //*************************YAZAR*************************** 

    //*************************İCERİK*************************** 
    var ktpicerik = document.createElement("input");
    ktpicerik.setAttribute("type", "text");
    ktpicerik.setAttribute("id", "ktpicerik");
    ktpicerik.setAttribute("value", "");
    ktpicerik.setAttribute("placeholder", "kitap içeriği");
    dvup.appendChild(ktpicerik);
    //*************************İCERİK*************************** 

    //*************************SAYFA*************************** 
    var ktpsayfa = document.createElement("input");
    ktpsayfa.setAttribute("type", "text");
    ktpsayfa.setAttribute("id", "ktpsayfa");
    ktpsayfa.setAttribute("value", "");
    ktpsayfa.setAttribute("placeholder", "kitap sayfası");
    dvup.appendChild(ktpsayfa);
    //*************************SAYFA*************************** 

    //*************************BARKOD*************************** 
    var ktpbarkod = document.createElement("input");
    ktpbarkod.setAttribute("type", "text");
    ktpbarkod.setAttribute("id", "lazim");
    ktpbarkod.setAttribute("class", "kbarkodd");
    ktpbarkod.setAttribute("value", "");
    ktpbarkod.setAttribute("placeholder", "kitap barkodu");
    dvup.appendChild(ktpbarkod);
    //*************************BARKOD*************************** 

    //*************************STOK*************************** 
    var ktpstok = document.createElement("input");
    ktpstok.setAttribute("type", "text");
    ktpstok.setAttribute("id", "ktpstok");
    ktpstok.setAttribute("value", "");
    ktpstok.setAttribute("placeholder", "kitap stoğu");
    dvup.appendChild(ktpstok);
    //*************************STOK*************************** 

    //*************************FİYAT*************************** 
    var ktpfiyat = document.createElement("input");
    ktpfiyat.setAttribute("type", "text");
    ktpfiyat.setAttribute("id", "ktpfiyat");
    ktpfiyat.setAttribute("value", "");
    ktpfiyat.setAttribute("placeholder", "kitap fiyatı");
    dvup.appendChild(ktpfiyat);
    //*************************FİYAT*************************** 

    //*************************DOSYA*************************** 
    var ktpdosya = document.createElement("input");
    ktpdosya.setAttribute("type", "file");
    ktpdosya.setAttribute("id", "ktpdosya");
    ktpdosya.setAttribute("onchange", "previewFileee()");
    dvup.appendChild(ktpdosya);

    //*************************DOSYA*************************** 

    //*************************KAYDET*************************** 
    var kaydet = document.createElement("button");
    kaydet.setAttribute("id", "kaydet");
    kaydet.innerText = "EKLE";
    kaydet.addEventListener('click', function(event) {

        var adk = document.getElementById("ktpad").value;
        var yazark = document.getElementById("ktpyazar").value;
        var icerikk = document.getElementById("ktpicerik").value;
        var sayfak = document.getElementById("ktpsayfa").value;
        var barkodk = document.getElementById("lazim").value;
        var stokk = document.getElementById("ktpstok").value;
        var fiyatk = document.getElementById("ktpfiyat").value;
        yenikitapinsert(adk, yazark, icerikk, sayfak, barkodk, stokk, fiyatk, d);

    });
    dvup.appendChild(kaydet);

    //*************************KAYDET*************************** 
    var brr = document.createElement("br");
    dvup.appendChild(brr);
    var brr = document.createElement("br");
    dvup.appendChild(brr);
    var brr = document.createElement("br");
    dvup.appendChild(brr);
    //*************************KAYDET*************************** 
    var x = document.createElement("button");
    x.setAttribute("id", "x");
    x.innerText = "X";
    x.setAttribute("onclick", "x()");
    dvup.appendChild(x);

    //*************************KAYDET*************************** 



}
//------------------------------------------------------------------EKLE PANİLİ----------------------------------------



//**********************************RESİM ALANI DOSYADAN GETİRME******************************** */

function previewFileee() {
    const preview = document.querySelector('#ktpresim');
    const file = document.querySelector('#ktpdosya').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function() {


        d = preview.src = reader.result;


    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}

//**********************************RESİM ALANI DOSYADAN GETİRME******************************** */