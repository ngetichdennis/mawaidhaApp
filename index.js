document.addEventListener("DOMContentLoaded", () => {
const adviceText = document.getElementById("motivation-text");
  // Function to fetch random advice from the API
async function fetchRandomAdvice(){
    try{
        const response=await fetch("https://api.adviceslip.com/advice");
        const data=await response.json();
        adviceText.innerText=data.slip.advice;
    } catch (error){
        console.error("Error fetching advice:", error);
    }
}
});
