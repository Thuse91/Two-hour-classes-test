//the initial parent class
class Person {
    constructor(Name, Age, Height, WhereDoTheyLive, Hobby) {
        this.Name = Name;
        this.Age = Age;
        this.Height = Height;
        this.WhereDoTheyLive = WhereDoTheyLive;
        this.Hobby = Hobby;
    }
}
//a child class of Person
class PersonInTwoYears extends Person {
    constructor(Name, Age, Height, WhereDoTheyLive, Hobby, JsExperience, WorksAt) {
    super(Name, Age, Height, WhereDoTheyLive, Hobby); {
        this.JsExperience = JsExperience; 
        this.WorksAt = WorksAt;

    }
    }
}

//a child class of PersonInTwoYears
class PersonInFourYears extends PersonInTwoYears {
    constructor(Name, Age, Height, WhereDoTheyLive, Hobby, JsExperience, WorksAt) {
    super(Name, Age, Height, WhereDoTheyLive, Hobby, JsExperience, WorksAt); {
        this.JsExperience = JsExperience;
        this.WorksAt = WorksAt;
    }
}
}

// creating variables with the info to be displayed.

let meNow = new Person ("Jimmy", 29, 183 + "cm", "Bjuv", "Computers");
let meInTwo = new PersonInTwoYears(meNow.Name, meNow.Age + 2, meNow.Height, "Bjuv", "Computers", 2 , "BigCorp");
let meInFour = new PersonInFourYears("Jimmy", 33, 183 + " cm", "Helsingborg", "Programming", 4 , "EvenBiggerCorp");
console.log(meNow);
console.log(meInTwo);
console.log(meInFour);

// let meInTwo = new PersonInTwoYears(meNow.Name, meNow.Age + 2, meNow.Height, "Bjuv", "Computers", 2 , "BigCorp");
// is another way i could do it.


// styling body of index.
const body = document.querySelector("body");
body.style.backgroundColor = "#c7d9ff";
body.style.color = "white";

// Create and style the First Container
const root = document.getElementById('link');
const containerNow = document.createElement("div");
containerNow.setAttribute("class", "container");
containerNow.style.backgroundColor = "#2067ff";
containerNow.style.boxShadow = "0 0 10px black";
containerNow.style.width = "1000px";
containerNow.style.margin = "auto";
containerNow.style.marginTop = "100px";
containerNow.style.marginBottom = "100px";
containerNow.style.border = "2px solid #0051ff";
containerNow.style.borderRadius = "20px";
containerNow.style.paddingBottom = "20px";
root.appendChild(containerNow);

// Create and style Name
const myName = document.createElement("h1");
myName.setAttribute("class", "title");
myName.style.textAlign = "center";
containerNow.appendChild(myName)
document.querySelector(".title").innerHTML = meNow.Name + " in 2020";
// Small Description outside Classes.
const currentDesc = document.createElement("p");
currentDesc.setAttribute("id", "currentDesc");
currentDesc.style.textAlign = "center";
containerNow.appendChild(currentDesc)
document.querySelector("#currentDesc").innerHTML = "This is me right now in 2020"
// Create and style Age
const age = document.createElement("p");
age.setAttribute("id", "age");
age.style.marginLeft = "30px";
containerNow.appendChild(age)
document.querySelector("#age").innerHTML = "age: " + meNow.Age;
// Create and style height
const height = document.createElement("p");
height.setAttribute("id", "height");
height.style.marginLeft = "30px";
containerNow.appendChild(height)
document.querySelector("#height").innerHTML = "height: " + meNow.Height;
// Create and style where
const where = document.createElement("p");
where.setAttribute("id", "where");
where.style.marginLeft = "30px";
containerNow.appendChild(where)
document.querySelector("#where").innerHTML = "Where do they live: " + meNow.WhereDoTheyLive;
// Create and style hobby
const hobby = document.createElement("p");
hobby.setAttribute("id", "hobby");
hobby.style.marginLeft = "30px";
containerNow.appendChild(hobby)
document.querySelector("#hobby").innerHTML = "Hobby: " + meNow.Hobby;


//creating container for data on PersonInTwoYears

const containerTwoYears = document.createElement("div");
containerTwoYears.setAttribute("class", "container");
containerTwoYears.style.width = "1000px";
containerTwoYears.style.backgroundColor = "#2067ff";
containerTwoYears.style.boxShadow = "0 0 10px black";
containerTwoYears.style.margin = "auto";
containerTwoYears.style.marginTop = "100px";
containerTwoYears.style.marginBottom = "100px";
containerTwoYears.style.border = "2px solid #0051ff";
containerTwoYears.style.borderRadius = "20px";
containerTwoYears.style.paddingBottom = "20px";
root.appendChild(containerTwoYears);

