/*
! Promise,Fetch,Async/Wait



-Promiseler (Promises), JavaScript'te asenkron işlemleri daha düzenli ve yönetilebilir hale getirmek için kullanılan bir yapıdır. Promiseler, özellikle ağ istekleri (HTTP istekleri gibi), dosya okuma/yazma işlemleri veya zaman alıcı işlemler gibi asenkron operasyonlarla çalışırken çok faydalıdır. Promiseler, isteğe bağlı olarak tamamlanma veya başarısızlık sonucunu temsil eden nesnelerdir.

? Promiseler, temel olarak iki veya üç durumu (state) temsil eder:

Pending (Bekleme): Promise henüz tamamlanmamıştır, işlem devam ediyor demektir.

Fulfilled (Gerçekleşti): Promise başarıyla tamamlandı ve sonuç döndü.

Rejected (Reddedildi): Promise başarısız oldu ve bir hata oluştu.


?Örneği hikayeleştirerek anlatalım.

-Hayal et, senin bir arkadaşın var, adı Ali. Ali, sana bir hediye vermek istiyor, ama bu hediye biraz zaman alabilir. Ali sana bir "söz veriyor" ki, "bir süre sonra sana hediye getireceğim." Bu, Ali'nin bir "Promise" verdiği anlamına gelir.

Şimdi, Ali sözünü tuttuğunda (hediye getirdiğinde), sen bu hediyeyi alabilirsin. Bu, Promisenin "başarıyla gerçekleştiği" (fulfilled) anlamına gelir.

Ancak, bazen Ali'nin planları değişebilir veya bir sorunla karşılaşabilir. Bu durumda, Ali sana sözünü tutamayacağını söyler ve sen bu durumu kabul edersin. Bu, Promisenin "reddedildiği" (rejected) anlamına gelir.

İşte JavaScript'teki bir Promise kullanımıyla bu hikayeyi bağdaştıralım:


// Ali sana bir hediye verme sözü veriyor (Promise oluşturma)
var hediyePromise = new Promise(function(resolve, reject) {
  // Ali hediye getirebilir (Promise'i "resolve" ile tamamlar)
  // veya hediye getiremez (Promise'i "reject" ile reddeder)
  
  var hediyeGetir = true; // Veya false yaparak farklı sonuçları gözlemleyebilirsin
  
  if (hediyeGetir) {
    resolve("İşte hediye!"); // Hediye getirildi
  } else {
    reject("Üzgünüm, hediye getiremiyorum."); // Hediye getirilemedi
  }
});

// Hediye sözü tutulduğunda (Promise fulfilled)
hediyePromise.then(function(sonuc) {
  console.log(sonuc); // İşte hediye!
}).catch(function(hata) {
  console.log(hata); // Üzgünüm, hediye getiremiyorum.
});


*Bu örnekte, hediyePromise, Ali'nin verdiği sözü temsil eden bir Promise'dır. Eğer Ali hediye getirebilirse, Promise "resolve" ile tamamlanır ve hediye sonucu alınır. Eğer getiremezse, Promise "reject" ile reddedilir ve bir hata mesajı alınır.

*Promiseler, asenkron işlemleri daha düzenli ve işleme uygun bir şekilde yönetmemize yardımcı olur. Ali'nin sözü tutup tutmama ihtimaline karşı hazırlıklı oluruz.

*Yani, then ve catch, bir Promise tamamlandığında veya reddedildiğinde çalışacak işlevleri belirtmek için kullanılır. Bu sayede asenkron işlemleri uygun şekilde ele alabilir ve sonuçları işleyebiliriz.


?Promise çok iyi anlamak için önce callback mantığını anlayalım. Aşağıdaki callback örneklerini görelim. Aşağıdaki kod bloklarında, callback ve promise arasındaki farkları fark edeceksiniz.


Callback:
Callback'ler, işlem tamamlandığında çalıştırılacak bir işlevi işaret eden işlevlerdir.
Callback'ler genellikle sıralı bir şekilde kullanılır ve bir işlem tamamlandığında bir sonraki adımı belirtmek için bir sonraki geri çağrı işlevi kullanılır.
Callback'ler, "callback hell" olarak adlandırılan karmaşık ve zor anlaşılır kod yapılarına yol açabilirler, özellikle çok sayıda asenkron işlem içeren kodlarda.


function dosyaOku(path, callback) {
  fs.readFile(path, 'utf8', function (err, data) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}


! Promise
Promise'ler, daha düzenli ve okunabilir asenkron kod yazmanıza yardımcı olmak için tasarlanmış bir yapıdır.
Bir işlemi başlatırken bir Promise nesnesi döndürürsünüz ve işlem tamamlandığında ya başarılı sonuç (resolve) ya da hata (reject) döndürülür.
Promise'ler, .then() ve .catch() gibi yöntemlerle işlem sonuçlarını ele almanıza ve ardışık işlemleri zincirlemeye olanak tanır.
Modern JavaScript'te async/await kullanarak Promise'leri daha rahat kullanabilirsiniz, bu da kodun daha okunabilir ve yönetilebilir olmasına yardımcı olur.


?Örnek:

function dosyaOku(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

?Özetle, Promise'ler callback'lere göre daha esnek ve okunabilir bir yapı sunarlar ve callback hell gibi kod karmaşıklıklarını önlerler. Bu nedenle modern JavaScript kodlarında Promise ve async/await gibi yaklaşımlar daha yaygın olarak kullanılmaktadır.





! FETCH API

Fetch API, web tarayıcılarında ve JavaScript tarafından sunulan bir dizi yöntem ve arayüzlerden oluşan bir web tarayıcı API'sidir. Fetch API, sunucularla veri alışverişi yapmak için kullanılır ve özellikle HTTP istekleri yapma ve alıtırmak için tasarlanmıştır. Bu API, XMLHttpRequest gibi eski yöntemlere bir alternatif sunar ve modern web uygulamalarında daha yaygın olarak kullanılır.

Fetch API'nin temel özellikleri ve kullanımı şu şekildedir:

Veri Alışverişi: Fetch API, sunuculara HTTP istekleri göndermek ve sunuculardan veri almak için kullanılır. GET, POST, PUT, DELETE gibi HTTP yöntemlerini kullanabilirsiniz.

Promise Tabanlı: Fetch API, Promise tabanlı bir yapıya sahiptir. Bu nedenle isteklerinizin sonuçlarını .then() ve .catch() yöntemleri ile ele alabilirsiniz.

Header Kontrolü: İsteklerinizin başlık bilgilerini (header) özelleştirebilirsiniz. Bu, özel kimlik doğrulama veya isteğin nasıl işleneceğini sunucuya iletebilir.

JSON Veri İşleme: Fetch API, JSON formatındaki verileri kolayca işleyebilir ve JavaScript nesnelerine dönüştürebilir.



?İşte basit bir Fetch API kullanım örneği:


fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP error ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Bir hata oluştu: ' + error);
  });








? FETCH API HİKAYESİ

Bir gün, web tarayıcımızla internet dünyasına güzel bir yolculuk yapmaya karar verdik. İnternet dünyasında, her türlü bilgi ve veriyi bulabiliriz, ancak bu bilgilere nasıl ulaşacağımızı ve onları getireceğimizi öğrenmemiz gerekiyordu. İşte bu noktada Fetch API devreye girdi.

Fetch API, bize internet dünyasına istediğimiz gibi istekler (requests) göndermemizi ve verileri getirmemizi sağlar. Düşünün ki bir kitapçıdan kitap siparişi vermek istiyoruz.

İstek Göndermek (Fetch): Önce kitapçıya gideriz (yani internet dünyasına bağlanırız) ve kitap siparişimizi vermek için bir mektup (request) yazarız. Bu mektubu kitapçıya (sunucuya) göndermemiz gerekiyor. İşte bu noktada Fetch API yardımımıza koşar. O, mektubu alır ve kitapçıya gönderir.

Cevap Almak (Response): Kitapçı siparişi alır, kitabı bulur ve bize geri döner. Bu geri dönüşü almak için yine Fetch API kullanırız. Fetch API, kitapçının bize nasıl yanıt verdiğini kontrol eder.

Veriyi İşlemek: Sonunda, kitapçının bize verdiği yanıtı açarız ve içinde ne olduğunu görürüz. Eğer kitapçı yanıtı hata içermiyorsa, içindeki bilgiyi kullanabiliriz. Örneğin, kitabın adını ve yazarını öğreniriz.

İşte Fetch API, internet dünyasında bilgi ve veri alışverişi yapmamıza yardımcı olan bir araç gibidir. İstediğimiz verileri almak için onu kullanabiliriz ve bu sayede internet dünyasının büyük hazine sandığından faydalanabiliriz. Ayrıca, Fetch API sayesinde yanıtları kontrol edebilir ve hatalarla başa çıkabiliriz.

Yani, Fetch API, internet dünyasında bilgi almak için bize bir tür büyülü postacı gibidir. Ona nereye gitmek istediğimizi söyleriz, o da bize istediğimiz şeyi getirir. İşte bu kadar basit! 😊



! Async ve Await


Async ve Await, promise yerine getirmenin zarif bir yoludur. Anlaşılması kolay ve yazması temiz.

async ve await, JavaScript'te asenkron işlemleri daha okunaklı hale getirmek ve yönetmek için kullanılan anahtar kelimelerdir. Bir işlevi async olarak tanımlamak, işlemin asenkron olduğunu belirtir. await ise asenkron bir işlemi beklemek için kullanılır ve yalnızca async işlevler içinde kullanılabilir.


?Örnek:

// Asenkron bir işlevi tanımla
async function bekleyenIslem() {
  console.log("Başlangıç");

  // Asenkron bir işlemi beklemek için await kullan
  await new Promise(resolve => setTimeout(resolve, 2000)); // 2 saniye bekle

  console.log("Bitiş");
}

// Bekleyen işlemi çağır
bekleyenIslem();
console.log("Çağrı sona erdi");


! Yorum:
Bu örnekte bekleyenIslem adlı async işlevi tanımlıyoruz. Bu işlev içinde await kullanarak 2 saniye boyunca bekliyoruz. İlk olarak "Başlangıç" yazısı görüntülenir, ardından 2 saniye bekledikten sonra "Bitiş" yazısı görüntülenir ve son olarak "Çağrı sona erdi" yazısı görüntülenir. await ifadesi, asenkron bir işlem tamamlandığında devam edilmesini sağlar.

Bu örnek, asenkron işlemleri daha iyi kontrol etmek ve sıralamak için async ve await kullanmanın temel bir örneğini göstermektedir.
*/

