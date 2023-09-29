//! KAPSAM VE NESNELER
/*
! Scope - Kapsam Alanları

-Bu konu değişken tanımlamanın temel kısmını oluşturur. Farklı veri türlerini depolamak için değişken tanımlarız. 
-Bir değişkeni tanımlamak için var, let veya const anahtar sözcüklerini kullanırız.

-var veya let kullandığımızda kapsam değişkenlerinin kodumuzu nasıl etkilediğini göreceğiz.



*Değişken scope'ları şu şekilde olabilir.

1.Global
2.Local

*var, let veya const olmadan tanımlanan her değişken global scope olarak geçerlidir.


! Window Global Object

-Console.log() metodunu kullanmadan tarayıcınızı açın ve kontrol edin; tarayıcıya a veya b yazarsanız a ve b değerlerini görebilirsiniz. Bu durum a ve b değişkenlerinin zaten hali hazırda mevcut olduğu anlamına gelir.

ad = 'JavaScript'
b = 35;
console.log(ad)


! Global scope
-Program içerisinde fonksiyonların dışında tanımlanan ve her yerden erişilebilen scope tipidir. Global Scope'da tanımlı bir değişkene dosya içerisinde her yerden erişilebilir. Bu değişkenlere de global değişken adı verilir.

! Local scope
Yerel olarak tanımlanan bir değişkene yalnızca belirli kod bloğunda erişilebilir.

1.Block Scope
2.Function Scope

?! Örnek:


let a = 'JavaScript' // bu dosyanın herhangi bir yerinde erişilebilecek global bir kapsamdır.
let b = 10 // bu dosyanın herhangi bir yerinde erişilebilecek global bir kapsamdır.

/ Function scope
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, erişilebilir
  let value = false
/ block scope
  if (true) {
    let a = 'Python'
    let b = 20
    let c = 30
    let d = 40
    value = !value
    console.log(a, b, c, value) // Python 20 30 true
  }
  /c değişkenine erişemiyoruz çünkü c değişkeni sadec if bloğunda geçerli bir değişkendir
  console.log(a, b, c, value) // JavaScript 10 undefined true
}
letsLearnScope()
console.log(a, b) // Ja


? NOTLAR:
? 1- var anahtar kelimesi ile tanımlanan bir değişken fonksiyon scope'u içerisinde geçerlidir. Ancak let veya const anahtar kelimeleri ile tanımlanan değişkenler block scope'unda geçerlidir. (fonksiyon, if veya diğer dönggü blokları). Block kapsamını biraz daha netleştirmek gerekirse Javascript ve diğer çoğu yazılım dili için süslü parantezler arası demek olur. {  }

! Let ve const Arasındaki Farklar


? Değişken Değiştirilebilirliği:

-let ile tanımlanan değişkenlerin değeri daha sonra değiştirilebilir (mutable) yani üzerine yeni bir değer atanabilir.

-const ile tanımlanan değişkenlerin değeri değiştirilemez (immutable) yani bir kez atanıp sonra değiştirilemez.

? İlk Değer Atama Zorunluluğu:

-let ile tanımlanan değişkenlere başlangıçta bir değer atanmak zorunlu değildir. İlk değer atanmazsa, değişken undefined değeri alır.

-const ile tanımlanan değişkenlere başlangıçta bir değer atanması gereklidir. İlk değer atanmazsa hata alırsınız

*Genel olarak, let değişkenleri genellikle değeri daha sonra değiştirilebilecek durumlarda kullanılırken, const değişkenleri değeri değişmeyecek durumlarda veya sabit değerler için tercih edilir. Bu, kodun daha güvenilir ve anlaşılabilir olmasına yardımcı olabilir.


! Object - Nesne

- Bir nesne anahtar değer çiftidir. Bir nesneyi tam anlamıyla oluşturmak için {} iki köşeli parantez kullanırız.

! Boş nesne oluşturmak

const nesne = {}

! Değerle birlikte nesne oluşturmak

- Şimdi bilgiler adındaki nesnenin isim,soyad,yaş,ülke,şehir ve yetenekler olarak şekilde oluşturalım.


const bilgiler = {
    isim: 'Berkcan',
    soyad: 'Tür',
    yas: 27,
    ulke: 'Türkiye',
    sehir: 'İzmir',
    yetenekler: [
        'HTML',
        'CSS',
        'JavaScript',
        'Python',
        'Django',
        'MySQL'
    ]

}
console.log(bilgiler)

! Nesneden değerleri alabilmek

-Nesnenin değerlerine iki yöntem kullanarak erişebiliriz:

. operatörünü kullanarak erişebiliriz.
köşeli parantez kullanarak erişebiliriz.

?Örnek:

const bilgiler = {
    isim: 'Berkcan',
    soyad: 'Tür',
    yas: 27,
    ulke: 'Türkiye',
    sehir: 'İzmir',
    yetenekler: [
        'HTML',
        'CSS',
        'JavaScript',
        'Python',
        'Django',
        'MySQL'
    ]

}
? "." operatörünü kullanarak

console.log(bilgiler.isim)
console.log(bilgiler.ulke) 
console.log(bilgiler.yas)

?köşeli parantez kullanarak

console.log(bilgiler['isim'])
console.log(bilgiler['yas'])
console.log(bilgiler['sehir'])

! Object için yeni bir anahtar değer (key) oluşturma

-Nesne, eşlenebilen bir veri yapısıdır ve oluşturulduktan sonra nesnenin içeriğini push metodu ile değiştirebiliriz.

! Object methodları

-Bir nesneyi manipüle etmek için farklı yöntemler vardır. Mevcut yöntemlerden bazılarını görelim.

! (Object.assign) 
-Nesneyi orijinal nesneyi değiştirmeden kopyalamak için kullanılır

!Object.keys() methodu
-Object.keys: Bir nesnenin anahtarlarını veya özelliklerini dizi olarak almak için kullanılır

! Object.values() methodu
-Object.values: Nesnenin key'lerine karşılık gelen değerleri dizi içerisinde almak için kullanılır

! Object.entries() methodu
Object.entries: Bir dizideki key ve value değerlerini almak için kullanılır

! hasOwnProperty() methodu
hasOwnProperty: Bir nesnede belirli bir anahtar veya özelliğin bulunup bulunmadığını kontrol etmek için kullanılır



*/


