function getClock(){
    const date = new Date;
    let day = date.getDay()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    switch (day) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }

    document.querySelector('.day').innerHTML = day + ',';
    document.querySelector('.hours').innerHTML = hours + ': ';
    document.querySelector('.mins').innerHTML = minutes + ': ';
    document.querySelector('.secs').innerHTML = seconds;

    if (hours < 10){
        document.querySelector('.hours').innerHTML ='0' + hours + ': ';
    }
    if (minutes < 10){
        document.querySelector('.mins').innerHTML ='0' + minutes + ': ';
    }
    if (seconds < 10){
        document.querySelector('.secs').innerHTML ='0' + seconds;
    }

      console.log(day)
}

setInterval(getClock, 500);

