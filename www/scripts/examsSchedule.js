/// <reference path="jquery/jquery-2.2.3.min.js" />
/// <reference path="cordova.js" />

(function () {
    
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        $(function () {
            var url = "http://localhost:38133/index.php?req=exams";

            $.ajax({
                type: "POST",
                dataType: "JSON",
                data: { sid: window.localStorage.getItem("sid") },
                url: url,
                success: function (data, s, x) {
                    for (var i = data.length - 1; i >= 0 ; i--) {
                        $("#finalsTable").append("<tr><td>" + data[i][0] + "</td><td>" + data[i][1]
                            + "</td><td>" + data[i][2] + "</td><td>" + data[i][3] + "</td></tr>");
                    }
                },
                fail: function () {
                    alert('error');
                }
            });

        });
        function onPause() {
            // 
        };

        function onResume() {
            // 
        };
    };
})();