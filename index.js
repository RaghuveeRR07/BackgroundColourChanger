const changeColour = () => {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var rHex = r.toString(16).padStart(2, "0");
    var gHex = g.toString(16).padStart(2, "0");
    var bHex = b.toString(16).padStart(2, "0");
    var colour = `#${rHex}${gHex}${bHex}`;

    return colour;
};


var intervalID 


const startChangingColor = function() {
    function changeBgColour(){
        document.body.style.backgroundColor = changeColour()
    }

    intervalID = setInterval(changeBgColour, 500);
}


const stopChangingColor = function() {
        clearInterval(intervalID);
        intervalID= null;
}


document.getElementById("StartBtn").addEventListener('click', startChangingColor);


document.getElementById("StopBtn").addEventListener('click', stopChangingColor);
