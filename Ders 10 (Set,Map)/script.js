//! SET VE MAP
/*
-JavaScript'te Set ve Map, veri yapısı olarak kullanabileceğiniz iki farklı koleksiyon türüdür. Her birinin kendi kullanım alanları ve özellikleri vardır. İşte Set ve Map hakkında daha fazla bilgi:



! Set

-Bir Set, benzersiz (yinelenmeyen) değerlerin sırasız bir koleksiyonunu temsil eder.
-Set, dizilere benzer, ancak her bir öğenin yalnızca bir kez bulunabileceği bir yapıdır.
-Set, verileri ekleme, silme ve kontrol etme (varlık kontrolü) için kullanılır.
-Set'in "add", "delete", "has", ve "clear" gibi yöntemleri vardır.

?Örnek:

const names = new Set(['Berkcan','Aslı','Mehmet']);

console.log(names)


?Örnek:

const names = new Set(['Berkcan','Aslı','Mehmet']);

for(let name of names){
    console.log('Ad',name)
}

?Örnek:

const names = new Set(['Berkcan','Aslı','Mehmet']);

for(let name of names){
    console.log('Ad',name)
}


?Örnek:

const names = new Set();

names.add('Hasan');
names.add('İlknur');
names.add('Mehmet');
console.log(names);


! delete

const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);

console.log(mySet); // Set { 1, 2, 3 }

mySet.delete(2); // 2 değerini set'ten sil
console.log(mySet); // Set { 1, 3 }

mySet.delete(4); // Set'te olmayan bir değeri silmeye çalışabilirsiniz, bu bir hata üretmez
console.log(mySet); // Set { 1, 3 }


! has

-Has yöntemi, belirli bir öğenin bir kümede bulunup bulunmadığını bilmeye yardımcı olabilir.

const mySet = new Set (['Mercedes','Volvo','Honda']);
console.log(mySet.has('Mercedes'))

! clear

Set veya Map Nesnelerinde clear() Yöntemi:

Set ve Map nesneleri, üzerlerindeki tüm öğeleri temizlemek (silme) için clear() adında bir yöntem sağlar.
Bu yöntem, Set veya Map nesnesini boşaltır ve içindeki tüm öğeleri siler.


?Örnek:

const mySet = new Set([1, 2, 3, 4]);

mySet.clear();

console.log(mySet); // Set {}


! Harita

? Boş bir harita oluşturma 

const map = new Map()
console.log(map)


! Diziden Harita Oluşturma

ulkeler = [
    ['Türkiye', 'Ankara'],
    ['Norveç','Oslo'],
    ['Almanya','Berlin']
]
const map = new Map(ulkeler)
console.log(map)
console.log(map.size)

! Haritaya değer ekleme

const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)

Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
3

?Haritadan değer alma
console.log(countriesMap.get('Finland'))


? Haritada anahtar kontrol ediliyor

console.log(countriesMap.has('Finland'))
/true
*/








