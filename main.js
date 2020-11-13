
// This is Hangman

let randomArray = ["kind","frog","please","thread","tiresome","wind","fail","program","pizzas","momentous","grain","save","habitual","quickest","belligerent","likeable","tie","scorch","tremendous","head","warm","vast","glossy","irritate","barbarous","living","scatter","vulgar","suffer","egg","perpetual","abounding","moon","medical","delight","lyrical","splendid","interfere","kaput","arm","hulking","abundant","ambiguous","quartz","limping","play","succinct","run","giant","spotted","inquisitive","earthy","step","useless","righteous","extra-small","connect","lunch","truculent","fairies","free","frame","redundant","straight","vase","noxious","imagine","crazy","applaud","receipt","real","tenuous","stir","unsightly","debonair","good","history","dogs","plant","company","sad","detailed","powerful","secretive","punish","innate","dream","wing","abhorrent","yellow","lick","brainy","tender","guard","mushy","cautious","ocean","milky","office","bake"]

let randomNumber = Math.floor(Math.random() * 100)


//InputSolution here
let hangManSolution = randomArray[randomNumber]

//Turn it into an array
let solutionSplit = hangManSolution.split('')

//This is where correct guesses will be placed
let hangMan = []

//This is all wrong answer info
let wrongGuesses = []
let guessesLeft = 8
let guessCounter = 0
let win = false

//This makes hangMan the same size as the solution, in all underscores (to be replaced by right answers)
solutionSplit.forEach(function(element, index){
    hangMan[index] = "_"
})

console.log(hangMan)
document.getElementById("theBoard").innerText = hangMan

//This is where the game happens
let hangManGame = () => {

    //prevents you from playing if you lost
     if (guessesLeft <= 0){
        console.log("you already lost")
        return
    }

    if (win == true){
        console.log("you already won")
        return
    }

    let input = document.getElementById("inputBox").value

    let guess = input.toLowerCase()

    let found = 0
    //This checks to see if the input answer is incorrect
    //if returned undefined, then element was not found in solution, meaning wrong answer
    found = solutionSplit.find(element => element == guess)
    if (found == undefined){
        //Shows the user which letters they have guessed incorectly
        wrongGuesses.push(guess)
        document.getElementById("wrongLetters").innerText = wrongGuesses
        //Takes chances away

        guessesLeft--
        guessCounter++
        console.log(`${wrongGuesses} is incorrect. You have ${guessesLeft} chances left`)

        let visual = document.getElementById("theMan")

        visual.style.backgroundImage = `url('./hangPics/${guessCounter}.png')`
        //You Lose

        if (guessesLeft <= 0){
            document.getElementById("theBoard").innerText = hangManSolution
            return console.log(`You Lose, the correct answer was ${hangManSolution}`)
        }
   
        return 
    }

    //Shows the user which answer they answered correctly
    solutionSplit.forEach(function(element, index){
        if (guess == element){
            hangMan[index] = guess
        }
    })

    //If no more underscores are left, then you win!
    let underscoreChecker = hangMan.find(element => element == "_")
    if (underscoreChecker == undefined){
        console.log(hangMan)
        let visual = document.getElementById("theMan")
        visual.style.backgroundImage = `url('./hangPics/win.png')`
        win = true
        document.getElementById("theBoard").innerText = hangMan
        return console.log("You Win")
    }
    document.getElementById("theBoard").innerText = hangMan
    console.log(hangMan)
}



resetManGame = () => {
    location.reload()
}

