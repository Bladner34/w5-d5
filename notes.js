'use strict',

//console.log("hello");<1. Always check it is linked correctly and working.
//2. Helper function example (for strings)
function buildEmail(firstName, lastName) {
    const firstNameLower = firstName.toLowerCase()
    const lastNameLower = lastName.toLowerCase()
    const domain = "@gmail.com";
    const userName = firstName.charAt(0) + lastName;
    return userName + domain;
  console.log(firstName.charAt(0) + lastName);
}
//function to GET information from a source

async function getData(url, options){
    try {
        const res = await fetch(url, options)
        if(!res.ok){
            throw new Error("Error getting data")
        }
        const data = await res.json()
        return data 
    } catch (error) {
        console.error(error)
    }
}

//main function to run  them all

async function main(){
    try {
        const email = buildEmail("Brittnee", "Ladner")
        console.log(email);
        const letter = await getData()
        console.log(letter)
    } catch (error) {
        console.error(error)
    }
}
main()
