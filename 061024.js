const cars=[{ name: "Volvo", model: 2019}, {name:"Toyota", model:2014}, {name:"Camrade", model:2022},]
var jscars=[{
    // cars={ name: "Volvo", model: 2019}, {name:"Toyota", model:2014}, {name:"Camrade", model:2022}
}]
// document.write(cars[0].name)
// document.write(cars[0].model)

// document.write(cars[1].name)
// document.write(cars[1].model)

// document.write(cars[2].name)
// document.write(cars[2].model)

var text="<table>";

// text += cars[0] + "<br>";
// text += cars[1] + "<br>";
// text += cars[2] + "<br>";
text +="<tr><th>Car Name </th><th>Car Model</th></tr>";
// for(let i=0; i<cars.length; i++){
//     text +="<tr><td>" + cars[i].name + "</td>" + "<td>" + cars[i].model + "</td>" + "</tr>";
// }
// text +="</table>";
// document.write(text)
// text += cars [i];
// text=cars[i]
// document.write(cars[i].name)
// document.write(cars[i].model)
let i =0
while (i < cars.length) {
    text +="<tr><td>" + cars[i].name + "</td>" + "<td>" + cars[i].model + "</td>" + "</tr>"
    i++;
}
text += "</table>";
document.write(text)