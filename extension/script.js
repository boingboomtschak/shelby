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
		var answers = {};
		answers["visual"] = [v1.value, v2.value];
		answers["auditory"] = [a1.value, a2.value];
		answers["verbal"] = [ve1.value, ve2.value];
		answers["useful"] = [u1.value,u2.value];
		answers["comment"] = [ct.value];
		answers["social"] = [s1.value];
		var data = {};
		//data["domain"] = document.;
		data["user"] = user.value;
		data["answers"] = answers.value;
		//window.alert(data["domain"]);
		document.write("Thank you for your feedback!")
	}
}