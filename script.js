'use strict';
// const date=new Date()
// const date=new Date('2025-02-06T19:00:00')
// const date=new Date()
// let year=date.getFullYear()
// let month=date.getMonth()
// let day=date.getDay()
// let hour=date.getHours()
// let minute=date.getMinutes()
// let secund=date.getSeconds()
// console.log(year,month,day,hour,minute,secund);
// const date=new Date()
// date.setFullYear(2024)
// date.setMonth(5)
// date.setDate(15)
// date.setHours(12)
// date.setMinutes(59)
// date.setSeconds(59)
// document.write(date);
// let date=new Date()
// console.log(date.toLocaleTimeString('ru-RU'));

// let date=new Date(prompt("Sanani kriting"))
// let day=date.getDay()
// let keyin=day+7;
// let oldin=day-7;
// let d=new Date()
// let s=new Date()
// d.setDate(oldin)
// s.setDate(keyin)
// console.log(d,s);

// let date=new Date(prompt("Yil-oy-sana"))

// let oldin=new Date(date)
// let keyin=new Date(date)
// oldin.setDate(date.getDate()-7)
// keyin.setDate(date.getDate()+7)
// console.log('7 kun keyin'+oldin.toDateString());
// console.log('7 kun oldin'+keyin.toDateString());

// const date=new Date()
// console.log(date.toLocaleDateString());
// let count=0;

// setInterval(()=>{
// count++
// console.log(`${count} secund o'tdi`);


    
// },1000)







// let count=0;
// let a=setInterval(()=>{
//     count++
//     console.log(`${count} secund o'tdi`);
//     if(count===10){
//         clearInterval(a)
//         console.log("Salom beris ham evi bilan");
        
//     }
    
        
//     },1000)


// function countdown(seconds){
//     console.log(`Taymer boshlandi: ${seconds} sekund`);
//     let timer=setInterval(()=>{
//         seconds--
//         console.log(seconds);
//         if(seconds<=0){
//             clearInterval(timer)
//             console.log("Tugadi");
            
//         }
        
//     },1000)
    
// }
// countdown(10)



// class Car {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }

//     accelerate() {
//         this.speed += 10;
//         console.log(`${this.make} endi ${this.speed} km/h tezlikda harakatlanmoqda`);
//     }
// }

// const bmw = new Car("BMW", 200);
// console.log(bmw);

// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// class Person {
//     constructor(name, age) {
//         this._name = name;  // Xususiyat oldiga `_` qo‘ydik (shunchaki an'anaviy yondashuv)
//         this._age = age;
//     }

//     // Getter - name
//     get name() {
//         return this._name;
//     }

//     // Setter - name
//     set name(newName) {
//         if (newName.length > 0) {
//             this._name = newName;
//         } else {
//             console.log("Ism bo‘sh bo‘lishi mumkin emas!");
//         }
//     }

//     // Getter - age
//     get age() {
//         return this._age;
//     }

//     // Setter - age
//     set age(newAge) {
//         if (newAge > 0) {
//             this._age = newAge;
//         } else {
//             console.log("Yosh manfiy bo‘lishi mumkin emas!");
//         }
//     }
// }

// // Obyekt yaratamiz
// let person1 = new Person("Bekjon", 25);

// // Getter orqali qiymat olish
// console.log(person1.name); // Bekjon
// console.log(person1.age);  // 25

// // Setter orqali qiymat o‘rnatish
// person1.name = "Jigarim";
// person1.age = 30;

// console.log(person1.name); // Jigarim
// console.log(person1.age);  // 30

// // Noto‘g‘ri qiymat berishga harakat qilamiz
// person1.age = -5; // "Yosh manfiy bo‘lishi mumkin emas!"


/* const Person = function (surname, name, age) {
	this.name = name
	this.surname = surname
	this.age = age

	this.calcAge = function () {
		return `Yil:${2025 - this.age}`
	}
}
const People = function (surname, name, age) {
	this.name = name
	this.surname = surname
	this.age = age

	this.calcAge = function () {
		return `Yil:${2025 - this.age}`
	}
}

const sardor = new Person('Sayfullayev', "Sardorbek", 20)
const sardo1r = new Person('Sayfullayev', "Sardorbek", 20)
const jasmina = new People('Jurayeva', "Jasmina", 19)

 */


/* function Car(make, speed) {
	this.make = make
	this.speed = speed
}

Car.prototype.accelerate = function () {
	this.speed += 10
	console.log(`${this.make} endi ${this.speed} km/h tezlikda harakatlanmoqda`)
}
const bmw=new Car("BMW",200)
console.log(bmw)
 */

