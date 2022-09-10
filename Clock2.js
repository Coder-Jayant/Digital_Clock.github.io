
setInterval(() => {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let date = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();
    let d = time.getDay();
    // Setting Time
    am_pm = "AM";
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hour = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":"
        + min + ":" + sec + am_pm;

    document.getElementById("hr").innerHTML = hour;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("ampm").innerHTML = am_pm;
    // Setting Date
    month++;
    if (date < 10) {
        date = "0" + date;
    }
    if (month < 10) {
        month = "0" + month;
    }
    let currDate = date + "/" + month + "/" + year;

    document.getElementById("box3").innerHTML = currDate;
    // Setting Day

    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("box2").innerHTML = week[d];

}, 1000)
