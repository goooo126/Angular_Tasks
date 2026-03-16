//TODO: 1. Node Download | 2. npm i typescript -g | 3. to check : tsc -v
// ~ tsc --watch index.ts --> es5
// ~ tsc --watch index.ts --target es6 --> es6

// ^ TYPE ANNOTATION


//! x="s";

// ? x1 can take number and string values
// ممكن المتغير يشيل اكتر من داتا تايب
let x1: number | string; // this is union
x1 = 2;
x1 = "hello";
console.log(x1); // ??? what value?
//! x1=true

//ده لو اخلي المتغير يشيل اي حاجة زي متغير ال js
//? variable like js but detect the type from first assign
let x2 = 3;
//! x2="";
// ده الطريقة الصح
//? variable act like js var
let x3: any = 3;
x3 = true;
x3 = "hello";

let x4:any=7
x4.toUpperCase();// is ok in  compile time but bomb in runtime
// try to avoid it 


//? unknown: Safe version of any
//? لازم تعمل اتشيك الاول قبل تنفيذ اي عملية
let x5: unknown = "hello";
//! x5.toUpperCase(); -> error so check first

if (typeof x5 === "string") {
  console.log(x5.toUpperCase());
}


// ^ Array
// ~ arary of numbers only
let arr1: number[] = [1, 2];
arr1.push(3);
//! arr1.push("3");

//? the same way but by the generic
let arr2: Array<number> = [1, 2];
arr2.push(3);
//! arr2.push("3")

let arr3: number | string[] = 2;
arr3 = ["apple"];
arr3 = 3;
//! arr3=true
//! arr3="sting"

//? لو عايز اقول ان المتغير هيشيل رقم ونص مع بعض
//? كدا بقوله ان هتشيل الاتنين مع بعض وهيكون طولك 2
let arr4: [number, string];
arr4 = [1001, "Iphone"];
// ! arr4=["test",2]
//! arr4=["test"]

//* اللي كتبناه ده داتا تايب جديد في ال تي اس اسمه تيوبل
// Tuple – fixed structure


//? array of any
//? يعني هتشيل اي حاجة
let arr6: any[];
arr6 = [1, "1", true, { name: "mahmoud" }];


let arr7: number[] | string[]; // array of num or array of string
arr7 = [1, 2];
arr7 = [""];
//! arr7 = [1,"3"]

//? الطريقة اللي عارفينها
let arr8: Array<number | string>;
arr8 = [1, 2, ""];
//! arr8=[1,true]

//? الجديدة اهي
let arr9: (number | string)[];
arr9 = [1, "1"];
//! arr8=[1,"1",true]

// ~  let arr:any[] vs let arr:(number|string)[]

// ~ Question: to make an array of fixed length
let arr10: [any, any];
arr10 = [1, 2];
//! arr10=[1,2,3]

// ~ Question: let arr11:[]? اقدر احط فيها ايه
let arr11: [];
//! arr11=[""]
//! arr11=[1]
arr11 = []; // empty array | هتفضل فاضية ع طول


//^ Object

//? obj of any
let obj: {}
obj = { name: "" }
obj = { name: "", id: 3 }

//? type to the object
let obj1: { id: number; name: string };
obj1 = { id: 1, name: "mahmoud" };

// ~ Question: obj2 = { id: 1, name: "string" }; // hna string literal , يعني لازم ال value دي تبقي موجودة

let obj2: { id: 1, name: "string" };
obj2 = { id: 1, name: "string" }
//! obj2 = {id:1,name:"mahmoud"}

// ~ Question: let obj3: { id: number, name: "mahmoud" | "msh mahmoud" }??

// ? arr of objects
let arrOfObj: { id: number, name: string }[];


//^ Function 

function toUpper(name: string): string {
    return name.toUpperCase()
}
toUpper("mahmoud")
//! toUpper(); -> تنفع ف ال js
//! toUpper("mahmoud","marouf") => only one arguement but is ok in js
//! toUpper(4) -> must be string -> is ok in js 

function fun1(name: string): void { // void means no return value
    console.log("Hello, " + name);

}

