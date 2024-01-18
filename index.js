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
  // Function to fetch data from db.json
async function fetchDataFromDB() {
    try {
        const response = await fetch('db.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data from db.json:', error);
    }
}
  // Function to update likes and comments in db.json using POST
async function updateDB(likes, comments) {
    try {
        await fetch('db.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json',
            },
            body: JSON.stringify({ likes, comments }),
        });
    } catch (error) {
        console.error('Error updating db.json:', error);
    }
}


});
