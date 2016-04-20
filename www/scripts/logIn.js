/// <reference path="jquery/jquery-2.2.3.min.js" />
/// <reference path="jsencrypt.min.js" />

(function () {

document.addEventListener('deviceready', onDeviceReady.bind(this), false);

function onDeviceReady() {
    document.addEventListener('pause', onPause.bind(this), false);
    document.addEventListener('resume', onResume.bind(this), false);

    $(function () {
        $('#loginButton').click(function () {
            if (u == '' || p == '') {
                //invalid input, ala'a please add validation :) and also stopp this event
            } else {
                var encrypt = new JSEncrypt();
                encrypt.setPublicKey("-----BEGIN PUBLIC KEY-----\
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAILMveJq+2yD2rTo8Fu9ZqtRyylzLyIU\
                UkrUwmPGXLhlXV9mBi6JljvQ2JWrh2j+KtHUvzPGyW4BEyB+Bk9lWdkCAwEAAQ==\
                -----END PUBLIC KEY-----");
                var u = encrypt.encrypt($('#id').val());
                var p = encrypt.encrypt($('#pass').val());


                $.ajax({
                    type: "POST",
                    dataType: "JSON",
                    data: { UserID: u, UserPass: p },
                    url: "http://localhost:38133/login.php",
                    success: function (data, s, x) {
                        if (data[0] == 1) {
                            //todo(Saud): there should be a longer login script here
                            window.localStorage.setItem('loggedIn', true);
                            window.localStorage.setItem('userID', $('#id').val());
                            window.location = "menu.html";
                        } else if (data[0] == 0) {
                            //todo: Ala'a, this works but still adds the text every time a failed login happens, can be corrected with a hidden element that we show or anothe js function, up to you
                            $('form').after('<b id="loginError">ID and/or Password is wrong!</b>');
                        } else {
                            //this means the document returned -1, should never ever happen
                            alert('fatal error, data was not validated.');
                        }
                    },
                    fail: function () {
                        alert('error');
                    }
                });
            }
            });
    });

};
function onPause() {
    // 
};

function onResume() {
    // 
};
})();