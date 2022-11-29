var enteredDob = document.querySelector("#date-of-birth")
var enteredLuckyNumber = document.querySelector("#lucky-number")
var checkButton = document.querySelector("#check-lucky-dob")
var outputInfo = document.querySelector("#output-info")
var successgif = document.querySelector("#success")
var failureGif = document.querySelector("#failure")


// checkButton.addEventListener("click", function checkIfWeAreGettingValues(){
//     console.log(enteredDob.value+" , "+enteredLuckyNumber.value)
// })

checkButton.addEventListener("click", checkIfBirthDateIsLucky)

function checkIfBirthDateIsLucky(){
    var sumOfDate = findSumOfTheDob(enteredDob)
    console.log("SD:"+sumOfDate)
    console.log("LN: "+enteredLuckyNumber.value)

    if(enteredLuckyNumber.value>0){

    if((sumOfDate % enteredLuckyNumber.value)==0){
        outputInfo.innerText = "Yes! Your's is a lucky birth date..................."
        successgif.style.display = "block"
        failureGif.style.display = "none"
        
    }
    else{
        outputInfo.innerText = "Oops! Your birthday is not so lucky.................."
        failureGif.style.display = "block"
        successgif.style.display = "none"
    }
 }
 else{
    outputInfo.innerText = "Try again! Please enter a valid lucky number..."
 } 

}

function findSumOfTheDob(enteredDob){

    var dateOfBirth = enteredDob.value
    dateOfBirth = dateOfBirth.replaceAll("-","")
    var sum = 0;

    for(var i = 0; i<dateOfBirth.length; i++){
             sum = sum + Number(dateOfBirth.charAt(i))
             console.log(sum)
    }
    return sum;

}