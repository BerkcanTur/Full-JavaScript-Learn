//! VERİ TÜRLERİNE GİRİŞ

/*

! İLKEL VERİ TÜRLERİ

-JavaScript'te ve diğer programlama dillerinde farklı tiplerde veri türleri vardır. 
-JavaScript ilkel veri türleri şunlardır: 

1*String(metin)
2*Number(sayı) 
3*Boolean(T-F)
4*undefined(tanımsız)
5*NulL(boş)




! STRİNG

Tek tırnak,çift tırnak ve ters tırnak(backtick) arasında yer alan bir veya daha fazla karakterden oluşan metinsel değerlerdir.

? Örnek1:

"a";
"Berkcan Tür";
'İzmir';
"Türkiye";
'JavaScript güzel bir programlama dilidir';
"Öğrenmeyi seviyorum";
`Unutma, ayrıca bir ters tırnak kullanarak bir dize de oluşturabiliriz`;

? Örnek2:

let isim = "Berkcan Tür";
let sehir = "İzmir";
let araba = "Volvo";


! SAYILAR

Tam sayılar: Integer (sıfır dahil negatif ve pozitif) Örnek: ... -3, -2, -1, 0, 1, 2, 3 ...
Ondalıklı sayılar: (Float)
Örnek: ... -3.5, -2.25, -1.0, 0.0, 2.2, 3.5 ...

let yas = 27;
let girisHakkı = 3;




! BOOLEAN

Boolean veri türü, yalnızca True(doğru) veya False(yanlış) bir değer alır.

? Örnek1:

true; // lamba yanıyorsa, değer doğrudur.
false; // lamba kapalıysa, değer yanlıştır.

? Örnek2:

let animal1 = "Beyaz Kedi";
let animal2 = "Beyaz Kedi";
console.log(animal1 == animal2);


! UNDEFINED(TANIMSIZ)

JavaScript'te, bir değişkene bir değer atamazsak, değeri undefined olarak alır ve bir fonksiyon hiçbir şey döndürmüyorsa, döndüreceği tanım 'undefined'tır.



? ÖZET !//

1// Numbers - Tamsayılar - Ondalık sayılar
2// Strings - Tek tırnak, çift tırnak veya ters tırnak içerisindeki tüm veriler..
3// Booleans - true yada false (true = 1 false = 0 )
4// Null - Boş değer yada değeri yok.
5// Undefined - Bir değer verilmeyen değişken.


* Bir değişkenin veri türünü kontrol etmek için typeof operatörünü kullanırız. Aşağıdaki örneğe bakın.

console.log(typeof "BerkcanTür"); // string
console.log(typeof 10); // number
console.log(typeof true); // boolean
console.log(typeof null); // object type
console.log(typeof undefined); // undefined





JavaScript'teki ilkel olmayan veri türleri şunları içerir:

1.Objects ( Nesneler )
2.Arrays ( Diziler )


? Nesnelere Örnek:

let araba = "Fiat Egea";


? Array Örnek:

let liste = ["Elma","Armut","Çilek"]


? Boolean Örneği

let number1 = 3;
let number2 = 3;

console.log(number1 == number2);


? Örnek:
Dizi yapısıyla boolean örneği yapalım.
True mu döndürür false mu ?


let meyveler1 = ["Muz","Kiraz","Elma"];
let meyveler2 = ["Muz","Kiraz","Elma"];
console.log(meyveler1 == meyveler2);

*/