// ~ Question : Default parameter y3ni eh?
//? عشان ممكن مباصيش كل البارامترز
// * Default Parameter
function sum(num1: number, num2: number = 4): number {
    return num1 + num2
}
sum(3, 4) // is ok
sum(3) // is ok
//! sum() -> is not ok 

//* Optional Parameters


// ? حط ال ? جنب البارامتر
function sum2(num1: number, num2?: number): number {
    if (num2 == undefined) return num1;
    return num1 + num2
}

sum2(2, 3) // is ok
sum2(3) // is ok


//^ Type Narrowing
//?يعني تقليل نوع المتغير بعد شرط معين بحيث التايب سكربت يعرف النوع الحقيقي

function test(value: string | number) {
  value.toUpperCase() // ! Error
}
// ? لازم تعمل check 
// by type of
function format(val: string | number): string {
  if (typeof val === "string") {
    return val.toUpperCase();   // TS knows: string
  }
  return val.toFixed(2);       // TS knows: number
}
// 2. Truthy check

function greet(name?: string): string {
  if (name) {
    return `Hi, ${name}`;    // TS knows: string
  }
  return "Hi, guest";
}


//^ Enum -> 
//? يكون عندي متغير ليه قيم محددة زي ايام الاسبوع 
enum WeekDays {
    Sat, Sun, Mon, Tus, Wed, Thu, Fri
}

let day: WeekDays = WeekDays.Sat;
// ! day="sat" - > error


//^ Generics 
// يعني ببعت ال تايب وقت الكووول
// بكتب كود يشتغل مع اي داتا تايب

function getFirst<T>(arr: T[]): T {
    return arr[0];
}
getFirst<number>([1, 2, 3]) // -> 1 is number
getFirst<string>(["mahmoud", "rajeh"])// - mahmoud is string



//^ Class

class Car {
    private carNo: number = 0;
    protected carModel: string = "";
    engine: string = "" ///public
    constructor(e: string) {
        this.engine = e;
    }
    dispaly() {
        console.log("Car Engine: " + this.engine);

    }
}

let car1: Car = new Car("e1")

//? syntax sugar b2a 
class Car2 {
    private carNo: number = 0;
    protected carModel: string = "";

    constructor(public engine: string) { // will create an engine member and assign the value

    }
    dispaly(): void {
        console.log("Car Engine: " + this.engine);

    }
}

//? Readonly property 
//? marks a property as immutable after initialization. 
// ?It can only be set in the declaration or constructor.

class Config {
  readonly apiUrl: string;
  readonly version: number = 1;

  constructor(url: string) {
    this.apiUrl = url;  //  OK in constructor
  }
}

const cfg = new Config("https://api.com");
// cfg.apiUrl = "x"; //  Error: readonly

// * inheritance > used in angular so many times
class Toyota extends Car {
    constructor(e: string, public color: string) {
        super(e);
    }
    dispaly(): void {
        console.log(this.carModel);
    }
}

let toyota: Toyota = new Toyota("e2", "red")
toyota.dispaly();


//? ts allows single inheritance  => toyota extends car 
//? ts allows multi level inheritance=>  ancestor-> parent -> child
//! not allow multiple toyota extends car1,car2

//*********** BUT  */
//* ts allows to implment akter mn interface 

//^ Interface -> contract : every class implements it , will implment everything in it 


interface IUser {
    name: string;
    email: string;
    salary: number;
    canLogin: () => boolean; // signature of the func only (abstract method) method without body
}

class User implements IUser {
    name: string = "";
    email: string = ""
    salary: number = 0
    canLogin(): boolean {
        return true
    };

}


//? implment 2 interface
//? ? means optional 
interface IVipUser {
    bonus: number;
    hasCar?: boolean;
}
class VipUser implements IUser, IVipUser {
    name: string = "";
    email: string = ""
    salary: number = 0;
    bonus: number = 0;
    //hasCar: boolean=true;
    canLogin(): boolean {
        return true
    };

}

//? 2 interfce with same name  is ok 
interface a {
    id: number;
}
interface a {
    name: string
}
//? هيحصل ميرج ويتجمعوا مع بعض
let obj4: a = {
    id: 3,
    name: "m"
}


