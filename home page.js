window.onload = function() {
    setInterval(function() {
        var date = new Date();
        var displaydate = date.toLocaleDateString();
        var displaytime = date.toLocaleTimeString();
        document.getElementById('datetime').innerHTML = displaydate + " " + displaytime
        var username = "GG6"
        var daypart = "Good Morning"
        var hours = date.getHours();
        if (hours >= 12 && hours < 18) {
            daypart = "Good Afternoon";
        } else if (hours >= 18) {
            daypart = "Good Evening";
        }
        var day = "Sunday"
        var dayno = date.getDay(); // Returns 0 (Sunday) to 6 (Saturday)
        if (dayno === 0) {
            day = "Sunday"
        } else if (dayno === 1) {
            day = "Monday"
        } else if (dayno === 2) {
            day = "Tuesday"
        } else if (dayno === 3) {
            day = "Wednesday"
        } else if (dayno === 4) {
            day = "Thursday"
        } else if (dayno === 5) {
            day = "Friday"
        } else if (dayno === 6) {
            day = "Saturday"
        }
        document.getElementById('day').innerHTML = day
        document.getElementById('greeting').innerHTML = daypart + " " + username
    }, 1);
}