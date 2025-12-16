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

function loadThemesRow() {
  const themeHTML = `
    <h2>Themes</h2>
    <button class="settingsbutton" onclick="switch_style('default');return false;">Default</button>
    <button class="settingsbutton" onclick="switch_style('modern');return false;">Modern</button>
`;
document.querySelector('.themerow').innerHTML += themeHTML;
}
function loadWallpaperSection() {
  const bgHTML = `
<h2>Wallpaper</h2>
 <input id="inputbtn" class="wppicker" type="file" accept="image/*" onchange="changeBG(event)">
                         <br>
<button class="settingsbutton" onclick="resetBG();">Reset BG</button>   
`;
document.querySelector('.wallpapersection').innerHTML += bgHTML;
}
function loadColorsSection() {
  const colorHTML = `
 <h2>Colors</h2>
                         <input id="setcolorpicker" type="color" value="#ff0000" onchange="colorpicker();">Select your color</input>
                         <br>
                         <button class="settingsbutton" onclick="resetColors();">Reset Colors</button> 
`;
document.querySelector('.colorsection').innerHTML += colorHTML;
}


function loadSettings() {
  document.querySelector('.themerow').innerHTML = "";
  document.querySelector('.wallpapersection').innerHTML = "";
  document.querySelector('.colorsection').innerHTML = "";  
  loadThemesRow();
  loadWallpaperSection();
  loadColorsSection();
}


//Effects Detection Script
function findBlurBackdropElements() {
  const allElements = document.querySelectorAll('*');
  const blurBackdropElements = [];

  // Iterate through all elements in the document
  allElements.forEach(element => {
      // 1. Get the computed style for the current element
      const style = window.getComputedStyle(element);
      
      // 2. Access the 'backdropFilter' property (case-sensitive)
      const backdropFilterValue = style.backdropFilter;

      // 3. Check if the value is not 'none' and specifically contains 'blur'
      // We use .includes('blur') to ensure it's the blur effect, not another backdrop filter.
      if (backdropFilterValue && backdropFilterValue !== 'none' && backdropFilterValue.includes('blur')) {
          blurBackdropElements.push(element);
      }
  });

  return blurBackdropElements;
}



let blurElements = [];
setTimeout(() => {
    blurElements = findBlurBackdropElements();  
}, 1000);

function toggleBlur() {
    const isChecked = document.getElementById('blurCheckbox').checked;

    if (blurElements.length > 0) {
        blurElements.forEach(element => { 
            if (isChecked) {
                element.style.backdropFilter = 'blur(8px)';
            } else {
                element.style.backdropFilter = 'blur(0px)';
            }
        });
    }
}


// Example JavaScript for the bubbles control
function toggleBubbles() {
  const isChecked = document.getElementById('bubblesCheckbox').checked;
  const bubblesContainer = document.querySelector('.bubbles');

  if (bubblesContainer) {
      // Toggle the visibility or a CSS class that controls the effect
      bubblesContainer.style.display = isChecked ? 'block' : 'none';
  }
}

function toggleSimpleStart() {
  $(".quickweanews").toggle();
  document.getElementById("appsmenu").classList.toggle("simple");
}

function finishFTUE() {
	var usrInpt = document.getElementById("usrinpt").value;
	$("#firstexperiencewindow").fadeOut(200);
	$(".backgroundftue").fadeOut(200);
	document.getElementsByClassName("FTUEtext")[0].innerText = "Let's begin.";
	setTimeout(function() {$("#firstexperience").fadeOut(200);$("taskbar").css("display", "block");$("desktop").css("background", "")}, 2000);
	if ( $('#usrinpt').val() === "" ) 
	{
		document.cookie = "FTUEStatus=completed"
		localStorage.setItem("FTUEStatus", "completed")
		document.cookie = "mOSUsername=User"
		localStorage.setItem("mOSUsername", "User")
		document.getElementsByClassName("userProfileTxt")[0].innerText = "User";
		document.getElementsByClassName("userProfileTxt")[0].textContent = "User";
		document.getElementsByClassName("userProfileSetTxt")[0].innerText = "User";
		document.getElementsByClassName("userProfileSetTxt")[0].textContent = "User";
	}
	else {
		document.cookie = "mOSUsername=" + usrInpt
		localStorage.setItem("mOSUsername", usrInpt)
		document.cookie = "FTUEStatus=completed"
		localStorage.setItem("FTUEStatus", "completed")
		document.getElementsByClassName("userProfileTxt")[0].innerText = usrInpt;
		document.getElementsByClassName("userProfileTxt")[0].textContent = usrInpt;
		document.getElementsByClassName("userProfileSetTxt")[0].innerText = usrInpt;
		document.getElementsByClassName("userProfileSetTxt")[0].textContent = usrInpt;
	}
}