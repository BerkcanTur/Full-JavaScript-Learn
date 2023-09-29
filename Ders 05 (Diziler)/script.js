//! DİZİLER [ ARRAY ]  
/*
-Değişkenlerin aksine, diziler Çoklu değerleri depolayabilirler. Dizi'deki her bir değer index'e sahiptir

? Örnek:

*const meyveler = ['Kiraz','Portakal', 2]

*let liste = ["Tükenmez Kalem","Uçlu Kalem","Kurşun Kalem"]


const  ulkeler = ['Türkiye', 'Amerika', 'İsviçre', 'Norveç', 'Almanya'] 
console.log(ulkeler.length)


const  sehirler = [

'Ankara',

'İzmir',

'İstanbul',

'Bursa',

'Giresun',

'Antalya',

'Manisa',

'Sivas',

'Adana',
]
console.log(sehirler[1])
/index numarasına bakmak.

! Boş Dizi Yaratmak

const bilgi = Array(5);

! Dizileri Manipüle Etmek

! fill

const bilgi = Array(7).fill('Başarılı')
console.log(bilgi);

! concat

let liste1 = [1, 2, 3, 4]
let liste2 = [5, 6, 7, 8]
let liste3 = [9, 10, 11, 12]
console.log(liste1.concat(liste2,liste3))


! length

const  numbers = [1, 2, 3, 4, 5]
console.log(numbers.length);

! indexOf

const  numbers = [1, 2, 3, 4, 5]
console.log(numbers.indexOf(5))

! lastIndexOf

const  numbers = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers.lastIndexOf(2)) // 7

console.log(numbers.lastIndexOf(0)) // -1

console.log(numbers.lastIndexOf(1)) // 6

! includes

const  numbers = [1, 2, 3, 4, 5]

console.log(numbers.includes(5)) // true

console.log(numbers.includes(0)) // false

console.log(numbers.includes(1)) // true


?Örnek:

const  webTechs = [

'HTML',

'CSS',

'JavaScript',

'React',

'Python',

'Node',

'MYSQL'

] 

console.log(webTechs.includes('Node'))


! Diziyi kontrol etmek

const  numbers = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers))

! toString

const  numbers = [1, 2, 3, 4, 5]

console.log(numbers.toString()) // 1,2,3,4,5


! Join

*Dizinin elemanlarını birleştirmek için kullanılır

const  names = ['Irmak', 'Mehmet', 'Aslı']

console.log(names.join()) // Irmak,Mehmet,Aslı

console.log(names.join('')) //IrmakMehmetAslı

console.log(names.join(' ')) //Irmak Mehmet Aslı

console.log(names.join(', ')) //Irmak, Mehmet, Aslı

console.log(names.join(' # ')) //Irmak # Mehmet # Aslı 


! Dizi elemanlarını slice etmek

-Slice: Bir aralıktaki çoklu elemanları dilimler İki parametre alır. Bu parametreler, başlangıç ve bitiş konumlarıdır. Bitiş konumunu dahil etmez.


const  numbers = [1,2,3,4,5]

console.log(numbers.slice()) // -> Bütün öğeyi kopyalar

console.log(numbers.slice(0)) // -> Bütün öğeyi kopyalar

console.log(numbers.slice(0, numbers.length)) // Bütün öğeyi kopyalar

console.log(numbers.slice(1,4)) // -> [2,3,4] // son elemanı dahil etmez



! Push kullanarak diziye eleman eklemek

-Push: Dizinin sonuna eleman ekler.Varolan bir diziye eleman eklemek için push metodunu kullanırız.


?Örnek:

/ syntax

const  list = ['item1', 'item2','item3']

list.push('new item')

console.log(arr)

/ ['item1', 'item2','item3','new item']


! pop kıllanarak diziden eleman çıkarmak

-pop: Dizinin sonundaki elemanı siler.

?Örnek:

const  numbers = [1, 2, 3, 4, 5]
numbers.pop() // -> Sondaki elemanı siler
console.log(numbers) // -> [1,2,3,4]


!Dizinin en başından eleman kaldırmak

shift: Dizinin en başındaki elemanı siler.

const  numbers = [1, 2, 3, 4, 5]
numbers.shift() // -> baştan bir elemanı kaldırır.
console.log(numbers) // -> [2,3,4,5]


! Dizinin en başına eleman eklemek

-unshift: Dizinin başına dizi elemanı ekler.

?Örnek:

const  numbers = [1, 2, 3, 4, 5]

numbers.unshift(0) // -> en başa eleman ekler

console.log(numbers) // -> [0,1,2,3,4,5]

! Dizi sırasını terse çevirmek

?Örnek:

reverse: Dizi sıralamasını terse çevirir.

const  numbers = [1, 2, 3, 4, 5]

numbers.reverse() // -> ters dizi sırası

console.log(numbers) // [5, 4, 3, 2, 1]

! Dizi elemanlarını sıralamak(Alfabe sırası)

?Örnek:

const  dersler = [

'HTML',

'CSS',

'JavaScript',

'React',

'Python',

'Node',

'MongoDB'

]

  

console.log(dersler.sort());

console.log(dersler) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "Python","React "]


!SORU
?DİZİ İÇİNDE DİZİ YAPILABİLİR Mİ ?


















*/

