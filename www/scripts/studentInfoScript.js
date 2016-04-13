$(function () {
    
    $.getJSON('http://localhost:38133/', function (data) {

            var vals = [];
            $.each(data, function (key, val) {
                vals.push(val);
            } 
        );
        document.write(vals[0]);
        /*
        for (index = 0, length = vals.length; index < length; index++) {
            $("#navUL").append($("<li class=\"active\"><a href=\"#\" class=\"courseLink\">" + vals[index] + "</a></li>"));
        }
        */
        }
    );
});