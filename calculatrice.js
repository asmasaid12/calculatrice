//claluatrice programe

const display=document.getElementById("headerofcalcul");


function appendToDisplay(input){
    headerofcalcul.value+=input;

}



function clearDisplay(){
headerofcalcul.value="";
}



function calculate(){
try{
    headerofcalcul.value=eval(headerofcalcul.value);

}
catch(error){
    headerofcalcul.value="Error";
};

}


