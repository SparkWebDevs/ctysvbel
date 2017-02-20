var currentTableData;
var ticketsList = [];

//TICKET OBJECT DEF
function Ticket (IdTicket,TicketNumber,TicketFirstName,TicketSecondName,TicketLastName,TicketSecondLastName) {
    this.IdTicket = IdTicket;
    this.TicketNumber = TicketNumber;
    this.TicketFirstName = TicketFirstName;
    this.TicketSecondName = TicketSecondName;
    this.TicketLastName = TicketLastName;
    this.TicketSecondLastName = TicketSecondLastName;

}



$(document).ready(function(){
    getTicketsFromDb();

    $("#search-btn").click(function(){
           var numberOfTickets = $("#result-size").val();
            buildTicketsTable(numberOfTickets);
    });
    
    // Insert number input in toolbar    
    $('.toolbar form input:radio').click(function(){
        $('.toolbar input:radio').removeClass('selected-categorie');
        $('.toolbar input[type=number]').remove();
        
        $(this).addClass('selected-categorie');
        $(this).next().after('<input type="number" class="ticket-input" placeholder="Introduce numero">');
    });
    
    $('#add-list-btn').click(function(){
    console.log("called add");
    getCheckedTickets();
    console.log(ticketsList);
    });

    $('#clear-list-btn').click(function(){
    console.log("called clear");
    clearTicketsList();
    console.log(ticketsList);
    });
    
        // Filter results  
    $('.toolbar form .yellow-btn').click(function() {
        event.preventDefault();
        var number = $('.ticket-input').val();
        var categorie = parseInt($('.selected-categorie').val());
        console.log(categorie);
        
        switch(categorie) {
            case 1: 
                startWith(number);
                break;
            default:
                console.log('error');
        }
    });
    
    
}); //ENDS on DOCUMENT LOAD


function unreserveTickets(){
    var currentDate = getDateWithOption(1);
     $.ajax({
                type: "POST",
                url: 'masterInterface.php',
                data: {func: "AJAXUneserveTickets", arg1:currentDate},
                success: function(data) {
                     if(data === "no"){
                    	console.log("Boletos no desbloqueados");
                     } else {
                            console.log(data);
                            console.log("Se desbloquearon boletos");
                            
                        }
                }
            });
}

function reserveTicketsForPurchase(){//Reservar los tickets para no ser visibles por un periodo de 20 Min
    var reservedLimit = getDateWithOption(2);
    var ticketsListJSON = JSON.stringify(ticketsList);
    console.log(reservedLimit);
    console.log(ticketsListJSON);
            $.ajax({
                type: "POST",
                url: 'masterInterface.php',
                data: {func: "AJAXReserveTickets", arg1:ticketsListJSON , arg2:reservedLimit},
                success: function(data) {
                     if(data === "no"){
                    	console.log("boletos no actualizados");
                     } else {
                            console.log(data);
                            console.log("Boletos actualizados");
                            
                        }
                }
            });
}

function startWith(number) {
        $('#table-content td').each(function() {
        if( !($(this).text().startsWith(number)) ) {
                $(this).css('display', 'none');            
            }
        });
    }
    
    function hasDigits(number) {
        var testNumbers = ['23012', '40013', '50146', '12855'];
        var selectedNumbers = [];
        // Access total of tickets
        for(var b = 0; b < testNumbers.length; b++) {
            // Access each digit of ticket
            for(var i = 0; i < testNumbers[b].length; i++) {
                // Access each digit of number and compare it with digit in ticket
                for(var j = 0; j < number.length; j++) {
                    // Check if number digit exists in ticket and if is not in selectedNumbers array already
                    if(testNumbers[b][i] == number[j] && $.inArray(testNumbers[b], selectedNumbers) === -1) {
                        selectedNumbers.push(testNumbers[b]);
                    }
                }
            }
        }
        return selectedNumbers;
    }
    
    function endWith(number) {
        $('#table-content td').each(function() {
        if( !($(this).text().endsWith(number)) ) {
                $(this).css('display', 'none');            
            }
        });
    }
    
    function sumOfDigit(number) {
        var sum = 0;
        for(var i = 0; i <= number; i++) {
            sum += i;
        }
        return sum;
    }
    


