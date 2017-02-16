<?php
include 'header.php';
include 'content.php';
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

<?php
include 'footer.php';
?>
