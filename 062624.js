function createData(){
    const title = document.getElementById("title").value
    const description = document.getElementById("description").value
    const userId = document.getElementById("userId").value
    try {
        let url = "https://jsonplaceholder.typicode.com/todos"
        const options = {
            method:"POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title: title,
                body: description,
                userId: userId
            })
        };
        fetch(url,options)
        .then((response)=>response.JSON())
        .then((data)=>{
            console.log(data)
        })
    }catch(error){
        console.log(error)
    }
}