//class usuli
// class Car {
// 	constructor(make, speed) {
// 		this.make = make
// 		this.speed = speed
// 	}
// 	static accelarate() {
// 		this.speed += 10
// 		console.log(`${this.make} endi ${this.speed} km/h tezlikda harakatlanmoqda`)
// 	}
// }
// const bmw = new Car("BMW", 200)
// console.log(bmw.accelarate()); 



/* class Laptop{
	constructor(price,model,year){
		this.model=model
		this.price=price
		this._year=year
	}
	get getLaptopProperty(){
		return console.log(`Year:${this._year}`)
	}

	set getLaptopProperty(year){
		this._year=year
		return console.log(`Year changed ${this._year}`)
	}
}

const hp=new Laptop(1200,"HP",2020)
hp.getLaptopProperty
hp.getLaptopProperty=3000
hp.getLaptopProperty */

/* let imkoniyat = 3
class User {
	constructor(userName, password, subPassword) {
		this.userName = userName
		this._password = password
		this.subPassword = subPassword
	}
	// get password() {
	// 	return console.log(`Parol hech kimga berilmaydi!`)
	// }
	get password() {
		const isSuccess = confirm("Parolni bilish uchun ikki bosqichli parolingizni kiritasimi")
		if (isSuccess) {
			let data = prompt("Ikki bosqichli parolingizni kiriting.")
			if (`${data}` === this.subPassword) {
				console.log(`${this.userName} ning paroli : ${this._password}`)
			}
		}
	}
}

const user1 = new User("Sardorbek", "1234", "S")
user1.password */


/* class User {
	constructor(username, password) {
		this.username = username
		this._password = password
	}

	get password() {
		return "Parol maxfiy!"
	}

	set password(newPassword) {
		if (newPassword.length < 6) {
			console.log("Parol kamida 6 ta belgidan iborat bo‘lishi kerak!")
		} else {
			this._password = newPassword
			console.log("Parol muvaffaqiyatli o‘zgartirildi!")
		}
	}
}

const user = new User("ali123", "mySecret")

console.log(user.password)

user.password = "123"
user.password = "yangiParol" // */

// class MathHelper {
// 	static square(num) {
// 		return num * num
// 	}
// }

// console.log(MathHelper.square(5))
// console.log(MathHelper.square(10));
// console.log(MathHelper);



// class Validator {
// 	static isPhoneNumberValid(phone) {
// 		return /^\+998\d{9}$/.test(phone)
// 	}
// }

// console.log(Validator.isPhoneNumberValid("+998901234567"))
// console.log(Validator.isPhoneNumberValid("12345"))


// class User {
// 	constructor(name, age) {
// 		this.name = name
// 		this.age = age
// 	}

// 	static fromJSON(json) {
// 		const data = JSON.parse(json)
// 		return new User(data.name, data.age)
// 	}
// }

// const jsonUser = JSON.stringify({ name: "Ali", age: 25 })
// const jsonUser2 = JSON.stringify({ name: "Vali", age: 48 })
// const user = User.fromJSON(jsonUser)
// const user2 = User.fromJSON(jsonUser2)
// console.log(user, user2) 

// class Car {
//     constructor(make, speed) {
//       this.make = make;
//       this.speed = speed; 
//     }
//     accelerate() {
//       this.speed += 10;
//       console.log(`${this.make}: ${this.speed} km tezlik bilan ketyabdi`);
//     }
//     brake() {
//       this.speed -= 5;
//       console.log(`${this.make}: ${this.speed} km tezlik bilan ketyabdi`);
//     }
  
    
//     get speedUS() {
//       return this.speed / 1.6;
//     }
//     set speedUS(speedInMiles) {
//       this.speed = speedInMiles * 1.6;
//     }
//   }
//   const car= new Car('Nexia 2', 50);
  
// //   console.log(`Hozirgi tezlik: ${car.speed} km/soat`);
// //   console.log(`Hozirgi tezlik (mil/soat): ${car.speedUS.toFixed(2)} mi/soat`);

//   car.accelerate();
  
//   car.brake();
//   car.speedUS = 50;
//   console.log(`\nSetterdan so‘ng tezlik: ${car.speed} km/soat`);
//   console.log(`Setterdan so‘ng tezlik (mil/soat): ${car.speedUS.toFixed(2)} mi/soat`);
  

// class Car {
// 	constructor(make, speed) {
// 		this.make = make;
// 		this.speed = speed;
// 	}
// 	speedUS() {  
// 		this.speed += 10;
// 		console.log(`${this.make} endi ${this.speed} km/h tezlikda harakatlanmoqda`);
// 	}
// 	() {  
// 		this.speed += 10;
// 		console.log(`${this.make} endi ${this.speed} km/h tezlikda harakatlanmoqda`);
// 	}
// }

