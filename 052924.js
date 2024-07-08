const date = new Date()
function greetings(){
    let d=date.getDay();
    let day=date.getDate();
    let month=date.getMonth()
    let year=date.getFullYear();
    let hour=date.getHours();
    if(d==0){
        alert("Happy sunday") }
    if(d==1){
        alert("Happy monday") }
    if(d==2){
        alert("Happy tuesday")}
    if(d==3){
        alert("Happy wednesday")}
    if(d==4){
        alert("Happy thursday")}
    if(d==5){
        alert("Happy friday")}
    if(d==6){
        alert("Happy Saturday")}

if((d==3)&&(day<=7)){
    alert("Happy Wednesday Of The First Week Of The Month");
}
if((d==3)&&((day>=7)&&(day<=14))){
    alert("Happy Wednesdays Of The Second Week Of The Month");
}
if((d==3)&&((day>=15)&&(day<=21))){
    alert("Happy Wednesdays Of The Third Week Of The Month");
}
if((d==3)&&((day>=22)&&(day=31))){
    alert("Happy Wednesdays Of Fourth Week Of The Month");
}}
function validateData(){
    const email=document.getElementById("email");
    const username=document.getElementById("username");
    const password=document.getElementById("password");
    let usernameValue=username.value;
    let emailValue=email.value;
    let passwordValue=password.value;
    let mustExit="@";
    // alert(usernameValue + " " + emailValue + " " + passwordValue)
    if(usernameValue.length < 5){
        alert("Username Must Contain a Minimum Of 5 Letters!");
    }
    if(passwordValue.length < 8){
        alert("Password is too Small! It Must Be Atleast 8 Characters")
    }
    if(email.includes(mustExit)){
        alert("Email must include @");
    }
}
function changingValue(){
    alert("You have selected a state")
}
// greetings()
    