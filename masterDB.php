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
                $getCurrentDatesQuery = "SELECT TOP 100 IdTicket, TicketNumber FROM Tickets;";
                $dataset = sqlsrv_query($conn, $getCurrentDatesQuery);
                
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
		$queryError = false;
            try{
		for($x=0 ; $x<$tickets.count(); $x++){ //loop through the tickets list
			$reserveTicketsQuery = "UPDATE Tickets SET IdStatus = ?, ReservedLimit = ? WHERE IdTicket = ?;";
			$params = array(3,$reservedLimit,$tickets[$x]);
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

?>