// const bmw = new Car("BMW", 200);
// console.log(bmw);

// bmw.accelerate();

// class Car {
// 	constructor(make, speed) {
// 		this.make = make;
// 		this.speed = speed;
// 	}
// 	accelerate() {
// 		this.speed += 10;
// 		console.log(`${this.make} endi ${this.speed} km/h tezlikda harakatlanmoqda`);
// 	}
// 	brake() {
// 		this.speed -= 10;
// 		console.log(`${this.make} endi ${this.speed} km/h tezlikda harakatlanmoqda`);
// 	}
// 	get speedUS() {
// 		return this.speed -10;
// 	}
// 	set speedUS(speed) {
// 		this.speed = speed + 10; 
// 	}
// }
// const Nexia = new Car("Nexia 2", 120);
// console.log(Nexia.speedUS);
// Nexia.accelerate();
// Nexia.brake();
// Nexia.speedUS = 50;
// console.log(Nexia.speed); 
// Nexia.brake();W
//bind aplly call
// function bek(){
// 	console.log("Salom", this);
	
// }
// const car={
// 	name:"Cobalt",
// 	year:2022,
// 	sayName:bek,
// 	sayNameW:bek.bind(window)//funksiya ichida turgan this kalit suzini konteksini uzgartirish
// }
// console.log(car);
// car.sayName()
// car.sayNameW()


//Object create() inheritance 

/* const Teacher = function (name, age) {
	this.name = name
	this.age = age
}
Teacher.prototype.calcAGe = function () {
	return console.log(`${this.name}ning tug'ilgan yili:${2025 - this.age}`)
}
Teacher.prototype.sayHello = function () {
	return console.log(`Assalamu alaykum hurmatli ${this.name}`)
}
const newTech = new Teacher('Sarvinoz', 20)

const Student = function (name, age, course) {
	Teacher.call(this, name, age)
	this.course = course
}

const Other = function (name, age, course, work) {
	Student.call(this, name, age, course)
	this.work = work
}
Student.prototype = Object.create(Teacher.prototype)
Student.prototype.constructor = Student

Other.prototype = Object.create(Student.prototype)
Other.prototype.constructor = Other


const student1 = new Student("Sardorbek", 21, "Front")
const student2 = new Student("Sarvarbek", 30, "Front")
const other1 = new Other("Kimdur", 35, "Back", "Not working")
console.log(other1)
console.log(student1)


student1.calcAGe()
student2.calcAGe()
student1.sayHello()
other1.calcAGe() */


/* const Car = function (make, speed) {
	this.make = make
	this.speed = speed
}
Car.prototype.break = function () {
	this.speed -= 10
	console.log(`${this.make} endi ${this.speed} km/h da harakatlanmoqda!`)
}

const EV = function (make, speed, charge) {
	Car.call(this, make, speed)
	this.charge = charge
}
EV.prototype = Object.create(Car.prototype)
EV.prototype.chargeBattery = function (chargeTo) {
	this.charge = chargeTo
	console.log(`${this.make} quvvatlandi:${this.charge}%`)
}

EV.prototype.accelarate = function () {
	if (this.charge > 0) {
		this.charge--
		this.speed += 20
		console.log(`${this.make} endi ${this.speed} km/h da harakatlanmoqda. Quvvati:${this.charge}%`)
	} else {
		console.log(`Mashinani quvvatlang`)
	}
}
const byd = new EV("Build Your Dreams", 180, 3)
byd.accelarate()
byd.accelarate()
byd.accelarate()
byd.chargeBattery(15)
byd.accelarate() */


/* Inheritance Classes */
class Payment {
	constructor(amount) {
		this.amount = amount
	}

	proccesPayment() {
		console.log(`${this.amount} miqodorda to'lov amalga oshirildi`)
	}
}

class CashPayment extends Payment {
	proccesPayment() {
		console.log(`${this.amount} naqd pul orqali to'landi.`)
	}
}

class CardPayment extends Payment {
	constructor(amount, cardNumber) {
		super(amount)
		this.cardNumber = cardNumber
	}
	proccesPayment() {
		console.log(`${this.amount} karta orqali to'landi  (XXXX-XXXX-XXXX-${this.cardNumber.slice(-4)}).`)
	}
}

class CryptoPayment extends Payment {
	constructor(amount, walletAdress) {
		super(amount)
		this.walletAdress = walletAdress
	}

	proccesPayment() {
		console.log(`${this.amount} kriptovalyuta orqali to'landi  ${this.walletAdress}.`)
	}
}


let cash = new CashPayment(100)
const card = new CardPayment(250, "1234567812345678")
const crypto = new CryptoPayment(500, "1A2b3C4d5E6f7G8h9I")
console.log(cash,card,crypto)