$(document).ready(function() {
    let $Table = $("#Table > tbody");
    $.getJSON("users.json", function(data) {
        $.each(data, function(index, value) {
            var tRow = "<tr><td>" + value.id + "</td><td>" + value.name + "</td><td>" + value.username +
                "</td><td>" + value.email + "</td><td>" + value.phone + "</td></tr>";
            $Table.append(tRow);
        });
       
    });

    $("#pdfExport").on("click",function(){
                var doc = new jsPDF('p', 'pt', 'letter');
                var htmlstring = '';
                var tempVarToCheckPageHeight = 0;
                var pageHeight = 0;
                pageHeight = doc.internal.pageSize.height;
                specialElementHandlers = {
                    // element with id of "bypass" - jQuery style selector  
                    '#bypassme': function(element, renderer) {
                        // true = "handled elsewhere, bypass text extraction"  
                        return true
                    }
                };
                margins = {
                    top: 150,
                    bottom: 60,
                    left: 40,
                    right: 40,
                    width: 600
                };
                var y = 30;
                doc.setLineWidth(2);
                doc.text(250, y = y + 10, "Table Data");
                doc.autoTable({
                    html: '#Table',
                    startY: 70,
                    theme: 'grid',
                    columnStyles: {
                        0: {
                            cellWidth: 80,
                        },
                        1: {
                            cellWidth: 80,
                        },
                        2: {
                            cellWidth: 80,
                        }
                    },
                    styles: {
                        minCellHeight: 20
                    }
                })
                doc.save('Table.pdf');
            
          
    });

    $("#excelExport").on("click",function(){
       debugger;
       var url = 'data:application/vnd.ms-excel,' + encodeURIComponent($('#Table')[0].outerHTML);
       location.href = url;
       return false;
    });

});
