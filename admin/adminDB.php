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
        
        
        function logAdminUser($user, $pass){
            global $conn;
            try{
                $adminLoginQuery = "SELECT IdAdministrator FROM Administrator WHERE UserName = ? AND Password = ?;";
                $params = array($user,$pass);
                $dataset = sqlsrv_query($conn, $adminLoginQuery, $params);
                
                if(sqlsrv_has_rows($dataset) === FALSE){
                    echo "no";
                }else{
                    $results = sqlsrv_fetch_array($dataset, SQLSRV_FETCH_ASSOC);
                    echo $results['IdAdministrator'];
                }
                
                }catch (Exception $err) {
                    echo "no";  
                }
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
	
	function setSellDates($startDate , $endDate){
	    global $conn;
            try{
                $updateSellDatesQuery = "UPDATE Configuration SET StartDate = ?, EndDate = ? WHERE IdConfiguration = ?;";
                $params = array($startDate,$endDate,1);
                $dataset = sqlsrv_query($conn, $updateSellDatesQuery, $params);
		$rowsAffected = sqlsrv_rows_affected($dataset);
		
		if($rowsAffected === false){
			//error on query
			echo "no";
		}elseif($rowsAffected == -1){
			//no rows affected, query correct
			echo"no";
		}else{
			//rows affected correctly	
			echo "yes";	
		}
		
                }catch (Exception $err) {
                    echo "no";  
                }	
	}
    
?>