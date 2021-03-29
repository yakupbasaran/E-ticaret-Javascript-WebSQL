function kayitgetir() {
    window.location.href = 'file:///C:/Users/Acer/Desktop/kay%C4%B1tekran%C4%B1.html';
}

function giris() {
    var kullanici = document.getElementById("kul_ad").value;
    var sifre = document.getElementById("pass").value;
    giriskontrol(kullanici, sifre, localkayit1, localkayit2);
}

function localkayit1(kullanici, sifre, results) {
    var len = results.rows.length;
    var idgiris = results.rows.item(0).id;
    if (len == 1) {
        localStorage.setItem("idgir", idgiris);
        localStorage.setItem("name", kullanici);
        localStorage.setItem("passwordd", sifre);
        window.location.href = 'file:///C:/Users/Acer/Desktop/Anasayfag.html';
    }
}


function localkayit2(kullanici, sifre, result) {
    var len = result.rows.length;
    var idgiris = result.rows.item(0).id;
    if (len == 1) {
        localStorage.setItem("idgir", idgiris);
        localStorage.setItem("name", kullanici);
        localStorage.setItem("passwordd", sifre);
        window.location.href = 'file:///C:/Users/Acer/Desktop/adming.html';
    }
}