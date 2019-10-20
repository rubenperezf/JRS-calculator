
var digit = "";
var accumulated=0;
var operationAdd= false;
var operationSubtract = false;
var firstSubtract = true;
var operationMultiply = false;
var firstMultiply =true;
var operationDivide = false;
var firstDivide = true;


document.getElementById("display").value="Try my crazy calculator!  :)";
function displayNumbers(number) {
    document.getElementById("display").value=digit+number;
    digit = document.getElementById("display").value;
}

function restart () {
    digit=0;
    accumulated=0;
    document.getElementById("display").value=0
}
function add(){
  
    if(operationSubtract){
     accumulated=accumulated-parseInt(digit);
     document.getElementById("display").value=accumulated;
  
  
    }else if(operationMultiply){
     accumulated=accumulated*parseInt(digit);
     document.getElementById("display").value=accumulated;
     
    }else if(operationDivide){
     accumulated=accumulated/parseInt(digit);
     document.getElementById("display").value=accumulated;
     
    }else{
     accumulated=accumulated+parseInt(digit);
     document.getElementById("display").value=accumulated;
     digit="";
    }
    
    digit="";
    operationAdd=true;
    operationSubtract=false;
    firstSubtract=false;
    operationMultiply=false;
    firstMultiply=false;
    operationDivide=false;
    firstDivide=false;
   }

function subtract(){
    if (firstSubtract==false) {

        if(operationAdd){
            accumulated=accumulated+parseInt(digit);
            document.getElementById("display").value=accumulated;
         
         
           }else if(operationMultiply){
            accumulated=accumulated*parseInt(digit);
            document.getElementById("display").value=accumulated;
            
           }else if(operationDivide){
            accumulated=accumulated/parseInt(digit);
            document.getElementById("display").value=accumulated;
            
           }else{
            accumulated=accumulated-parseInt(digit);
            document.getElementById("display").value=accumulated;
            
           }
    } else {
        accumulated = parseInt(digit);
        firstSubtract=false;
    }
    digit="";
    operationAdd=false;
    operationSubtract=true;
    operationMultiply=false;
    firstMultiply=false;
    operationDivide=false;
    firstDivide=false;
}

function multiply(){
    if (firstMultiply==false) {

        if(operationAdd){
            accumulated=accumulated+parseInt(digit);
            document.getElementById("display").value=accumulated;
         
         
           }else if(operationSubtract){
            accumulated=accumulated-parseInt(digit);
            document.getElementById("display").value=accumulated;
            
           }else if(operationDivide){
            accumulated=accumulated/parseInt(digit);
            document.getElementById("display").value=accumulated;
            
           }else{
            accumulated=accumulated*parseInt(digit);
            document.getElementById("display").value=accumulated;
            
           }
    } else {
        accumulated = 1;
        accumulated=accumulated*parseInt(digit)
        document.getElementById("display").value=accumulated;
        firstMultiply=false;
 
    }
    digit="";
    operationAdd=false;
    operationSubtract=false;
    firstSubtract=false;
    operationMultiply=true;
    operationDivide=false;
    firstDivide=false;
}

function divide(){
    if (firstDivide=false) {

        if(operationAdd){
            accumulated=accumulated+parseInt(digit);
            document.getElementById("display").value=accumulated;
         
         
           }else if(operationSubtract){
            accumulated=accumulated-parseInt(digit);
            document.getElementById("display").value=accumulated;
            
           }else if(operationMultiply){
            accumulated=accumulated*parseInt(digit);
            document.getElementById("display").value=accumulated;
            
           }else{
            accumulated=accumulated/parseInt(digit);
            document.getElementById("display").value=accumulated;
            
           }
    } else {
        accumulated=parseInt(digit)
        document.getElementById("display").value=accumulated;
        firstDivide=false;
 
    }
    digit="";
    operationAdd=false;
    operationSubtract=false;
    firstSubtract=false;
    operationMultiply=false;
    operationDivide=divide;
}




function answer() {
    if(operationAdd===true) {
        document.getElementById("display").value=accumulated+parseInt(digit);
        digit=0;
    } else if(operationSubtract===true) {
        document.getElementById("display").value=accumulated-parseInt(digit);
        digit=0;
    } else if(operationMultiply===true) {
    document.getElementById("display").value=accumulated*parseInt(digit);
    digit=1;
    } else if(operationDivide===true) {
    document.getElementById("display").value=accumulated/parseInt(digit);
    digit=1;
    }
    accumulated=parseInt(document.getElementById("display").value);
}



