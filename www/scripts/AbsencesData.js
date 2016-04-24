/// <reference path="jquery/jquery-2.2.3.min.js" />
/// <reference path="cordova.js" />

(function () {

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        $(function () {

            var url = "http://localhost:38133/index.php?req=absences";

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
                    data: { sid: window.localStorage.getItem("sid") },
                    url: url,
                    success: function (data, s, x) {
                        // Ala'a and Khalid: the data returned will be data[rownumber][0] for count of absences and data[rownumber][1] for course name. Plese fill the table as you wish.
                    },
                    fail: function () {
                        alert('error');
                    }
                });

            }
        });
    };
    function onPause() {
        // 
    };

    function onResume() {
        // 
    };
})();