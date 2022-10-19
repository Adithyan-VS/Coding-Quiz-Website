const starting_Minutes = 10; // Timmer starts at 15.
let time = starting_Minutes * 60; // * seconds. Converting to seconds.

const countdownEle = document.getElementById('countdown'); // Getting time number from html.

var interval = setInterval(updateCountdown, 1000); // SetInterval is js function, updateCountdown is function, 1000 is milli seconds i.e, har 1000 milli second this function will be called.

function updateCountdown() {

    const minutes = Math.floor(time / 60); // Calculate minutes remaining, floor is to remove point value.  
    let seconds = time % 60; // Calculating seconds.   

    seconds = seconds < 10 ? '0' + seconds : seconds; // For 0 at display.

    countdownEle.innerHTML = `${minutes}:${seconds}`; // Page pe this fromat will be displayed. 
    time--;

    // Aa walla time zero hote hi next page jayega.     
    if (time == 0) {

        clearInterval(interval);


        window.location.href = "\end.html";




    }

}

// window.location.href = link