//! YIKICILAR VE YAPICILAR (Destructuring ve Spreading)
/*
-Destructer, dizileri ve nesneleri açmanın ve farklı değişkenlere atamanın bir yoludur.

Destructuring => şeklini bozma
Spread => dağılma,yayma
Rest => kalanın tamamı

?Örnek:

const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree)

/1 2 3 çıktısını verdi.


?Örnek:

const stack = [
    ['HTML','CSS','JAVASCRIPT'],
    ['PHP','NODEJS','MYSQL']
]

const [frontend, backend] = stack
console.log(frontend);

?Örnek:

const stack = [
    ['HTML','CSS','JAVASCRIPT'],
    ['PHP','NODEJS','MYSQL']
]

const [[firstLanguage], backend] = stack
console.log(firstLanguage);


?Eğer dizideki değerleri atlanması isteniyorsa virgül(,) işareti kullanmak gerekir. Virgül söz konusu indeksteki değeri atlamaya yardımcı olur.

const numbers = [1, 2, 3]
let [numOne, , numThree] = numbers //2 atlandı

console.log(numOne, numThree)

! spread ve Rest

-Dizideki tüm elemanlara değişken atanmayabilir. İlkinin birkaçını yok edip ve kalanını spread operatörünü (...) kullanarak dizi olarak alabiliriz.

?Örnek: Rest


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)

1 2 3
[4, 5, 6, 7, 8, 9, 10]


?Örnek:

const countries = [
  'Germany',
  'France',
  'Belgium',
  'Finland',
  'Sweden',
  'Norway',
  'Denmark',
  'Iceland'
]

let [gem, fra, , ...otherCountries] = countries

console.log(gem)
console.log(fra)
console.log(otherCountries)

?Örnek:

const frontEnd = ['HTML', 'CSS', 'JS', 'React']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [...frontEnd, ...backEnd]

console.log(fullStack)

///ÇIKTI
["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB"]




! Bir objeden değer çıkartmak

const kullanıcı = {
    ad: 'Berkcan',
    soyad: 'Tür',
    sehir: 'İzmir',
    yas: 27,
};

const {soyad} = kullanıcı
console.log(soyad)



! Ok fonksiyonu ve spread operatörü

-Sınırsız sayıda argüman alan bir ok fonksiyonu yazmak istersek, bir yayılma spread kullanırız. Parametre olarak bir spread işleci kullanırsak, bir işlevi çağırdığımızda iletilen bağımsız değişken bir diziye dönüşecektir.


const sumAllNums = (...args) => {
  console.log(args)
}

sumAllNums(1, 2, 3, 4, 5)


*/

