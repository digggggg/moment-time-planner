


function hourColor(){

var hour = moment().hour()

$('.time-block').each


}

function displayTime(){
    $('#currentDay').text(moment().format("MMMM Do YYYY, h:mm:ss a"))
}

function init(){
    setInterval(displayTime, 1000);
    hourColor();
}

