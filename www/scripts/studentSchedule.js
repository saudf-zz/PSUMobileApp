/// <reference path="jquery/jquery-2.2.3.min.js" />
/// <reference path="cordova.js" />

(function () {
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
        function toNearestHundred(num) {
            //shows you how stupid is JS ya 3yal!
            return 100 * Math.round(num / 100.0);
        }

        $(function () {
            var url = "http://localhost:38133/index.php?req=sched";

            $.ajax({
                type: "POST",
                dataType: "JSON",
                data: { sid: window.localStorage.getItem("sid") },
                url: url,
                success: function (data, s, x) {
                    for (var i = 0; i < data.length; i++) {
                        data[i][2] = toNearestHundred(data[i][2]);
                        data[i][3] = toNearestHundred(data[i][3]);
                        for (var j = data[i][2]; j < data[i][3]; j += 100) {
                            $('tr[data-time="' + j + '"] td[data-day="' + data[i][1] + '"]').text(data[i][0]);
                        }
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