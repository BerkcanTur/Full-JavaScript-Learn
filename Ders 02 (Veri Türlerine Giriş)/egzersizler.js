/*
 ! ÖDEVLER VE EGZERSİZ ÇÖZÜMLERİ

1>  Challenge adında bir değişken tanımlayın ve '7 Günde JavaScript Öğreniyorum' başlangıç ​​değerine atayın.

2>  console.log() kullanarak tarayıcı konsolunda değişkeni yazdırın,

3>  console.log() kullanarak tarayıcı konsolunda dizenin length değerini yazdırın,

4>  toUpperCase() yöntemini kullanarak tüm dize karakterlerini büyük harflerle değiştirin,

5>  toLowerCase() yöntemini kullanarak tüm dize karakterlerini küçük harflerle değiştirin,

6>  substr() veya substring() yöntemini kullanarak string'in ilk kelimesini kesin-silin (dilimleyin)

7>  JavaScript Öğreniyorum ifadesini 7 Günde JavaScript Öğreniyorum'dan ayırın.

8>  includes() yöntemini kullanarak string'in Script kelimesini içerip içermediğini kontrol edin.

9>  split() yöntemini kullanarak string öğesini bir array'ye bölün

10>  7 Günde JavaScript Öğreniyorum dizesini split() yöntemini kullanarak boşlukta bölün

11>  'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' dizeyi virgülden split ve bir dizi olarak değiştirin.

12>  replace() yöntemini kullanarak 7 Günde JavaScript Öğreniyorum'u 14 Günde JavaScript Öğreniyorum olarak değiştirin.

13>  '7 Günde JavaScript Öğreniyorum' dizesinde dizin 8'teki karakter nedir? charAt() yöntemini kullanın.

14>  charCodeAt() kullanan '7 Günde JavaScript Öğreniyorum' dizesindeki J karakter kodu nedir?

15>  7 Günde JavaScript Öğreniyorum'da  a öğesinin ilk oluşumunun konumunu belirlemek için indexOf kullanın.

16>  7 Günde JavaScript Öğreniyorum'da a öğesinin son oluşumunun konumunu belirlemek için lastIndexOf kullanın.

17>  Aşağıdaki cümlede çünkü kelimesinin ilk geçtiği yeri bulmak için indexOf kullanın: 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'

18>  Aşağıdaki cümlede çünkü kelimesinin son geçtiği yeri bulmak için lastIndexOf kullanın: 
   'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'

19>  Aşağıdaki cümlede çünkü kelimesinin ilk geçtiği yeri bulmak için search kullanın: 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'

20>  Bir dizgenin başındaki ve sonundaki boşlukları kaldırmak için trim() kullanın. Örneğin '7 Günde JavaScript Öğreniyorum'.

21>  7 Günde JavaScript Öğreniyorum dizesiyle startsWith() yöntemini kullanın ve sonucu doğru yapın

22>  7 Günde JavaScript Öğreniyorum dizesiyle endsWith() yöntemini kullanın ve sonucu doğru yapın

23>  Kitaplar kadar sevdiğim başka birşey yoktur'cümlesinde ki tüm a'lari bulmak için match() yöntemini kullanın.

24>  concat() kullanın ve '3 saat ile' ve 'JavaScript'i tek bir dize olan '7 Günde JavaScript Öğreniyorum' ile birleştirin

25>  7 Günde JavaScript Öğreniyorum 2 kez yazdırmak için repeat() yöntemini kullanın.

*/











//!    ÇÖZÜMLER !!!!!!!!!!!!


//? 1>  challenge adında bir değişken tanımlayın ve '7 Günde JavaScript Öğreniyorum' başlangıç ​​değerine atayın.

/*
let challenge = "7 Günde JavaScript Öğreniyorum";
*/


//? 2>  console.log() kullanarak tarayıcı konsolunda değişkeni yazdırın.

/*
console.log(challenge);
*/

//? 3>  console.log() kullanarak tarayıcı konsolunda dizenin length değerini yazdırın.

/*
let challenge = "7 Günde JavaScript Öğreniyorum";
console.log(challenge.length);
*/


//? 4>  toUpperCase() yöntemini kullanarak tüm dize karakterlerini büyük harflerle değiştirin.
/*
let challenge = "7 Günde JavaScript Öğreniyorum";
let buyukYazi = challenge.toUpperCase();
console.log(buyukYazi);
*/




//? 5>  toLowerCase() yöntemini kullanarak tüm dize karakterlerini küçük harflerle değiştirin.
/*
let challenge = "7 Günde JavaScript Öğreniyorum";
let kucukYazi = challenge.toLowerCase();
console.log(kucukYazi);
*/




//? 6>  substr() veya substring() yöntemini kullanarak string'in ilk kelimesini kesin-silin (dilimleyin)
/*
let challenge = "7 Günde JavaScript Öğreniyorum";
console.log(challenge.substring(2));
*/



