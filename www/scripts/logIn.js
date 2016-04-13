function init() { document.addEventListener("deviceready", deviceReady, false); delete init; }

function deviceReady() {
    $("#loginForm").submit(function () {
        var userID = $('input[name="userID"]').val();
        var userPass = $('input[name="userPass"]').val();
        $.post("http//:localhost:38133/login.php",
        {
            UserID: userID,
            UserPass: userPass
        },
        function (data, status) {
            document.write("Data: " + data + "\nStatus: " + status);
        });
    });
}