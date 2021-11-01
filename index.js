// Check if a string(first argument, str) ends with the given targeting string(second argument, target).
// Use substring methods

function confirmEnding(str, target) {
  console.log(`str: ${str.length}`)
  console.log(`target: ${target.length}`)
  console.log(str.slice(str.length - target.length))
  return str.slice(str.length - target.length) === target;
}

// Using regex
function confirmEnding2(str, target) {
  let re = new RegExp(target + "$", "i");

  return re.test(str);
}



confirmEnding2("He has to give me a new name", "name");