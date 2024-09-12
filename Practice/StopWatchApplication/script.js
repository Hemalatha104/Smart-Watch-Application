let millisecond =0,seconds =0,minutes =0,hours =0;
let timeshow =document.getElementById('timeshow')
let timeref;


document.getElementById('start').onclick = function(){
    timeref=setInterval(updateTime,10)
}

function updateTime(){
    millisecond = millisecond+10;
    if(millisecond ==1000){
        seconds=seconds+1;
        millisecond =0;
        if(seconds==60){
            minutes = minutes+1;
            seconds= 0;
            if(minutes==0){
                hours = hours+1;
                minutes =0

            }
        }
    }
    let h,m,s,ms;
    if(hours<10){
        h= '0'+hours

    }
    else{
        h = hours
    }
    if(minutes<10){
        m = '0'+minutes
    }
    else{
        m = minutes
    }
    if(seconds<10){
        s= '0'+seconds
    }
    else{
        s = seconds
    }
    if(millisecond<10){
        ms = '0'+millisecond
    }
    else if(millisecond<100){
        ms = '00'+millisecond

    }
    else{
        ms=millisecond
    } 

    timeshow.innerHTML = `${h} : ${m} : ${s} : ${ms}`

}

document.getElementById("pause").onclick= function(){
    clearInterval(timeref)

}
document.getElementById('reset').onclick = function(){
    clearInterval(timeref)
    millisecond =0;
    seconds=0;
    minutes=0;
    hours=0;
    timeshow.innerHTML = "00 : 00 : 00 : 00"
}