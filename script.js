setInterval(() => {
    let hh = document.getElementById("hour_progress");
    let mm = document.getElementById("minute_progress");
    let ss = document.getElementById("second_progress");

    let t = new Date();
    let hr = t.getHours();
    let min = t.getMinutes();
    let sec = t.getSeconds();
    let zone = "";
    if(hr >= 12){
        hr = hr-12;
        zone = "pm";
    }
    else{
        zone = "am";
    }
    if(hr < 10){
        hr = "0"+hr;
    }
    if(min < 10){
        min = "0"+min;
    }
    if(sec < 10){
        sec = "0"+sec;
    }

    hour.innerHTML = `${hr} <br> hours`;
    minute.innerHTML = `${min} <br> minutes`;
    second.innerHTML = `${sec} <br> seconds`;
    ampm.innerHTML = zone;
    

    hh.style.strokeDashoffset = 440 - (440 * hr) / 12;
    mm.style.strokeDashoffset = 440 - (440 * min) / 60;
    ss.style.strokeDashoffset = 440 - (440 * sec) / 60;

    hour_dot.style.transform = `rotate(${hr * 30}deg)`;
    minute_dot.style.transform = `rotate(${min * 6}deg)`;
    second_dot.style.transform = `rotate(${sec * 6}deg)`;
}, );