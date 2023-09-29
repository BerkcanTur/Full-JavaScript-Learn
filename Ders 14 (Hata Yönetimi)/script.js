//! HATA YÖNETİMİ

/*

! Hata Yönetimi nedir?
-JavaScript geniş yazılmış bir dildir. Bazı zamanlar, tanımsız bir değişkene erişmeye veya tanımsız bir işlevi çağırmaya çalıştığınızda bir çalışma zamanı hatası alırsınız.


*try: try bloğunda hata oluşturabilecek kodu yazın. try ifadesi, yürütülürken hatalar için test edilecek bir kod bloğu tanımlamamızı sağlar.

*catch: Bir hata oluştuğunda catch bloğunda bir şeyler yapmak için kod yazın. Catch bloğu, size hata bilgisi verecek parametrelere sahip olabilir. Yakalama bloğu, bir hatayı günlüğe kaydetmek veya kullanıcıya belirli mesajları görüntülemek için kullanılır.

*finally: finally bloğu, bir hata oluşmasından bağımsız olarak her zaman yürütülür. finally bloğu, kalan görevi tamamlamak veya try bloğunda hata oluşmadan önce değişmiş olabilecek değişkenleri sıfırlamak için kullanılabilir.



?Örnek:

try {
  / hata verilebilicek kod
} catch (err) {
  / bir hata oluşursa çalıştırılacak kod
} finally {
  / bir hatanın oluşup oluşmadığına bakılmaksızın yürütülecek kod
}

?Örnek:

try {
    let firstName = 'Berkcan'
    let lastName = 'Tür'
    let fullName = firstName + '' + last
} catch{
    console.log('Hata yaptın!')
}

?Örnek:

try {
    let firstName = 'Berkcan'
    let lastName = 'Tür'
    let fullName = firstName + '' + last
} catch(e){
    console.log(e,'Hata var !')
}


! Throw

-throw ifadesi özel bir hata oluşturmamıza izin verir. Bir dize, sayı, boolean veya bir nesne aracılığıyla yapabiliriz. Bir istisna atmak için throw ifadesini kullanın. Bir throw exception yazdığınızda, expression specifies değerini belirtir. Aşağıdakilerin her biri throw exception atar:


throw 'Error2' // generates an exception with a string value
throw 42 // generates an exception with the value 42
throw true // generates an exception with the value true
throw new Error('Required') // generates an error object with the message of Required

?Örnek:

let yas = prompt('Kaç yaşındasın?')

try {
    if (yas > 27) throw new Error('Yalan sööylüyorsun!')
} catch(e) {
    alert(e)
}


! Hata Türleri

! ReferenceError: 
-Geçersiz bir referans oluşturur. Tanımlanmamış bir değişken kullanırsak bir ReferenceError atılır.

let firstName = 'Berkcan'
let fullName = firstName + ' ' + lastName

console.log(fullName)

! SyntaxError 

-Bir sözdizimi hatası oluşturur.

let square = 2 x 2
console.log(square)

console.log('Hello, world")

! TypeError

-Bir type hatası oluşturur

let num = 10
console.log(num.toLowerCase())




******************************************************




*/


