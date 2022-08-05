function hourColor(){

var hour = moment().hour()

$('.time-block').each(() => {
    var blockHour = parseInt($(this).attr("id"))
    if (blockHour < hour){
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }

    if (blockHour === hour){
        $(this).removeClass("future");
        $(this).addClass("present");
        $(this).removeClass("past");
    }

    if (blockHour > hour){
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
    }
})


}

function displayTime(){
    $('#currentDay').text(moment().format("MMMM Do YYYY, h:mm:ss a"))
}

function loadSave(){
    $('#9 .description').val(localStorage.getItem())
}

function init(){
    setInterval(displayTime, 1000);
    hourColor();
}

$('.savBtn').on('click', () =>{
    var data = $((this).siblings('.description').val())
    var locData = "At " + $((this).parent().attr('id'))
    localStorage.setItem(locData, data)
})

init();