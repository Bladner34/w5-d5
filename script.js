'use strict'; 

const API_KEY = ""; 
const userInput = document.getElementById("userInput");
const submitButton = document.getElementById("button1");

submitButton.addEventListener("click", async()=>{
    console.log(userInput.value);
    const result = await getKey();
    console.log(result);
})

async function getKey(){
    try { 
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto", {method: "GET",});
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