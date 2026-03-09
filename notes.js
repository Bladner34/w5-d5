'use strict',

//console.log("hello");<1. Always check it is linked correctly and working.
//2. Helper functoin example (for strings)
function buildEmail(firstName, lastName) {
  const domain = "@gmail.com";
  const userName = firstName.charAt(0) + lastName;
  return userName + domain;
  console.log(firstName.charAt(0) + lastName);
}
console.log(buildEmail("Brittnee", "Ladner"));
