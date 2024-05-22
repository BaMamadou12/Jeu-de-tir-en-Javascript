let container = document.querySelector('.container');
let btn = document.querySelector('.start_btn');
let scoreContainer = document.querySelector('.score');
let timeContainer = document.querySelector(".time");

btn.onclick = function() {
    let score = 0;
    let time = 30; // Set a time limit for the game
    container.innerHTML = "";
    
    let interval = setInterval(function showTarget() {
        // Creation de la cible
        let target = document.createElement('img');
        target.id = 'target';
        target.src = 'silly.png';
        container.appendChild(target);
        target.style.top = Math.random() * (500 - target.offsetHeight) + 'px';
        target.style.left = Math.random() * (500 - target.offsetWidth) + 'px';
        
        // Make the target clickable
        target.onclick = function() {
            score += 1;
            target.remove();
            scoreContainer.innerHTML = `Score: ${score}`;
        };
        
        // Faire disparaitre la cible
        setTimeout(function() {
            target.remove();
        }, 1500); // Adjust the time the target stays visible
        
        // Update time and display
        time -= 1;
        timeContainer.innerHTML = `Temps: ${time}`;
        
        // Fin du jeu
        if (time === 0) {
            clearInterval(interval);
            container.innerHTML = 'Le jeu est terminé';
        }
    }, 1200);
}
