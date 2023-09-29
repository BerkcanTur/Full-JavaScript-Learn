/*
! EVENTS (OLAYLAR)


! Events Listeners

? Mouse Events kavramı

-Ortak HTML olayları: tıklama, değişiklik, fare üzerine gelme, fareyi elementin üzerinden çıkarma, tuşa basma, tuştan el çekme, yükleme.

-Herhangi bir DOM nesnesine olay dinleyici yöntemi ekleyebiliriz. HTML öğelerinde farklı olay türlerini dinlemek için addEventListener() yöntemini kullanırız. addEventListener() yöntemi, bir olay dinleyicisi ve geri çağırma işlevi olmak üzere iki argüman alır.

?Örnek:

selectedElement.addEventListener("eventlistner", function (e) {
    // olaydan sonra olmasını istediğiniz aktivite burada olacak
});
// or

selectedElement.addEventListener("eventlistner", (e) => {
    // olaydan sonra olmasını istediğiniz aktivite burada olacak
});


! Tıklama
Bir öğeye olay dinleyicisi eklemek için önce öğeyi seçer, ardından addEventListener() yöntemini ekleriz. Olay dinleyicisi, olay türünü ve geri çağırma işlevlerini argüman olarak alır.

Aşağıdaki örnek tıklama türü olayın bir örneğidir.


?Örnek:

<!DOCTYPE html>
<html>
    <head>
        <title>Document Object Model</title>
    </head>

    <body>
        <button>Click Me</button>

        <script>
            const button = document.querySelector("button");
            button.addEventListener("click", (e) => {
                console.log("e gives the event listener object:", e);
                console.log("e.target gives the selected element: ", e.target);
                console.log(
                    "e.target.textContent gives content of selected element: ",
                    e.target.textContent
                );
            });
        </script>
    </body>
</html>


! Çift tıklama

Bir öğeye olay dinleyicisi eklemek için önce öğeyi seçeriz, ardından addEventListener() yöntemini ekleriz. Olay dinleyicisi, olay türünü ve geri çağırma işlevlerini argüman olarak alır.



! Olay Listesi

click - eleman tıklandığında
dblclick - eleman çift tıklandığında
mouseenter - fare noktası öğeye girdiğinde
mouseleave - fare işaretçisi öğeden ayrıldığında
mousemove - fare işaretçisi öğe üzerinde hareket ettiğinde
mouseover - fare işaretçisi öğe üzerinde hareket ettiğinde
mouseout - fare işaretçisi öğeden dışarı çıktığında
input - değer giriş alanına girildiğinde
change - giriş alanında değer değiştiğinde
blur - öğe odaklanmadığında
keydown - bir tuş düştüğünde
keyup - bir anahtar bittiğinde
keypress - herhangi bir tuşa bastığımızda
onload - tarayıcı bir sayfayı yüklemeyi bitirdiğinde
Yukarıdaki kod örneğindeki olay türünü değiştirerek yukarıdaki olay türlerini test edebilirsiniz.



! Bir input öğesinden değer alma
Genellikle form doldururuz ve formlar verileri işler. Form alanları, girdi HTML öğesi kullanılarak oluşturulur. İki girdi alanı, bir düğme ve bir p etiketi kullanarak bir kişinin vücut kitle indeksini hesaplamamıza izin veren küçük bir uygulama oluşturalım.


?Örnek:

<!DOCTYPE html>
<html>
    <head>
        <title>Document Object Model:30 Days Of JavaScript</title>
    </head>

    <body>
        <h1>Body Mass Index Calculator</h1>

        <input type="text" id="mass" placeholder="Mass in Kilogram" />
        <input type="text" id="height" placeholder="Height in meters" />
        <button>Calculate BMI</button>

        <script>
            const mass = document.querySelector("#mass");
            const height = document.querySelector("#height");
            const button = document.querySelector("button");

            let bmi;
            button.addEventListener("click", () => {
                bmi = mass.value / height.value ** 2;
                alert(`your bmi is ${bmi.toFixed(2)}`);
                console.log(bmi);
            });
        </script>
    </body>
</html>


! input olayı ve change olayı

Yukarıdaki örnekte, iki girdi alanından verileri düğmeye tıklayarak almayı başardık. Ancak, düğmeye tıklamadan değer almak isterseniz, girdi alanına odaklandığında verileri hemen almak için change veya input olay türünü kullanabiliriz. Bunu nasıl ele alacağımızı görelim.


! blur olayı
Input veya change olaylarının aksine, blur olayı girdi alanına odaklı değilken meydana gelir.

?Örnek:

<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>
    <h1>Giving feedback using blur event</h1>

    <input type="text" id="mass" placeholder="say something" />
    <p></p>

    <script>
        const input = document.querySelector('input')
        const p = document.querySelector('p')

        input.addEventListener('blur', (e) => {
            p.textContent = 'Field is required'
            p.style.color = 'red'

        })
    </script>
</body>

</html>



! keypress, keydown ve keyup

Farklı olay dinleyici türlerini kullanarak klavyenin tüm tuş numaralarına erişebiliriz. KeyPress'i kullanalım ve her klavye tuşunun keyCode'unu alalım.

?Örnek:

<!DOCTYPE html>
<html>
    <head>
        <title>Document Object Model:30 Days Of JavaScript</title>
    </head>

    <body>
        <h1>Key events: Press any key</h1>

        <script>
            document.body.addEventListener("keypress", (e) => {
                alert(e.keyCode);
            });
        </script>
    </body>
</html>


JavaScript kullanarak klavye olaylarını yakalamak ve işlemek oldukça yaygın bir işlemdir. Klavye olaylarını dinlemek için addEventListener yöntemini kullanabiliriz. İşte temel bir örnek:


// Klavye olaylarını yakalayacağımız bir HTML elementi seçiyoruz (örneğin, <body> elementi)
const body = document.querySelector('body');

// Klavye olaylarını dinlemek için bir event listener ekliyoruz
body.addEventListener('keydown', function(event) {
  // Klavye tuşuna basıldığında bu fonksiyon çağrılacaktır
  // event nesnesi, tuşa basıldığında bilgi içerir

  // Tuşun basıldığına dair bilgiyi konsola yazdırabiliriz
  console.log('Tuşa basıldı:', event.key);

  // Örnek: Eğer "Escape" tuşuna basılırsa bir işlem yapabiliriz
  if (event.key === 'Escape') {
    // Burada Escape tuşuna basıldığında yapılacak işlemleri ekleyebilirsiniz
    console.log('Escape tuşuna basıldı!');
  }
});

// Klavye olaylarını dinlemek için "keydown" yerine "keyup" veya "keypress" de kullanabilirsiniz


keypress: harf ve sayılarda tetiklenen eventtir.

keydown: hepsinde çalışır.

keyup: tuştan elini kaldırdığında çalışan eventtir.


?Örnek

document.addEventListener("keyup",run);

function run(e){
    console.log(e.key)
}


! Keycode konusunu araştırabilirsiniz.




! İNPUT EVENTLARI

-"input" olayları, HTML formlarındaki <input>, <textarea>, ve <select> gibi girdi elementlerinin değeri değiştiğinde tetiklenen olaylardır. Bu olaylar, kullanıcının bir form elemanına veri girmesi veya mevcut veriyi değiştirmesi durumunda gerçekleşir.



"input" olayları, HTML formlarındaki <input>, <textarea>, ve <select> gibi girdi elementlerinin değeri değiştiğinde tetiklenen olaylardır. Bu olaylar, kullanıcının bir form elemanına veri girmesi veya mevcut veriyi değiştirmesi durumunda gerçekleşir.

İşte bazı yaygın "input" olayları:

input: Bu olay, kullanıcının bir girdi elemanına herhangi bir veri girmesi veya varolan veriyi değiştirmesi anında tetiklenir. Örneğin, bir metin kutusuna yazı yazarken bu olay tetiklenir.

change: Bu olay, bir girdi elemanının değeri değiştirildiğinde ve girdi elemanı odak dışına çıkıldığında tetiklenir. Özellikle checkbox veya dropdown (seçim kutusu) gibi girdi elemanları için kullanışlıdır.

blur: Bu olay, bir girdi elemanı odak kaybettiğinde (yani, kullanıcı başka bir yere tıkladığında veya "Tab" tuşuna bastığında) tetiklenir. Genellikle girdi elemanının değeri değiştiyse bu olayı dinlemek isteyebilirsiniz.



Örnek olarak, bir form elemanına kullanıcının girdiğini takip etmek veya kullanıcıların girdilerini doğrulamak için "input" ve "change" olayları kullanılabilir. Ayrıca, girdi elemanlarının değerini anlık olarak başka bir alana veya bir sonuca yansıtmak için de kullanışlıdır.

JavaScript ile bu olayları dinlemek için addEventListener yöntemini kullanabilirsiniz. 

? Örneğin:

const inputElement = document.querySelector('#myInput');

inputElement.addEventListener('input', function(event) {
  console.log('Girdi değişti:', event.target.value);
});

inputElement.addEventListener('change', function(event) {
  console.log('Değer değişti:', event.target.value);
});

inputElement.addEventListener('blur', function(event) {
  console.log('Odak kaybedildi:', event.target.value);
});


?Yukarıdaki örnekte, "input", "change" ve "blur" olaylarını bir input elementi üzerinde dinliyoruz. Bu olaylar tetiklendiğinde, girdi elemanının değeri ve olayın türü konsola yazdırılır. Bu, kullanıcı etkileşimini takip etmek ve uygun işlemleri gerçekleştirmek için yaygın bir kullanımdır.


! Sık kullanılan input olayları

/focus
/blur
/copy
/paste
/cut
/select


*********************************************************************
*/

