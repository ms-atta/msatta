function addItem(){
    var input= document.getElementById("userInput").value
    let list=document.getElementById("itemList")
    let itemElement = document.createElement("li");
let itemText = document.createTextNode(input);
itemElement.appendChild(itemText)
list.appendChild(itemElement)
let ItemElement = document.createElement("button");
let ItemText = document.createTextNode("Done");
ItemElement.appendChild(ItemText)
list.appendChild(ItemElement)
let Itemelement = document.createElement("button");
let Itemtext = document.createTextNode("Delete");
Itemelement.appendChild(Itemtext)
list.appendChild(Itemelement)
}