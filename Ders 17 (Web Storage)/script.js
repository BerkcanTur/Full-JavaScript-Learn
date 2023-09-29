/*
! HTML5 WEB STORAGE (DEPOLAMA)

-Web Storage, web tarayıcılarında yerel olarak veri depolamak için kullanılan bir JavaScript API'dir. İki ana türü vardır: 

*LocalStorage (kalıcı) ve SessionStorage (oturum süresince). Verileri anahtar-değer çiftleri şeklinde saklar ve tarayıcı tarafından sağlanır. Özellikle kullanıcı tercihleri ve küçük verilerin depolanması için kullanılır.

*Web Storage kullanmanın bazı avantajları şunlardır:

*Basit bir API kullanımı vardır, bu nedenle veri depolamak ve almak kolaydır.

*Veriler tarayıcıda saklandığı için sunucu ile gereksiz veri alışverişi yapmaz, böylece yüksek performanslıdır.

*Tarayıcı oturumu boyunca veya kalıcı olarak veri saklama seçeneği sunar.

*Verileri anahtar-değer çiftleri şeklinde saklar, bu da verilere kolayca erişim sağlar.

?Örnek olarak size bir hikaye anlatacağım.

Diyelim ki senin bir oyunun var ve bu oyunda seviye atladıkça kazandığın puanları kaydetmek istiyorsun. Her seviye atladığında, puanını bir yerde saklamalısın, öyle değil mi?

Web Storage işte tam olarak bu işe yarıyor. Web Storage, tarayıcının içinde bir çanta gibidir ve senin için şunları yapabilir:

Oyunun ilerledikçe kazandığın puanları çantaya koyabilirsin. Her seviye sonunda, bu puanları çantada saklayabilirsin.
Oyunu kapattıktan sonra veya bilgisayarını kapattıktan sonra bile bu puanlar çantada kalır, kaybolmaz.
Başka bir gün oyuna geri döndüğünde, çantandaki puanları tekrar çıkarabilirsin ve oyununa nereden kaldığın yerden devam edebilirsin.
Yani, Web Storage senin oyunun için bir hafıza gibidir. Oyunun ilerlemesini ve puanlarını saklamana yardımcı olur, böylece oyununun keyfini çıkartabilirsin!

! Peki LocalStorage ve SessionStorage olarak konuyu ayırırsak:

? LocalStorage:

LocalStorage, sanki oyuncunun oyun puanlarını özel bir defterde saklaması gibi düşünebilirsiniz. Yani, oyuncu her seviyeyi geçtikten sonra puanlarını bu özel deftere yazar. Bu defter her zaman oyuncunun yanındadır, yani oyuncu bilgisayarını kapatsa bile veya başka bir gün geri geldiğinde bu defterdeki puanlar hala oradadır. Bu nedenle, oyuncu her seferinde en son kaldığı yerden oyuna devam edebilir.


? SessionStorage:

SessionStorage ise daha geçici bir deftere benzer. Diyelim ki oyuncu oyunu oynamaya başladı ve her seviyeyi geçtikten sonra puanlarını bu deftere yazıyor. Ancak bu defter, oyuncu oyunu kapatıp tarayıcı penceresini kapatana kadar masada kalır. Yani, oyuncu oyunu kapatıp sonra geri geldiğinde bu defterdeki puanlar hala oradadır, ancak eğer tarayıcı penceresini kapatırsa veya başka bir gün geri geldiğinde bu defter boşalır. Bu nedenle, SessionStorage'da saklanan puanlar daha geçici ve oturum bazlıdır.


! HTML5 Web Depolama Nesneleri

HTML web depolama, istemcide veri depolamak için iki nesne sağlar:

! window.localStorage -
-Son kullanma tarihi olmayan verileri depolar

! window.sessionStorage 

-Bir oturum için veri depolar (tarayıcı sekmesi kapatıldığında veriler kaybolur) Çoğu modern tarayıcı Web Depolamayı destekler, ancak localStorage ve sessionStorage için tarayıcı desteğini kontrol etmek iyidir. Web Depolama nesneleri için mevcut yöntemleri görelim.


!Web Depolama Nesneleri:


! localStorage
-localStorage nesnesini görüntülemek için


! localStorage.clear()  
- localStrogedaki her şeyi kaldırmak için


! localStorage.setItem()
-Verileri localStorage'da depolamak için. Bir anahtar ve bir değer parametresi alır.


! localStorage.getItem() 
-localStorage'da depolanan verileri görüntülemek için. Parametre olarak bir anahtar alır.


! localStorage.removeItem()
-Depolanan öğeyi localStorage'dan kaldırmak için. Parametre olarak bir anahtar alır.


! localStorage.key()
-localStorage'da depolanan verileri görüntülemek için. Parametre olarak indeks alır.




?syntax
localStorage.setItem('key', 'value')



! localStorage

console.log(
    localStorage
)


! localStorage.setItem()

localStorage.setItem('name','berkcan')
console.log(
    localStorage
)



?Örnek:
* Veriyi LocalStorage'a kaydetme
localStorage.setItem("kullaniciAdi", "Ahmet");
localStorage.setItem("yas", "28");

* Veriyi LocalStorage'dan almak
var ad = localStorage.getItem("kullaniciAdi");
var yas = localStorage.getItem("yas");

* Alınan veriyi kullanma
console.log("Kullanıcı Adı: " + ad);
console.log("Yaş: " + yas);

* Bir veriyi LocalStorage'dan silme
localStorage.removeItem("yas");

* Tüm verileri LocalStorage'dan temizleme
* localStorage.clear();


?Örnek:

SON (JavaScript Object Notation), verileri metin tabanlı bir formatta temsil etmek için kullanılan bir standarttır. JSON verilerini LocalStorage'da saklamak için JSON.stringify() ile JSON formatına dönüştürüp JSON.parse() ile geri çevirebilirsiniz. İşte bir JSON örneği:

/ Bir kullanıcı nesnesini JSON formatına dönüştürme ve LocalStorage'a kaydetme

var kullanici = {
  ad: "Mehmet",
  soyad: "Arslan",
  yas: 28
};

var jsonVeri = JSON.stringify(kullanici);
localStorage.setItem("kullanici", jsonVeri);

/ LocalStorage'dan JSON verisini alıp geri dönüştürme
var alinanJsonVeri = localStorage.getItem("kullanici");
var alinanKullanici = JSON.parse(alinanJsonVeri);

/ JSON verisini kullanma
console.log("Kullanıcı Adı: " + alinanKullanici.ad);
console.log("Soyadı: " + alinanKullanici.soyad);
console.log("Yaşı: " + alinanKullanici.yas);


*Bu örnekte, önce bir kullanıcı nesnesi oluşturulur ve JSON.stringify() ile bu nesne JSON formatına dönüştürülür. Daha sonra localStorage.setItem() ile bu JSON verisi "kullanici" anahtarı altında LocalStorage'a kaydedilir.

*Daha sonra bu JSON verisi localStorage.getItem() ile alınır ve JSON.parse() ile JavaScript nesnesine dönüştürülür. Sonuç olarak, JSON formatındaki veriyi kullanabilir ve özelliklere erişebilirsiniz.

*Bu şekilde JSON verilerini LocalStorage'da saklayabilir ve gerektiğinde geri alabilirsiniz. Bu, özellikle web uygulamalarında kullanıcı tercihlerini veya küçük verileri depolamak için yaygın bir yöntemdir.






**************************************************
*/

