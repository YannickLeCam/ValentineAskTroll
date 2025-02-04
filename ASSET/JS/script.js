const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const gifContainer = document.getElementById("gifContainer");
const cancelButton = document.getElementById("cancel");
const messageBox = document.getElementById("message");
const question = document.getElementById("question");
const messages = [
    "Nice try but you're mine now!",
    "Nice, but you can't rn!",
    "You thought you had a choice? Haha!",
    "There's no escape, my Valentine!",
    "Forever bound by love! 💕",
    "Resistance is futile!",
    "Nice try, but it's fate!",
    "Guess what? You're stuck with me!"
];

noButton.addEventListener("click", () => {
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

yesButton.addEventListener("click", () => {
    gifContainer.style.display = "block";
    yesButton.style.display = "none";
    noButton.style.display = "none";
    cancelButton.style.display = "inline-block";
    question.style.display = "none";
});

cancelButton.addEventListener("click", () => {
    messageBox.textContent = messages[Math.floor(Math.random() * messages.length)];
    messageBox.style.display = "block";
    setTimeout(() => {
        messageBox.style.display = "none";
    }, 3000);
});