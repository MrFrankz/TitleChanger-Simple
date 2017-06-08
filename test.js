var timerID = 0;              //timer ID
var defaultTitle = "Default"; //the default title

/**
* checkBox1(): the first check box will make the input text on the tab title
*/
function checkBox1() {
    if(document.getElementById("checkBox1").checked){ // check box 1 checked
        document.title = document.getElementById("Inputtext").value;
    }else {
        document.title = defaultTitle;
    } //if
}

/**
* checkBox2(): the first check box will switch the Input and default title every 1 sec
*/
function checkBox2() {
    if(document.getElementById("checkBox2").checked){ // check box 2 checked
        timerID = setInterval(function() {            //start a timer
        if(document.title == defaultTitle) {
            document.title = document.getElementById("Inputtext").value;
        } else {
            document.title = defaultTitle;
        }}, 1000);
    }else {
        clearInterval(timerID);
        document.title = defaultTitle;
    } //if
}