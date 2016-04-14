$(function () {


    /*function init() { document.addEventListener("deviceready", deviceReady, false); delete init; }

    function deviceReady() {*/

        $("#loginForm").on("click", function (e) {
            //disable the button so we can't resubmit while we wait
            $("#submitButton", this).attr("disabled", "disabled");
            var u = $("#userId", this).val();
            var p = $("#userPass", this).val();
            if (u != '' && p != '') {
                $.post("http://localhost:38133/", { userID: u, userPass: p }, function (res) {
                    if (res == true) {
                        $.mobile.changePage("menu.html");
                    } else {
                        navigator.notification.alert("Your login failed", function () { });
                    }
                    $("#submitButton").removeAttr("disabled");
                }, "json");
            }
            return false;
        });
        /*
        $("#loginForm").submit(function () {


        var userID = $('input[name="userID"]').val();
        var userPass = $('input[name="userPass"]').val();
        document.write(userID);
        $.post("http//:localhost:38133/login.php",
        {
            UserID: userID,
            UserPass: userPass
        },
        function (data, status) {
            document.write("Data: " + data + "\nStatus: " + status);
        });

        });
        */
    /*}*/
});