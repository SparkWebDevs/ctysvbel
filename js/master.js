  var currentTableData;
  $(document).ready(function(){
    
    buildTicketsTable(50);
    addTableFeatures();

    
    
        
        $("#search-btn").click(function(){
               var numberOfTickets = $("#result-size").val();
				buildTicketsTable(numberOfTickets);
		});
        


  });


function addTableFeatures() {
        $('#tickets-table').dataTable({
        //Datagrid Options
        "info":false,
        "searching":false,
        "lengthChange":false,
        "pageLength": 5,
        "language": {
                "emptyTable":     "No hay datos para mostrar",
                "info":           "Mostrando _START_ al _END_ de _TOTAL_ boletos",
                "infoEmpty":      "Mostrando 0 a 0 de 0 boletos",
                "lengthMenu":     "Mostrar _MENU_ boletos",
                "loadingRecords": "Cargando...",
                "processing":     "Procesando...",
                "search":         "Buscar boleto:",
                "zeroRecords":    "No se encontro ningun boleto",
                "paginate": {
                    "first":      "Inicio",
                    "last":       "Fin",
                    "next":       "Siguiente",
                    "previous":   "Anterior"
                }
        }
        
    });
    
    currentTableData = $('#tickets-table').DataTable();
}      


function checkSelling(today){
        $.ajax({
                type: "POST",
                url: 'masterInterface.php',
                data: {func: "AJAXloadCurrentDates"},
                success: function(data) {
                     if(data === "no"){
                    	sweetAlert("Oops...", "Imposible acceder a la venta de boletos, intente mas tarde", "error");
                     } else {
                    	//Set the dates on the ids
                            var currentDates = JSON.parse(data);
                            console.log(today);
                            console.log(currentDates.StartDate.date);
                            console.log(currentDates.EndDate.date);
                            if(today >= currentDates.StartDate.date && today <= currentDates.EndDate.date){
                                sweetAlert("Alerta", "La venta se encuentra activa", "success");
                            }else{
                                sweetAlert("Oops...", "La venta se encuentra inactiva :(", "error");
                            }
                        }
                }
            });
}


//build the table, the tickets var should contain all the infor about that ticket
function buildTicketsTable(resultNumbers){
        console.log(resultNumbers);
        var innerTable = "";
        for(var x=0 ; x<resultNumbers/5; x++){
                innerTable += "<tr>";
                for(var c=0 ; c < 5; c++){
                     var ticketID = randomIntFromInterval(2000,2499);
                     innerTable += "<td><label for=''>"+ticketID+"</label><input type='checkbox' id='ticketCheck'></td>";
                }
                innerTable += "</tr>";  
        }
        //Tabla construida
        if(currentTableData){
            console.log(currentTableData);
            console.log("we have a table");
            currentTableData.destroy();
            document.getElementById("table-content").innerHTML = innerTable;
            addTableFeatures();
        }else{
            console.log("no table init yet");
            document.getElementById("table-content").innerHTML = innerTable;
        }
        

        
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


