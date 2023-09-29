//! SINIFLAR (Classes)

/*

-Sınıflar, nesneleri (objeleri) oluşturmak için kullanılan şablonlardır. 


/syntax
class ClassName {
    //code goes here
}

Örneğin, bir "Araba" sınıfı oluşturalım:

class Araba {
  constructor(marka, model) {
    this.marka = marka;
    this.model = model;
  }

  ozellikleriGoster() {
    console.log(`Marka: ${this.marka}, Model: ${this.model}`);
  }

  calistir() {
    console.log(`${this.marka} ${this.model} çalıştı.`);
  }
}

Bu kod, Araba adında bir sınıf tanımlar. Bu sınıfın bir yapıcı metodu (constructor) vardır ve bu metot, araba nesnesi oluşturulduğunda çağrılır. Bu yapıcı metot, arabanın marka ve modelini ayarlar.

Ayrıca, ozellikleriGoster() ve calistir() adında iki metot daha tanımlanır. ozellikleriGoster() metodu arabanın özelliklerini (marka ve model) gösterir, calistir() metodu ise arabayı çalıştırır.

Şimdi, bu sınıftan bir araba nesnesi oluşturalım ve metotlarını çağıralım:


const myCar = new Araba("Toyota", "Camry");

myCar.ozellikleriGoster(); // Marka: Toyota, Model: Camry
myCar.calistir(); // Toyota Camry çalıştı.


! Sınıf Oluşturucu ( Constructor )

-Constructor, nesnemiz için bir taslak oluşturmamıza izin veren yerleşik bir fonksiyondur. Constructor fonksiyonu, constructor anahtar sözcüğü ile başlar ve ardından bir parantez gelir. Parantez içinde nesnenin özelliklerini parametre olarak iletiyoruz. Bu anahtar sözcüğü, constructor parametrelerini sınıfa eklemek için kullanırız.


?Örnek:

 class Person {
    constructor(firstName, lastName) {
      console.log(this) // Check the output from here
      this.firstName = 'Berkcan'
      this.lastName = 'Tür'
    }
  }
  
  const person = new Person()
  
  console.log(person)



*En başta da belirttiğimiz gibi bir sınıf oluşturduğumuzda, sınıfı kullanarak birçok nesne oluşturabiliriz. Şimdi, Person sınıfını kullanarak birden fazla kişi nesnesi oluşturalım.


?Örnek:

class Person {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person1 = new Person('Berkcan', 'Tür')
const person2 = new Person('Serhat', 'Işık')
const person3 = new Person('Ahmet', 'Kale')

console.log(person1)
console.log(person2)
console.log(person3)












*/
