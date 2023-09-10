const buttonsE1 = document.querySelectorAll("button");
const InputFieldE1=document.getElementById("result");
console.log(buttonsE1);

for(let i=0; i<buttonsE1.length; i++){
    buttonsE1[i].addEventListener('click',()=>{
        const buttonValue =buttonsE1[i].textContent;
        if (buttonValue === 'C') {
            clearResult();  
        }else if(buttonValue === '='){
            calculateResult();
        }else {
            appendValue(buttonValue);
        }
    })
};
function clearResult(){
  InputFieldE1.value ="";
};
function calculateResult(){
    InputFieldE1.value = eval(InputFieldE1.value)

};
function appendValue(buttonValue){
    InputFieldE1.value += buttonValue;
};