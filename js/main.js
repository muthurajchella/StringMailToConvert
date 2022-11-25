let input = "hodifhoi@#$%^&83390r080q8";

let chatchInput1 = input.replace(/[^a-zA-Z]/g, "");
console.log(chatchInput1);

let chatchInput2 = input.replace(/[^0-9]/g, "");
console.log(chatchInput2);


let chatchInput3 = input.match(/[^\w]/g, "");
console.log(chatchInput3);

