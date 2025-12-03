
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
    function startCookies() {
      CheckColorCookie();
        checkBGCookie();
    }

    function resetCookies() {
      localStorage.removeItem("skyOSColor");
      localStorage.removeItem("skyOSBG");
      localStorage.removeItem("skyOS_apps");
      alert("skyOS has been reset.")
      window.location.reload(true);
    }