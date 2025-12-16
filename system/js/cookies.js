
function checkBGCookie() {
    if (localStorage.hasOwnProperty('skyOSBG') != -1)  {
      var skyOSBGLS = localStorage.getItem("skyOSBG");
      var base64uncom0 = skyOSBGLS.replaceAll("%", "A");
      var base64uncom1 = base64uncom0.replace("ebubjnbhf", "data:image");
      var base64uncom2 = base64uncom1.replace("soslssecurity", "base64");
      var base64uncompressed = base64uncom2.replaceAll("'", "F");
      $('desktop').css('background', 'url(' + base64uncompressed + ')');
  
    } else {
      return;		
    }
    }
    function CheckColorCookie() {
      if (localStorage.hasOwnProperty('skyOSColor') != -1) {
        var colorvalue = localStorage.getItem("skyOSColor");
      document.getElementsByTagName("taskbar")[0].style.background = colorvalue + "80";
      document.getElementById("appsmenu").style.background = colorvalue + "80";
      document.getElementById("coralaiflyout").style.background = colorvalue + "80";
      document.getElementById("timendateflyout").style.background = colorvalue + "80";
    
  } else {
    return;		
  }
}
function CheckFTUEandUsername() {
  if (localStorage.getItem('FTUEStatus') === null)  {
    $("#firstexperience").css("display", "block");
    $("taskbar").css("display", "none");
    $("desktop").css("background", "black");
  }
  else {
    void(0);
  }
  if (localStorage.hasOwnProperty('skyOSpfp'))  {
    var output = document.getElementsByClassName('pfpimage')[0];
    var setoutput = document.getElementsByClassName('pfpimageset')[0];
    var mOSpfpLS = localStorage.getItem("skyOSpfp");
    var base64uncom0 = mOSpfpLS.replaceAll("%", "A");
    var base64uncom1 = base64uncom0.replace("ebubjnbhf", "data:image");
    var base64uncom2 = base64uncom1.replace("skyoslssecurity", "base64");
    var base64uncompressed = base64uncom2.replaceAll("'", "F");
    output.src = base64uncompressed;
    setoutput.src = base64uncompressed;		
  } else {
    return;		
  }
  var username = localStorage.getItem("skyOSUsername");
  document.getElementsByClassName("userProfileTxt")[0].innerText = username;
  document.getElementsByClassName("userProfileTxt")[0].textContent = username;
  document.getElementsByClassName("userProfileSetTxt")[0].innerText = username;
  document.getElementsByClassName("userProfileSetTxt")[0].textContent = username;
}
    function startCookies() {
      CheckColorCookie();
      set_style_from_cookie();
        checkBGCookie();

    }

    function resetCookies() {
      localStorage.removeItem("skyOSColor");
      localStorage.removeItem("skyOSBG");
      localStorage.removeItem("skyOSTheme");
      resetOrionDB(); 
      alert("skyOS has been reset.")
      window.location.reload(true);
    }