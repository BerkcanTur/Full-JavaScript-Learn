//! MİRAS ALMA KAVRAMI / INHERİTANCE
/*
JavaScript'de "miras alma" kavramı, nesne yönelimli programlamada (OOP) bir nesnenin başka bir nesneyi özelliklerini ve davranışlarını devralarak kullanabilmesini ifade eder. Bu kavram, JavaScript ve diğer birçok OOP dilinde kullanılır ve kodun tekrar kullanılabilirliğini ve sürdürülebilirliğini artırmak için önemlidir.

JavaScript'de miras alma şu temel kavramları içerir:

Üst Sınıf (Base Class) ve Alt Sınıf (Derived Class): Miras alma ilişkisi, bir üst sınıf (baz sınıf veya temel sınıf olarak da adlandırılır) ve bu üst sınıftan türetilen bir veya daha fazla alt sınıf (türetilmiş sınıf olarak da adlandırılır) arasında gerçekleşir. Üst sınıf, temel davranış ve özelliklere sahip olan sınıftır.

Kalıtım (Inheritance): Alt sınıflar, üst sınıftan miras aldıkları özelliklere (veri üyeleri ve yöntemler) sahiptirler. Bu, kodun tekrar kullanılabilirliğini artırır, çünkü alt sınıflar, üst sınıfın özelliklerini tekrar yazmak zorunda kalmadan kullanabilirler.

Özel Davranış Ekleme (Adding Specialization): Alt sınıflar, üst sınıftan miras aldıkları özelliklere ek olarak kendi özel davranışlarını veya özelliklerini ekleyebilirler. Bu, alt sınıfların üst sınıfın davranışını genişletebileceği veya özelleştirebileceği anlamına gelir.

JavaScript, miras alma için işlevler (function) ve prototipler aracılığıyla bir tür prototip tabanlı kalıtımı destekler. İşte basit bir örnek:


// Üst sınıf (Base Class)
function Person(ad, soyad) {
  this.ad = ad;
  this.soyad = soyad;
}

Person.prototype.selamVer = function() {
  console.log(`Merhaba, ben ${this.ad} ${this.soyad}.`);
};

// Alt sınıf (Derived Class)
function Ogrenci(ad, soyad, okul) {
  Person.call(this, ad, soyad);
  this.okul = okul;
}

Ogrenci.prototype = Object.create(Person.prototype);
Ogrenci.prototype.constructor = Ogrenci;

Ogrenci.prototype.egitimBilgisi = function() {
  console.log(`${this.ad} ${this.soyad}, ${this.okul}'da okuyor.`);
};

const ogrenci = new Ogrenci("Ali", "Veli", "Üniversite");
ogrenci.selamVer(); // "Merhaba, ben Ali Veli."
ogrenci.egitimBilgisi(); // "Ali Veli, Üniversite'da okuyor."







*/


  