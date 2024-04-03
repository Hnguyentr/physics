let outputScreen = document.getElementById("display");
//display number
function numberButton(num){
    outputScreen.value+=num;
}
// for clear and dellete
function Clear(){
    outputScreen.value = "";
}

function del(){
    outputScreen.value =outputScreen.value.slice(0,-1);
}

// operation

function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid")
    }
}
function operationButton(operat) {
    outputScreen.value+=operat;
}
