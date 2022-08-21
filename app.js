const birthDate=document.querySelector("#date-input");
const luckyNumber=document.querySelector("#lucky-number");
const checkButton=document.querySelector("#check-btn");
const outputText=document.querySelector("#output-text");

function compareValues(sum,luckyNumber)
{
    if(sum%luckyNumber==0)
    {
        outputText.innerText=("Your birthday is lucky");
    }
    else{
        outputText.innerText=("Your birthday is not so lucky");
    }
}
  



function calculateSum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let index=0;index<dob.length;index++)
    {
        sum=sum+Number(dob.charAt(index));
    }
    return sum;
  }  


function checkBirthdateIsLucky()
{
 const dob=birthDate.value;
 const sum=calculateSum(dob);
 compareValues(sum,luckyNumber.value);

}

checkButton.addEventListener('click',checkBirthdateIsLucky);