function extractTicketNumber() {
    
    var tickets = '[{"IdTicket":1,"TicketNumber":"12345678"},{"IdTicket":2,"TicketNumber":"87654321"},{"IdTicket":3,"TicketNumber":"43215678"},{"IdTicket":4,"TicketNumber":"34094142"},{"IdTicket":5,"TicketNumber":"76328901"},{"IdTicket":6,"TicketNumber":"66508213"},{"IdTicket":7,"TicketNumber":"02123435"},{"IdTicket":8,"TicketNumber":"55554314"},{"IdTicket":9,"TicketNumber":"88864210"},{"IdTicket":10,"TicketNumber":"33332134"},{"IdTicket":11,"TicketNumber":"27346823"},{"IdTicket":12,"TicketNumber":"17235716"},{"IdTicket":13,"TicketNumber":"67463893"},{"IdTicket":14,"TicketNumber":"67890354"},{"IdTicket":15,"TicketNumber":"45273890"},{"IdTicket":16,"TicketNumber":"63098722"},{"IdTicket":17,"TicketNumber":"34527651"},{"IdTicket":18,"TicketNumber":"90908765"},{"IdTicket":19,"TicketNumber":"45378276"},{"IdTicket":20,"TicketNumber":"52875987"},{"IdTicket":21,"TicketNumber":"76298376"},{"IdTicket":22,"TicketNumber":"78235625"},{"IdTicket":23,"TicketNumber":"76389281"},{"IdTicket":24,"TicketNumber":"19872453"},{"IdTicket":25,"TicketNumber":"87356244"},{"IdTicket":26,"TicketNumber":"56384789"}]';

    //tickets = JSON.parse(tickets)
    var ticketsLength = tickets.length;
    
    
    // Bubble sort algorith
    for (var i = (ticketsLength - 1); i >= 0; i--) {
        //Number of passes
        for (var j = (ticketsLength - i); j > 0; j--) {
            //Compare the adjacent positions
            if (tickets[j].TicketNumber < tickets[j - 1].TicketNumber) {
                //Swap the numbers
                var tmp = tickets[j];
                tickets[j] = tickets[j - 1];
                tickets[j - 1] = tmp;
            }
        }
    }
    
    return console.log(tickets);
   // return reorderedTickets;
    //return ticketsNumbers;
}

