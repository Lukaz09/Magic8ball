//alert("Hi");

function shake() {
    var myFortune =getFortune()
    displayFortune(myFortune)


}

function displayFortune(fortune) {
   // alert(fortune)
    document.getElementById("fortune-display").innerHTML = fortune
}
function getFortune() {
    var listOfFortunes =getListOfFortunes()
    var randomNumber = getRandomNumberLessThan(listOfFortunes.length)

return listOfFortunes[randomNumber]
    return "I don't speak yappanese, sorry cuh."
}

function getListOfFortunes(){
    return ["yes","no","maybe","take a shower and ask tommorow. You smell really bad."]
}

function getRandomNumberLessThan (max) {
   var randomDecimal = (Math.random() * max)
   return Math.floor(randomDecimal)
}