const baseUrl = 'http://localhost:3001'; 

//GET https://localhost:3001/items 

function _checkResponse(res){
    if(res.ok){
        return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
}

function _request(url){
    return fetch(url).then(_checkResponse)
}

function getItems(){
    return _request(`${baseUrl}/items`, {
        headers:{
            "Content-type" : "aplication/json"
        }
    })
}
//POST https://localhost:3001/items 
function addItems({name, imageUrl, weather}){
    return _request(`${baseUrl}/items`, {
        method: "POST",
        headers:{
            "Content-type" : "aplication/json"
        },
        body: JSON.stringify({
            name,
            imageUrl,
            weather
        }),
    })
}

function removeItem(id){
    return _request(`${baseUrl}/items${id}`, {
        method: "DELETE",
        headers:{
            "Content-type" : "aplication/json"
        }})
}

const api ={
    getItems,
    addItems,
    removeItem

}

export default api