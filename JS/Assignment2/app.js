const myForm=document.getElementsByName("myForm")[0];
var myWindow;
var duration = 39420000; 
const gradTime = document.getElementById("gradTime");
var updateInterval = setInterval(countDown, 1000);


function checkFrm(e){
    e.preventDefault();
    if(myForm.elements[0].value!="Enter your user name here" && myForm.elements[1].value.length>3 && myForm.elements[2].checked){
        e.target.submit();
    }else{
        alert("Failed to Login!!");
    }
}

function openAdvertising(){
    setTimeout(() => {  
        myWindow=window.open("", "myWindow", "width=500,height=500");
        myWindow.document.write("<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sed soluta sint aliquid quae aperiam consequatur voluptatibus aut inventore consequuntur nesciunt unde ab beatae possimus, illo atque odio porro corrupti?</p>");
     }, 3000);
}

function closeAdvertising(){
    myWindow.close();
}

function countDown(){
    
    var minutes = Math.floor(duration/60);
    var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);
    var months = Math.floor(days/30);
    var years = Math.floor(months/12);
    gradTime.innerHTML=formatNumber(years)+":"+months%12+":"+formatNumber(days%30)+":"+formatNumber(hours%24)+":"+formatNumber(minutes%60)+":"+formatNumber(duration%60)+" For Graduation";
    duration--;
    if(duration<=0){
        clearInterval(updateInterval);
        document.getElementById('gradTime').innerHTML = "Congratulation!!";
    }
}

function formatNumber(number) {
    return ('0' + number).slice(-2);
}

function clearMe(e){
    if(e.value=="Enter your user name here"){
        e.value=""
    }
}