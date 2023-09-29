//! RegExp, DÜZENLİ İFADELER
/*

- Metin işleme işlemlerinde belirli desenleri tanımlamak, aramak ve değiştirmek için kullanılan bir dil veya notasyondur. RegExp'ler, metin içindeki karakterlerin veya karakter dizilerinin özel bir deseni veya yapısı ile eşleşen metinleri bulmanıza veya değiştirmenize olanak tanır.

?RegExp'ler genellikle aşağıdaki bileşenlerden oluşur:

Metin Karakterleri: Sıradan metin karakterleri doğrudan aranacak veya eşleştirilecek karakterlerdir. Örneğin, abc ifadesi sıradan metin karakterlerini temsil eder ve "abc" ile eşleşir.

Özel Karakterler: RegExp içinde özel anlam taşıyan karakterlerdir. Örneğin, . herhangi bir karakteri temsil ederken, * bir karakterin sıfır veya daha fazla tekrarını ifade eder.

Karakter Sınıfları: Belirli bir karakter sınıfına ait karakterleri temsil eden ifadelerdir. Örneğin, [0-9] tüm rakamları temsil eder.

Meta-Karakterler: Düzenli ifadelerde özel anlamlar içeren karakterlerdir. Örneğin, \d bir rakamı temsil ederken, \w bir kelime karakterini temsil eder.

Desen Modifikatörleri: Desenin nasıl aranacağını veya eşleştirileceğini değiştiren bayraklar veya modifikatörlerdir. Örneğin, g global olarak aramayı ifade ederken, i büyük/küçük harf duyarsız aramayı ifade eder.


! RegExp Parametreleri

-Bayraklar, normal ifadede aramanın türünü belirleyen isteğe bağlı parametrelerdir. Bayraklardan bazılarını görelim:

g: tüm metinde bir kalıp aramak anlamına gelen genel bir bayrak
i: büyük/küçük harfe duyarlı olmayan bayrak (hem küçük hem de büyük harf arar)
m: çok satırlı


? RegExp Constructor ile desen oluşturma

-Genel bayrak ve büyük/küçük harfe duyarsız bayrak olmadan normal ifadenin bildirilmesi.

/ without flag
let pattern = 'love'
let regEx = new RegExp(pattern)

?Normal ifadeyi genel bayrak ve büyük/küçük harfe duyarsız bayrakla bildirme.

let pattern = 'love'
let flag = 'gi'
let regEx = new RegExp(pattern, flag)

? RegExp nesnesini kullanarak bir regex modeli bildirme. Deseni ve bayrağı RegExp yapıcısının içine yazma

let regEx = new RegExp('love','gi')


?RegExp Oluşturucusu olmadan bir model oluşturma

-Normal ifadeyi genel bayrak ve büyük/küçük harfe duyarsız bayrakla bildirme.

let regEx= /love/gi

!Yukarıdaki normal ifade RegExp yapıcısıyla oluşturduğumuzla aynıdır.

let regEx= new RegExp('love','gi')


! RegExpp Nesne Yöntemleri

* test etmek için

-test() : Bir dizedeki eşleşmeyi test eder. Doğru veya yanlış değerini döndürür.

?Örnek:

const str = 'I love JavaScript'
const pattern = /love/
const result = pattern.test(str)
console.log(result)

?Örnek: i kullandık çünkü büyük küçük harfe duyarlı olsun istedik.


let word = /salak/i
let comment = prompt('Yorumunu yaz,Dikkatli ol!');

if(word.test(comment)){
    alert('hayır sen salaksın.')
}


! match

-Yakalama grupları da dahil olmak üzere tüm eşleşmeleri içeren bir dizi döndürür veya eşleşme bulunmazsa null döndürür. Global bir bayrak kullanmazsak, match() modeli, dizini, girişi ve grubu içeren bir dizi döndürür.


?Örnek:
const str = 'I love JavaScript'
const pattern = /love/
const result = str.match(pattern)
console.log(result)

["love", index: 2, input: "I love JavaScript", groups: undefined]


! search()

-Bir dizedeki eşleşmeyi test eder. Arama başarısız olursa eşleşmenin indeksini veya -1 değerini döndürür.


?Örnek:
const str = 'I love JavaScript'
const pattern = /love/g
const result = str.search(pattern)
console.log(result)

! change()

-Bir dizede bir eşleşme araması yürütür ve eşleşen alt dizeyi yeni bir alt dizeyle değiştirir.


?Örnek:
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)


?Örnek:
const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt.replace(/%/g, '')
console.log(matches)  

!Çıktı:
I am teacher and  I love teaching.There is nothing as more rewarding as educating and empowering people.I found teaching more interesting than any other jobs.Does this motivate you to be a teacher.


! KARAKTERLER

[]: Bir dizi karakter
[ac] a veya b veya c anlamına gelir
[az], a'dan z'ye herhangi bir harf anlamına gelir
[AZ] A'dan Z'ye herhangi bir karakter anlamına gelir
[0-3], 0 veya 1 veya 2 veya 3 anlamına gelir
[0-9], 0'dan 9'a kadar herhangi bir sayı anlamına gelir
[A-Za-z0-9] a'dan z'ye, A'dan Z'ye, 0'dan 9'a kadar herhangi bir karakter
\: özel karakterlerden kaçmak için kullanılır
\d anlamı: dizenin rakamları (0-9 arası sayılar) içerdiği eşleşme
\D anlamı: dizenin rakam içermediği eşleşme
. : yeni satır karakteri dışında herhangi bir karakter(\n)
^: ile başlar
r'^substring' örneğin r'^love', aşk kelimesiyle başlayan bir cümle
r'[^abc] a değil, b değil, c değil anlamına gelir.
$: ile biter
r'substring$' örneğin r'love$', cümle aşk kelimesiyle bitiyor
*: sıfır veya daha fazla kez
r'[a]*' isteğe bağlı anlamına gelir veya birçok kez oluşabilir.
+: bir veya daha fazla kez
r'[a]+' en az bir veya daha fazla kez anlamına gelir
?: sıfır veya bir kere
r'[a]?' sıfır kez veya bir kez anlamına gelir
\b: kelime sınırlayıcı, bir kelimenin başlangıcı veya bitişiyle eşleşir
{3}: Tam olarak 3 karakter
{3,}: En az 3 karakter
{3,8}: 3 ila 8 karakter
|: Ya ya da
r'apple|muz' ya elma ya da muz anlamına gelir
(): Yakalama ve gruplama


! Köşeli ayraç

*Rakamlar: [0-9] köşeli ayraçlar arasına yazılan bu ifade, tüm rakamları temsil eder.

?Örnek kullanım:
var regex = /[0-9]/;
regex.test("Bu bir örnek metin 1234"); // true (çünkü metin içinde en az bir rakam var)


*Harfler: [a-zA-Z] ifadesi, küçük harf ve büyük harf alfabetik karakterleri temsil eder.

?Örnek kullanım:
var regex = /[a-zA-Z]/;
regex.test("Bu bir örnek metin"); // true (çünkü metin içinde en az bir harf var)


*Belirli Karakterler: [aeiou] ifadesi, a, e, i, o veya u harflerini temsil eder.

?Örnek kullanım:

var regex = /[aeiou]/;
regex.test("Bu bir örnek metin"); // true (çünkü metin içinde en az bir sesli harf var)


*Belirli Rakam Aralığı: [5-9] ifadesi, 5 ile 9 arasındaki rakamları temsil eder.

?Örnek kullanım:

var regex = /[5-9]/;
regex.test("Bu bir örnek metin 7"); // true (çünkü metin içinde en az bir rakam 5-9 aralığında var)


*Özel Karakterler: Bazı özel karakterler de bu köşeli ayraç içinde kullanılabilir. Örneğin, [\$] ifadesi, dolar işaretini temsil eder.

?Örnek kullanım:

var regex = /[\$]/;
regex.test("Bu bir $ örnek metin"); // true (çünkü metin içinde en az bir dolar işareti var)


*/
