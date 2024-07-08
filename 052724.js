//1
//  var firstName="Sanusi"
//  var lastName="Abdullahi"
//  let fullName=firstName + " " + lastName;
// document.write(fullName);

//2
// firstName="Sanusi"
// document.write(firstName.length);

//3
// const a="SANUSI"
// document.write(a.charAt(5));

//4 
//const a="ABDULLAHI"
//document.write(a.charCodeAt(8));

//5
// a="Muhammad"
// b=" Sanusi"
// c=a+b;
// document.write(c);

//6
// a=12
// b=20
// c="50"
// d=Number(c);
// e=a+b+c;
// document.write(e);

//7
 var states=["Abuja","Benin","CrossRivers","Delta","Kano","Kaduna","Ilorin","Taraba","Yobe","Lagos"];
// let x=states.toString()
// document.write(x[0])
// document.write(states[0])

// let p=states[states.length -1]
// document.write(p)

var text="<ul>"
const stateslen=states.length;
var a=0
for (a; a< stateslen; a++){
    text +=states[a]
    text +="<li>" + states[a]+
    
}
document.getElementById("List")