//*  type alias or custom type

type userId = number | string;

let user1: userId = 3
user1 = ""


///? create complex type with only variables
type a1 ={
    id: number;
}
// type a= {
//     name: string
// }
//? solution?
type person1 = {
    id: number;
    email: string
}
type person2 = {
    name: string
}

type person = person1 & person2; // this is Intersection Type

let mahmoud: person = {
    id: 3,
    name: "S",
    email: ""
}

type courses = 'html' | 'css'
let course: courses = 'html'
course = 'css'
// course='eee'


// * Record <key,value> dictionary with keys (specfic type), values of specicfic type
// يعني اي 
// اعملي اوبجكت ال مفاتيح بتاعته من نوع معين ومحددة والقيم بتاعتها من نوع معين برضو

let studGrades: Record<string, number>;
studGrades = {
    "mahmoud": 10,
    "rajeh": 20,
    "omar": 30,
}

type CoursesAgain = "html" | "css" | "network";

let CourseTeachers: Record<CoursesAgain, string> = {
    html: "Ahmed",
    css: "Ali",
    network: "Hassan"
};

type itiCourses = 'html' | 'css' | 'network' | 'cy'

interface courseInfo {
    room: number;
    instructor: string
}

let courses: Record<itiCourses, courseInfo> = {
    "html": {
        room: 3,
        instructor: "mahmoud"
    },
    "css": {
        room: 3,
        instructor: "mahmoud"
    },
    'network': {
        room: 3,
        instructor: "mahmoud"
    },
    'cy': {
        room: 3,
        instructor: "mahmoud"
    }
}

type devCourse = Extract<itiCourses, 'html' | 'css'>

let devCourseInfo: Record<devCourse, courseInfo>;
devCourseInfo = {
    "html": {
        room: 3,
        instructor: "mahmoud"
    }, "css": {
        room: 3,
        instructor: "mahmoud"
    }
}

type ItiUser = {
    id: number,
    name: string
}
let user2: ItiUser = {
    id: 10,
    name: "mahmoud"
}


//? lw 3ayz el user enter data w b3d keda mynfsh y edit tkon readonly

type ItiUser3 = Readonly<ItiUser>

let user4: ItiUser3 = {
    id: 10,
    name: "Mahmoud"
}
// if new user so enter data , if existed one so it is readonly 
//! user4.name="ahmed"

//* type vs interface => بعد م تقول اللي تحت شوف الاسليد
/**
 * *1. الـ Type يقدر يعمل Union -> type Status = "success" | "error" | "loading"
ده شيء interface ميعملوش
 * *2.الـ Type يقدر يمثل أنواع بسيطة- >type ID = number
* *3. الـ interface ممكن يتكتب مرتين بنفس الاسم ويتدمجوا. 
* but type will throw error
* 
 */

//* Type Assertion => mohem in angular  <> old syntax | new syntax => as 
/* 
    ? كانك بتقول لتايب اسكربت متشغلش بالك بنوع المتغير ده انا عارفه اكتر منك 
    ? واتعامل معاه ع اساس انه كذ
*/

let input = document.getElementById("username");
//? تايب سكربت شيفاه ك انه htmlelement | null
//? but u know it is an input 

//! console.log(input.value) = > see the error 

let input1 = document.getElementById("username") as HTMLInputElement;
console.log(input1.value);

let arr = [1, 2, 3]
arr.push(4)// is ok 

let arrr2 = [1, 2, 3] as const;
//! arrr2.push(3)

let value: any = true
let len = (value as string).length //! اكتبه وشيله 

/*
 ? لما تعمل اوبجكت من انترفيسس معين ومش عايز تديله قيمة دلوقت
 ? وتقول للاننجولار ملكش دعود انا هديله قيمة بعدين
*/
interface res {
    status: number;
    message: string;
}
// أكتب اللي حي هيدي ايررو
// let response:res={

// }


let response:res = {} as res;
let response2:res=<res> {}; // old 


//^ Read About : Passive Coding


