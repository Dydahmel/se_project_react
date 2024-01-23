const baseUrl = "http://localhost:3001";
const token = localStorage.getItem("jwt");

//GET https://localhost:3001/items

function checkResponse(res) {
  if (res.ok) {
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
      authorization: `Bearer ${token}`,
    },
  });
}
//POST https://localhost:3001/items
function addItems(input, token) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: input.name,
      weather: input.weather,
      imageUrl: input.imageUrl,
    }),
  });
}

function removeItem(id, token) {
  return request(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}

function addCardLike(id, token) {
  return request(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}

function removeCardLike(id, token) {
  return request(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}

export const api = {
  getItems,
  addItems,
  removeItem,
  addCardLike,
  removeCardLike,
};
