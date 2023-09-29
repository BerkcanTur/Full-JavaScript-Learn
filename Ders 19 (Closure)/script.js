/*
! CLOSURE Nedir?

JavaScript, bir outer(dış) fonksiyonu içine yazma fonksiyonu izni verir. İstediğimiz kadar inner(iç) fonksiyon yazabiliriz. Inner fonksiyon, outer fonksiyonun değişkenlerine erişiyorsa, buna closure(kapatma) denir.


?Örnek:

function sayacOlustur() {
  let sayac = 0; // İçerideki işlevin erişebileceği bir değişken

  function artir() {
    sayac++;
    console.log(sayac);
  }

  function azalt() {
    sayac--;
    console.log(sayac);
  }

  return {
    artir: artir,
    azalt: azalt
  };
}

const sayac1 = sayacOlustur();
sayac1.artir(); // 1
sayac1.artir(); // 2

const sayac2 = sayacOlustur();
sayac2.artir(); // 1
sayac2.azalt(); // 0



! Yorum:

Bu örnekte, sayacOlustur adlı bir işlev tanımlıyoruz ve bu işlev içinde sayac adında bir değişken tanımlıyoruz. artir ve azalt adlı iç içe işlevler, sayac değişkenine erişebilir ve onu güncelleyebilir. sayacOlustur işlevi, artir ve azalt işlevlerini içeren bir nesne döndürür.

Sonrasında sayac1 ve sayac2 adlı iki farklı nesne oluşturuyoruz. Her bir nesne, bağımsız bir sayacı temsil eder. Bu nedenle sayac1'deki artir çağrıldığında sadece sayac1'in değeri artar ve sayac2 üzerinde herhangi bir etkisi yoktur. Bu, closure'ların her bir örneğin iç durumunu kendi bağlamında tutmasından kaynaklanır.

Bu örnekteki closure, iç içe işlevlerin dışındaki değişkenlere erişim sağlar ve bu nedenle farklı sayac örnekleri oluşturulabilir ve bağımsız olarak kullanılabilir.


?Örnek:

function sayiToplayici(x) {
  return function(y) {
    return x + y;
  };
}

const topla5 = sayiToplayici(5); // x'e 5'i atar
console.log(topla5(3)); // 8
console.log(topla5(7)); // 12


! Yorum:

Bu örnekte, sayiToplayici adlı bir işlev tanımlanır. Bu işlev, bir sayıyı (x) alır ve bir iç içe işlev döndürür. İç içe işlev, dıştaki işlevin parametresi olan x'e erişebilir. Daha sonra topla5 adlı bir değişken oluşturulur ve bu değişkene sayiToplayici(5) işlemi atanır. Bu, iç içe işlevin x değerini 5 olarak ayarlar.

Sonuç olarak, topla5 artık 5 ile toplama işlemi yapabilen bir işlevdir. İlk çağrıda topla5(3) 5 ile 3'ü toplar ve sonucu 8 olarak döndürür. Daha sonra topla5(7) çağrıldığında 5 ile 7'yi toplar ve sonucu 12 olarak döndürür. Bu, sayiToplayici işlevinin içindeki x değişkenine closure ile erişim sağladığımız basit bir örnektir.



?! Closure HİKAYESİ

Bir closure, sanki bir sihirli kutu gibidir. Bu kutu, içinde özel bir şey saklar. Bu özel şey, genellikle bir sayı ya da bir kelime olabilir. Sihirli kutu, sadece özel bir anahtarla açılabilir. Her anahtar, bir kutunun içindeki özel şeye farklı bir şekilde erişir.

Örneğin, düşün bir sihirli kutu olduğunu ve bu kutunun içinde bir sayı var. Şimdi, bu kutuyu özel bir anahtarla kilitleyelim. Bu anahtarın adı "topla" olsun. İlk başta bu kutuyu kimse açamaz, çünkü anahtar yok.

Ama sonra, "topla" anahtarını birine veririz. Bu kişi, kutuyu açabilir ve içindeki sayıyla istediği gibi işlem yapabilir. İşte burada, anahtarla açılan kutunun içindeki sayıyı değiştirmek gibi şeyler yapabiliriz.

Şimdi ilginç olan şey, başka bir kutu daha oluşturabiliriz. Bu yeni kutunun içinde farklı bir sayı olsun ve bu kutunun anahtarı "çarp" olsun. Şimdi bu kutuyu başka birine veririz. Bu kişi, kendi anahtarını kullanarak kutuyu açabilir ve içindeki sayıyla işlem yapabilir.

İşte burada önemli olan şey, her kutunun kendi özel anahtarına sahip olmasıdır. Bu nedenle, bir kutuyu açtığınızda, başka bir kutunun içeriğini değiştirmezsiniz. Her kutu kendi içinde kapalı ve güvende kalır.

Bu özel kutular ve anahtarlar, JavaScript programlarında da kullanılır. Her bir kutu, bir işlevdir ve içinde sakladığı şeylere erişmek için özel anahtarlar kullanırız. Bu yüzden bu işlemlere "closure" denir. İşte böylece closure, JavaScript programlarında sihirli kutular gibidir, her biri kendi içindeki bilgilere sahip ve sadece özel anahtarlarıyla açılabilir.




















*/