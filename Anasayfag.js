var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);


function cikisyap() {
    window.location.href = 'file:///C:/Users/Acer/Desktop/giri%C5%9Fekran%C4%B1.html?';
}

function sepetegit() {
    window.location.href = "file:///C:/Users/Acer/Desktop/sepett.html";
}

var loginname = localStorage.getItem("name");
var loginid = localStorage.getItem("idgir");
document.getElementById("kisi").innerHTML = loginname;

//--------------------------------------PROMİSE-------------
function reload() {
    ana().then(function(results) {
        urungetir(results);
    }).catch(function(err) {
        alert(err);
    });
}
//--------------------------------------PROMİSE-------------

function urungetir(results) {

    var len = results.rows.length,
        i;
    for (i = 0; i < len; i++) {
        urunler(i, results);
    }

}
//---------------------------------------------------------------URUNLERİN BASILDIĞI ALAN----------------------------------------------------------
function urunler(i, results) {

    var kitapid = results.rows.item(i).kitap_id;
    var kitap = results.rows.item(i).kitap_ad;
    var yazar = results.rows.item(i).kitap_yazar;
    var icerik = results.rows.item(i).icerik;
    var foto = results.rows.item(i).resim;
    var fiyat = results.rows.item(i).fiyat;
    var stok = results.rows.item(i).stok;

    //--------CARDS-----------------------------------
    var card = document.createElement("div");
    card.setAttribute("class", "cards");
    document.body.appendChild(card);
    //--------CARDS-----------------------------------


    //--------RESİMLER-----------------------------------
    var img = document.createElement("img");
    img.setAttribute("class", "images");
    img.src = foto;
    card.appendChild(img);
    //--------RESİMLER-----------------------------------

    //--------ADLAR-----------------------------------
    var hler = document.createElement("h4");
    hler.setAttribute("class", "hler");
    hler.innerText = kitap;
    card.appendChild(hler);
    //--------ADLAR-----------------------------------

    //--------YAZARLAR-----------------------------------
    var pler = document.createElement("p");
    pler.setAttribute("class", "pler");
    pler.innerText = yazar;
    card.appendChild(pler);
    //--------YAZARLAR-----------------------------------

    //--------FİYATLAR-----------------------------------
    var fler = document.createElement("p");
    fler.setAttribute("class", "fler");
    fler.innerText = fiyat + " TL";
    card.appendChild(fler);
    //--------FİYATLAR-----------------------------------

    //--------SEPET BUTONU-----------------------------------
    var sepet = document.createElement("button");
    sepet.setAttribute("class", "sepetbutonları");
    sepet.innerText = "Sepet";
    sepet.addEventListener('click', function(event) {
        var uadet = 1;
        tablokayit(loginid, kitapid, uadet);

    });
    card.appendChild(sepet);
    //--------SEPET BUTONU-----------------------------------

}
//---------------------------------------------------------------URUNLERİN BASILDIĞI ALAN----------------------------------------------------------