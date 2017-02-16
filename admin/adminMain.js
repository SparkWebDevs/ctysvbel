
function habilitarModificacionVenta(){
    //Activate the date fields
    $("#inicioVenta").removeAttr("disabled");
    $("#finVenta").removeAttr("disabled");
    $("#btnModificarFechas").toggleClass("btn-warning btn-primary");
    $("#btnModificarFechas").attr("onclick", "validarFechas();");
    $("#btnModificarFechas").html("Aceptar");
}

function deshabilitarModificacionVenta(){
    $("#inicioVenta").attr("disabled",true);
    $("#finVenta").attr("disabled",true);
    $("#btnModificarFechas").toggleClass("btn-primary btn-warning");
    $("#btnModificarFechas").attr("onclick", "habilitarModificacionVenta();");
    $("#btnModificarFechas").html("Modificar");
}


function modificarFechasVenta(){
    
}

function cargarFechasActuales(){
            $.ajax({
                type: "POST",
                url: 'ajaxInterface.php',
                data: {func: "AJAXloadCurrentDates"},
                success: function(data) {
                     if(data === "no"){
                    	sweetAlert("Oops...", "Imposible recuperar fechas", "error");
                     } else {
                    	//Set the dates on the ids
                            var currentDates = JSON.parse(data);
                            $("#inicioVenta").val(currentDates.StartDate.date);
                            $("#finVenta").val(currentDates.EndDate.date);
                        }
                }
            });
}

function validarFechas(){
    var error = false;
    var errorMessage = "Ha ocurrido un problema\n";
    var fechaInicio = document.getElementById("inicioVenta").value;
    var fechaFin = document.getElementById("finVenta").value;
    
    //null or empty check
    if(fechaFin === "" || fechaFin === null){
        console.log("la fecha de fin se encuentra vacia");
        error = true;
        errorMessage += "Fecha de Fin Vacia\n";
    }
    
     if(fechaInicio === "" || fechaInicio === null){
        console.log("la fecha de fin se encuentra vacia");
        error = true;
        errorMessage += "Fecha de Inicio Vacia\n";
    }
    
    //If dates are empty show the alert
    if(error){
        sweetAlert("Oops...", errorMessage, "error");
        return;
    }else{
        console.log(fechaInicio);
        console.log(fechaFin);
    }
    
    if(fechaInicio >= fechaFin || fechaFin <= fechaInicio){
        console.log("fecha inicio >= fin");
        error = true;
        errorMessage += "Por favor, verifique que la fecha de inicio es menor a la fecha de fin de la venta de boletos \n";
    }

    
    if(error){
       sweetAlert("Oops...", errorMessage, "error");
    }else{
        sweetAlert({
                    title: "Confirmación de Registro",
                    text: "Las fechas de inicio y venta de boletos serán registradas como:\n Fecha Inicio:"+fechaInicio+"\n Fecha Fin:"+fechaFin+"",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Confirmar Cambio",
                    closeOnConfirm: false
        },
            function(){
                //Ir a cambiar las fechas a base de datos con llamada AJAX
            $.ajax({
                type: "POST",
                url: 'ajaxInterface.php',
                data: {func: "AJAXsetSellDates",arg1: fechaInicio, arg2: fechaFin},
                success: function(data) {
                     if(data === "no"){
                    	sweetAlert("Oops...", "Imposible actualizar las fechas, intentelo denuevo.", "error");
                     } else {
                    	sweetAlert("Alerta", "Las fechas de venta han sido actualizadas", "success");
                        deshabilitarModificacionVenta();
                        }
                }
            });
                    
            });
    }
}
    