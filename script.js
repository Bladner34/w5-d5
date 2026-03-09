'use strict'; 

function addEventListener("button1", "click", function(m)){
    setText("message", "You typed: " + "userInput");
}

async function getKey(){
    try { 
        const res await fetch ("", {method: "GET"})
        if (!res.ok) throw new Error ("did not get key")
        const data = await res.json()
        return data = 
    } catch (error) {
        console.error(error)
    }
}

async function main(){
    try {
        
    } catch (error) {
        
    }
}
main()