//claluatrice programe

const display=document.getElementById("headerofcalcul");


function appendToDisplay(input){
    headerofcalcul.value+=input;

}



function clearDisplay(){
dheaderofcalcul.value="";
}



function calculate(){
try{
    dheaderofcalcul.value=eval(dheaderofcalcul.value);

}
catch(error){
    headerofcalcul.value="Error";
};

}


