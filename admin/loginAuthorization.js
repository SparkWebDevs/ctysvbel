$(document).ready(function() {
    
    if(window.sessionStorage.getItem("cetysPass") !== null) {
			console.log("session");
			window.open ('adminIndex','_self',false);
		}
		
		if(window.sessionStorage.getItem("NoCredentials") !== null) {
            console.log("no session");
			
			$("#papers-please").animate({"opacity":"1"}, 500, function(){
				
				var timeout = setTimeout(function(){
					
					$("#papers-please").animate({"opacity":"0"}, 500);
					
					}, 2000, clearTimeout(timeout));
				
				});
			
			window.sessionStorage.removeItem("NoCredentials");
		
		}
});


		
		function setData(data){
				
				sessionStorage.setItem('cetysPass', data);
				
				return window.open ('adminIndex','_self',false);
					
		}
		
		function setVerification(){
		//var name = document.getElementById("username").value;
		var pass = document.getElementById("password").value;
        var user = document.getElementById("user").value;
        
        if(pass == "" || pass == null || user == "" || user == null){
            sweetAlert("Oops...", "El nombre de usuario y/o contraseña son incorrectos", "error");
            return;
        }

		$.ajax({
                type: "POST",
                url: 'ajaxInterface.php',
                data: {func: "AJAXloginUsers",arg1: user, arg2: pass},
                success: function(data) {
                     if(data === "no"){
                    	document.getElementById("password").value = "";
                    	console.log("credentials are incorrect");
                    	sweetAlert("Oops...", "El nombre de usuario y/o contraseña son incorrectos", "error");
                     } else {
                    	console.log(data);
                    	setData(data);
                        }
                }
        });
		
		}
		
		
		$("#password").on('keyup', function (e) {
			if (e.keyCode == 13) {
				setVerification();
			}
		});
        
