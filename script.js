function hourColor(){
var hour = moment().hour()

$('.time-block').each(function (){
    var blockHour = parseInt($(this).attr("id"))
    console.log(blockHour)

    if (blockHour < hour){
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }else if (blockHour === hour){
        $(this).removeClass("future");
        $(this).addClass("present");
        $(this).removeClass("past");
    }else {
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
    $('#9 .description').val(localStorage.getItem('9'))
    $('#10 .description').val(localStorage.getItem('10'))
    $('#11 .description').val(localStorage.getItem('11'))
    $('#12 .description').val(localStorage.getItem('12'))
    $('#13 .description').val(localStorage.getItem('13'))
    $('#14 .description').val(localStorage.getItem('14'))
    $('#15 .description').val(localStorage.getItem('15'))
    $('#16 .description').val(localStorage.getItem('16'))
    $('#17 .description').val(localStorage.getItem('17'))
}

function init(){
    setInterval(displayTime, 1000);
    hourColor();
    loadSave();

    $('.saveBtn').on('click', function(){
        var data = $(this).siblings('.description').val()
        var locData = $(this).parent().attr('id')
        localStorage.setItem(locData, data)
        console.log('saved')
    })
}

init();