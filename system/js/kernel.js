const developer_name = "Luna";
const product_name = "skyOS";
const kernel_version = "2.0";
const build_number = "900.1";
let dataid = 0;
let iframei = 1;
let windowid = 1;
let zIndexCounter = 10;

document.title = product_name;

$(document).ready(() => {
    updateWatermark();
    initializeWindows();
    loadInstalledApps(); // Restore apps from storage (Function is now in cori.js)
    $(document).on('keydown', (e) => {
        if (e.key === 'Escape') {
            const focused = $('window.opened').last();
            if (focused.length) closeWindow(focused[0]);
        }
    });
});

function updateWatermark() {
    const lastModified = document.lastModified;
    const watermark = document.querySelector("watermark");
    watermark.innerText = `${developer_name}'s ${product_name}\nVersion ${kernel_version}.${build_number}\nCompiled on ${lastModified}`;
}

function initializeWindows() {
    $("window").each(function() {
        setupWindow(this);
        setupTaskbar(this);
    });

    $("iframe").each(function() {
        $(this).attr('data-id', iframei++);
    });

    $(".wincontent").resizable({
        handles: 'n, e, s, w, ne, se, sw, nw',
        minWidth: 200,
        minHeight: 150
    });
}

function setupWindow(winElement) {
    const id = ++dataid;
    $(winElement).attr('data-id', id).attr('class', `window${windowid++}`).draggable({
        cancel: ".wincontent",
        iframeFix: true,
        containment: "desktop", // Prevents dragging window off-screen
        start: () => bringToFront(winElement)
    }).click(() => bringToFront(winElement));
    $(winElement).wrapInner('<div class="wincontent"></div>')
            .prepend(`<div class="winheader">
                        <strong>${$(winElement).attr("appicon") + " " + $(winElement).attr("data-title")}</strong>
                        <span title="Minimize" class="winminimize">_</span>
                        <span title="Maximize" class="winmaximize">&#9634;</span>
                        <span title="Close" class="winclose">x</span>
                      </div>`);
    attachWindowEvents(winElement);
}

function setupTaskbar(winElement) {
    const id = $(winElement).attr('data-id');
    const taskbarItem = $(`<taskbarapp onclick="toggleWindow(${id})" id="minimPanel${id}" data-id="${id}">${$(winElement).attr("appicon")}</taskbarapp>`);
    $("taskbar").append(taskbarItem);

    // FIX: Hide taskbar item initially. It will be shown when openWindow() is called.
    if (!$(winElement).hasClass("opened")) {
        taskbarItem.hide();
    }
}

function attachWindowEvents(winElement) {
    $(winElement).find(".winclose").click(() => closeWindow(winElement));
    $(winElement).find(".winminimize").click(() => minimizeWindow(winElement));
    $(winElement).find(".winmaximize").click(() => maximizeWindow(winElement));
}

function closeWindow(winElement) {
    const id = $(winElement).attr("data-id");
    
    // Robust iframe handling: Find iframe ONLY inside this specific window
    const iframe = $(winElement).find('iframe');
    if (iframe.length) {
        const src = iframe.attr('src');
        // Briefly clear src to stop media playback immediately
        iframe.attr('src', ''); 
        setTimeout(() => {
            iframe.attr('src', src);
        }, 100);
    }

    // Refresh appcont to reset content state (clears inputs, resets DOM)
    const appcont = $(winElement).find('.appcont');
    if (appcont.length) {
        appcont.html(appcont.html());
    }

    $(`#minimPanel${id}`).hide().removeClass("active"); 
    $(winElement).animate({ opacity: 0 }, 200, () => $(winElement).removeClass("opened"));
}

function minimizeWindow(winElement) {
    const id = $(winElement).attr("data-id");
    $(winElement).removeClass("opened");
    $(`#minimPanel${id}`).removeClass("active");
}

function maximizeWindow(winElement) {
    $(winElement).toggleClass('fullSizeWindow');
}

function toggleWindow(id) {
    const win = $(`.window${id}`);
    const winEl = win[0];
    
    if (win.hasClass("opened")) {
        // Check if window is currently on top
        const currentZ = parseInt(win.css('z-index'));
        
        if (currentZ === zIndexCounter) {
            // It is on top, so minimize it
            minimizeWindow(winEl);
        } else {
            // It is open but behind others, bring to front
            bringToFront(winEl);
        }
    } else {
        openWindow(id);
    }
}

function openWindow(id) {
    const win = $(`.window${id}`);
    bringToFront(win[0]);
    win.animate({ opacity: 1 }, 300).addClass("opened");
    $(`#minimPanel${id}`).show().addClass("active");
}

function bringToFront(winElement) {
    // Update z-index
    zIndexCounter++;
    $(winElement).css('z-index', zIndexCounter);
    
    // Visual feedback: Highlight active taskbar item
    const id = $(winElement).attr('data-id');
    $("taskbarapp").removeClass("active");
    $(`#minimPanel${id}`).addClass("active");

    // Visual feedback: Highlight active window header
    $(".winheader").removeClass("active-header");
    $(winElement).find(".winheader").addClass("active-header");
}
