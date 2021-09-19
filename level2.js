let popped = 0;
let lives = 4;


document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloon-yellow"){
        
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "POP!";
                popped++;
                removeEvent(e);
                checkAllPopped();
    } 
    else if(e.target.className === "balloon"){
        e.target.style.backgroundColor = "#ededed";
        e.target.textContent = "Fail!";
        lives--;
        console.log(lives)
        removeEvent(e);
        checkAllPopped();
    }
});


function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 4){
        console.log('all popped!',popped);
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = 'score'+'   ' +popped;
        message.style.display = 'block';
    }
    else if(lives===0){

        
        window.location='dami.html';
    
}
}


