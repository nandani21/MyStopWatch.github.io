//Global variables
const time = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let seconds = 0;
let interval = null;


//Event listners
start_btn.addEventListener('click',start); 
stop_btn.addEventListener('click',stop); 
reset_btn.addEventListener('click',reset);  



// Update the timer
function timer () {
    seconds++;
    
    let secs = seconds % 60;
    let mins = Math.floor((seconds / 60) % 60);
    let hrs = Math.floor((seconds / 3600 ) % 60);
   

    if(secs < 10) secs = '0' + secs;
    if(mins < 10) mins = '0' + mins;
    if(hrs < 10) hrs = '0' + hrs;
    


    time.innerText = `${hrs}:${mins}:${secs}`;

}
 
 //for start timer
function start (){
    if(interval){
        return;
    }
    interval = setInterval(timer,100);
}

 //for stop timer

function stop () {
    clearInterval(interval);
    interval = null;
}

//for reset timer
function reset () {
    stop();
    seconds = 0;
    time.innerText = '00:00:00';
}

