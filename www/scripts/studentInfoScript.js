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
            var fullName = "";
            for (var index = 0; index < 3; index++) {
                if (index < 2)
                    fullName += values[index] + " ";
                else
                    fullName += values[index];
            }
            $("#fullName").text(fullName);
            $("#studentID").text(values[3]);
            $("#major").text(values[4]);
            $("#gpa").text(values[5]);
        },
        fail: function () {
            //fail code
        }
    });
});