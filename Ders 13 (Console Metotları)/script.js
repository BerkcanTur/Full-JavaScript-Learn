//! CONSOLE NESNE YÖNTEMLERİ (Console Metotları)
/*
-Çıktıyı tarayıcı konsolunda göstermek için konsol nesne yöntemlerini kullanırız ve çıktıyı tarayıcı belgesinde (görüntüleme bağlantı noktası) göstermek için document.write'ı kullanırız. Her iki yöntem de yalnızca test etme ve hata ayıklama amacıyla kullanılır. Konsol yöntemi, tarayıcıdaki en popüler test ve hata ayıklama aracıdır. DOM ile etkileşime geçmek istediğimizde, JavaScript kullanmayı denediğimizde document.getElementById() işlevini kullanırız. DOM'u başka bir bölümde ele alacağız.


! console.log()

-Tarayıcı konsolunda çıktıyı göstermek için console.log() işlevini kullanırız. Değerleri değiştirebiliriz ve ayrıca %c kullanarak oturum kapatma işlemini de biçimlendirebiliriz. (css işlemleri)

?Örnek:

let name = 'Ben JavaScript öğreniyorum';
console.log('%cDur!','font-size:30px; color:red');


let name = 'Ben JavaScript öğreniyorum';
console.log('%cDur! %cSelam','font-size:30px; color:red','color:yellow');


! console.warn()

-Tarayıcıda uyarı vermek için console.warn() metodunu kullanıyoruz. Örneğin, bir paketin sürümünün veya kötü uygulamaların kullanımdan kaldırıldığını bildirmek veya uyarmak için kullanırız.

?Örnek:

console.warn("Bu bir uyarı mesajıdır.Berkcan")


! console.error()

-Yöntemi bir hata mesajı gösterir.

?Örnek:

console.error('Bu bir hata mesajıdır!')


! console.table()

const names = ['Berkcan', 'Fatih', 'Mehmet', 'Salih']
console.table(names)


! console.time()

-Bir işlemin ne kadar süreceğini takip etmek için kullanabileceğiniz bir zamanlayıcı başlatır. Her zamanlayıcıya benzersiz bir ad verirsiniz ve belirli bir sayfada 10.000'e kadar zamanlayıcı çalışıyor olabilir. console.timeEnd() işlevini aynı adla çağırdığınızda, tarayıcı, zamanlayıcının başlatılmasından bu yana geçen süreyi milisaniye cinsinden görüntüler.

console.time('calculate 1m array')
new Array(10e5).fill('ab').map((value, index) => index)
console.timeEnd('calculate 1m array')

! console.info()

-Tarayıcı konsolunda bilgi mesajı görüntüler.


! console.assert()

-Console.assert() yöntemleri, iddianın yanlış olması durumunda konsola bir hata mesajı yazar. İddia doğruysa hiçbir şey olmaz. İlk parametre bir onaylama ifadesidir. Bu ifade yanlışsa Onaylama başarısız hata mesajı görüntülenecektir.


console.assert(5 > 3, '5 is greater than 3') 
console.assert(3 > 4, '3 is not greater than 4') 

! console.group()

- Farklı günlük gruplarının gruplandırılmasına yardımcı olabilir.

?Örnek:

console.log("Bu birinci seviye log mesajıdır.");
console.group("Grup 1");
console.log("Bu birinci seviye grup içi log mesajıdır.");
console.group("Alt Grup 1");
console.log("Bu ikinci seviye grup içi log mesajıdır.");
console.groupEnd(); // Alt Grup 1'i sonlandır
console.groupEnd(); // Grup 1'i sonlandır
console.log("Bu tekrar birinci seviye log mesajıdır.");


! console.count()

-console.count() işlevinin kaç kez çağrıldığını yazdırır. Bir dize etiketi parametresi alır. Bir fonksiyonun kaç kez çağrıldığını saymak çok faydalıdır. Aşağıdaki örnekte console.count() yöntemi üç kez çalışacak

const func = () => {
  console.count('Function has been called')
}
func()
func()
func()

*Çıktı!
Function has been called: 1
Function has been called: 2
Function has been called: 3


! console.clear()

-console.clear() tarayıcı konsolunu temizler.





**************************************************
*/

