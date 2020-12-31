$(document).ready(function() {
    let $Table = $("#Table > tbody");
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/comments",
        complete: function() {},
        success: function(response) {

            $.each(response, function(index, value) {
                var tRow = "<tr><td>" + value.postId + "</td><td>" + value.id + "</td><td>" + value.name +
                    "</td><td>" + value.email + "</td></tr>";
                $Table.append(tRow);
            });
            $('#Table').DataTable({
                pageLength: 8,
                lengthMenu: [
                    [8, 10, 20, -1],
                    [8, 10, 20, 100]
                ]
            });
        },
        error: function(xhr, status, error) {
            alert("error")
        }
    });
});