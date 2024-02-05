var dataid = 0
var iframei = 1
var windowid = 1
//Product identification
var developer_name = "Luna"
var product_name = "skyOS";
var kernel_version = "1.0";
var build_number = "700.650";
document.title = product_name;

$(document).ready(function(){
//Watermark Stamp
let nLastModif = document.lastModified;
var watermark = document.getElementsByTagName("watermark")[0];
watermark.innerText = developer_name + "'s " + product_name + "\n Version " + kernel_version + "." + build_number + "\nCompiled on " + nLastModif + "\nThis is a preview build, and may contain bugs.";
});

$(document).ready(function(){
	$("window").each(function() {   
        $(this).attr('data-id', dataid + 1);
        $(this).attr('class', 'window' + windowid);
        dataid++
        windowid++
        $(this).draggable({ cancel: ".wincontent", iframeFix: true});	// draggable
		$("taskbar").append('<taskbarapp onclick="toggletb('+dataid+')" id="minimPanel' + dataid + '" data-id="' + dataid + '">' + $(this).attr("appicon") + '</taskbarapp>');
        $(this).wrapInner('<div class="wincontent"></div>');
        $(this).prepend('<windowHeader><strong>' + $(this).attr("data-title") + '</strong><span title="Minimize" class="winminimize">_</span><span title="Maximize" class="winmaximize">&#9634;</span><span title="Close" class="winclose">x</span></windowheader><br>');
    })
    $("iframe").each(function() {
		$(this).attr('data-id', iframei);
		iframei++;
	});
    $(".wincontent").each(function() {
        $(this).resizable();			// resizable
    })
    $("window").each(function() {   
        $(".winclose").click(function(){
            var window = this.parentElement.parentElement;
            $(window).removeClass("opened")
            var dataidtb = $(window).attr("data-id");
            var dataidwindow = $(window).attr("data-id") - 1;
            setTimeout(function() {
                document.getElementsByTagName('iframe')[dataidwindow].src = document.getElementsByTagName('iframe')[dataidwindow].src;
            }, 500);
            $("#minimPanel" + dataidtb).css("display", "none");
        });
        
        

        $(".winminimize").click(function(){
            var window = this.parentElement.parentElement;
            var dataidmin = $(window).attr("data-id");
            $(window).removeClass("opened")
            $("#minimPanel" + dataidmin).removeClass("active")
        });

    })
     
    $(document).ready(function(){  
        if ($(window).hasClass('fullSizeWindow')) {
            $(".winmaximize").click(function(){
            var window = this.parentElement.parentElement;
            $(window).removeClass('fullSizeWindow');
            });
          }
        else {
            $(".winmaximize").click(function(){
                var window = this.parentElement.parentElement;
                $(window).toggleClass('fullSizeWindow');
            })

        }

    });
})

    



function toggletb(dataiddd) {
        $(".window" + dataiddd).toggleClass("opened");
        $("#minimPanel" + dataiddd).toggleClass("active");
}

function openWindow(id) {
    $("#minimPanel" + id).css("display", "inline");
    $("#minimPanel" + id).addClass("active");
    $(".window" + id).addClass("opened");
}