function addTableFeatures() {
        $('#tickets-table').dataTable({
        //Datagrid Options
        "info":false,
        "ordering":false,
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


function checkSelling(){
    var today = getDateWithOption(1);
        $.ajax({
                type: "POST",
                url: 'masterInterface.php',
                data: {func: "AJAXloadCurrentDates"},
                success: function(data) {
                     if(data === "no"){
                    	sweetAlert("Oops...", "Imposible acceder a la venta de boletos, intente mas tarde", "error");
                     } else {
                    	//Set the dates on the ids
                            console.log(data);
                            var currentDates = JSON.parse(data);
                            console.log(today);
                            console.log(currentDates.StartDate.date);
                            console.log(currentDates.EndDate.date);
                            if(today >= currentDates.StartDate.date && today <= currentDates.EndDate.date){
                                console.log("la venta vence en: ");
                                console.log(currentDates.EndDate.date);
                                //sweetAlert("Alerta", "La venta se encuentra activa", "success");
                            }else{
                                sweetAlert("Oops...", "La venta se encuentra inactiva desde: "+currentDates.EndDate.date+" :(", "error");
                            }
                        }
                }
            });
}

function getTicketsFromDb(){
        $.ajax({
                type: "POST",
                url: 'masterInterface.php',
                data: {func: "AJAXGetTickets"},
                success: function(data) {
                     if(data === "no"){
                    	sweetAlert("Oops...", "Imposible conectarse con BD", "error");
                     } else {
                        var dbTickets = JSON.parse(data);
                        console.log(dbTickets);
                        buildTicketsTable(100 , dbTickets);
                    }
                }
            });
}


// Get array with selected tickets
//function Ticket (IdTicket,TicketNumber,TicketFirstName,TicketSecondName,TicketLastName,TicketSecondLastName) 
function getCheckedTickets() {
    $('.ticketCheck').each(function(){
        if( $(this).prop('checked')) {
            var ticketDef = new Ticket($(this).attr("id"),$(this).siblings('label').text(),"","","","");
            ticketsList.push(ticketDef);
        }    
    });
}

function clearTicketsList(){
    $('.ticketCheck').each(function(){
       $(this).prop("checked",false);  
    });
    ticketsList = [];
}



//build the table, the tickets var should contain all the infor about that ticket
function buildTicketsTable(resultNumbers, ticketsDesc){
        console.log(resultNumbers);
        var printableTickets = ticketsDesc.length;
        var innerTable = "";
        var ticketCount = 0;
        var remainder = printableTickets % 5;
        console.log(remainder);
        
    
        // If there's remainder, subtract remainder from resultNumbers and create a separate row 
        if(remainder!==0) {
            for(var x=0 ; x<(printableTickets-remainder)/5 ; x++){//Fill all the complete rows
                innerTable += "<tr>";
                for(var c=0 ; c < 5; c++){
                     innerTable += "<td><label for=''>"+ticketsDesc[ticketCount].TicketNumber+"</label><input id="+ticketsDesc[ticketCount].IdTicket+" type='checkbox' class='ticketCheck'></td>";
                     ticketCount++;
                }
                innerTable += "</tr>";
            }
            
            
            innerTable += "<tr>";
            for(var n=0; n < remainder; n++) {//Fill the last row with the ramining value
                    innerTable += "<td><label for=''>"+ticketsDesc[ticketCount].TicketNumber+"</label><input id="+ticketsDesc[ticketCount].IdTicket+" type='checkbox' class='ticketCheck'></td>";
                    ticketCount++;
            }
            //Fill that last row with empty tickets                
            switch(5-remainder) {
                case 1:
                    innerTable+="<td style='visibility:hidden;'></td>";
                    break;
                case 2:
                    innerTable+="<td style='visibility:hidden;'></td><td style='visibility:hidden;'></td>";
                    break;
                case 3:
                    innerTable+="<td style='visibility:hidden;'></td><td style='visibility:hidden;'></td><td style='visibility:hidden;'></td>";
                    break;
                case 4:
                    innerTable+="<td style='visibility:hidden;'></td><td style='visibility:hidden;'></td><td style='visibility:hidden;'></td><td style='visibility:hidden;'></td>";
                    break;
                default:
                    console.log('Some error');
                    break;                        
            }
            innerTable += "</tr>";
   
        } 
    
        // If there's no remainder, just draw the rows 
        else {
            for(var y=0 ; y<printableTickets/5; y++){
                    innerTable += "<tr>";
                    for(var d=0 ; d < 5; d++){
                         innerTable += "<td><label for=''>"+ticketsDesc[ticketCount].TicketNumber+"</label><input id="+ticketsDesc[ticketCount].IdTicket+" type='checkbox' class='ticketCheck'></td>";
                         ticketCount++;
                    }
                    innerTable += "</tr>";  
            }
            
        }
        

        if(currentTableData){//If table definition exists, destroy to create a new one
            console.log(currentTableData);
            console.log("we have a table");
            currentTableData.destroy();
            document.getElementById("table-content").innerHTML = innerTable;
            addTableFeatures();
        }else{//Initialize the table for the first time
            console.log("no table init yet");
            document.getElementById("table-content").innerHTML = innerTable;
            addTableFeatures();
        }    
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function getDateWithOption(opt){
        
        var today = new Date();
        var dd; 
        var mm; 
        var yyyy; 
        var HH; 
        var MM;
        var SS;
                    
        switch(opt){
            
            case 1: // CurrentDate
                    
                    dd = today.getDate();
                    mm = today.getMonth()+1; //January is 0!
                    yyyy = today.getFullYear();
                    HH = today.getHours() + ":";
                    MM = today.getMinutes() + ":";
                    SS = today.getSeconds();           
                break;
            
            case 2:// CurrentDate + 20 min
                    today = new Date(today.getTime() + (20*60000));
                    dd = today.getDate();
                    mm = today.getMonth()+1; //January is 0!
                    yyyy = today.getFullYear();
                    HH = today.getHours() + ":";
                    MM = today.getMinutes()+ ":";
                    SS = today.getSeconds();     
                break;
            
            case 3://CurrentDate + 1hour
                    today = new Date(today.getTime() + (60*60000));
                    dd = today.getDate();
                    mm = today.getMonth()+1; //January is 0!
                    yyyy = today.getFullYear();
                    HH = today.getHours() + ":";
                    MM = today.getMinutes()+ ":";
                    SS = today.getSeconds();   
                break;
            
            case 4:
                break;
            
        }
           
            if(dd<10) {
            dd='0'+dd;
            } 

            if(mm<10) {
            mm='0'+mm;
            } 
            today = yyyy+'-'+mm+'-'+dd+" "+HH+MM+SS;
            return today;

}