//? 7> JavaScript Öğreniyorum ifadesini 7 Günde JavaScript Öğreniyorum'dan ayırın.
/*
let challenge = "7 Günde JavaScript Öğreniyorum";
console.log(challenge.substring(8));
*/


//?8>  includes() yöntemini kullanarak string'in Script kelimesini içerip içermediğini kontrol edin.

/* 
let challenge = "7 Günde JavaScript Öğreniyorum";
console.log(challenge.includes('Script')); 
*/




//? 9>  split() yöntemini kullanarak string öğesini bir array'ye bölün.
/*
let challenge = "7 Günde JavaScript Öğreniyorum";
console.log(challenge.split(' '));
*/


//? 10>  7 Günde JavaScript Öğreniyorum dizesini split() yöntemini kullanarak boşlukta bölün.

/* 
let challenge = "7 Günde JavaScript Öğreniyorum";
let parcala = challenge.split("");
console.log(parcala); 
*/



//? 11>  'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' dizeyi virgülden split ve bir dizi olarak değiştirin.
/*
let dizi = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let sonuc = dizi.split(' ');
console.log(sonuc);
*/


//? 12>  replace() yöntemini kullanarak 7 Günde JavaScript Öğreniyorum'u 14 Günde JavaScript Öğreniyorum olarak değiştirin.
/*
let challenge = "7 Günde JavaScript Öğreniyorum";
let degistir = challenge.replace('7 Günde', '14 Günde');
console.log(degistir);
*/



//? 13>  '7 Günde JavaScript Öğreniyorum' dizesinde dizin 8'teki karakter nedir? charAt() yöntemini kullanın.
/*
let challenge = "7 Günde JavaScript Öğreniyorum";
console.log(challenge.charAt(8))
*/


//? 14>  charCodeAt() kullanan '7 Günde JavaScript Öğreniyorum' dizesindeki J karakter kodu nedir?
/*
let challenge = "7 Günde JavaScript Öğreniyorum";
console.log(challenge.charCodeAt("J"));
*/


//?15>  7 Günde JavaScript Öğreniyorum'da  a öğesinin ilk oluşumunun konumunu belirlemek için indexOf kullanın.
/*
let challenge = "7 Günde JavaScript Öğreniyorum";
console.log(challenge.indexOf("a"));
*/


//?16>  7 Günde JavaScript Öğreniyorum'da a öğesinin son oluşumunun konumunu belirlemek için lastIndexOf kullanın.
/*
let challenge = "7 Günde JavaScript Öğreniyorum";
console.log(challenge.lastIndexOf("a"));
*/


//?17>  Aşağıdaki cümlede çünkü kelimesinin ilk geçtiği yeri bulmak için indexOf kullanın: 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
/*
let cumle = 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır';
console.log(cumle.indexOf("çünkü"))
*/

//?18>  Aşağıdaki cümlede çünkü kelimesinin son geçtiği yeri bulmak için lastIndexOf kullanın: 
/*'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'*/

/* 
let cumle = 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır';
console.log(cumle.lastIndexOf("çünkü")); 
*/






//?19>  Aşağıdaki cümlede çünkü kelimesinin ilk geçtiği yeri bulmak için search kullanın: 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'

/* 
let cumle ='Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır';
console.log(cumle.search("çünkü")) 
*/





//?20>  Bir dizgenin başındaki ve sonundaki boşlukları kaldırmak için trim() kullanın. Örneğin '7 Günde JavaScript Öğreniyorum'.
/*
let challenge = "  7 Günde JavaScript Öğreniyorum   ";
console.log(challenge.trim());
*/




//?21>  7 Günde JavaScript Öğreniyorum dizesiyle startsWith() yöntemini kullanın ve sonucu doğru yapın
/*
let challenge = "7 Günde JavaScript Öğreniyorum";
console.log(challenge.startsWith(7));
*/



//?22>  7 Günde JavaScript Öğreniyorum dizesiyle endsWith() yöntemini kullanın ve sonucu doğru yapın

/* 
let challenge = "7 Günde JavaScript Öğreniyorum";
console.log(challenge.endsWith("yorum")); 
*/

//? 23>  Kitaplar kadar sevdiğim başka birşey yoktur'cümlesinde ki tüm a'lari bulmak için match() yöntemini kullanın.
/*
let cumle = 'Kitaplar kadar sevdiğim başka birşey yoktur';
let sonuc = cumle.match(/a/g);
console.log(sonuc)
*/



//? 24>  concat() kullanın ve '3 saat ile' ve 'JavaScript'i tek bir dize olan '7 Günde JavaScript Öğreniyorum' ile birleştirin
/*
let challenge = "7 Günde JavaScript Öğreniyorum";
let ekMetin = "3 saat ile JavaScript ";
let birlestir = ekMetin.concat(challenge);
console.log(birlestir);
*/



//? 25>  7 Günde JavaScript Öğreniyorum 2 kez yazdırmak için repeat() yöntemini kullanın.
/*
let challenge = "7 Günde JavaScript Öğreniyorum";
console.log(challenge.repeat(2));
*/







