const myForm = document.getElementsByName("myForm")[0];
const area = document.querySelector(".area");
let list = [];

function create(){
    if(myForm[0].value!=""){
        list.push(myForm[0].value);
        var label = document.createElement("label");
        var checkbox = document.createElement("input");
        var closeIcon = document.createElement("i");
        var text= document.createElement("span");
        text.innerHTML = myForm[0].value;
        checkbox.type = "checkbox";
        closeIcon.className = "fa-solid fa-xmark pointer";
        checkbox.className = "pointer";
        closeIcon.onclick = function(){
            label.remove();
        };
        label.appendChild(checkbox);
        label.appendChild(text);
        label.appendChild(closeIcon);
        area.appendChild(label);
        myForm[0].value="";
        checkbox.addEventListener('change', function(){
            if(checkbox.checked){
                text.style.textDecoration = "line-through";
            }else{
                text.style.textDecoration = "none";
            }
        })
    }else{
        alert("empty input not allowed!")
    }
}
