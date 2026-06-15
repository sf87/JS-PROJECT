function displayTime() {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var period = "";

    period = (hours >= 12) ? 'PM' : 'AM';

    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours = hours - 12;
    }

    hours = update(hours);
    minutes = update(minutes);
    seconds = update(seconds);

    var time = hours + " : " + minutes + " : " + seconds + " " + period;
    document.getElementById("clockContainer").innerText = time;
    //document.getElementById("MyClockDisplay").innerText = time;
    

function update(t) {
    return (t < 10) ? "0" + t : t;
}

setInterval(displayTime, 1000); // This keeps updating the time every second
displayTime(); // This initiates the time display

