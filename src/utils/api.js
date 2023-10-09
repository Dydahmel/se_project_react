const baseUrl = 'http://localhost:3001'; 

//GET https://localhost:3001/items 

function _checkResponse(res){
    if(res.ok){
        console.log(res)
        return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
}

function _request(url, options){
    return fetch(url, options).then(_checkResponse)
}

function getItems(){
    return _request(`${baseUrl}/items`, {
        headers:{
            "Content-type" : "application/json"
        }
    })
}
//POST https://localhost:3001/items 
function addItems(input){
    return _request(`${baseUrl}/items`, {
        method: "POST",
        headers:{
            "Content-type" : "application/json"
        },
        body: JSON.stringify({
            name: input.name,            
            weather: input.weather,
            imageUrl: input.imageUrl
        }),
    })
}

function removeItem(id){
    return _request(`${baseUrl}/items/${id}`, {
        method: "DELETE",
        headers:{
            "Content-type" : "application/json"
        }
    })
}

const api ={
    getItems,
    addItems,
    removeItem

}

export default api