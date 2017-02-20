<?php
include 'header.php';
include 'toolbar.php';
?>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.13/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.13/js/dataTables.bootstrap.min.js"></script>
<style>
        .main-content{
                display: flex;
        }
</style>
    <script>
        unreserveTickets();
            $( document ).ready(function() {
            checkSelling();
            });
    </script>

<div class="middle-content">
    <table id="tickets-table" class="ticket-container table">
            <h3>BOLETOS DISPONIBLES</h3>
        <thead>
                <th>Ticket</th>
                <th>Ticket</th>
                <th>Ticket</th>
                <th>Ticket</th>
                <th>Ticket</th>
        </thead>
        <tbody id="table-content">

        </tbody>
    </table>
    
    
    <div class="selection-options-cont">
        <button id="clear-list-btn" class="selection-opt-btn btn">Eliminar Seleccion <span class="glyphicon glyphicon-trash"></span></button>
        <button id="add-list-btn" class="selection-opt-btn btn">Agregar a Mi Lista <span class="glyphicon glyphicon-check"></span></button>
    </div>
</div>





<?php
include 'toolbar-right.php';
include 'footer.php';
?>
