//! JAVASCRİPT ÖĞRENİN :)



//! COMMENTS
//Tekli Yorum Satırı
/*Çoklu Yorum Satırı*/

//Örnek:Bu satırda istediğiniz yorumu bırakabilirsiniz.

/*
  let konum = 'İzmir';
  let age = "27";
  let evliMi = true;
  Bu kısım çoklu yorum satırı bloğudur.
*/
/*


! JavaScript Kodları Nereye Yazılır?

*Javascript kodlarınızı (.js) uzantılı dosya olarak external biçimde yazabilirsiniz. Ayrıca Html dosyanızın  head etiketleri ve body etiketleri arasında (script) etiketi kullanılarak yazılabilir. 
Not: Body etiketleri arasına yazılması tercih edilir.


! CONSOLE
* Windows'ta Ctrl + Shift + J konsolu açar.
* Mac'te Command + Option + I konsolu açar.


console.log("Hello, World!");
console.log('Hello, World!');
console.log(`Hello,World!`); //Backtick




? Notlar:
-backtick işareti mac'te option + Virgül
-Windows'ta Altgr + Virgül
-console.log komutu yazıyı konsola basar.
-Noktalı virgül kullanımı zorunlu değildir ama şiddetle tavsiye edilir. 




! Syntax Hataları

console.log("Hello,World)
console.log('Hello,World!")


! YAZDIRMA YÖNTEMLERİ

Console.log komutu ile konsola yazdırmayı öğrendik.Diğer yazdırma türlerimiz ise (document.write) ve (alert) komutlarımızdır.

Örnek:

console.log("İzmir")

document.write("Berkcan Tür");

alert("Hoşgeldiniz!");




! DEĞİŞKENLER (Variables)


Tanımı:
Değişken herhangi bir yazılım dilinde bir veri tipinin değerini tutan bir kapsayıcıdır.Değişken tanımlamak için (var, let, const)  anahtar kelimelerini kullanırız.
Değişken değerinin kodumuzun farklı yerlerinde değiştirilmesi gerekiyorsa, let kullanırız. Eğer değişken verisi hiçbir yerde değişmeyecek ise bu durumda const kullanırız. Örneğin, Pi sayısı, ülke adları veya yerçekimi ivmesi gibi değişmeyen, sabit değerler için const kullanırız. Bu eğitimde var kullanmayacağız ve kullanmanızı tavsiye etmiyorum. Çok fazla sızıntısı olduğundan dolayı (var) değişken tanımlayıcısını kullanmanız hatalara sebep olacaktır. 


? Geçerli bir JavaScript değişken adı aşağıdaki kurallara uymalıdır:

*JavaScript değişken adı bir sayı ile başlamamalıdır.
*JavaScript değişken adı, dolar işareti ve alt çizgi dışında özel karakterlere izin vermez.(Türkçe karakterlere özellike dikkat ediniz.)
*JavaScript değişken adı, camelCase kuralına uymalı.
*JavaScript değişken adı sözcükler arasında boşluk olmamalıdır.

? Aşağıda geçerli JavaScript değişkenlerine örnekler verilmiştir.

ad;
soyAd;
ulke;
sehir;
anneAdi;
age;

soy_ad;
evli_mi;
anne_adi;

sayi1;
sayi_1;
_sayi_1;
$sayi1;
yil2023;
yil_2023;

*Listenin ilk bölümünde belirtilen değişken isimleri JavaScript'te camelCase bildirim kuralına uyularak yazılmıştır. Bu eğitimde, camelCase değişken adı yazım kurallarını uygulayacağız.

? Geçersiz değişken adlarına örnek:

first-name
1_num
num_#_1


Şimdi değişkenleri farklı veri tipleriyle birlikte tanımlayalım. Bir değişken tanımlamak için değişken adından önce let veya const anahtar kelimelerini kullanmamız gerekir demiştik. Değişken adının ardından eşittir işareti (atama operatörü) ve bir değer (atanmış veri) yazarız.


? Sözdizimi

let degiskenAdi = value;

let name = "Berkcan"; //Bir kişinin adı
let yas = 27; //yaş
let sehir = "İzmir";
let instagram = "berkcantur";

console.log(name,yas,sehir,instagram);

? ÖRNEK1

/ Değişkenlere sayı değerleri tanımlama
let yas = 18; // yas
const yerCekim = 9.81; //  yer çekimi değeri
const kaynamaNoktasi = 100; // °C cinsinden suyun kaynama noktası
const PI = 3.14; // geometrik sabit
console.log(yerCekim, kaynamaNoktasi, PI);


? ÖRNEK2

/ Birden fazla değişkenleri virgül ile ayırarak tek satırda tanımlayabiliriz. Ancak ayrı satırlarda tanımlamak, kodu daha okunabilir kıldığı için tavsiye ederim.

let isim = "Berkcan Tür",
  is = "YazılımGeliştirici",
  konum = "İzmir";
console.log(isim, is, konum);




! ÖDEVLER-EGZERSİZLER !!!!!!!!!!!!!!!

1. "Yorumlar kodu okunabilir hale getirmeye yardımcı olur" yazan tek satırlı bir yorum yazın

2. "30GundeJavaScript eğitimine hoş geldiniz" yazan başka bir yorum satırı oluşturun

3. "Yorumlar kodu okunabilir, yeniden kullanımı kolay ve bilgilendirici bir hale getirir." yazılı, birden çok satıra yayılmış çok satırlı bir yorum yazın

4. Bir degisken.js isimli dosya oluşturun ve bu .js dosyasında string, boolean, undefined ve null veri türlerinde değişkenler oluşturun

5. Bir veriturleri.js isimli dosya oluşturun farklı veri türlerindeki verileri kontrol etmek için JavaScript typeof operatörünü kullanın.

6. Herhangi bir değer ataması yapmadan dört adet değişken yazın

7. Oluşturduğunuz değişkenlere değer ataması yapın

8. Adınızı, soyadınızı, medeni durumunuzu, ülkenizi ve yaşınızı birden çok satırda olacak şekilde saklamak için değişkenleri ve değerlerini oluşturun

9. Adınızı, soyadınızı, medeni durumunuzu, ülkenizi ve yaşınızı tek bir satırda olacak şekilde saklamak için değişkenleri ve değerlerini oluşturun

10. myJob ve youJob adlı iki değişken oluşturun ve bunlara aşağıdaki değerleri atayın. Ardından bunları tarayıcının konsolunda çalıştırın.

Ben Front End Developerım.
Sen Aşçısın.


*/