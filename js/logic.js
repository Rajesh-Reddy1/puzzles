
const challenges = [
    {
        level: 1,
        description: "Find the hidden Sentence in the image.",
        imageUrl: "images/level1.webp",
        ans: "look in your red shoes!"
    },
    {
        level: 2,
        description: "I found this in red shoes. \n Look at the image and find the Rhyming Word ",
        imageUrl: "images/level2.webp",
        ans: "stool"
    },
    {
        level: 3,
        description: "Find the text present in image to puzzle find the teasure",
        imageUrl: "images/level3.jpg",
        ans: "the clue is under your desk"
    },
    {
        level: 4,
        description: "Okay, I looked under my desk, and I found this; it's a rebus. So take the word BOOK and replace the B with an L . . .",
        imageUrl: "images/level4.webp",
        ans: "cat food"
    },
    {
        level: 5,
        description: "crack the word which used in baking the food and clue in the image",
        imageUrl: "images/level5.webp",
        ans: "microwave"
    },
    {
        level: 6,
        description: "Observe the image and find the pieces present in it",
        imageUrl: "images/level6.webp",
        ans: "195"
    },
    {
        level: 7,
        description: "I got the answer 195, which told me to go to the stairs. This next clue appears to be written in some sort of code. Are those dots and dashes?",
        imageUrl: "images/level7.webp",
        ans: "bookshelf"
    },
    {
        level: 8,
        description: "I cracked the code: Go to the bookshelf. Now it looks like I have to do a maze",
        imageUrl: "images/level8.webp",
        ans: "what was in my coat pocket"
    },
    {
        level: 9,
        description: "slove the puzzle to win the Treasure",
        imageUrl: "images/level9.webp",
        ans: "plant"
    }

]


// Keep track of the current challenge
let currentChallengeIndex = 0;
var Score = 0;
document.getElementById("score").innerHTML = Score;


// Get references to the challenge container and next button
const challengeContainer = document.querySelector("#challenge-container");
const nextButton = document.querySelector("#next-button");
const PrevButton = document.querySelector("#prev-button");
const Answer = document.getElementById("Answer");


// Function to show the current challenge
function showChallenge() {
    const challenge = challenges[currentChallengeIndex];

    challengeContainer.innerHTML = "";


    const levelHeading = document.createElement("h2");
    levelHeading.textContent = `Level ${challenge.level}`;
    challengeContainer.appendChild(levelHeading);

    // Create and add a paragraph for the challenge description
    const descriptionParagraph = document.createElement("a");
    descriptionParagraph.textContent = challenge.description;
    challengeContainer.appendChild(descriptionParagraph);

    // Add additional elements based on the challenge type
    if (challenge.imageUrl) {
        // Create and add an image for the challenge
        const challengeImage = document.createElement("img");
        challengeImage.src = challenge.imageUrl;
        challengeContainer.appendChild(challengeImage);
    } else if (challenge.riddle) {
        // Create and add a paragraph for the riddle
        const riddleParagraph = document.createElement("p");
        riddleParagraph.textContent = challenge.riddle;
        challengeContainer.appendChild(riddleParagraph);
    } else if (challenge.task) {
        // Create and add a paragraph for the task
        const taskParagraph = document.createElement("a");
        taskParagraph.textContent = challenge.task;
        challengeContainer.appendChild(taskParagraph);
    }
}

// Function to handle clicking on the next button
function onNextButtonClick() {
    // Increment the current challenge index
    // currentChallengeIndex++;

    // Check if there are more challenges
    if (currentChallengeIndex < challenges.length) {
        // Show the next challenge
        showChallenge();
        // myFunction();
        document.getElementById("answer").value = "";
    } else {
        // Show a message indicating that all challenges have been completed
        alert("Congratulations! You have completed all challenges.");
    }
}

function onPreviousButtonClick() {
    // Increment the current challenge index

    // Check if there are more challenges
    if (currentChallengeIndex > 0) {
        currentChallengeIndex--;
        // Show the next challenge
        showChallenge();
    }
}

// Add an event listener to the next button
// nextButton.addEventListener("click", onNextButtonClick);
function myFunction() {
    var input = document.getElementById("answer").value;
    var modi = input.toLowerCase();

    // document.getElementById("output").innerHTML = input;
    var a = challenges[currentChallengeIndex].ans;


    console.log(input);
    console.log(modi == a)

    if (modi.length == 0) {
        alert("Please find the clue..!");
    }

    else if (modi == a) {
        alert("Answer is Correct and find the Next Clue");
        Score += 1;
        document.getElementById("score").innerHTML = Score;
        nextButton.addEventListener("click", onNextButtonClick);
        currentChallengeIndex++;
        showChallenge();
        document.getElementById("answer").value = "";


    }
    else {
        alert("Answer is Incorrect..!");

    }
}

    function startAgain(){
        currentChallengeIndex=0;
        showChallenge()
    }



PrevButton.addEventListener("click", onPreviousButtonClick);
showChallenge();