// <reference path="jquery/jquery-2.2.3.min.js" />



    $(function () {
        $('#loginButton').click(function () {
            var u = $('#id').val();
            var p = $('#pass').val();
            if(u=='' || p==''){
                //invalid input, ala'a please add validation :)
            }
            $.ajax({
                type: "POST",
                dataType: "JSON",
                data: { UserID: u, UserPass: p },
                url: "http://localhost:38133/login.php",
                success: function (data, s, x) {
                    if (data[0] == 1) {
                        //todo(Saud): there should be a longer login script here
                        window.localStorage.setItem('loggedIn', true);
                        window.localStorage.setItem('userID', u);
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
        });
    });
