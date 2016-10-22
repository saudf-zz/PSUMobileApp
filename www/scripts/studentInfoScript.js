/// <reference path="jquery/jquery-2.2.3.min.js" />

(function () {

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        $(function () {
            $.ajax({
                type: "POST",
                dataType: "JSON",
                data: { sid: window.localStorage.getItem('sid') },
                url: "http://localhost:38133/index.php?req=info",
                success: function (data) {

                    var values = [];
                    $.each(data, function (key, val) {
                        values.push(val);
                    }
                );
                    $("#fullName").text(values[0]);
                    $("#studentID").text(values[1]);
                    $("#major").text(values[2]);
                    $("#gpa").text(values[3]);
                    if (values[4] !== 'undef.') {
                        $("#college").text(values[4]);
                    } else {
                        $("#collegeLine").hide();
                    }
                },
                fail: function () {
                    //fail code
                }
            });
        });
    }
});