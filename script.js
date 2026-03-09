'use strict'; 

const API_KEY = ""; 
const userInput = document.getElementById("userInput");
document.getElementById(userInput).textContent = " ";
console.log(userInput); 

async function getKey(){
    try { 
        const res = await fetch ("", {method: "GET"})
        if (!res.ok) throw new Error ("did not get key")
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}
async function getData(){
    try {
        const res = await fetch("", {method: "POST"})
        if (!res.ok) throw new Error ("error sending data")
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

async function main(){
    try {
        
    } catch (error) {
        
    }
}

function render(){
    
}
main()
render()