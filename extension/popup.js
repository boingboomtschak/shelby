window.onload = function(){
	document.getElementById('save').onclick = function(){
		var user = "demo";
		var host = window.location.hostname;
		var v1 = document.getElementById("visual-1");
		var v2 = document.getElementById("visual-2");
		var a1 = document.getElementById("auditory-1");
		var a2 = document.getElementById("auditory-2");
		var ve1 = document.getElementById("verbal-1");
		var ve2 = document.getElementById("verbal-2");
		var s1 = document.getElementById("social-1");
		var u1 = document.getElementById("useful-1");
		var u2 = document.getElementById("useful-2");
		var ct = document.getElementById("comment");
		var url = window.location.host;
			 var values={ 
     visual1: v1.value, 
     visual2: v2.value,
     auditory1:a1.value,
     auditory2:a2.value,  
     verbal1:ve1.value,
     verbal2:ve2.value, 
     social1:s1.value, 
     useful1:u1.value,
     useful2:u2.value,
     comment:ct.value};

			document.write(v1.value);
			     




//document.write(values.visual1);


		//var value = document.getElementById('');

		//chrome.storage.sync.set({'myline':value}, function(){

		}
//	}
}
		//});
		//};
	// 	document.getElementById("get").onclick = function(){
	// 		chrome.storage.sync.get("myLine",function(data){
	// 			alert(data.myLine);
	// 		});
	// 	}
	// }

