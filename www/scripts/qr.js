/// <reference path="jquery/jquery-2.2.3.min.js" />
/// <reference path="jquery/jquery.qrcode.js" />
/// <reference path="jquery/qrcode.js" />
$(function () {
    $('#qrcode').qrcode(window.localStorage.getItem('userID'));
});