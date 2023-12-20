//import React from "react";
import { request } from "./api";

const baseUrl = "http://localhost:3001"

function signUp(input){
    return request(`${baseUrl}/singup`, {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
        name: input.name, 
        avatar: input.avatar, 
        email: input.email, 
        password: input.password 
    }), 
    })
}
//2nd terminal - express 
//3rd trminal - db brew services run mongodb-community@5.0

function signIn(input){
    return request(`${baseUrl}/singup`, {
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

export const auth = {
    signUp,
    signIn
}