// Create and style Name
const myName2022 = document.createElement("h1");
myName2022.setAttribute("class", "title2022");
myName2022.style.textAlign = "center";
containerTwoYears.appendChild(myName2022)
document.querySelector(".title2022").innerHTML = meInTwo.Name + " in 2022";
// Small Description outside Classes.
const twoDesc = document.createElement("p");
twoDesc.setAttribute("id", "twoDesc");
twoDesc.style.textAlign = "center";
containerTwoYears.appendChild(twoDesc)
document.querySelector("#twoDesc").innerHTML = "This is where i want to be in 2022"
// Create and style Age
const age2022 = document.createElement("p");
age2022.setAttribute("id", "age2022");
age2022.style.marginLeft = "30px";
containerTwoYears.appendChild(age2022)
document.querySelector("#age2022").innerHTML = "age: " + meInTwo.Age;
// Create and style height
const height2022 = document.createElement("p");
height2022.setAttribute("id", "height2022");
height2022.style.marginLeft = "30px";
containerTwoYears.appendChild(height2022)
document.querySelector("#height2022").innerHTML = "height: " + meInTwo.Height;
// Create and style where
const where2022 = document.createElement("p");
where2022.setAttribute("id", "where2022");
where2022.style.marginLeft = "30px";
containerTwoYears.appendChild(where2022)
document.querySelector("#where2022").innerHTML = "Where do they live: " + meInTwo.WhereDoTheyLive;
// Create and style hobby
const hobby2022 = document.createElement("p");
hobby2022.setAttribute("id", "hobby2022");
hobby2022.style.marginLeft = "30px";
containerTwoYears.appendChild(hobby2022)
document.querySelector("#hobby2022").innerHTML = "Hobby: " + meInTwo.Hobby;
// Create and style JsExperience
const jsexperience2022 = document.createElement("p");
jsexperience2022.setAttribute("id", "jsexperience2022");
jsexperience2022.style.marginLeft = "30px";
containerTwoYears.appendChild(jsexperience2022)
document.querySelector("#jsexperience2022").innerHTML = "JS Experience: " + meInTwo.JsExperience + " years";
// Create and style Worksat
const worksat2022 = document.createElement("p");
worksat2022.setAttribute("id", "worksat2022");
worksat2022.style.marginLeft = "30px";
containerTwoYears.appendChild(worksat2022)
document.querySelector("#worksat2022").innerHTML = "Working at: " + meInTwo.WorksAt; 


//creating container for data on PersonInFourYears

const containerFourYears = document.createElement("div");
containerFourYears.setAttribute("class", "container");
containerFourYears.style.width = "1000px";
containerFourYears.style.backgroundColor = "#2067ff";
containerFourYears.style.boxShadow = "0 0 10px black";
containerFourYears.style.margin = "auto";
containerFourYears.style.marginTop = "100px";
containerFourYears.style.marginBottom = "100px";
containerFourYears.style.border = "2px solid #0051ff";
containerFourYears.style.borderRadius = "20px";
containerFourYears.style.paddingBottom = "20px";
root.appendChild(containerFourYears);

// Create and style Name
const myName2024 = document.createElement("h1");
myName2024.setAttribute("class", "title2024");
myName2024.style.textAlign = "center";
containerFourYears.appendChild(myName2024)
document.querySelector(".title2024").innerHTML = meInFour.Name + " in 2024";
// Small Description outside Classes.
const fourDesc = document.createElement("p");
fourDesc.setAttribute("id", "fourDesc");
fourDesc.style.textAlign = "center";
containerFourYears.appendChild(fourDesc)
document.querySelector("#fourDesc").innerHTML = "This is where i want to be in 2024"
// Create and style Age
const age2024 = document.createElement("p");
age2024.setAttribute("id", "age2024");
age2024.style.marginLeft = "30px";
containerFourYears.appendChild(age2024)
document.querySelector("#age2024").innerHTML = "age: " + meInFour.Age;
// Create and style height
const height2024 = document.createElement("p");
height2024.setAttribute("id", "height2024");
height2024.style.marginLeft = "30px";
containerFourYears.appendChild(height2024)
document.querySelector("#height2024").innerHTML = "height: " + meInFour.Height;
// Create and style where
const where2024 = document.createElement("p");
where2024.setAttribute("id", "where2024");
where2024.style.marginLeft = "30px";
containerFourYears.appendChild(where2024)
document.querySelector("#where2024").innerHTML = "Where do they live: " + meInFour.WhereDoTheyLive;
// Create and style hobby
const hobby2024 = document.createElement("p");
hobby2024.setAttribute("id", "hobby2024");
hobby2024.style.marginLeft = "30px";
containerFourYears.appendChild(hobby2024)
document.querySelector("#hobby2024").innerHTML = "Hobby: " + meInFour.Hobby;
// Create and style js experience
const jsexperience2024 = document.createElement("p");
jsexperience2024.setAttribute("id", "jsexperience2024");
jsexperience2024.style.marginLeft = "30px";
containerFourYears.appendChild(jsexperience2024)
document.querySelector("#jsexperience2024").innerHTML = "JS Experience: " + meInFour.JsExperience  + " years";
// Create and style worksat
const worksat2024 = document.createElement("p");
worksat2024.setAttribute("id", "worksat");
worksat2024.style.marginLeft = "30px";
containerFourYears.appendChild(worksat2024)
document.querySelector("#worksat").innerHTML = "Working at: " + meInFour.WorksAt; 