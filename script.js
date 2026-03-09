'use strict'; 

const API_KEY = "Your_API_Key_Here"; 
const userInput = document.getElementById("userInput");
const submitButton = document.getElementById("button1");
const mainEl = document.getElementById("mainEl");

submitButton.addEventListener("click", async()=>{
    console.log(userInput.value);
    const result = await getKey(userInput.value);
    console.log(result.name); 
    //result.name filters information just down to the name. 
}) //userInput.value- grabs only the information inside the text area and not the html element. 

//By setting the pokemonName parameter inside the getKey function, it allows us to pull information about a certain pokemon. The variable is attached to the end of the URL, telling the URL to pull information about whatever pokemon is named. Setting the userInput.value inside the getKey function with the result variable gives the user the ability to pull information about a certain pokemon theyve named inside the text area. 

//back ticks with the URL allows us to make a string of the URL and include a variable with it. pokemonName inside getKey function is a parameter. 
async function getKey(pokemonName){
    try { 
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {method: "GET",});
        if (!res.ok) throw new Error ("did not get key")
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}


function render(){
    const h2 = document.createElement("h2"); 
    h2.textContent = result.pokemonName
    const descP = document.createElement("p"); 
}

render()