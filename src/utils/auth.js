//import React from "react";
import { request } from "./api";

const baseUrl = "http://localhost:3001"

function signUp(input){
    return request(`${baseUrl}/signup`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            name: input.name, 
            avatar: input.avatar, 
            email: input.email, 
            password: input.password 
        })
    })   
}


function signIn(input){
    return request(`${baseUrl}/signin`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({             
            email: input.email, 
            password: input.password 
        }), 
    })
}

function checkCurrentUser(token){
    return request(`${baseUrl}/users/me`,{
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`,
        } 
    })
}

export const auth = {
    signUp,
    signIn,
    checkCurrentUser
}