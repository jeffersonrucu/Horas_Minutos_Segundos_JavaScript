window.onload = function(){
    function clock(){
        var hours = document.getElementById('hour');
        var minutes = document.getElementById('minutes');
        var seconds = document.getElementById('seconds');
    
        var h = new Date().getHours();
        var m = new Date().getMinutes();
        var s = new Date().getSeconds();
    
        hours.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;
    }
    setInterval(clock, 1000);
}