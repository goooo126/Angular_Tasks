//TODO: 1. Node Download | 2. npm i typescript -g | 3. to check : tsc -v
// ~ tsc --watch index.ts --> es5
// ~ tsc --watch index.ts --target es6 --> es6
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ^ TYPE ANNOTATION
//! x="s";
// ? x1 can take number and string values
// ممكن المتغير يشيل اكتر من داتا تايب
var x1; // this is union
x1 = 2;
x1 = "hello";
console.log(x1); // ??? what value?
//! x1=true
//ده لو اخلي المتغير يشيل اي حاجة زي متغير ال js
//? variable like js but detect the type from first assign
var x2 = 3;
//! x2="";
// ده الطريقة الصح
//? variable act like js var
var x3 = 3;
x3 = true;
x3 = "hello";
var x4 = 7;
x4.toUpperCase(); // is ok in  compile time but bomb in runtime
// try to avoid it 
//? unknown: Safe version of any
//? لازم تعمل اتشيك الاول قبل تنفيذ اي عملية
var x5 = "hello";
//! x5.toUpperCase(); -> error so check first
if (typeof x5 === "string") {
    console.log(x5.toUpperCase());
}
// ^ Array
// ~ arary of numbers only
var arr1 = [1, 2];
arr1.push(3);
//! arr1.push("3");
//? the same way but by the generic
var arr2 = [1, 2];
arr2.push(3);
//! arr2.push("3")
var arr3 = 2;
arr3 = ["apple"];
arr3 = 3;
//! arr3=true
//! arr3="sting"
//? لو عايز اقول ان المتغير هيشيل رقم ونص مع بعض
//? كدا بقوله ان هتشيل الاتنين مع بعض وهيكون طولك 2
var arr4;
arr4 = [1001, "Iphone"];
// ! arr4=["test",2]
//! arr4=["test"]
//* اللي كتبناه ده داتا تايب جديد في ال تي اس اسمه تيوبل
// Tuple – fixed structure
//? array of any
//? يعني هتشيل اي حاجة
var arr6;
arr6 = [1, "1", true, { name: "mahmoud" }];
var arr7; // array of num or array of string
arr7 = [1, 2];
arr7 = [""];
//! arr7 = [1,"3"]
//? الطريقة اللي عارفينها
var arr8;
arr8 = [1, 2, ""];
//! arr8=[1,true]
//? الجديدة اهي
var arr9;
arr9 = [1, "1"];
//! arr8=[1,"1",true]
// ~  let arr:any[] vs let arr:(number|string)[]
// ~ Question: to make an array of fixed length
var arr10;
arr10 = [1, 2];
//! arr10=[1,2,3]
// ~ Question: let arr11:[]? اقدر احط فيها ايه
var arr11;
//! arr11=[""]
//! arr11=[1]
arr11 = []; // empty array | هتفضل فاضية ع طول
//^ Object
//? obj of any
var obj;
obj = { name: "" };
obj = { name: "", id: 3 };
//? type to the object
var obj1;
obj1 = { id: 1, name: "mahmoud" };
// ~ Question: obj2 = { id: 1, name: "string" }; // hna string literal , يعني لازم ال value دي تبقي موجودة
var obj2;
obj2 = { id: 1, name: "string" };
//! obj2 = {id:1,name:"mahmoud"}
// ~ Question: let obj3: { id: number, name: "mahmoud" | "msh mahmoud" }??
// ? arr of objects
var arrOfObj;
//^ Function 
function toUpper(name) {
    return name.toUpperCase();
}
toUpper("mahmoud");
//! toUpper(); -> تنفع ف ال js
//! toUpper("mahmoud","marouf") => only one arguement but is ok in js
//! toUpper(4) -> must be string -> is ok in js 
function fun1(name) {
    console.log("Hello, " + name);
}
// ~ Question : Default parameter y3ni eh?
//? عشان ممكن مباصيش كل البارامترز
// * Default Parameter
function sum(num1, num2) {
    if (num2 === void 0) { num2 = 4; }
    return num1 + num2;
}
sum(3, 4); // is ok
sum(3); // is ok
//! sum() -> is not ok 
//* Optional Parameters
// ? حط ال ? جنب البارامتر
function sum2(num1, num2) {
    if (num2 == undefined)
        return num1;
    return num1 + num2;
}
sum2(2, 3); // is ok
sum2(3); // is ok
//^ Type Narrowing
//?يعني تقليل نوع المتغير بعد شرط معين بحيث التايب سكربت يعرف النوع الحقيقي
function test(value) {
    value.toUpperCase(); // ! Error
}
// ? لازم تعمل check 
// by type of
function format(val) {
    if (typeof val === "string") {
        return val.toUpperCase(); // TS knows: string
    }
    return val.toFixed(2); // TS knows: number
}
// 2. Truthy check
function greet(name) {
    if (name) {
        return "Hi, ".concat(name); // TS knows: string
    }
    return "Hi, guest";
}
//^ Enum -> 
//? يكون عندي متغير ليه قيم محددة زي ايام الاسبوع 
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Sat"] = 0] = "Sat";
    WeekDays[WeekDays["Sun"] = 1] = "Sun";
    WeekDays[WeekDays["Mon"] = 2] = "Mon";
    WeekDays[WeekDays["Tus"] = 3] = "Tus";
    WeekDays[WeekDays["Wed"] = 4] = "Wed";
    WeekDays[WeekDays["Thu"] = 5] = "Thu";
    WeekDays[WeekDays["Fri"] = 6] = "Fri";
})(WeekDays || (WeekDays = {}));
var day = WeekDays.Sat;
// ! day="sat" - > error
//^ Generics 
// يعني ببعت ال تايب وقت الكووول
// بكتب كود يشتغل مع اي داتا تايب
function getFirst(arr) {
    return arr[0];
}
getFirst([1, 2, 3]); // -> 1 is number
getFirst(["mahmoud", "rajeh"]); // - mahmoud is string
//^ Class
var Car = /** @class */ (function () {
    function Car(e) {
        this.carNo = 0;
        this.carModel = "";
        this.engine = ""; ///public
        this.engine = e;
    }
    Car.prototype.dispaly = function () {
        console.log("Car Engine: " + this.engine);
    };
    return Car;
}());
var car1 = new Car("e1");
//? syntax sugar b2a 
var Car2 = /** @class */ (function () {
    function Car2(engine) {
        this.engine = engine;
        this.carNo = 0;
        this.carModel = "";
    }
    Car2.prototype.dispaly = function () {
        console.log("Car Engine: " + this.engine);
    };
    return Car2;
}());
//? Readonly property 
//? marks a property as immutable after initialization. 
// ?It can only be set in the declaration or constructor.
var Config = /** @class */ (function () {
    function Config(url) {
        this.version = 1;
        this.apiUrl = url; //  OK in constructor
    }
    return Config;
}());
var cfg = new Config("https://api.com");
// cfg.apiUrl = "x"; //  Error: readonly
// * inheritance > used in angular so many times
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota(e, color) {
        var _this = _super.call(this, e) || this;
        _this.color = color;
        return _this;
    }
    Toyota.prototype.dispaly = function () {
        console.log(this.carModel);
    };
    return Toyota;
}(Car));
var toyota = new Toyota("e2", "red");
toyota.dispaly();
var User = /** @class */ (function () {
    function User() {
        this.name = "";
        this.email = "";
        this.salary = 0;
    }
    User.prototype.canLogin = function () {
        return true;
    };
    ;
    return User;
}());
var VipUser = /** @class */ (function () {
    function VipUser() {
        this.name = "";
        this.email = "";
        this.salary = 0;
        this.bonus = 0;
    }
    //hasCar: boolean=true;
    VipUser.prototype.canLogin = function () {
        return true;
    };
    ;
    return VipUser;
}());
//? هيحصل ميرج ويتجمعوا مع بعض
var obj4 = {
    id: 3,
    name: "m"
};
var user1 = 3;
user1 = "";
var mahmoud = {
    id: 3,
    name: "S",
    email: ""
};
var course = 'html';
course = 'css';
// course='eee'
// * Record <key,value> dictionary with keys (specfic type), values of specicfic type
// يعني اي 
// اعملي اوبجكت ال مفاتيح بتاعته من نوع معين ومحددة والقيم بتاعتها من نوع معين برضو
var studGrades;
studGrades = {
    "mahmoud": 10,
    "rajeh": 20,
    "omar": 30,
};
var CourseTeachers = {
    html: "Ahmed",
    css: "Ali",
    network: "Hassan"
};
var courses = {
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
};
var devCourseInfo;
devCourseInfo = {
    "html": {
        room: 3,
        instructor: "mahmoud"
    }, "css": {
        room: 3,
        instructor: "mahmoud"
    }
};
var user2 = {
    id: 10,
    name: "mahmoud"
};
var user4 = {
    id: 10,
    name: "Mahmoud"
};
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
var input = document.getElementById("username");
//? تايب سكربت شيفاه ك انه htmlelement | null
//? but u know it is an input 
//! console.log(input.value) = > see the error 
var input1 = document.getElementById("username");
console.log(input1.value);
var arr = [1, 2, 3];
arr.push(4); // is ok 
var arrr2 = [1, 2, 3];
//! arrr2.push(3)
var value = true;
var len = value.length; //! اكتبه وشيله 
// أكتب اللي حي هيدي ايررو
// let response:res={
// }
var response = {};
var response2 = {}; // old 
//^ Read About : Passive Coding