/*

! MATH OBJECT / MATEMATİK NESNESİ

-JavaScript'te Math Objesi, sayılar ile çalışmanız için birçok yöntem sağlar.


* Math Round
console.log(Math.round(10.70)) // Ondası 0.5 üstünde olduğu için 11'e yuvarlar.


* Math Floor
console.log(Math.floor(3.15)) // Floor aşağı yuvarlar ve sonuç 3 olur.


* Math Ceil
console.log(Math.ceil(6.20)) // Ceil yukarı yuvarlar ve sonuç 7 olur.


* Math Min
console.log(Math.min(5,-2,4,8,3)) // En küçük sayıyı bulur sonuç -2


* Math Max
console.log(Math.max(5,-2,4,8,3)) // En büyük sayıyı bulur sonuç 8


* Math Random
console.log(Math.random()); //  0 ile 0.999999 arasında rastgele bir sayı üretir.


************************************************************************


? Örnek: 0 ile 10 arasında rastgele bir sayı oluşturalım.

let number = Math.floor(Math.random()* 11);
console.log(number);

? Şimdi 0 ile 10 arasında rastgele bir sayı üretmek için random() methodu'nu nasıl kullanabileceğimizi görelim:

let formul = Math.random()
let randomNumber = Math.floor(formul * 11)
console.log(randomNumber);


! Mutlak Değer (absolute value)

console.log(Math.abs(-10))  // 10

! Kare Kök (square root)

console.log(Math.sqrt(100)) // 10 

! Üs Alma

console.log(pow(3, 2)) // 9

***************************************************

! STRİNGS

- Dizeler tek, çift ve ters tırnak arasındaki metinlerdir. Bir dize bildirmek için değişken adına, atama operatörüne, tek tırnak, çift tırnak veya ters tırnak içerisinde bir değere ihtiyacımız var. Bazı dize örnekleri görelim:

let ad ='Berkcan' // tek tırnaklı string
let soyad = "Tür" // çift tırnaklı string
let sehir = "İzmir" // çift tırnaklı string
let meslek = "Yazılım Eğitmeni" // çift tırnaklı string
let backtick = `Ben javascript öğreniyorum` //terstırnak

! String Birleştirme

*İki veya daha fazla string'i birbirine bağlama işlemine birleştirme denir. 

? Örnek1

let tumBilgiler = ad + soyad + sehir + meslek + backtick;
console.log(tumBilgiler);

? Örnek2

let isim = "Berkcan";
let yas = "27";
let full = "Ben" + isim + yas + "yaşındayım"; 
console.log(full);

! String'lerdeki Kaçış Dizileri

- JavaScript ve diğer programlama dillerinde \ (ters eğik çizgi ) ardından bazı karakterler kaçış dizisidir. 

\n: yeni satır
\t: Tab, 8 boşluk anlamına gelir ( klavyedeki tab tuşunu temsil eder )
\\: Ters eğik çizgi
\': Tek Tırnak (')
\": Çift Tırnak (")

?En yaygın kaçış karakterlerini görelim:

console.log('Ben ders çalışma motivasyonuna sahibim.\n Başaracağıma inanıyorum.') 
*Buradakı ( \n ) satır sonu anlamına gelir sonrası aşağı iner.

console.log("The snow-covered \t path was no help\t in finding his way out of the back-country.")
*Burada her kelimeden sonra bir tab (\t) tuşuna basılmış etkisi verir.


console.log("Topluluk\\ Gün \\ Saat")
*Burada her kelimeden sonra bir tab (\t) tuşuna basılmış etkisi verir

console.log('In every programming language it starts with \"Hello, World!\"') // Hello World'ü çift tırnak içine almak için \" Hello World \" kullanılıyor.


! Şablon Stringleri

- Şablon stringlerini kullanmak için iki backtick kullanıyoruz. Verileri eklemek için ${} bu şekilde kullanılırız.Küme parantezi içine değişken ismini yazarız.Aşağıdaki sözdizimine bakın.

? Örnek 1:
let isim = "Berkcan";
console.log(`Benim adım ${isim}`);


? Örnek 2:

let ad = "Murat"
let soyad = "Uzun"
let sehir = "Ankara"
let yas = "45"
let okul = "Ege Üniversitesi"

console.log(`Benim adım ${ad} soyadım ${soyad}.Benim yaşadığım şehir ${sehir}.Ben ${yas} yaşındayım.Okuduğum okul İzmir'de ${okul} `);



! String Metotları


! 1. length
-String içerisindeki karakterlerin sayısını belirtir. Boşluklar dahildir.

? Örnek:
 
let js = 'JavaScript'
console.log(js.length);

let ad = "Berkcan"
console.log(ad.length);


! 2. String'deki Karakterlere Erişim

-String içerisinde bulunan her karaktere indeks numarasıyla erişebiliriz.
*Programlamada sayma 0 dan başlar. String'in ilk dizini 0, son dizini ise toplam uzunluğun -1'dir.



? Örnek:'Javascript' stringindeki farklı karakterlere erişelim.

let string = 'JavaScript'
let ilkHarf = string[0]
console.log(ilkHarf);  // J çıktısı olacaktır.

let ikinciHarf = string[1]       
let ucuncuHarf = string[2]
let sonHarf = string[9]
console.log(ikinciHarf); 


! 3. toUpperCase()

-Bu metot string verisini büyük harflere dönüştürür.

? Örnek:

let string = 'JavaScript'

console.log(string.toUpperCase())   // JAVASCRIPT


let firstName = 'Berkcan'

console.log(firstName.toUpperCase())  // BERKCAN


! 4. toLowerCase()

-Bu metot string verisini küçük harflere dönüştürür.

? Örnek:

let string = 'JavasCript'
console.log(string.toLowerCase())  // javascript


let ulke = 'Türkiye'
console.log(ulke.toLowerCase())  // türkiye


! 5. substr()

- İki arrgüman alır, başlangıç indeksi ve silenecek karakter sayısı.

? Örnek:

let string = 'JavaScript'
console.log(string.substr(4,6))  // Script


! 6. substring()

- Başlangıç indeksi ve durma indeksi olmak üzere iki argüman almaktadır.

? Örnek:

let string = 'JavaScript'

console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script

! 7. split()

-Bu metot bir stringi belirtilen yerden bölmeye yarar.

? Örnekler:

let string = "Ben elmayı çok severim"
console.log(string.split())  //Array oluşturdu.

let string = "Ben elmayı çok severim"
console.log(string.split('')) // Harfleri ayırdı.

let string = "Ben elmayı çok severim"
console.log(string.split(' ')) // Kelimelere ayırdı.

! 8. trim()

- String'in başında ve sonundaki boşlukları silmeye yarar.

let firstName = ' Berkcan '

console.log(firstName)
console.log(firstName.trim())  // içinde tırnak kullanmasanız dahi boşlukları siler


! 9. includes()

- Bu metot string içerisinde varlık kontrolü yapmaya yarar. Eğer bulursa true, bulamazsa false döner.

? Örnek:
let string = 'Ben Javascript öğreniyorum'
console.log(string.includes('J'));
console.log(string.includes('j'));
console.log(string.includes('Ben'));

! replace()

*Bu metot string içerisinde değiştirme yapmamızı sağlar. Eski ve Yeni olmak üzere iki argüman alır.

? Örnek:

let string = '30 Days Of JavaScript'
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python


! 10. charAt()

-Stringdeki indeksi belirttiğinizde o indeksin değerini yazdırır.

let string = 'Ben Javascript öğreniyorum'
console.log(string.charAt(0));


! 11. indexOf()

- Bu metot belirtilen değerin indeksini verir. Değer bulunamazsa -1 sonucunu döndürür.

? Örnek:

let string = 'Ben Javascript öğreniyorum'
console.log(string.indexOf('v'))
console.log(string.indexOf('Java'))
console.log(string.indexOf('e'))

! 12. lastIndexOf()

- Bu metot belirtilen değerin son değer indeksini verir. Değer bulunamazsa -1 sonucunu döndürür.

let string = 'Ben Javascript öğreniyorum'
console.log(string.lastIndexOf('Ben'))


! 13. concat()

-Bu metot birleştirme işlemini sağlar, birden fazla değer alabilir.

? Örnek:
let string = '25';
console.log(string.concat("Kivili", "Pasta"))

! 14. startsWith

-String'in belirtilen değer ile başlayıp başlamadığını kontrol eder. true yada false döndürür.

? Örnek:

let string = "Benimle basketbol oynar mısın ?"
console.log(string.startsWith('Benimle'))

let string = "Benimle basketbol oynar mısın ?"
console.log(string.startsWith('b'))

! 15. endsWith()

-String'in belirtilen değer ile bitip bitmediğini kontrol eder. true yada false döndürür.

? Örnek:

let string = "Benimle basketbol oynar mısın?"
console.log(string.endsWith('mısın'))

let string = "Benimle basketbol oynar mısın?"
console.log(string.endsWith('?'))

! 16. match

-Argüman olarak bir alt dize veya normal ifade kalıbı alır ve eşleşme varsa bir dizi döndürür, değilse null döndürür. 
-Normal bir ifade kalıbının nasıl göründüğünü görelim. / işareti ile başlar ve / işareti ile biter.

? Örnek1:

let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2
console.log(string.search(/javascript/gi))  // 7 buradaki gi açıklaması bir alt örnekte var

? Örnek2:
let string = 'I Love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string.match(/love/g))


? Örnek3:
!Normal bir ifade kullanarak metinden sayıları çıkaralım.

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/
console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]



! 17. repeat()

-Bağımsız değişken olarak bir sayı alır ve stringi sayı kadar döndürür.

let string = 'love'
console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove


*******************************************************

! Veri Türünü Değiştirme / Changing Data Type(Casting)

*Bir veri tipini başka bir veri tipine dönüştürmek. Kullandıklarımız parseInt(), parseFloat(), Number(), + sign, str() 

-Aritmetik işlemler yapmadan önce string sayıları önce integer yada float türüne dönüştürmeliyiz yoksa hata alırız.

! String to Int

-String bir numarayı sayıya dönüştürebiliriz. Alıntı içerisindeki herhangi bir sayı string numarasıdır. Bir string numarası örneği: '10', '5', vb. Aşağıdaki metotları kullanarak string'i sayıya dönüştürebiliriz:

parseInt()
Number()
Plus sign(+) // artı işareti demek

? Örnek:

let num = '10'
let numInt = parseInt(num)
console.log(numInt) // 10

? Örnek:

let num = '10'
let numInt = Number(num)

console.log(numInt) // 10

? Örnek:

let num = '10'
let numInt = +num

console.log(numInt) // 10


! String to Float

-String içindeki ondalık numarayı sayıya çevirebiliriz. Tırnak içerisindeki ondalık sayı string ondalık sayıdır. Bir string ondalık numarası örneği: '9.81', '3.14', '1.44' vb. Aşağıdaki metotları kullanarak ondalık stringi sayıya dönüştürebiliriz:

parseFloat()
Number()
Plus sign(+)

? Örnek:

let num = '9.81'
let numFloat = parseFloat(num)

console.log(numFloat) // 9.81

? Örnek:

let num = '9.81'
let numFloat = Number(num)

console.log(numFloat) // 9.81

? Örnek:

let num = '9.81'
let numFloat = +num

console.log(numFloat) // 9.81



! Float to Int

- Ondalık sayıları tam sayılara çevirebiliriz. (Int) ( bu aşağıya yuvarlıyor ) Float'ı int'e dönüştürmek için aşağıdaki metodu kullanıyoruz:

parseInt()

let num = 7.81
let numInt = parseInt(num)

console.log(numInt) // 7



! ÖDEVLER - EGZERSİZLER !!!!!!!!!!!!!!!!!!!!!!!!

>  Challenge adında bir değişken tanımlayın ve '7 Günde JavaScript Öğreniyorum' başlangıç ​​değerine atayın.

>  console.log() kullanarak tarayıcı konsolunda değişkeni yazdırın,

>  console.log() kullanarak tarayıcı konsolunda dizenin length değerini yazdırın,

>  toUpperCase() yöntemini kullanarak tüm dize karakterlerini büyük harflerle değiştirin,

>  toLowerCase() yöntemini kullanarak tüm dize karakterlerini küçük harflerle değiştirin,

>  substr() veya substring() yöntemini kullanarak string'in ilk kelimesini kesin-silin (dilimleyin)

>  JavaScript Öğreniyorum ifadesini 7 Günde JavaScript Öğreniyorum'dan ayırın.

>  includes() yöntemini kullanarak string'in Script kelimesini içerip içermediğini kontrol edin

>  split() yöntemini kullanarak string öğesini bir array'ye bölün

>  7 Günde JavaScript Öğreniyorum dizesini split() yöntemini kullanarak boşlukta bölün

>  'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' dizeyi virgülden split ve bir dizi olarak değiştirin.

>  replace() yöntemini kullanarak 7 Günde JavaScript Öğreniyorum'u 14 Günde JavaScript Öğreniyorum olarak değiştirin.

>  '7 Günde JavaScript Öğreniyorum' dizesinde dizin 8'teki karakter nedir? charAt() yöntemini kullanın.

>  charCodeAt() kullanan '7 Günde JavaScript Öğreniyorum' dizesindeki J karakter kodu nedir?

>  7 Günde JavaScript Öğreniyorum'da  a öğesinin ilk oluşumunun konumunu belirlemek için indexOf kullanın.

>  7 Günde JavaScript Öğreniyorum'da a öğesinin son oluşumunun konumunu belirlemek için lastIndexOf kullanın.

>  Aşağıdaki cümlede çünkü kelimesinin ilk geçtiği yeri bulmak için indexOf kullanın: 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'

>  Aşağıdaki cümlede çünkü kelimesinin son geçtiği yeri bulmak için lastIndexOf kullanın: 
   'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'

>  Aşağıdaki cümlede çünkü kelimesinin ilk geçtiği yeri bulmak için search kullanın: 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'

>  Bir dizgenin başındaki ve sonundaki boşlukları kaldırmak için trim() kullanın. Örneğin '7 Günde JavaScript Öğreniyorum'.

>  7 Günde JavaScript Öğreniyorum dizesiyle startsWith() yöntemini kullanın ve sonucu doğru yapın

>  7 Günde JavaScript Öğreniyorum dizesiyle endsWith() yöntemini kullanın ve sonucu doğru yapın

>  Kitaplar kadar sevdiğim başka birşey yoktur'cümlesinde ki tüm a'lari bulmak için match() yöntemini kullanın.

>  concat() kullanın ve '3 saat ile' ve 'JavaScript'i tek bir dize olan '7 Günde JavaScript Öğreniyorum' ile birleştirin

>  7 Günde JavaScript Öğreniyorum 2 kez yazdırmak için repeat() yöntemini kullanın.









*/





