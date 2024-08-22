const questions = [
    "Bu kişi gerçek mi?",
    "Bu kişi bir erkek mi?",
    "Bu kişi bir sanatçı mı?",
    "Bu kişi Amerika'da mı yaşıyor?"
];

let currentQuestionIndex = 0;
let possibleAnswer = "Belki ünlü bir erkek sanatçı olabilir...";

function answer(response) {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        document.getElementById("question").textContent = questions[currentQuestionIndex];
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("question").style.display = "none";
    document.getElementById("buttons").style.display = "none";
    document.getElementById("result").textContent = `Tahminim: ${possibleAnswer}`;
}
