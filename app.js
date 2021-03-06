function clock() {
    const fullDate = new Date();
    let hours = fullDate.getHours();
    let mins = fullDate.getMinutes();
    let secs = fullDate.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (hours > 12) {
        hours -= 12;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }

    document.getElementById('hour').innerHTML = `${hours}:`;
    document.getElementById('minute').innerHTML = `${mins}:`;
    document.getElementById('second').innerHTML = secs;
}

setInterval(clock, 1000);