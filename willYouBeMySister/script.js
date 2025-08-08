const yesButton = document.querySelector('#yes-btn'); // getting yes button
const noButton = document.querySelector('#no-btn'); // getting no button
const pikaGif = document.querySelector('.pika-gif'); // getting pika-gif

// All the msgs for no button
const noMsgs = [
    'Are you sure?',
    'Pookie Please',
    'Click Yes',
    'Don’t do this',
    'Pookie PLEASE',
    'Think again 🥺',
    'But I made cookies 🍪',
    'You’ll regret this 😏',
    'Say yes, it’s destiny ✨',
    'Come on… pretty please? 💖',
    'Don’t break my heart 💔',
    'One “Yes” won’t hurt 😌',
    'I’ll tell Pikachu on you ⚡',
    'Free hugs if you click Yes 🤗',
    'Be a good human 😇'
];
// all the gifs address for sad pika
const sadPikas = ["assests/pikachu-sad1.gif", "assests/pikachu-sad2.gif", "assests/pikachu-sad3.gif", "assests/pikachu-sad4.gif"]
// gif address for angry pika
const angryPikachu = ["assests/pikachu-angry1.gif", "assests/pikachu-angry2.gif", "assests/pikachu-angry3.gif", "assests/pikachu-angry4.gif"]; 

// minScale of no button
const minScale = 0.7;
// maxScale of yes button
const maxScale = 7;

// current scales of yes and no button
let currentNoScale = 1;
let currentYesScale = 1;


// Redirecting to yay.html when "Yes" is clicked
yesButton.addEventListener("click", ()=> {
    window.location.href = "yay.html";
});

//When No button is clicked
// Shrinking logic
noButton.addEventListener("click", ()=>{
    // Showing random messages in no button
    noButton.innerHTML = noMsgs[Math.floor(Math.random() * noMsgs.length)];
    
    // Shrink No button if current size is greater than min size
    if(currentNoScale > minScale && currentYesScale < maxScale){
        // showing sad pika
        pikaGif.setAttribute('src', sadPikas[Math.floor(Math.random()* sadPikas.length)]);

        // shrinking no button
        currentNoScale -= 0.05;
        noButton.style.transform = `scale(${currentNoScale})`;

        // growing yes button
        currentYesScale += 1;
        yesButton.style.transform = `scale(${currentYesScale})`;
        
        // Pushing no button to left as yes grows, 20px is basically the size by which yes is growing
        noButton.style.marginLeft = `${(currentYesScale - 1) * 20}px`;
    }
    // Jump for the first time
    else{
        // showing angry pikachus
        pikaGif.setAttribute("src", angryPikachu[Math.floor(Math.random() * angryPikachu.length)]); // Changing gif to angry pikachu
        
        // Generating random coordinates setting values
        const offsetX = Math.floor(Math.random() * 200) - 100;
        const offsetY = Math.floor(Math.random() * 200) - 100;
        noButton.style.position = 'relative';
        noButton.style.left = `${offsetX}px`;  
        noButton.style.top = `${offsetY}px`;  
        noButton.style.right = `${offsetY}px`;  
        noButton.style.bottom = `${offsetX}px`;  
    }
});

// Jump Logic once button is small enough
noButton.addEventListener("mouseover", ()=>{
    if(currentNoScale <= minScale){
        // showing angry pikachus
        pikaGif.setAttribute("src", angryPikachu[Math.floor(Math.random() * angryPikachu.length)]); // Changing gif to angry pikachu
        
        // Generating random coordinates setting values
        const offsetX = Math.floor(Math.random() * 200) - 100;
        const offsetY = Math.floor(Math.random() * 200) - 100;
        noButton.style.position = 'relative';
        noButton.style.left = `${offsetX}px`;  
        noButton.style.top = `${offsetY}px`;  
        noButton.style.right = `${offsetY}px`;  
        noButton.style.bottom = `${offsetX}px`;  
    }
});
