function init() { document.addEventListener("deviceready", deviceReady, true); delete init; }

function deviceReady() {
    $("#loginForm").on("submit",function(e) {
        //disable the button so we can't resubmit while we wait
        $("#submitButton",this).attr("disabled","disabled");
        var u = $("userID", this).val();
        var p = $("userPass", this).val();
        if(u != '' && p!= '') {
            $.post("http://localhost:38133/login.php", {userID:u,userPass:p}, function(res) {
                if(res == 1) {
                    $.mobile.changePage("menu.html");
                } else {
                    navigator.notification.alert("Your login failed", function() {});
                }
                $("#submitButton").removeAttr("disabled");
            },"json");
        }
        return false;
    });
}