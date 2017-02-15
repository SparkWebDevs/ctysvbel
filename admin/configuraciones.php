<?php
include 'adminHeader.php';
?>
<script>
    cargarFechasActuales();
</script>
    <h1>CONFIGURACIONES</h1>
<div class="config-container">
    <div class="fecha-config">
        <h2>Venta de Boletos</h2>
        <h3>Fecha de Inicio de Venta</h3><br>
        <input type="text" id="inicioVenta" disabled="disabled" placeholder="Selecciona una fecha">
        <br/>
        <h3>Fecha de Fin de Venta</h3><br>
        <input type="text" id="finVenta" disabled="disabled" placeholder="Selecciona una fecha"><br>
        <button class="btn btn-warning" id="btnModificarFechas" onclick="habilitarModificacionVenta();">Modificar</button>
    </div> 
</div>

<script>
    flatpickr("#inicioVenta", {
	enableTime: true
    });
    
    flatpickr("#finVenta", {
	enableTime: true
    });
</script>


<?php
include 'adminFooter.php';
?>