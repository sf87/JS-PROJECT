document.addEventListener("DOMContentLoaded", function () {
    
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

        document.getElementById("clock").innerText = hours + " : " + minutes + " : " + seconds + " " + period;
    }

    function update(t) {
        return (t < 10) ? "0" + t : t;
    }

    setInterval(displayTime, 1000); // moved this outside the displayTime function

});
