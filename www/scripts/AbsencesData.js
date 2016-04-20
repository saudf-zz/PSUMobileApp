/// <reference path="jquery/jquery-2.2.3.min.js" />

$(function () {

    var url = "http://localhost:38133/Absences.php";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
        /*function showHint(str) {
            xhttp.open("POST", url, true);
            xhttp.send();
        }*/

        $.ajax({ 
            type: "POST",
            dataType: "JSON",
            data: { UserID: window.localStorage.getItem("UserID") },
            url: "http://localhost:38133/Absences.php",
            /*success: function (data, s, x) {
                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", url, true);
                xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhttp.send(window.localStorage.getItem("UserID"));
            },*/
            fail: function () {
                alert('error');
            }
        });

    }
});