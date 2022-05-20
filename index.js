// Code your solution here
function findMatching(array, string) {
   const newList = array.filter(drivers => drivers.toLowerCase() === string.toLowerCase())
   return newList
}

function fuzzyMatch(array, string) {
    
}
