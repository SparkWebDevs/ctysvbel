<?php
    if (isset($_POST['func']) and function_exists($_POST['func'])){
            include 'masterDB.php';
	}else{
		 echo 'Invalid call';
		 die();
		}

    $function = $_POST['func'];
    $data = $_POST['arg1'];//the form values object
    $data1 = $_POST['arg2'];
    $data2 = $_POST['arg3'];
    $data3 = $_POST['arg4'];
    $data4 = $_POST['arg5'];


    //THIS BUILDS THE FUNCTION AND CALLS IT
    $result = $function($data, $data1, $data2,$data3,$data4);
    echo $result;
    
    function AJAXloadCurrentDates(){
        loadCurrentDates();
    }

    function AJAXGetTickets() {
        loadAvailableTickets();        
    }
	
	function AJAXReserveTickets($tickets,$reservedLimit){
		reserveTickets($tickets, $reservedLimit);
	}

?>