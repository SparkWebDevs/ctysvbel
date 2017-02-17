<?php
include 'header.php';
include 'toolbar.php';
?>

    <script>
            $( document ).ready(function() {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear();
            var HH = today.getHours() + ":";
            var MM = today.getMinutes() + ":";
            var SS = today.getSeconds();

            if(dd<10) {
            dd='0'+dd;
            } 

            if(mm<10) {
            mm='0'+mm;
            } 

            today = yyyy+'-'+mm+'-'+dd+" "+HH+MM+SS;
            checkSelling(today);
            });
    </script>

<div class="middle-content">
    <table class="ticket-container">
        <thead>
            
        </thead>
        <tbody>
            <tr>
                <td><label for="">12021</label><input type="checkbox"></td>
                <td><label for="">12022</label><input type="checkbox"></td>
                <td><label for="">12023</label><input type="checkbox"></td>
                <td><label for="">12024</label><input type="checkbox"></td>
                <td><label for="">12025</label><input type="checkbox"></td>
            </tr>
            <tr>
                <td><label for="">12021</label><input type="checkbox"></td>
                <td><label for="">12022</label><input type="checkbox"></td>
                <td><label for="">12023</label><input type="checkbox"></td>
                <td><label for="">12024</label><input type="checkbox"></td>
                <td><label for="">12025</label><input type="checkbox"></td>
            </tr>
            <tr>
                <td><label for="">12021</label><input type="checkbox"></td>
                <td><label for="">12022</label><input type="checkbox"></td>
                <td><label for="">12023</label><input type="checkbox"></td>
                <td><label for="">12024</label><input type="checkbox"></td>
                <td><label for="">12025</label><input type="checkbox"></td>
            </tr>
            <tr>
                <td><label for="">12021</label><input type="checkbox"></td>
                <td><label for="">12022</label><input type="checkbox"></td>
                <td><label for="">12023</label><input type="checkbox"></td>
                <td><label for="">12024</label><input type="checkbox"></td>
                <td><label for="">12025</label><input type="checkbox"></td>
            </tr>
            <tr>
                <td><label for="">12021</label><input type="checkbox"></td>
                <td><label for="">12022</label><input type="checkbox"></td>
                <td><label for="">12023</label><input type="checkbox"></td>
                <td><label for="">12024</label><input type="checkbox"></td>
                <td><label for="">12025</label><input type="checkbox"></td>
            </tr>
            <tr>
                <td><label for="">12021</label><input type="checkbox"></td>
                <td><label for="">12022</label><input type="checkbox"></td>
                <td><label for="">12023</label><input type="checkbox"></td>
                <td><label for="">12024</label><input type="checkbox"></td>
                <td><label for="">12025</label><input type="checkbox"></td>
            </tr>
        </tbody>
    </table>
    
</div>





<?php
include 'toolbar-right.php';
include 'footer.php';
?>
