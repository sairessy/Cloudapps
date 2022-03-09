const config = {
  colors: {
    primary: "indigo"
  }
}

const type = null;

const apps = [
  {id: 0, type: "app", category: 0, folderName: "qr-code-scanner-0", name: "QR Code Scanner", img: ""},
  {id: 1, type: "app", category: 0, folderName: "imc-calculator-1", name: "IMC Calculator", img: ""},
];

let limit = 9;
const limitIncrement = limit;

const App = (id, name, img) => {
  const _img = img == "" ? "assets/img/image-solid.svg" : img; 

  return(`
    <a href="/app/${id}" target="" class="app">
      <div class="cover" style='background-image: url(${_img})'></div>
      <p>${name}</p>
    </a>
  `);
}

function getApps() {
  let _apps = "";
  const _limit = limit >= apps.length ? apps.length : limit;
  for (let i = 0; i < _limit; i++) {
    const app = apps[i];
    _apps += App(app.id, app.name, app.img);
  }
  document.getElementById("apps").innerHTML = _apps;
  if(limit < apps.length) {
    document.getElementById("btn-more").style.display = "block";
  } else {
    document.getElementById("btn-more").style.display = "none";
  }
}

function getSearchResult(text) {
  document.getElementById("btn-more").style.display = "none";
  let _apps = "";
  const auxApps = apps.filter(app => app.name.toLowerCase().includes(text.toLowerCase()));
  if(auxApps.length > 0) {
    for (let i = 0; i < auxApps.length; i++) {
      const app = auxApps[i];
      _apps += App(app.id, app.name, app.img);
    }
  }

  document.getElementById("apps").innerHTML = _apps;
}

getApps();

document.getElementById("btn-more").addEventListener("click", ()=> {
  limit = limit + limitIncrement;
  getApps();
});

document.getElementById("input-search").addEventListener("keyup", (e) => {
  const text = e.target.value;
  if(text === "") {
    getApps();
  } else {
    getSearchResult(text);
  }
});

document.getElementById("btn-menu").addEventListener("click", () => {
  $("#slider-container").fadeIn()
  $("#slider").animate({left: "0"}, 500);
});

let navShown = false;
$("#btn-filter").click(() => {
  navShown = !navShown;
  $("nav").css({display: navShown ? "flex" : "none"});
});

document.getElementById("slider-container").addEventListener("click", e => {
  if(e.target.id === "slider-container") {
    $("#slider-container").fadeOut(700);
    $("#slider").animate({left: "-75%"}, 500, ()=> {
    });
  }
});

$(".tab").click((e) => {
  const id = e.target.id;
  if(["tab-1", "icon-tab-1", "label-tab-1"].includes(id)) {
    $("#label-tab-2").css({"color": "#000000"})
    $("#label-tab-1").css({"color": config.colors.primary})
  } else {
    $("#label-tab-1").css({"color": "#000000"})
    $("#label-tab-2").css({"color": config.colors.primary})
  }
});