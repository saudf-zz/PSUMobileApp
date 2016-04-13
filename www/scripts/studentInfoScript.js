$(function () {
    
    $.getJSON('http://localhost:38133/', function (data) {
            
            var vals = [];
            $.each(data, function (key, val) {
                vals.push(val);
            }
        );
            var fullName = "";
            for (var index = 0; index < 3; index++) {
                fullName += vals[index] + " ";
            }
            $("#fullName").text(fullName);
            $("#studentID").text(vals[3]);
            $("#major").text(vals[4]);
            $("#gpa").text(vals[5]);
        }
    );
});