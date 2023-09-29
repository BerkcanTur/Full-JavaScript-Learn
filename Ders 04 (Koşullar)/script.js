//! Conditionals - KOŞULLAR (if-else)
/*
-Koşullu ifadeler, farklı koşullara dayalı kararlar vermek için kullanılır. Varsayılan olarak, JavaScript komut dosyasındaki ifadeler yukarıdan aşağıya doğru uygulanır.

*if
*else
*else if

! if

-JavaScript ve diğer programlama dillerinde if anahtar kelimesi, bir koşulun doğru olup olmadığını kontrol etmek ve blok kodunu yürütmek için kullanılır. 

?Örnek:

let arabaCalisiyor = true
if (arabaCalisiyor){
    console.log("Araba Çalışıyor!")
}


! if-Else

-Koşul doğruysa, ilk blok yürütülür, doğru değilse, else koşul yürütülür.

/syntax

?Örnek:

let arabaCalisiyor = true
if (arabaCalisiyor){
    console.log("Araba Çalışıyor!")
}else{
    console.log('Araba Çalışmıyor.')
}

? Örnek:

let num = 8;
if(num > 5){
    console.log(`${num} büyüktür 5 sayısından.`)
}else{
    console.log(`${num} küçüktür 5 sayısından.`)
}

? Örnek:

let yas = 18; // Kullanıcının yaşını belirleyin

if (yas >= 18) {
    console.log("Ehliyet alabilirsiniz."); // Eğer yaş 18 veya daha fazlaysa bu mesajı görüntüle
} else {
    console.log("Ehliyet alamazsınız."); // Yaş 18'den küçükse bu mesajı görüntüle
}



! Else İf 

-Birden çok koşulumuz olduğunda else if kullanırız.

? Örnek:

let vize1 = 50;
let final = 80;
let sonuc = (vize1 + final) / 2;
if(sonuc > 80){
    console.log('Tebrikler.Geçtiniz!')
}else if(sonuc > 60){
    console.log('Çok şanslısınız.Geçtiniz!')
}else if(sonuc > 50){
    console.log('Kaldınız.Geçmiş olsun.')
}else if(sonuc > 49){
    console.log('Çok çalışmalısın.Kaldın !')
}else{
    console.log('Bir daha ki sınava çalış.')
}



?Örnek: KISA YOLU BULMA OYUNU

! Kısa yolu bilme oyunu
 .     
 .  .. .  
 .      .
 .       . 
 .        .
 .        .
 .         .
1.yol    2.yol



let tercihYolu = Number(prompt('Lütfen yolu seçiniz: (1 veya 2 yazınız.)'));

if(tercihYolu === 1){
    alert(`${tercihYolu}. yolu seçtiniz.Yol uzadı :)`)
}else if(tercihYolu === 2){
    alert(`${tercihYolu}. yolu seçtiniz.Tebrikler! Kestirme yolu bildiniz. `)
}else{
    alert('Lütfen geçerli bir yol seçiniz !')
}
 
! Switch ve CASE 

"switch" ve "case" ifadeleri, programlama dillerinde kontrol akışını yönlendirmek için kullanılan yapılardır. Bu yapılara özellikle C, C++, C#, Java, JavaScript gibi dillerde rastlanır. "switch" ve "case" ifadeleri, bir değerin farklı koşullara göre farklı işlemler yapmasını sağlamak için kullanılır. İşte "switch" ve "case" yapısının nasıl kullanıldığının örnekleri:

*if else yapısıyla aynıdır. Genellikle if-else kullanılır.


?Örnek:

let mevsim = "yaz";

switch (mevsim) {
    case "kis":
        console.log("Karlı bir gün");
        break;
    case "ilkbahar":
    case "yaz":
        console.log("Sıcak hava ve çiçekler");
        break;
    case "sonbahar":
        console.log("Yapraklar dökülüyor");
        break;
    default:
        console.log("Geçersiz mevsim");
}




?Örnek:

let yeniSatir = "\r\n";

let bakiye = 1000

let metin = "1-Bakiye Görüntüleme" +yeniSatir
+ "2-Para Çekme"+yeniSatir
+ "3-Para Yatırma" +yeniSatir
+ "4-Çıkış"+yeniSatir
+ "Lütfen bir değer seçiniz:";

let secim = prompt(metin);
switch(secim){
    case "1":
        alert("Bakiyeniz: " + bakiye);
        break;
    case "2":
        let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz:"));
        if(cekilecekTutar<bakiye){
            //başarılıdır.
            bakiye = bakiye-cekilecekTutar
            alert("Kalan bakiye: " + bakiye);
        }else{
            alert('Bakiyenizden fazla para çekemezsiniz!'+yeniSatir
            +"Bakiyeniz : "+bakiye + " " + "Çekilecek Tutar : " + cekilecekTutar);
        }
        break;
    case "3":
        let yatirilacakTutar = Number(prompt("Yatırılacak tutarı giriniz: "));
        bakiye = bakiye+yatirilacakTutar;
        alert('Güncel bakiyeniz: ' + bakiye);
        break;
    case "4":
        console.log('sistemden çıkış yapılmıştır...');
        break;
    default:
        console.log("Lütfen 1-4 arasında bir değer giriniz.");
        break;
}


*******************************************************



! EGZERSİZLER VE ÖDEVLER !!!


1- prompt(“Enter your age:”) ile kullanıcı girdisi alın. Kullanıcı 18 veya daha büyükse, geri bildirimde bulunun:'Sürecek kadar yaşlısınız', ancak 18 değilse, 18 yaşına girmesi gereken yıl sayısını beklemeye başlayarak başka bir geri bildirim verin.


2- if… else kullanarak myAge ve yourAge değerlerini karşılaştırın. Karşılaştırmaya dayanarak ve sonucu kimin daha yaşlı olduğunu (ben veya siz) belirterek konsola kaydedin. Yaşı girdi olarak almak için komut prompt(“Enter your age:”) kullanın.

3-a, b'den büyükse, 'a b'den büyüktür', aksi takdirde 'a, b'den küçüktür' döndürür. şekilde uygulamaya çalışın

4-Çift sayılar 2'ye tam bölünür kalan sıfırdır. Bir sayının çift olup olmadığını veya JavaScript kullanıp kullanmadığını nasıl kontrol edersiniz?

5-Öğrencilere puanlarına göre not verebilecek bir kod yazın:

80-100, A
70-89, B
60-69, C
50-59, D
0-49, F

6-Mevsimin Sonbahar, Kış, İlkbahar veya Yaz olup olmadığını kontrol edin. Değerler :

Eylül, Ekim veya Kasım, mevsim sonbahardır.
Aralık, Ocak veya Şubat, mevsim kıştır.
Mart, Nisan veya Mayıs mevsimi bahardır
Haziran, Temmuz veya Ağustos, mevsim yazdır

7-Bir günün hafta sonu mu yoksa iş günü mü olduğunu kontrol edin. (if-else)

*/


