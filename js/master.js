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