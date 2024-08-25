function camelCase(str) {
    const words = str.split(/[^a-zA-Z]/);
    let camelCaseStr = words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
        camelCaseStr += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }

    return camelCaseStr;
}
const inputStr = "cats AND*Dogs-are Awesome";
const outputStr = camelCase(inputStr);
console.log(outputStr);  
