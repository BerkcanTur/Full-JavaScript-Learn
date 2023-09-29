//! DÖNGÜLER  (Loops)
/*
-Yazılım kariyerimizde bir çok defa aynı işi tekrar tekrar yapmamız gerekebilir. Basit olarak Console.log() kullanarak 0'den 100'e kadar çıktı yazdırmayı deneyelim. Bunu yapmak bile çok zamanımızı alır.Bu tür yorucu ve tekrarlayan görevlerin kolay bir yöntemi var.


-Tekrar eden görevleri gerçekleştirmek için programlama dillerinde farklı döngü türleri kullanırız. Aşağıdaki örnekler, JavaScript ve diğer programlama dillerinde yaygın olarak kullanılan döngülerdir.


! For Döngüsü

* For Döngüsünün yapısı
for(başlangıç_değeri, şart, arttırma/azaltma){
  * uygulamak istediğimiz kod
}

? Örnek:
for(let i = 0; i <= 6; i++){
  console.log(i)
}

/ 0 1 2 3 4 5

for(let i = 0; i <= 100; i+= 3){
    console.log(i)
}


for(let i = 5; i >= 0; i--){
  console.log(i)
}

/ 5 4 3 2 1 0


! While Döngüsü

-while anahtar kelimesinin yanında belirtilen şarta doğru olduğu sürece çalışan bir döngü türüdür. Eğer koşul sürekli doğru çıkacak şekilde ayarlanırsa while döngüsü uygulama kasten kesilmediği sürece sonsuza kadar devam edebilir. Bu yüzden buraya dikkat etmek gerekebilir.


?Örnek:
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

/ 0 1 2 3 4 5

! Do-while Döngüsü

-do while döngüsü Koşul ile belirtilen alanın doğru olup olmadığına bakmadan kod bloğunu bir kez çalıştırır ve daha sonra Koşul ile belirtilen alan doğru (true) olduğu sürece kod bloğunun çalışması için kullanılır.


?Örnek:

let i = 0
do {
  console.log(i)
  i++
} while (i <= 5)

/ 0 1 2 3 4 5


/Not:while – Koşul tekrardan sonra kontrol edilir. 
for  – Her tekrardan önce koşul kontrol edilir.


! break
-Break, bir döngüyü kesmek için kullanılır.

?Örnek:

for(let i = 0; i <= 5; i++){
  if(i == 3){
    break;
  }
  console.log(i)
}

! continue
Belirli bir döngü aşamasını atlamak için continue anahtar kelimesi kullanılır.

? Örnek:

for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i)
}

/ 0 1 2 4 5





******************************************************

! EGZERSİZ VE ÖDEVLER !!!!!!!

1-while ve do while kullanarak 0 dan 10'a kadar giden bir döngü kurun.

2-while ve do while kullanarak 10 dan 0'a kadar giden bir döngü kurun.

3-0'dan 100'e kadar olan çift sayıları bir döngü yardımı ile ekrana yazdırın.

4-0'dan 100'e kadar olan tek sayıları bir döngü yardımı ile ekrana yazdırın



*/

