$(document).ready(function(){
	var taskSearch = document.getElementById("appSearch");
	$("#appicons").click(function(){
		document.getElementById("appsmenu").classList.toggle("opened");
		taskSearch.value = '';
		$("#appicons li").css('display', 'block')
	  }, function(){
		document.getElementById("appsmenu").classList.remove("opened");
		taskSearch.value = '';
		$("#appicons li").css('display', 'block')

	});
  $("#settingsUP").click(function(){
    document.getElementById("appsmenu").classList.toggle("opened");
	taskSearch.value = '';
    }, function(){
    document.getElementById("appsmenu").classList.remove("opened");
	taskSearch.value = '';

  });
  });


function appSearch() {
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById("appSearch");
	filter = input.value.toUpperCase();
	ul = document.getElementById("appicons");
	li = ul.getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
			a = li[i].getElementsByTagName("a")[0];
			txtValue = a.textContent || a.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
					li[i].style.display = "";
			} else {
					li[i].style.display = "none";
			}
	}
	document.getElementById("appsmenu").classList.add("opened");

}


function appstoggle() {
	document.getElementById("appsmenu").classList.toggle("opened");
}
function quidgetsToggle() {
	document.getElementById("appsmenu").classList.toggle("quidgets");
}

function startDate(){
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
    var date = new Date();
	var d = date.getDate();
	var mOld = date.getMonth() + 1;
  var m = monthNames[date.getMonth()];
	var y = date.getFullYear();
  var hour = date.getHours();
  var minute = date.getMinutes();

  hour = (hour < 10) ? "0" + hour : hour;
  minute = (minute < 10) ? "0" + minute : minute;
	d = (d < 10) ? "0" + d : d;
  m = (m < 10) ? "0" + m : m;

    var date = hour + ":" + minute + " • " + m + " " + d + ", " + y
    document.getElementsByClassName("timedatetext")[0].innerText = date;
    document.getElementsByClassName("timedatetext")[0].textContent = date;
    setTimeout(startDate, 1000);
}



