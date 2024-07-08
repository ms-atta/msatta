// function validateInput(){
//     let errorText = document.getElementById("error")
//     try {
//         const inputValue = document.getElementById("userInput").value
//         if (inputValue == "")
//             throw "Input can not be empty";
//         if(isNaN(inputValue))
//             throw "Value must be a number";
//         let b=Number(inputValue);
//         if(b<10)
//             throw "Number must not be less than 10"
//         } catch (error){
//             // document.wr(error)
//         errorText.innerHTML = error;
//         errorText.style.backgroundColor="wheat"
//         errorText.style.color="brown"
//         errorText.style.padding="2%";
//         errorText.style.margin="2%"
//         errorText.style.marginLeft="20%"
//         errorText.style.border="2px solid brown";
//         errorText.style.borderRadius="30px"
//         errorText.style.width="fit-content";
//     }
// }
function createData(){
    try {
        let url = "https://jsonplaceholder.typicode.com/todos"
        const options = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type":"application/json"
            },
                body: JSON.stringify({
                    title:"Testinng API",
                    body:"Testing API using fetch method",
                    userId: 343
                })
        };
        fetch(url, options)
        .then((response) => response.json()
        .then((data) => {
              console.log(data)
        }))
    } catch (error){
        
    }
}