
alert ("Selamat Datang!")
function hasilInput(){
    var a=document.forms['inputanJumlah'] ['angka1'].value;
    var b=document.forms['inputanJumlah'] ['angka2'].value;
    var c=Number(a)+Number(b);

    var tabel=document.getElementById("tabelData");

    var row = tabel.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML=a;
    cell2.innerHTML=b;
    cell3.innerHTML=c;

    var hasilTampilkan=document.getElementById("hasil");
    hasilTampilkan.innerHTML=c;
    
    document.body.style.backgroundColor = "green";

}