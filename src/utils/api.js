const baseUrl = "http://localhost:3001";

//GET https://localhost:3001/items

function checkResponse(res) {
  if (res.ok) {
    console.log(res);
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

export function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

function getItems() {
  return request(`${baseUrl}/items`, {
    headers: {
      "Content-type": "application/json",
    },
  });
}
//POST https://localhost:3001/items
function addItems(input) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: input.name,
      weather: input.weather,
      imageUrl: input.imageUrl,
    }),
  });
}

function removeItem(id) {
  return request(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
}

export const api = {
  getItems,
  addItems,
  removeItem,
};
