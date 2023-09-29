//! Higher Order Function (Yüksek Dereceli Fonksiyon)
/*
-Yüksek dereceden (high order) fonksiyonlar, parametre olarak başka bir fonksiyonu içerisine alan veya bir başka fonksiyonu değer olarak döndürebilen fonksiyonlardır.


! Callback nedir?

-Callback : Bir fonksiyonu bir fonksiyona parametre geçmeye denir. Kullanım sebebi ise asenkron problemlerini yönetip bunları senkrona çevirmeye yaramaktadır. 


? Örnek:

function getName(callback){
    setTimeout(() => {
        console.log('Berkcan')
        callback()
        
    }, 1000);
}

function getSurname(){
    setTimeout(() => {
        console.log('Tür')
    }, 500);
}

getName(getSurname)


*Örnek olarak, bir kahve makinesi düşünün. Kahve yapmak için ihtiyacınız olan bir su ısıtıcısı ve bir kahve makinesi var. Su ısıtıcısı suyunu ısıttığında, kahve makinesine "Kahve yapmaya hazırım!" demesi gerekiyor.

?Bu durumu JavaScript ile şöyle temsil edebiliriz:

/ Su ısıtıcısı işlevi
function suIsiticisi(callback) {
    console.log("Su ısıtıcısı: Su ısınıyor...");
    setTimeout(function () {
      console.log("Su ısıtıcısı: Su ısındı!");
      callback(); // Su ısıtıcısı ısındığında callback'i çağır
    }, 3000); // 3 saniye sonra su ısınıyor
  }
  
  / Kahve makinesi işlevi
  function kahveMakinesi() {
    console.log("Kahve makinesi: Kahve yapılıyor...");
    setTimeout(function () {
      console.log("Kahve makinesi: Kahve hazır!");
      afiyet()
    }, 3000); 
        / 2 saniye sonra kahve hazır
  }

  function afiyet(){
    setTimeout(function () {
        console.log('Afiyet olsun Berkcan.')
    }, 3000);
  }
  
  / Şimdi işlevleri bağlayalım (callback'leri kullanalım)
  suIsiticisi(kahveMakinesi)
   / Su ısıtıcısı ısındığında kahve yapımını başlat




! Returning Function

-Yüksek dereceden fonksiyonlar, bir fonksiyonu değer olarak geri döndürebilir.​
-Veriyi dışarıya çekmek için kullanılır.



? Örnek: !!!!!!

let degisenSonuc = cube(3)
console.log(degisenSonuc)
  
function cube(sayi){
    let sonuc = sayi*sayi*sayi;
    return sonuc;
}


! forEach Yöntemi ve Callback ile Bağlantısı

-JavaScript'de forEach bir döngü işlevidir ve bir dizi (array) üzerinde dolaşırken her bir eleman için belirtilen bir işlemi uygulamanıza olanak tanır. Bu yöntem, dizinin her elemanını tek tek işlemenizi ve her elemana özgü bir işlem gerçekleştirmenizi sağlar. forEach yöntemi, bir diziyi dolaşırken kullanabileceğiniz temel bir iterasyon yöntemidir ve dizi üzerinde işlem yapmanın yanı sıra, her eleman için farklı işlemler gerçekleştirmenize yardımcı olabilir.

dizi.forEach(function(eleman) {
  / Eleman üzerinde yapılacak işlem burada tanımlanır.
});

? Örnek:

let meyveler = ["elma", "armut", "çilek", "muz"];

meyveler.forEach(function(meyve){
    console.log(meyve)
})

? forEach ile bir callback kullanalım.

var sayilar = [1, 2, 3, 4, 5];

/ Her sayıyı iki katına çıkaran bir geri çağrı işlevi tanımlanır.
function ikiKatinaCikar(sayi) {
  console.log(sayi * 2);
}

/ Dizi üzerinde forEach kullanarak her elemana bu işlevi uyguluyoruz.
sayilar.forEach(ikiKatinaCikar);

! Setting time

-JavaScript'te bazı fonksiyonları belirli bir zaman aralığında yürütebiliriz veya bazı fonksiyonları yürütmek için belirli bir süre planlama (bekleme) yapabiliriz.

setInterval
setTimeout

! setInterval fonksiyonu ile süre ayarlama

-JavaScript'de setInterval bir zamanlayıcı (timer) işlevidir ve belirli bir işlemi belirli aralıklarla tekrarlamak için kullanılır. setInterval, belirtilen bir zaman aralığında belirli bir işlevi sürekli olarak çağırmak için kullanılır.

?Örnek:

function merhaba(){
    console.log('Hello,World!')
}
setInterval(merhaba,1000)

! setTimeout ile zaman ayarlama

-Javascript'te ileriye dönük çalışacak fonksiyonlar planlayabiliriz. Tam da bu iş için setTimeOut metodu imdadımıza koşuyor. setTimeOut fonksiyonu da setInterval fonksiyonuna benzer şekilde bir callback fonksiyon ve ms cinsinden bir süre değerini parametre olarak alır.

?Örnek:

function sayHello() {
  console.log('Hello,World!')
}
setTimeout(sayHello, 3000) // 3 saniye bekledikten sonra "Hello World" yazdıracak.


! Functional Programming - Fonksiyonel Programlama

-JavaScript'in en son sürümü, normal döngü yazmak yerine karmaşık sorunları çözmemize yardımcı olabilecek birçok yerleşik yöntem sunmuştur.Göreceğimiz tüm metotlar callback fonksiyonu ile birlikte kullanılabilir. Bu bölümde, forEach, map, filter, reduce, find, every, some, and sort metodlarını göreceğiz

! forEach
forEach: Bir dizi elemanlarını sırasıyla gezer. "element", "index" ve dizinin kendisi ile callback fonksiyonunu parametre olarak alabilir. "index" ve dizinin kendisi isteğe bağlı olarak parametre olarak verilmeyebilir.

?Örnek:

arr.forEach(function (element, index, arr) {
  console.log(index, element, arr)
})
/ Yukarıdaki kod arrow function kullanılarak yazılabilir.
arr.forEach((element, index, arr) => {
  console.log(index, element, arr)
})
/ Daha basite indirgemek istersek
arr.forEach((element, index, arr) => console.log(index, element, arr))


?Örnek:

let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
console.log(sum)

/çıktı
1
2
3
4
5

?Örnek:

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))

/çıktı
FINLAND
DENMARK
SWEDEN
NORWAY
ICELAND


! map

-map:Bir dizi elemanını yinelemek ve dizi öğelerini değiştirmek. callback fonksiyonla birlikte "elements", "index" yeni bir diziyi parametre olarak alabilir.


?Örnek:

const modifiedArray = arr.map(function (element, index, arr) {
  return element
})

const numbers = [1, 2, 3, 4, 5];



?Örnek:Ayrıca, modern JavaScript'te daha kısa bir ok işlevi (arrow function) kullanarak aynı işlemi gerçekleştirebiliriz:

const squaredNumbers = numbers.map(number => number * number);

console.log(squaredNumbers); // [1, 4, 9, 16, 25]



?Örnek:

const names = ["Alice", "Bob", "Charlie", "David"];

/ Her adın uzunluğunu içeren yeni bir dizi oluştur
const nameLengths = names.map(function(name) {
  return name.length;
});

console.log(nameLengths); // [5, 3, 7, 5]

*Bu örnekte, names dizisindeki her ismin uzunluğunu hesaplıyoruz ve bu uzunlukları içeren yeni bir dizi olan nameLengths dizisini oluşturuyoruz. map() yöntemi, her bir öğeyi işleyip sonucu yeni bir diziye eklememize olanak tanır.



! filter

-JavaScript'te filter() metodu, bir dizi veya iterable nesnenin öğelerini belirli bir koşula göre filtrelemek için kullanılan bir yüksek düzey dizi işleme yöntemidir. Bu metot, belirtilen koşulu sağlayan öğelerden oluşan yeni bir dizi döndürür.


Temel sözdizimi şu şekildedir:

const newArray = array.filter(function(currentValue, index, array) {
  / Filtreleme koşulunu uygula ve true dönen öğeleri yeni diziye ekle
}, thisArg);

*currentValue: Şu anda işlenen öğenin değeri.
index: Şu anda işlenen öğenin dizindeki indeksi.
array: filter() metodunun çağrıldığı dizinin kendisi.
thisArg (isteğe bağlı): İşlev içinde kullanılacak this değeri.

?Örnek:

const numbers = [1,2,3,4,5,6,7,8];

const evenNumbers = numbers.filter(function(number){
  return number % 2 === 0; //sadece çift sayıları döndür.
});
console.log(evenNumbers)





! reduce

-reduce: Reduce fonksiyonu bir callback fonksiyonu gerektirir. Dizinin her değeri için bir işlev yürütür ve sonunda diziyi tek bir değere düşürür. Metodun dönüş değeri ilk parametresi olan accumulator parametresinde saklanır.


?Örnek:

arr.reduce((acc, cur) => {
  / bir değer döndürmeden önce bazı işlevler buraya kodlanır
 return 
}, initialValue)

?Örnek:

const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum)



! every

-Bu yöntem, dizideki her öğeyi belirtilen koşula göre kontrol eder ve tüm öğeler koşulu sağlarsa true, en az bir öğe koşulu sağlamazsa false değeri döndürür.


every() metodunun temel sözdizimi şu şekildedir:

const result = array.every(function(currentValue, index, array) {
  / Koşulu kontrol et, her öğe koşulu sağlıyorsa true döndür
}, thisArg);

*currentValue: Şu anda işlenen öğenin değeri.
index: Şu anda işlenen öğenin dizindeki indeksi.
array: every() metodunun çağrıldığı dizinin kendisi.
thisArg (isteğe bağlı): İşlev içinde kullanılacak this değeri.

?Örnek:

const numbers = [2, 4, 6, 8, 10];

const allPositive = numbers.every(function(number) {
  return number > 0; // Tüm sayılar pozitif mi?
});

console.log(allPositive); // true

const numbers = [2, 4, 6, 8, 10];

const allPositive = numbers.every(number => number > 0);
console.log(allPositive)



! find

- Bu metot, dizideki her öğeyi belirtilen koşula göre kontrol eder ve koşulu sağlayan ilk öğeyi döndürür. Koşulu sağlayan öğe bulunamazsa undefined döner.


?Örnek:

const numbers = [10, 20, 30, 40, 50];

/ 30'dan büyük olan ilk sayıyı bul
const firstGreaterThan30 = numbers.find(function(number) {
  return number > 30;
});

console.log(firstGreaterThan30); // 40

?Örnek

const numbers = [14,15,25,64,48,50]

const control = numbers.find(number => number < 15);
console.log(control);


! findIndex

-koşulu karşılayan ilk elemanın index değerini döndürür.


?Örnek:

const numbers = [10, 20, 30, 40, 50];

/ Dizi içinde 30 değerini arayalım ve indeksini bulalım
const indexOf30 = numbers.findIndex(element => element === 30);

console.log(`30 değeri dizinin ${indexOf30}. indeksinde bulunuyor.`);


*Bu örnekte, findIndex yöntemi kullanılarak 30 değerini arıyoruz ve bu değeri bulduğumuz dizinin indeksi olan 2'yi döndürecektir. Sonuç olarak, "30 değeri dizinin 2. indeksinde bulunuyor." çıktısını verecektir.


! some

-some() yöntemi bir dizi içinde döngü oluşturur ve her öğeyi belirtilen koşula göre kontrol eder. Eğer en az bir öğe koşulu sağlarsa, true değerini döndürür; aksi halde false döndürür.

const numbers = [10, 20, 30, 40, 50];

/ Dizi içinde en az bir öğenin 30'a eşit olduğunu kontrol edelim
const isAnyEqualTo30 = numbers.some(element => element === 30);

if (isAnyEqualTo30) {
  console.log("Dizi içinde en az bir öğe 30'a eşittir.");
} else {
  console.log("Dizi içinde hiçbir öğe 30'a eşit değildir.");
}



! sort

- sort fonksiyonu, bir diziyi, öğelerini dizelere dönüştürerek ve bu dizeleri Unicode kod karakterleri sırasına göre karşılaştırarak (diziyi alfabetik olarak sıralar) sıralamanıza olanak tanır. Yeni bir dizi oluşturmadan eldeki olan diziyi düzenler.


? string değerleri sıralama
const fruits = ["elma", "muz", "çilek", "portakal", "karpuz"];

/ Diziyi alfabetik olarak sıralayalım
fruits.sort();

console.log(fruits); // ["elma", "karpuz", "muz", "portakal", "çilek"]


const listem = ['İlknur','Selma','Ahmet','Ramiz','Mehmet'];

const alfabetik = listem.sort();
console.log(alfabetik)



? sayısal değerleri sıralama

*Küçükten Büyüğe Sıralama:

const numbers = [5, 2, 9, 1, 5];

numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers); // [1, 2, 5, 5, 9]



*Büyükten Küçüğe Sıralama:


const numbers = [5, 2, 9, 1, 5];

numbers.sort(function(a, b) {
  return b - a;
});

console.log(numbers); // [9, 5, 5, 2, 1]

! Array nesnelerini sıralamak

Bir dizideki nesneleri sıraladığımız zaman karşılaştırmak için key objesini kullanırız. Aşağıdaki örneğe bakalım.

objArr.sort(function (a, b) {
  if (a.key < b.key) return -1
  if (a.key > b.key) return 1
  return 0
})

? Bu yöntem yerine localecompare kavramını araştır.








*/

