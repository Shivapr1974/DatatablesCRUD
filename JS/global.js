		function setIcons(i){
			detail = "<img class=imgdetail  src='IMAGES/details.png' onclick=\"handleClick('details', " + i +")\">";
			edit =   "<img class=imgdetail  src='IMAGES/edit.png' onclick=\"handleClick('edit', " + i +")\">";
			del =    "<img class=imgdetail  src='IMAGES/delete.png' onclick=\"handleClick('delete', " + i +")\">";
			return {
				"detail": detail,
				"edit": edit,
				"del": del,

			}
		}
		function checkNull(str){
			return (str === "" || str === null || str === undefined);
		}
		Date.prototype.getWeek = function() {
			var onejan = new Date(this.getFullYear(), 0, 1);
			return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
		}		
		
		function setCookie(key, value) {
            var expires = new Date();
            expires.setTime(expires.getTime() + (10*365 * 24 * 60 * 60 * 1000));
            document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
        }

        function getCookie(key) {
            var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
            return keyValue ? keyValue[2] : null;
        }
  
        function findAndReplace(string, target, replacement) {
        	 var i = 0, length = string.length;
        	 for (i; i < length; i++) {
        	   string = string.replace(target, replacement);
        	 }
        	 return string;
        	 
       	}        
		
		
        function openWorkList( id) {
            window.open("/FraudGUI/detail.jsp?TABLE=worklist&ID="+ id, "", "width=1200,height=600");
        }   
        
        
        function updateStatus(select, order_id, id) {
        	var url="/FraudGUI/DBDataServlet?type=Update&Order_Id="+
        				order_id+"&Status="+select.value;
        	console.log(url);
        	$.ajax(url, {
        	      success: function(data) {
        	    	  if(data.indexOf("Success")>=0){
        	    			console.log("Update Successful");
        	    		    location.reload();
        	    	  }else{
        	 	         alert("Updated failed");
        	    	  }
        	      },
        	      error: function() {
        	         alert("Failed update");
        	      }
        	   });
        }

        