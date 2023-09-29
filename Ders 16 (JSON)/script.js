/*

! JSON/JavaScript Object Notation 
!(JavaScript Nesne Kavramı)


- JSON (JavaScript Object Notation), verileri metin tabanlı bir formatta temsil etmek için kullanılan hafif ve yaygın bir veri değişim formatıdır. JSON, anahtar-değer çiftlerinden oluşan bir veri yapısına sahiptir ve sıklıkla verilerin aktarımı ve depolanması için kullanılır.


?Örnek:

{
  "ogrenci": {
    "ad": "Ahmet",
    "soyad": "Yılmaz",
    "yas": 21,
    "notlar": [85, 90, 78]
  },
  "okul": "ABC Üniversitesi",
  "bolum": "Yazılım Mühendisliği"
}

*******************************

*JSON, verilerin farklı uygulamalar veya platformlar arasında paylaşılmasını kolaylaştırır. Özellikle web uygulamalarında, verileri bir sunucudan istemciye iletmek veya tarayıcı tarafında kullanmak için yaygın olarak kullanılır. JSON, verileri insanlar tarafından okunabilir bir formatta temsil ettiği için de oldukça popülerdir.

?Yukarıdaki JSON örneği, normal bir nesneden çok farklı değildir. O zaman, fark nedir? Aradaki fark, bir JSON nesnesinin anahtarının çift tırnaklı olması veya bir dize olması gerektiğidir. JavaScript Object ve JSON, JSON'u Object ve Object'i JSON olarak değiştirebileceğimize çok benzer.




! JSON'u JavaScript Nesnesine Dönüştürme

-Çoğunlukla JSON verilerini HTTP yanıtından veya bir dosyadan alırız, ancak JSON'u bir dize olarak saklayabiliriz ve gösterim amacıyla Object olarak değiştirebiliriz. JavaScript'te JSON anahtar sözcüğü parse() ve stringify() yöntemlerine sahiptir. JSON'u bir nesneye dönüştürmek istediğimizde, JSON.parse() kullanarak JSON'u ayrıştırırız. Nesneyi JSON olarak değiştirmek istediğimizde JSON.stringify() kullanırız.


?Örnek:

/ JSON formatında bir metin dizesi
var jsonMetin = '{"ogrenci": "Ahmet", "yas": 21, "bolum": "Bilgisayar Mühendisliği"}';

/ JSON.parse() ile JSON dizesini JavaScript nesnesine dönüştürme
var ogrenciNesnesi = JSON.parse(jsonMetin);

/ JavaScript nesnesini kullanma
console.log(ogrenciNesnesi.ogrenci); // "Ahmet"
console.log(ogrenciNesnesi.yas); // 21
console.log(ogrenciNesnesi.bolum); // "Bilgisayar Mühendisliği"

! JSON.parse Neden kullanılır ?

-Diyelim ki bir web uygulamanız var ve bu uygulama kullanıcılardan bir form doldurmalarını istiyor. Formdaki verileri almak ve işlemek istiyorsunuz. Kullanıcı formu doldurduğunda, bu veriler sunucuya gönderilir ve sunucu bu verileri JSON formatında bir yanıt olarak geri döner. Bu JSON yanıtını JavaScript ile işlemek için JSON.parse() kullanabilirsiniz.


?Örnek:

{
  "kullaniciAdi": "ahmet123",
  "email": "ahmet@example.com",
  "yas": 28
}

var jsonMetin = '{"kullaniciAdi": "ahmet123", "email": "ahmet@example.com", "yas": 28}';
var kullaniciBilgileri = JSON.parse(jsonMetin);

?kullaniciBilgileri şimdi bir JavaScript nesnesi ve bu nesneyi kullanarak kullanıcının adını, e-posta adresini veya yaşını elde edebilirsiniz:

console.log(kullaniciBilgileri.kullaniciAdi); // "ahmet123"
console.log(kullaniciBilgileri.email); // "ahmet@example.com"
console.log(kullaniciBilgileri.yas); // 28

?Yani, JSON.parse() kullanarak JSON verilerini JavaScript nesnelerine dönüştürmek, sunucudan gelen verileri işlemek ve bu verileri web uygulamanızda kullanmak için yaygın bir yöntemdir. JSON, verilerin taşınması ve paylaşılması için kullanılan bir standart olduğu için bu dönüşüm işlemi oldukça önemlidir.



! Nesneyi JSON'a Dönüştürme

-Bir JavaScript nesnesini JSON formatına dönüştürmek için JSON.stringify() fonksiyonunu kullanabilirsiniz. Bu fonksiyon, JavaScript nesnesini JSON formatındaki bir metin dizesine dönüştürür. İşte bir örnek:


?Örnek:

/ Bir JavaScript nesnesi
var kullanici = {
  ad: "Ahmet",
  soyad: "Yılmaz",
  yas: 28
};

/ JSON.stringify() ile JavaScript nesnesini JSON formatına dönüştürme
var jsonMetin = JSON.stringify(kullanici);

/ JSON formatındaki metin dizesini görüntüleme
console.log(jsonMetin);

*Bu örnekte, kullanici adında bir JavaScript nesnesi tanımlanır. Ardından JSON.stringify() fonksiyonu kullanılarak bu nesne JSON formatına dönüştürülür ve jsonMetin adındaki değişkene atanır. jsonMetin artık bir JSON formatındaki metin dizesini içerir.


*Eğer console.log(jsonMetin) satırını çalıştırırsanız, çıktıda şuna benzer bir JSON metni göreceksiniz:


{"ad":"Ahmet","soyad":"Yılmaz","yas":28}


*Bu JSON metni, JavaScript nesnesinin JSON formatına dönüştürülmüş hali olduğunu gösterir. JSON formatındaki bu metin dizesini, veriyi sunuculara göndermek veya başka bir uygulama veya servisle veri alışverişi yapmak için kullanabilirsiniz.


!JSON.stringify ile Filtre Dizisi Kullanma

-
JSON.stringify() ile bir JavaScript nesnesini JSON formatına dönüştürürken, bir filtre işlevi kullanarak belirli özellikleri seçebilirsiniz. Bu filtre işlevi, JSON'a dönüştürülen nesnenin her özelliği için çağrılır ve hangi özelliklerin JSON metnine dahil edilip edilmeyeceğini belirlemenizi sağlar.

JSON.stringify()'ın üçüncü parametresi olarak kullanabileceğiniz bir filtre işlevi eklemek için aşağıdaki gibi bir yöntem kullanabilirsiniz:

var nesne = {
  ad: "Ahmet",
  soyad: "Yılmaz",
  yas: 28,
  email: "ahmet@example.com"
};

/ JSON.stringify() ile filtre işlevi kullanarak belirli özellikleri seçme
var jsonMetin = JSON.stringify(nesne, function(key, value) {
  / "yas" özelliğini dahil etme
  if (key === "yas") {
    return undefined;
  }
  return value; // Diğer özellikleri dahil et
});

console.log(jsonMetin);

*Yukarıdaki örnekte, JSON.stringify()'ın ikinci argümanı olarak bir işlev tanımlanmıştır. Bu işlev, her özellik için çağrılır. İşlev, "yas" özelliği için undefined döndürerek bu özelliğin JSON metnine dahil edilmemesini sağlar. Diğer özellikler ise işlem yapılmadan JSON metnine dahil edilir.

Çıktı olarak, "yas" özelliği JSON metninde yer almayacaktır:

{"ad":"Ahmet","soyad":"Yılmaz","email":"ahmet@example.com"}

*Bu şekilde, belirli özellikleri filtrelemek veya dönüşüm sırasında özel bir işlem yapmak için JSON.stringify()'ı kullanabilirsiniz.


?Örnek:

var kitap = {
  baslik: "JavaScript ile Programlama",
  yazar: "John Doe",
  yayinevi: "ABC Yayınları",
  yayinYili: 2022,
  sayfaSayisi: 350
};

! JSON.stringify() ile filtre işlevi kullanarak sadece belirli özellikleri seçme
! Sadece "baslik" ve "yazar" özelliklerini dahil etme

var jsonMetin = JSON.stringify(kitap, function(key, value) {
  
  if (key === "baslik" || key === "yazar") {
    return value;
  }
  return undefined; // Diğer özellikleri dahil etme
});

console.log(jsonMetin);


?Çıktı !!

{"baslik":"JavaScript ile Programlama","yazar":"John Doe"}

*/


