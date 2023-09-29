/*
! DOM (Document Object Model)

! Dom nedir?


-"DOM" veya "Document Object Model," bir web sayfasının yapısını temsil eden ve tarayıcı tarafından kullanılan bir programlama arayüzünü ifade eder. DOM, HTML, XHTML veya XML gibi belge tabanlı dillerde kullanılır ve bu belgelerin tarayıcılar tarafından işlenmesini, erişilmesini ve değiştirilmesini sağlar.


*Bir HTML belgesinin omurgası etiketlerdir.

Document Object Model (DOM)’ a göre, her HTML etiketi bir nesnedir. İç içe geçmiş etiketlere, çevreleyen etiketin “alt öğeleri” denir.

Bir etiketin içindeki metin de bir nesnedir…

Tüm bu nesnelere JavaScript kullanılarak erişilebilir.

! DOM ile neler yapılabilir ?

-Web Sayfası İçeriği Erişimi: DOM ile bir web sayfasının tüm içeriğine erişebilirsiniz. Örneğin, başlıklar, paragrafler, bağlantılar, resimler ve diğer HTML öğelerine ulaşabilirsiniz.

İçerik Değiştirme: DOM üzerinden web sayfasındaki içeriği dinamik olarak değiştirebilirsiniz. Metinleri güncelleyebilir, yeni HTML öğeleri ekleyebilir veya mevcut öğeleri kaldırabilirsiniz.

Olay İşleme: DOM ile kullanıcı etkileşimlerini (tıklamalar, fare hareketleri, tuş vuruşları vb.) dinleyebilir ve bu olaylara tepki verebilirsiniz. Bu, kullanıcı arayüzlerini etkileşimli hale getirmenize olanak tanır.

Form İşleme: Web formlarıyla etkileşim kurabilir ve kullanıcıların veri girişi yapmasını sağlayabilirsiniz. Form verilerini toplayabilir, doğrulayabilir ve sunucuya iletebilirsiniz.

Animasyonlar: DOM, HTML öğelerini hareket ettirmek veya stil özelliklerini değiştirerek animasyonlar oluşturmanıza olanak tanır.

AJAX İşlemleri: DOM kullanarak XMLHttpRequest veya Fetch API gibi teknolojileri kullanarak sunucuyla veri alışverişi yapabilirsiniz. Bu, web sayfasının dinamik içeriğini güncellemek için kullanılır.

CSS Değişiklikleri: DOM üzerinden web sayfasının stil özelliklerini değiştirebilirsiniz. Örneğin, metin rengi, arka plan rengi, yazı tipi vb. gibi özellikleri değiştirebilirsiniz.

Element Ekleme ve Kaldırma: DOM kullanarak yeni HTML öğeleri ekleyebilir veya mevcut öğeleri kaldırabilirsiniz. Bu, sayfa içeriğini dinamik olarak oluşturmanıza olanak tanır.

Sayfa Gezintisi: DOM ile kullanıcıyı farklı sayfalara yönlendirebilir veya sayfa geçişleri sırasında veri saklayabilirsiniz.

Veri Depolama: DOM ile yerel veri depolama yöntemleri kullanarak (localStorage, sessionStorage) istemci tarafında veri saklayabilir ve yönetebilirsiniz.

DOM, web geliştirme işlemlerini büyük ölçüde kolaylaştıran ve web sayfalarını etkileşimli hale getiren güçlü bir araçtır. JavaScript gibi dillerle DOM ile etkileşim kurarak web sayfalarınızı özelleştirebilir ve kullanıcı deneyimini geliştirebilirsiniz.




! Dom Ağacı

?Window ( En Tepe Noktası)
Document (Belge)
DocumentType (Belge Türü)
Element (Öğe)
Head (Başlık)
Meta (Meta Etiketi)
Title (Başlık Etiketi)
Body (Gövde)
Header (Üst Bilgi)
Main (Ana İçerik)
Section (Bölüm)
Paragraph (Paragraf)
Image (Resim)
Footer (Alt Bilgi)


?Bu sıralama, bir HTML belgesinin genel yapısını temsil eder.


*Matruşka bebeklerine benzetilebilir.


?Örnek:


let test = document.getElementById("isim")

console.log(isim)



! DOM MANİPÜLASYONU


! HTML elementlerinde gezinmek


! getElementsByTagName()

-getElementsByTagName() bir JavaScript DOM (Document Object Model) yöntemidir ve bir belge içinde belirli bir HTML etiketine sahip tüm öğeleri toplamak için kullanılır. Bu yöntem, bir etiket adını (örneğin "div", "p", "a" vb.) argüman olarak alır ve belgedeki tüm bu etikete sahip öğeleri bir HTMLCollection nesnesi olarak döndürür. Bu, daha sonra bu öğelere erişmenizi ve işlem yapmanızı sağlar.


?Örnek:

// HTML belgesindeki tüm <p> öğelerini al
let paragraphs = document.getElementsByTagName("p");

// paragraphs bir HTMLCollection nesnesidir, bu yüzden döngü kullanarak içeriklerine erişebiliriz
for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i].textContent); // Her <p> öğesinin içeriğini yazdır
}

*Yukarıdaki örnekte, getElementsByTagName() yöntemi kullanılarak belgedeki tüm <p> (paragraf) öğeleri bir koleksiyon olarak alınır. Daha sonra bir döngü kullanarak her bir <p> öğesinin içeriği textContent özelliği aracılığıyla alınır ve konsola yazdırılır.

Bu yöntem, belirli bir etikete sahip tüm öğeleri seçmek ve bunlarla çalışmak için sıkça kullanılır.


! Sınıf adına göre elementleri almak

! getElementsByClassName() metodu

-Bir belge içinde belirli bir CSS sınıfına sahip tüm öğeleri seçmek için kullanılır. Bu yöntem, bir sınıf adını (örneğin "my-class" gibi) argüman olarak alır ve bu sınıfa sahip tüm öğeleri bir HTMLCollection nesnesi olarak döndürür. Bu, daha sonra bu öğelere erişmenizi ve işlem yapmanızı sağlar.



/syntax
document.getElementsByClassName('classname')


?Örnek:

// HTML belgesindeki tüm "my-class" adlı CSS sınıfına sahip öğeleri al
let elements = document.getElementsByClassName("my-class");

// elements bir HTMLCollection nesnesidir, bu yüzden döngü kullanarak içeriklerine erişebiliriz
for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].textContent); // Her öğenin içeriğini yazdır
}


*Yukarıdaki örnekte, getElementsByClassName() yöntemi kullanılarak belgedeki tüm "my-class" adlı CSS sınıfına sahip öğeler bir koleksiyon olarak alınır. Daha sonra bir döngü kullanarak her bir öğenin içeriği textContent özelliği aracılığıyla alınır ve konsola yazdırılır.

Bu yöntem, belirli bir CSS sınıfına sahip öğeleri seçmek ve bunlarla çalışmak için sıkça kullanılır. Özellikle belirli bir stil veya davranışı paylaşan öğeleri seçmek için kullanışlıdır.




! ıd'ye göre elementi almak

! getElementsById()  metodu

- getElementsById() tek bir HTML elementine yönelir. Id'yi # olmadan bir argüman olarak geçiririz.


/syntax
document.getElementById('id')


?Örnek:

// HTML belgesindeki "my-element" adlı id'ye sahip öğeyi al
let element = document.getElementById("my-element");

// element bir DOM öğesidir, bu yüzden özelliklerine ve içeriğine erişebiliriz
console.log(element.textContent); // Öğenin içeriğini yazdır
element.style.color = "red"; // Öğenin rengini değiştir



! querySelector yöntemi kullanarak elementleri almak

! querySelector() metodu


- document.querySelector yöntemi etiket adı, kimlik veya sınıf adına göre HTML elementlerini seçebilir.

?CSS Sınıfı Seçici:
let element = document.querySelector(".my-class");


? ID Seçici:
let element = document.querySelector("#my-id");

? Etiket Adı Seçici:
let element = document.querySelector("p"); // Birinci paragrafı seçer

? Karmaşık Seçiciler:
let element = document.querySelector("div.my-class"); // <div class="my-class"> öğesini seçer.


? Pseudo-Sınıf Seçicileri:
let element = document.querySelector("a:hover"); // İlk üzerine gelinen bağlantıyı seçer


? Örnek:

// HTML belgesindeki ilk <p> öğesini seçin
let firstParagraph = document.querySelector("p");

// Seçilen öğenin içeriğini yazdırın
console.log(firstParagraph.textContent);

// CSS seçici ile öğe seçme
let elementWithClass = document.querySelector(".my-class");
let elementWithId = document.querySelector("#my-id");


*querySelector() yöntemi, belirli bir öğeyi seçmek için kullanışlı bir yöntemdir ve CSS seçicilerini kullanarak belge içeriğine erişmenizi sağlar. İlk eşleşen öğeyi döndürdüğü için yalnızca bir öğeyi seçmek istediğinizde kullanılır. Eğer birden fazla eşleşen öğe seçmek isterseniz, querySelectorAll() yöntemini kullanabilirsiniz.


! querySelectorAll() 
-querySelectorAll() yöntemi, querySelector() ile benzerdir, ancak farkı tüm eşleşen öğeleri seçmesidir, sadece ilk eşleşeni değil. Dönen NodeList nesnesi, NodeList'in özelliklerini ve yöntemlerini kullanarak bu öğelere erişmenizi ve işlem yapmanızı sağlar.

// HTML belgesindeki tüm <p> öğelerini seçin
let allParagraphs = document.querySelectorAll("p");

// Tüm paragrafların içeriğini yazdırın
allParagraphs.forEach(function(paragraph) {
    console.log(paragraph.textContent);
});

// CSS sınıfı seçici ile öğeleri seçme
let elementsWithClass = document.querySelectorAll(".my-class");

// ID seçici ile öğeleri seçme
let elementsWithId = document.querySelectorAll("#my-id");




! Style özelliğini dom ile kullanmak


-HTML ve JavaScript kullanarak bir DOM öğesine stil eklemek için style özelliğini kullanabilirsiniz. İşte basit bir örnek:

<div id="myDiv">Bu bir div öğesidir.</div>
<script>
        // JavaScript ile DOM öğesini seçin
        var myDiv = document.getElementById("myDiv");

        // Stil özelliğini kullanarak arka plan rengini değiştirin
        myDiv.style.backgroundColor = "lightblue";

        // Stil özelliğini kullanarak metin rengini değiştirin
        myDiv.style.color = "red";

        // Stil özelliğini kullanarak yazı tipini ve boyutunu değiştirin
        myDiv.style.fontFamily = "Arial, sans-serif";
        myDiv.style.fontSize = "20px";
</script>

*Bu örnekte, HTML'de bir <div> öğesi oluşturduk ve JavaScript kullanarak bu öğenin style özelliğini kullanarak arka plan rengini, metin rengini, yazı tipini ve boyutunu değiştirdik. Bu, DOM yapısında basit bir şekilde stil özelliğini nasıl kullanabileceğinizi gösterir.



! Dinamik Element Oluşturma

-JavaScript kullanarak dinamik olarak HTML öğeleri oluşturabilir ve bu öğeleri sayfanıza ekleyebilirsiniz. Bu, web sayfanızın içeriğini dinamik bir şekilde güncellemek ve kullanıcı etkileşimlerine yanıt vermek için çok kullanışlıdır. İşte bir örnek:

?Örnek:

let li = document.createElement('li');
li.className = 'list'
li.setAttribute('placeholder','lütfen')
const text = document.createTextNode('Ben Berkcan Tür')
li.appendChild(text)
console.log(text)



?Örnek:

<script>
        // Butonu seçin
        var createButton = document.getElementById("createButton");

        // Container divini seçin
        var container = document.getElementById("container");

        // Butona tıklanıldığında yeni bir div öğesi oluşturan fonksiyon
        createButton.addEventListener("click", function () {
            // Yeni bir div öğesi oluşturun
            var newDiv = document.createElement("div");

            // Div'e içerik ve stil ekleyin
            newDiv.textContent = "Bu yeni bir div öğesidir.";
            newDiv.style.backgroundColor = "lightblue";
            newDiv.style.padding = "10px";

            // Yeni div'i container'a ekleyin
            container.appendChild(newDiv);
        });
    </script>


    let paragraf = document.getElementById('paragraf');

text = document.createTextNode('Ben Berkcan');
paragraf.appendChild(text)
paragraf.style.color = "black";
paragraf.style.backgroundColor = "yellow";
paragraf.style.display = "inline-block";
console.log(text)


! Element silmek

-Bir DOM öğesini silmek için aşağıdaki adımları izleyebilirsiniz:

Öncelikle silmek istediğiniz DOM öğesini bulmalısınız. Bu, document.getElementById, document.querySelector, veya başka bir DOM seçici yöntemi kullanarak yapılabilir. 


?Örneğin, bir öğeyi bir ID ile seçmek için:
let element = document.getElementById("myElementId");



?veya bir sınıf adı ile seçmek için:
let element = document.querySelector(".myElementClass");



?Ardından, seçilen öğeyi remove yöntemi kullanarak silin:
element.remove();



?Örneğin, bir öğeyi ID ile seçip silmek için aşağıdaki kodu kullanabilirsiniz:
let element = document.getElementById("myElementId");
element.remove();




! Elementleri Yer Değiştirmek

-Bu yöntem, belirli bir elementi başka bir elementle değiştirmek için kullanılır. İşte replaceChild yöntemini kullanarak DOM elementlerini yer değiştirme örneği:


?Örnek:
// Değiştirilecek elementleri seçin
let yeniElement = document.createElement("p"); // Yeni element
yeniElement.textContent = "Bu yeni bir paragraf elementi.";

let eskiElement = document.getElementById("eski-element"); // Değiştirilecek olan element

// Eski elementi ve yerine koyacağınız yeni elementi içeren üst elementi alın
let üstElement = eskiElement.parentElement;

// replaceChild yöntemi ile eski elementi yeni element ile değiştirin
üstElement.replaceChild(yeniElement, eskiElement);


?Örnek:

<script>
    document.getElementById("myBtn").addEventListener("click", function() {
      let sonuc = document.querySelector(".sonuc").innerHTML
    });
</script>


! Inner HTML

-Bir ebeveyn elemana tamamen yeni bir child içeriği eklemek veya değiştirmek istediğimizde innerHTML özelliğini kullanırız. Atadığımız değer HTML elemanlarından oluşan bir dizi olacaktır.









! EGZERSİZ VE ÖDEVLER Level 1

index.html dosyası oluşturun ve yukarıdaki gibi dört p elemanı koyun: Etiket adını kullanarak document.querySelector(tagname) ile ilk paragrafı alın
id'lerine göre document.querySelector('#id') kullanarak her bir paragrafı alın
Etiket adlarına göre document.querySelectorAll(tagname) kullanarak tüm p elemanlarını nodeList olarak alın
nodeList içinde dolaşın ve her paragrafın metin içeriğini alın
Dördüncü paragrafta metin içeriği olarak Fourth Paragraph yerleştirin.
Farklı özellik ayarlama yöntemlerini kullanarak tüm paragraflar için id ve sınıf özelliklerini ayarlayın


! EGZERSİZ VE ÖDEVLER Level 2

JavaScript kullanarak her paragrafın stilini değiştirin (örn. renk, arka plan, sınır, yazı tipi boyutu, yazı tipi ailesi)
Tüm paragrafları seçin ve her elemanın içinde dolaşın ve ilk ve üçüncü paragrafı yeşil, ikinci ve dördüncü paragrafı kırmızı renkte verin
Her paragrafın içeriğini, id'sini ve sınıfını ayarlayın





******************************************

*/






