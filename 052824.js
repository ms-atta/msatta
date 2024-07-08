var person={
  name:"Sanusi",
  height:"6 feet",
  sex:"Male",
  weight:" 90kg",}
  document.write(person.name);
  document.write(person["weight"])

var table="<table>"
    table+="<tr>"
    table+="<th>"
    table+="Property Name";
    table+="</th>"
    table+="<th>"
    table+="Property Name";
    table+="</th>"
    table+="</tr>"
    table+="<td>"
    table+="Name";
    table+="</td>";
    table+="<td>"+person.name+"</td>";
    table+="<td>"+person.height+"</td>";
    table+="</tr>"

document.write(table);

var cars=[{name:"Toyota", model:"Hilux"},
          {name:"Koenigsegg", model:"Jesko"},
          {name:"Bugatti", model:"Veyron"}]
document.write(cars[0].name)
document.write(cars[0].model)

document.write(cars[1].name)
document.write(cars[1].model)

document.write(cars[2].name)
document.write(cars[2].model);

// var cars=[{person={name:"Sanusi",height:"6 feet",sex:"Male",weight:" 90kg"},
        //    cars={name:"Toyota", model:"Hilux"},
        //    states={"Abuja","Benin","CrossRivers","Delta",}}]

var PeopleAndCars=[{person:{name:"Michelle", height:"5ft"},
                    cars:{brand:"Honda", model:"Accord"}}]
document.write(PeopleAndCars[0].person.name)
document.write(PeopleAndCars[0].person.height)
document.write(PeopleAndCars[0].cars.brand)
document.write(PeopleAndCars[0].cars.model)