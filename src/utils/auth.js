//import React from "react";
import { request } from "./api";

const baseUrl = process.env.NODE_ENV === "production" 
? "https://api.wtwr-project.chickenkiller.com"
: "http://localhost:3001";

function signUp(input) {
  return request(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: input.name,
      avatar: input.avatar,
      email: input.email,
      password: input.password,
    }),
  });
}

function signIn(input) {
  return request(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: input.email,
      password: input.password,
    }),
  });
}

function checkCurrentUser(token) {
  return request(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}

function updateUser(input, token) {
  return request(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: input.name,
      avatar: input.avatar,
    }),
  });
}

export const auth = {
  signUp,
  signIn,
  checkCurrentUser,
  updateUser,
};
