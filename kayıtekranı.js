/*function kayitekle2() {
    var kullaniciadi = document.getElementById("kul_ad").value;
    var kullanicisifre = document.getElementById("pass").value;
    var kullaniciemail = document.getElementById("e-mail").value;
    kayitekle(kullaniciadi, kullanicisifre, kullaniciemail).then(function(a, res, tx) {
        alert(a);
        document.getElementById("kul_ad").value = "";
        document.getElementById("pass").value = "";
        document.getElementById("e-mail").value = "";
    }).catch(function(err) {
        alert(err);
    })

}
*/

function kayitekle2() {
    var kullaniciadi = document.getElementById("kul_ad").value;
    var kullanicisifre = document.getElementById("pass").value;
    var kullaniciemail = document.getElementById("e-mail").value;

    kayitekle(kullaniciadi, kullanicisifre, kullaniciemail).then(function(results) {
        temizle();
    }).catch(function(hata) {
        alert(hata);
    })


}

function temizle() {
    alert("Kaydınız oluşturuldu.");
    document.getElementById("kul_ad").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("e-mail").value = "";
}



function kayitiptal() {
    window.location.href = 'file:///C:/Users/Acer/Desktop/giri%C5%9Fekran%C4%B1.html?';
}