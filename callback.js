const getFromCallback = (callBack) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data=>callBack(data,null))
    .catch(error=>callBack(null,error))
};

const handleData =(data,error) =>{
    if(error){
        console.log(`Error Occured: ${error}`)
        return
    }

    console.log(data)

}

getFromCallback(handleData)