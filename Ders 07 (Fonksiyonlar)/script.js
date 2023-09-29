//! FONKSİYONLAR (functions)
/*
-Bir fonksiyon, belirli bir görevi gerçekleştirmek üzere tasarlanmış ve yeniden kullanılabilir bir kod bloğu veya programlama tanımıdır.

?Fonksiyon kullanmanın avantajları:

*temiz ve okunması kolay
*yeniden kullanılabilir
*kolay test edilir



! Klasik Fonksiyon Tanımı/ parametresiz fonksiyon tanımı

function functionName() {
  / istenilen kod parçası
}

functionName() // fonksiyon, fonksiyon adı ve parantezler ile çağırılır


let mesaj = 'Merhaba ?'

function merhaba(){
    let mesaj = 'Merhaba Hoşgeldin!'
    console.log(mesaj)
}
merhaba()



! isimsiz fonksiyon

const anonymousFun = function() {
  console.log(
    'İsimsiz bir fonksiyonum ve değerim anonim olarak saklanıyor'
  )
}

const toplama = function(a, b) {
    return a + b;
};

const sonuc = toplama(8, 2);
console.log(sonuc); // 10


! Dönen Değerli Fonksiyon

function carpma(a, b) {
    return a * b;
}

const sonuc = carpma(4, 6);
console.log(sonuc); // 24

! Sınırsız sayıda parametreyle çalışan fonksiyon

/ arguments nesnesine erişelim
​
function sumAllNums() {
 console.log(arguments)
}

sumAllNums(1, 2, 3, 4)
/ Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]


! Arrow Fonksiyonu

-Arrow fonksiyonları geleneksel fonksiyon ifadelerinden farklıdır ve daha kısa sözdizimine sahiptir. Arrow fonksiyonlarını tanımlamak için => ok işareti kullanılır. Arrow fonksiyonlarının temel kullanımı şu şekildedir:

?Örnek:

/normal function

function yazdir(){
  console.log('Merhaba')
}
yazdir()

/arrow function

const yazdir = () => {
  console.log('Merhaba Arrow Function !')
}
yazdir()


! Kendi kendine çağrılan fonksiyon
-Fonksiyonu tanımlar tanımlamaz çağırmak için kullanılır.

(function() {
    console.log("Bu fonksiyon hemen çağrıldı.");
})();

*Bu örnekler, JavaScript'te fonksiyonların nasıl tanımlandığını, parametre aldığını, değer döndürdüğünü ve çağrıldığını göstermektedir. Fonksiyonlar, JavaScript programlamasının temel yapı taşlarından biridir ve çok çeşitli senaryolarda kullanılırlar.








*/


