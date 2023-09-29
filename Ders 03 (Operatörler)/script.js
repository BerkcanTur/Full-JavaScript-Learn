//! OPERATÖRLER
/*
+	Toplama
–	Çıkarma
*	Çarpma
/	Bölme
%	Mod alma
++	Arttırma
—	Azaltma

*JavaScript'te eşittir işareti bir atama operatörüdür. Değişken atamak için kullanılır.

! Aritmetik Operatörler

Aritmetik operatörler matematiksel operatörlerdir.

x = y
x += y
x -= y
x /= y
x *= y
x %= y
x **= y

? Örnek:

let sayi1 = 6;
let sayi2 = 2;
sonuc = (sayi1 += sayi2);
console.log(sonuc)

? Örnek:

let sayi1 = 18;
let sayi2 = 3;
let toplama = (sayi1 + sayi2);
let cikarma = (sayi1 - sayi2);
let bolme = (sayi1 / sayi2);
let carpma = (sayi1 * sayi2);
let usAlma = (sayi1 ** sayi2);
let modAlma = (sayi1 % sayi2);
console.log(toplama,cikarma,bolme,carpma,usAlma,modAlma);





! KARŞILAŞTIRMA OPERATÖRLERİ

-Programlamada değerleri karşılaştırırız, iki değeri karşılaştırmak için karşılaştırma operatörlerini kullanırız. Bir değerin diğer değere eşit veya büyük olup olmadığını kontrol ederiz.


== Eşit
== Hem değeri hem veri türünü karşılaştırır.
(!=) eşit değildir anlamına gelir.
< küçüktür işareti
> büyüktür işareti
>= büyüktür veya eşittir işareti
<= küçüktür veya eşittir işareti

? Örnek:

console.log(3 > 2)        // true, çünkü 3 2 den büyüktür
console.log(3 >= 2)       // true, çünkü 3 2 den büyüktür
console.log(3 < 2)        // false,  çünkü 3 2 den büyüktür
console.log(2 < 3)        // true, çünkü 2 3 den küçüktür
console.log(2 <= 3)       // true, çünkü 2 3 den küçüktür
console.log(3 == 2)       // false, çünkü 3 2 ye eşit değildir
console.log(3 != 2)       // true, çünkü 3 2 ye eşit değildir
console.log(3 == '3')     // true, sadece değeri karşılaştırıyor
console.log(3 === '3')    // false, hem değeri hemde veri türünü karşılaştırıyor o yüzden yanlış.
console.log(3 !== '3')    // true, hem değeri hemde veri türünü karşılaştırıyor o yüzden doğru.(Bu denk değil operatörü)
console.log(3 != 3)       // false, değeri karşılaştırıyor
console.log(3 !== 3)      // false, hem değeri hem de veri türünü karşılaştırıyor
console.log(0 == false)   // true, eşdeğer
console.log(0 === false)  // false, tam olarak aynı değil

console.log('arda'.length == 'berkcan'.length);
console.log('kivi'.length != 'mango'.length);
console.log('süt'.length <= 'peynir'.length);
console.log('python'.length > 'dragon'.length);





! MANTIKSAL OPERATÖRLER

-Aşağıdaki semboller ortak mantıksal operatörlerdir: &&(ve işareti) , || (-veya-) ve !(olumsuzlama). && operatörü, yalnızca iki işlenen doğruysa doğru olur. || operatör, işlenenlerden herhangi birinin doğru olması durumunda gerçekleşir.

|| (veya)
&& (ve)
(!) (olumsuzlama)

? && ve işareti Örnekleri:

let ve = 4 > 3 && 5 > 3;
console.log(ve)

let sonuc = 5 > 3 && 3 > 3
console.log(sonuc)

let sonuc = 5 > 3 && 3 > 3
console.log(sonuc)

? || veya işareti Örnekleri

let ve = 4 > 3 || 5 > 3;
console.log(ve)

let sonuc = 5 > 3 ||  3 > 3
console.log(sonuc)

let sonuc = 5 > 3 ||  3 > 3
console.log(sonuc)



! ARTTIRMA OPERATÖRÜ

-JavaScript'te, bir değişkende saklanan bir değeri artırmak için artırma operatörünü kullanırız. Artış, artış öncesi veya sonrası olabilir. 


let num = 2;
console.log(++num)

let num = 2;
console.log(num++)


! AZALTMA OPERATÖRÜ

-JavaScript'te, bir değişkende saklanan bir değeri azaltmak için azaltma operatörünü kullanırız. Azaltma, eksiltme öncesi veya sonrası olabilir.

let num = 2;
console.log(--num)

let num = 2;
console.log(num--)


! Koşul Operatörü (Ternary - Üçlü)

-Üçlü operatör bir koşul yazmaya izin verir. Koşullar yazmanın başka bir yolu da üçlü operatörleri kullanmaktır.

Örnek:

let lightOn = true
lightOn
  ? console.log('Işık Açık!')
  : console.log('Işık Kapalı!')
lightOn = false




! WINDOW METOTLARI


! Alert() Metodu

- Web sayfasını oluşturan belge (document) yerine, bir pencere içine mesaj ya da bilgi yazdırılmak istenirse bu durumda window nesnesi ve bu nesne üzerinde geçerli olan alert metodu devreye sokulabilir.

?Örnek:

alert(mesaj);
alert('JavaScript öğreniyorsunuz.Tebrikler!');

! Prompt() Metodu

-Pencere yöntemleri, tarayıcınızda giriş değerlerini almak için bir giriş içeren bir bilgi istemi kutusu görüntüler ve giriş verileri bir değişkende saklanabilir.

?Örnek

prompt('Lütfen bir sayı giriniz:')
prompt("Adınızı Giriniz:")

! Confirm() Metodu

let silmeIslemi = confirm('Silmek istediğinize emin misiniz?')
console.log(
    silmeIslemi ? 'Silme işlemi başarılı.' : 'Silme işlemi iptal edildi.'
)


! Date Objesi

-JavaScript'te geçerli saat ve tarih, JavaScript Date Objesi kullanılarak oluşturulur. Date objesini kullanarak oluşturduğumuz nesne, tarih ve saat ile çalışmak için birçok yöntem sunar. Bir tarih nesnesi değerlerinden tarih ve saat bilgisi almak için kullandığımız yöntemler, bilgiyi sağladığı için get kelimesi ile başlamaktadır. getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()


? Örnek: Bir Zaman Objesi Oluşturmak

const day = new Date()
console.log(day) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)

? Tam Yılı Almak

const test = new Date()
console.log(test.getFullYear()); 

? Ayı Almak

const test = new Date()
console.log(test.getMonth()); 

? Tarihi Almak

const test = new Date()
console.log(test.getDate()); 

? Günü Almak
const test = new Date()
console.log(test.getDay()); 

? Saati Almak
const test = new Date()
console.log(test.getHours()); 

? Dakikayı Almak
const test = new Date()
console.log(test.getMinutes()); 

? Saniyeyi Almak
const test = new Date()
console.log(test.getSeconds()); 

? Zamanı Almak 

!getTime() Kullanımı

const now = new Date() //
console.log(now.getTime()) // çıktı farklı olacaktır , 1 Ocak 1970 den kullandığınız zaman arasındaki süreyi milisaniye cinsinden verecektir.

!Date.now() Kullanımı

const allSeconds = Date.now() //
console.log(allSeconds) // çıktı farklı olacaktır , 1 Ocak 1970 den kullandığınız zaman arasındaki süreyi milisaniye cinsinden verecektir.

? ÖRNEK

const now = new Date()
const year = now.getFullYear() 
const month = now.getMonth() 
const date = now.getDate()
const hours = now.getHours() 
const minutes = now.getMinutes() 

console.log(`${date}/${month}/${year} ${hours}:${minutes}`)



************************************************


! EGZERSİZ VE ÖDEVLER


1-firstName, lastName, country, city, age, isMarried, year değişkenlerini oluşturun ve bunlara değer atayın. Farklı veri türlerini kontrol etmek için typeof operatörünü kullanın.

2-'10' türünün 10'a eşit olup olmadığını kontrol edin

3-parseInt('9.8') 10'a eşit olup olmadığını kontrol edin

4-Boolean değeri, doğru veya yanlıştır.

Doğruluk değeri sağlayan üç JavaScript ifadesi yazın.
Yanlış değer sağlayan üç JavaScript ifadesi yazın.


5-console.log() kullanmadan önce aşağıdaki karşılaştırma ifadesinin sonucunu bulun. Sonuca karar verdikten sonra console.log() kullanarak onaylayın.

4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'

6-Aşağıdaki etkinlikleri yapmak için Date nesnesini kullanın.

Bugün yıl nedir?
Bugünün ayı rakam olarak nedir?
Bugünün tarihi nedir?
Bugün sayı olarak gün nedir?
Şimdi saat kaç?
Dakika kaç şimdi?
1 Ocak 1970'den bugüne kadar geçen saniye sayısını bulun.

7-Kullanıcıdan üçgenin a kenarını, b kenarını ve c kenarını girmesini ve üçgenin çevresini hesaplamasını isteyen bir komut dosyası yazın.

8-Kullanıcıdan üçgenin tabanını ve yüksekliğini girmesini ve bir üçgenin alanını hesaplamasını isteyen bir komut dosyası yazın (alan = 0,5 x b x h).

9-Adınızın uzunluğu 7'den büyükse, adınız uzun, yoksa adınızın kısa olduğunu söyleyin.

10-Adınızın uzunluğunu ve soyadınızın uzunluğunu karşılaştırın ve bu çıktıyı almalısınız.
*/




