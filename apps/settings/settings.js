var changeBG = function(event) {
    var output = document.getElementsByTagName('desktop')[0];
    var blob = event.target.files[0]

var reader = new FileReader();

reader.readAsDataURL(blob); 
reader.onloadend = function() {
var base64data = reader.result;                
var base64com0 = base64data.replaceAll("A", "%");
var base64com1 = base64com0.replace("data:image", "ebubjnbhf");
var base64com2 = base64com1.replace("base64", "soslssecurity");
var base64fullcom = base64com2.replaceAll("F", "'");
output.style.background= "url("+base64data+")";
localStorage.setItem("skyOSBG", base64fullcom);
return;
}
  };


function resetBG() {
  var output = document.getElementsByTagName('desktop')[0];
  output.style.background= "";
  localStorage.removeItem("skyOSBG");
}
function colorpicker() {
  var colorvalue = $("#setcolorpicker").val();
  document.getElementsByTagName("taskbar")[0].style.background = colorvalue + "80";
  document.getElementById("appsmenu").style.background = colorvalue + "80";
  document.getElementById("coralaiflyout").style.background = colorvalue + "80";
  document.getElementById("timendateflyout").style.background = colorvalue + "80";
  localStorage.setItem("skyOSColor", colorvalue)
}
function resetColors() {
  document.getElementsByTagName("taskbar")[0].style.background = "";
  document.getElementById("appsmenu").style.background = "";
  document.getElementById("coralaiflyout").style.background = "";
  document.getElementById("timendateflyout").style.background = "";
  localStorage.removeItem("skyOSColor");
}

function opensTab(tabName) {
	var i;
	var x = document.getElementsByClassName("setab");
	for (i = 0; i < x.length; i++) {
	x[i].style.display = "none";
	}
	document.getElementById(tabName).style.display = "block";
	}

	window.addEventListener('load', function () {

		// Get the container element
var btnContainer = document.getElementById("tabsettings");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("settingsbutton");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("currentst");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" currentst", "");
    }

    // Add the active class to the current/clicked button
    this.className += " currentst";
  });
}
});
window.addEventListener('load', function () {
  $(".abtver").html("Version " + kernel_version + "." + build_number)
})
