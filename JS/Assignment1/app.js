const textArea= document.getElementById("textBox");
const array=  [60, 100,10,15,85];
class Student {
    constructor(name, degree){
        this.name=name; 
        this.degree=degree;
    }
}

// 1th
function evalMath(){
    let input = prompt("Please enter an expression");
    textArea.innerHTML="<p>You entered: "+input+ ", and the result is: "+eval(input)+"</p>";
}

// 2th
function ageCalc(){
    while(true){
        let name = prompt("Please enter your name");
        let birthYear = parseInt(prompt("Please enter your birth year"));
        if(name != null && typeof name==='string' && typeof birthYear === 'number' && birthYear < 2010 ){
            let age = new Date().getFullYear() - birthYear;
            textArea.innerHTML="<p>Name: " + name + "<br> Birth year: " + birthYear +"<br> Age: " + age+"</p>";
            break;
        }
    }
}

// 3th
function generate(){
    var allText="";
    for(let i=1; i<7; i++){
        allText+="<h"+i+"> welcome to my page <h"+i+">"
    }
    textArea.innerHTML=allText;
}

// 4th
function sortDescending(){
    var text="<p>All grads before sorting: ";
    array.forEach(element => {
        text+=element+","
    });
    text+="<br> All grads after sorting: ";
    array.sort(function(a,b){
        return b-a;
    });
    array.forEach(element => {
        text+=element+","
    });
    //find the highest degree
    //?? what is the difference between (element)=> and function(element){}
    const highest = array.find((element)=>element>=100);
    text+="<br> The highest grade greater or equal to 100 is: "+highest+"<br>";

    const filteredArray=array.filter((element) => element<60);
    text+="All grads below 60: ";
    filteredArray.forEach(element => {
        text+=element+","
    });
    textArea.innerHTML=text+"</p>";
}

// 5th
function findStudentName(){
    const students = [new Student("Montaha",90), new Student("Saedon",80), new Student("Wael",59), new Student("Houzan",33)];
    var text="<p>All Students with Degrees: <br>";
    students.forEach(element=>{
        text+=element.name+", "+element.degree+"<br>"
    })
    const nameOfHighDegree = students.find(element=> element.degree>=90&&element.degree<=100);
    text+="<br>First Found Student with degree between 90 and 100: "+nameOfHighDegree.name+"<br>"
    
    text+="<br>Failed Students are: "
    const failedStudents=students.filter(element=>element.degree<60);
    failedStudents.forEach(element=>{
        text+=element.name+", "
    });
    
    //add new student
    text+="<br><br>All Students after adding 3lawi: <br>"
    students.push(new Student("3lawi", 100));
    for(let index in students){
        text+=students[index].name+", "+students[index].degree+"<br>"
    }

    //remove last student
    text+="<br>All Students after removing last: <br>"
    students.pop();
    for(let index in students){
        text+=students[index].name+", "+students[index].degree+"<br>"
    }

    text+="<br>All Students after Sorting them Alphabetically: <br>"
    //sort students based on name
    students.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    for(let index in students){
        text+=students[index].name+", "+students[index].degree+"<br>"
    }

    //add 2 more items using splice
    students.splice(2, 0, new Student("Leo Messi", 1000),new Student("CR7", 0));
    text+="<br>All Students after adding 2 students: <br>"
    for(let index in students){
        text+=students[index].name+", "+students[index].degree+"<br>"
    }
    //remove one student using splice
    students.splice(3, 1);
    text+="<br>All Students after removing one after third one: <br>"
    for(let index in students){
        text+=students[index].name+", "+students[index].degree+"<br>"
    }
    textArea.innerHTML=text+"</p>";
}
//6th
function birthdayInput(){
    const userInput=prompt("Please insert your Date of Birth in Format DD – MM – YYYY");
    if(userInput!=null){
        const afterHandling = dateHandler(userInput);
        if(afterHandling!=null){
            alert(afterHandling + " is your Birthday!");
        }else{
            alert("Wrong Date Format!")
        }
    }
}
function dateHandler(date){
    let myDate= new Date();
    if(date.length==10 && date.at(2)=='-' && date.at(5)=='-'){
        const numbers = date.split('-');
        const day=parseInt(numbers[0]);
        const month=parseInt(numbers[1]);
        const year=parseInt(numbers[2]);
        if(typeof day ==='number' && day>0 && day<=31)  myDate.setDate(day);
        if(typeof month==='number' && month>0 && month<=12)  myDate.setMonth(month-1);
        if(typeof year==='number' && year>0 && year<= new Date().getFullYear())  myDate.setFullYear(year);
        else{
            return null;
        }
        return myDate;
    }else{
        return null;
    }
}

