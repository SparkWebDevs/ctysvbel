<?php
		
		//DEVELOPMENT SERVER
		$db['serverName'] = 'ctysvbelserver.database.windows.net';
		$db['user']		  = 'ctysvbeladmin';
		$db['pwd']		  = 'Cetysproj$park';
		$db['name']		  = 'ctysvbeldb';

        try {
                $connectionInfo = array('UID'=>$db['user'], 'PWD'=>$db['pwd'], 'Database'=>$db['name']);
                $conn = sqlsrv_connect( $db['serverName'], $connectionInfo);
        }catch (Exception $e){
            echo "Connection could not be established.<br/>";
            die(var_dump($e));
        }
         
	
	function loadCurrentDates(){
		global $conn;
            try{
                $getCurrentDatesQuery = "SELECT StartDate,EndDate FROM Configuration;";
                $dataset = sqlsrv_query($conn, $getCurrentDatesQuery);
                
                if(sqlsrv_has_rows($dataset) === FALSE){
                    echo "no";
                }else{
                    $results = sqlsrv_fetch_array($dataset, SQLSRV_FETCH_ASSOC);
                    echo json_encode($results);
                }
                
                }catch (Exception $err) {
                    echo "no";  
                }
	}
	
    function loadAvailableTickets() {
        global $conn;
        
            try{
                $getCurrentDatesQuery = "SELECT TOP 100 IdTicket, TicketNumber FROM Tickets WHERE IdStatus = ?;";
		$params = array(1);
                $dataset = sqlsrv_query($conn, $getCurrentDatesQuery,$params);
                
                if(sqlsrv_has_rows($dataset) === FALSE){
                    echo "no";
                }else{
                    $x = 0;
                    $masterResults = [];
                    while($results = sqlsrv_fetch_array($dataset,SQLSRV_FETCH_ASSOC)){
                        $masterResults[$x] = $results;
                        $x++;
                    }        
                    echo json_encode($masterResults);
                }
                
            }catch (Exception $err) {
                    echo "no";  
            }
        
    }
    
    function reserveTickets($tickets, $reservedLimit){
		global $conn;
		$ticketsList = json_decode($tickets);
		$queryError = false;
            try{
		for($x=0 ; $x < count($ticketsList); $x++){ //loop through the tickets list
			$reserveTicketsQuery = "UPDATE Tickets SET IdStatus = ?, ReservedLimit = ? WHERE IdTicket = ?;";
			$params = array(3,$reservedLimit,$ticketsList[$x]);
			$dataset = sqlsrv_query($conn, $reserveTicketsQuery, $params);
			if(sqlsrv_rows_affected($dataset) === FALSE){
				$queryError = true;
			}
		}
		
		if($queryError){
			echo "no";
		}else{
			echo "yes";
		}

                }catch (Exception $err) {
                    echo "no";  
                }
    }
    
    function unreserveTickets($currentDate){
		global $conn;
            try{

		$unreserveTicketsQuery = "UPDATE Tickets SET IdStatus = ?, ReservedLimit = ? WHERE ReservedLimit < ?;";
		$params = array(1,NULL,$currentDate);
		$dataset = sqlsrv_query($conn, $unreserveTicketsQuery, $params);
		
		if(sqlsrv_rows_affected($dataset) === FALSE){
			echo "no";
			}else{
			echo sqlsrv_rows_affected($dataset);
			}

                }catch (Exception $err) {
                    echo "no";  
                }
    }

?>