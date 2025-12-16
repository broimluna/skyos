function startServices() {
	loadSettings();
  timeService();
	weatherService();
	startCookies();
}
window.addEventListener('load', function () {
	$("#startup").fadeOut();
})
$(document).ready(function() {
	$('.applist a').on('click', function() {
	  $('#appsmenu').removeClass('opened');
	});
	$('#settingsUP').on('click', function() {
		$('#appsmenu').removeClass('opened');
	  });
    $('.installed-ori-app').on('click', function() {
      $('#appsmenu').removeClass('opened');
      });
  });
//Right click menu
document.oncontextmenu = rightClick;
  
  function rightClick(clickEvent) {
	  clickEvent.preventDefault();
	  // return false;
  }
  document.onclick = hideMenu;
  document.oncontextmenu = rightClick;
	
  function hideMenu() {
	  document.getElementById("contextMenu")
			  .style.display = "none"
  }

  function rightClick(e) {
	  e.preventDefault();

	  if (document.getElementById("contextMenu")
			  .style.display == "block")
		  hideMenu();
	  else{
		  var menu = document.getElementById("contextMenu")

		  menu.style.display = 'block';
		  menu.style.left = e.pageX + "px";
		  menu.style.top = e.pageY + "px";
	  }
  }

  function activatefull(ele) {
	if (ele.requestFullscreen) {
		ele.requestFullscreen();
	}
}

// Function for full screen activation
function deactivatefull() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	}
}

/*Bubbles*/
window.addEventListener('load', function () {
const container = document.querySelector('.bubbles');
const bubbleCount = 65;
const bubbles = [];

// initialize bubbles once
for (let i = 0; i < bubbleCount; i++) {
  const b = document.createElement('span');
  b.classList.add('bubble');
  container.appendChild(b);
  bubbles.push(b);
  startBubble(b);
}

function startBubble(b) {
  randomize(b);
  runAnimation(b);

  b.addEventListener('animationend', () => {
    b.style.opacity = '0';
    const wait = 1000 + Math.random() * 4000; // 1–5s cooldown
    setTimeout(() => {
      randomize(b);
      runAnimation(b);
    }, wait);
  });
}

function runAnimation(b) {
  b.style.animation = 'none';
  void b.offsetWidth; // force reflow
  b.style.animation = `floatUp linear ${b.dataset.duration}s forwards`;
}

function randomize(b) {
  const size = 20 + Math.random() * 80; // px
  const left = Math.random() * 100;     // %
  const duration = 8 + Math.random() * 12; // s
  const delay = Math.random() * 5;      // s

  b.style.width = `${size}px`;
  b.style.height = `${size}px`;
  b.style.left = `${left}%`;
  b.style.animationDelay = `${delay}s`;
  b.dataset.duration = duration;
}
});








function manualbubbles() {
const container = document.querySelector('.bubbles');
const bubbleCount = 65;
const bubbles = [];

// initialize bubbles once
for (let i = 0; i < bubbleCount; i++) {
  const b = document.createElement('span');
  b.classList.add('bubble');
  container.appendChild(b);
  bubbles.push(b);
  startBubble(b);
}

function startBubble(b) {
  randomize(b);
  runAnimation(b);

  b.addEventListener('animationend', () => {
    b.style.opacity = '0';
    const wait = 1000 + Math.random() * 4000; // 1–5s cooldown
    setTimeout(() => {
      randomize(b);
      runAnimation(b);
    }, wait);
  });
}

function runAnimation(b) {
  b.style.animation = 'none';
  void b.offsetWidth; // force reflow
  b.style.animation = `floatUp linear ${b.dataset.duration}s forwards`;
}

function randomize(b) {
  const size = 20 + Math.random() * 80; // px
  const left = Math.random() * 100;     // %
  const duration = 8 + Math.random() * 12; // s
  const delay = Math.random() * 5;      // s

  b.style.width = `${size}px`;
  b.style.height = `${size}px`;
  b.style.left = `${left}%`;
  b.style.animationDelay = `${delay}s`;
  b.dataset.duration = duration;
}
}