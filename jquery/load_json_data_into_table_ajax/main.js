$(document).ready(function() {
    let $Table = $("#Table > tbody");
    $.getJSON("users.json", function(data) {
        $.each(data, function(index, value) {
            var tRow = "<tr><td>" + value.id + "</td><td>" + value.name + "</td><td>" + value.username +
                "</td><td>" + value.email + "</td><td>" + value.phone + "</td></tr>";
            $Table.append(tRow);
        });
        $('#Table').DataTable({
            pageLength: 8,
            lengthMenu: [
                [8, 10, 20, -1],
                [8, 10, 20, 100]
            ]
        });
    });

});
