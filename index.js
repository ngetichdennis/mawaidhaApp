document.addEventListener("DOMContentLoaded", () => {
const adviceText = document.getElementById("motivation-text");
const getAdvice=document.getElementById("getAdvice-btn");
const likeBtn=document.getElementById("like-btn")
  // Function to fetch random advice from the API
async function fetchRandomAdvice(){
    try{
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        adviceText.innerText=data.slip.advice;
    } catch (error){
        console.error("Error fetching advice:", error);
    }
}
  // Function to fetch data from db.json
async function fetchDataFromDB() {
    try {
        const response = await fetch('DB.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data from db.json:', error);
    }
}
  // Function to update likes and comments in db.json using POST
async function updateDB(likes) {
    try {
        await fetch('http://localhost:3000/likes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({likes }),
                });
    } catch (error) {
        console.error('Error updating db.json:', error);
    }
}
 // Event listener for the "get Advice" button
getAdvice.addEventListener('click', fetchRandomAdvice);

 // Event listener for the "Like" button
 likeBtn.addEventListener('click', async function () {
    const data = await fetchDataFromDB();
    const updatedLikes = data.likes+1;
    likeBtn.innerText =(`likes ${updatedLikes}`);

    console.log('Advice Liked!');
   // Update DB.json
    updateDB(updatedLikes);


});



});
