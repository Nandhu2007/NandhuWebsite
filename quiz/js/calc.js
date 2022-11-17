
var input = "";
var input2 = 0;
var ans
results=0;
var operator;

function plus(){
    operator="add"

    console.log(input)
    console.log(input2)
    input2 = parseInt(input) + input2 
    results =  input2
    console.log(results)
    input=""
    document.getElementById("display").innerHTML=(input);

}
function multiply() {
    operator="multiply"

    console.log(input)
    console.log(input2)
    if(input2 ==0 ) {
        input2 = parseInt(input) * 1
    }
    else { 
    input2 = parseInt(input) * input2 
    }
    results =  input2
    console.log(results)
    input=""
    document.getElementById("display").innerHTML=(input);
}
function subtract(){
    operator="sub"

    console.log(input)
    input2 = parseInt(input)- input2
    results=input2;
   
    input=""
    document.getElementById("display").innerHTML=(input);

  
      
}
function divide() {
    operator="divide"

    console.log(input)
    console.log(input2)
    if(input2 ==0 ) {
        input2 = parseInt(input) / 1
    }
    else { 
    input2 = parseInt(input) / input2 
    }
    results =  input2
    console.log(results)
    input=""
    document.getElementById("display").innerHTML=(input);
}
function C(){
    input2 = 0;
    input ="";
    document.getElementById("display").innerHTML= "";

    


}

function equal(){
    switch(operator){
        case("add"):{
           console.log(results)
           ans = results+parseInt(input);
           document.getElementById("display").innerHTML=(ans);
           operator=""
           input = ans;
           input2=0;
           break;

        }
        case("sub"): {
           ans = results-parseInt(input);
           document.getElementById("display").innerHTML=(ans);
           operator=""
           operator=""
           input = ans;
           input2=0;
           break;

        }
        case("multiply"):{
            ans = results*parseInt(input);
            document.getElementById("display").innerHTML=(ans);
            operator=""
            operator=""
            input = ans;
            input2=0;
            break;
        }
        case("divide"):{
            ans = results/parseInt(input);
            document.getElementById("display").innerHTML=(ans);
            operator=""
            operator=""
            input = ans;
            input2=0;
            break;
        }
       

        
    }
  
}



function numberbutton(value){
    
    input = input +value;
     document.getElementById("display").innerHTML=(input);




}
// function number1(){

//     {
//         input= input + "1";
//         document.getElementById("display").innerHTML=(input);
//     }
// }
// function number2(){
//     {
//         input= input + "2";
//         document.getElementById("display").innerHTML=(input);
//     }
// }
// function number3(){
//     {
//         input= input + "3";
//         document.getElementById("display").innerHTML=(input);
//     }
// }
// function number4(){
//     {
//         input= input + "4";
//         document.getElementById("display").innerHTML=(input);
//     }
// }
// function number5(){
//     {
//         input= input + "5";
//         document.getElementById("display").innerHTML=(input);
//     }
// }
// function number6(){
//     {
//         input= input + "6";
//         document.getElementById("display").innerHTML=(input);
//     }
// }
// function number7(){
//     {
//         input= input + "7";
//         document.getElementById("display").innerHTML=(input);
//     }
// }
// function number8(){
//     {
//         input= input + "8";
//         document.getElementById("display").innerHTML=(input);
//     }
// }
// function number9(){
//     {
//         input= input + "9";
//         document.getElementById("display").innerHTML=(input);
//     }
// }
// function number0(){
//     {
//         input= input + "0";
//         document.getElementById("display").innerHTML=(input);
//     }
// }