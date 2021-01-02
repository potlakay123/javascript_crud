$(document).ready(function() {
    $.getJSON('users.json', function(data) {

        $.each(data, function(index, value) {
            debugger;
            let div = "<div class='col-sm-4 mt-4 showHide'>" +
                "<div class='card'><div class='card-body height' style='background-image: url(" + value.image + ");background-size: 100% 100%;" +
                "background-position: center!important;" +
                "background-repeat: no-repeat!important;" +
                "'>" +
                " <div class='text-center'>" +
                " </div>" +
                " </div><div class='card-footer text-center'>" +
                " <span class='text-capitalize font-weight-bold font '> " + value.name + "</span></div></div></div>";
            if (value.industry === 'hollywood') {
                $("#hollywood").find("div.row").append(div);
            } else if (value.industry === 'bollywood') {
                $("#bollywood").find("div.row").append(div);
            } else {
                $("#tollywood").find("div.row").append(div);
            }

        });


    });
    $('#search').keyup(function() {
        var inputValue = $(this).val();
        if (inputValue.length > 0) {
            $(".showHide").find("div.card-footer > span").filter(function() {
                if ($(this).text().toLowerCase().indexOf(inputValue.toLowerCase()) > -1) {
                    return $(this).closest("div.showHide").css("display", "block");
                } else {
                    $(this).closest(".showHide").css("display", "none");
                }
            });
        } else {
            $(".showHide").show();
        }
    });


});