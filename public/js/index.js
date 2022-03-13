const config = {
  colors: {
    primary: "#2bccb1"
  }
}

let type = null;

const apps = [
  {id: 0, type: "0", category: 0, folderName: "qr-code-scanner-0", name: "QR Code Scanner", img: "", desc: ""},
  {id: 1, type: "0", category: 0, folderName: "imc-calculator-1", name: "Calculadora de IMC", img: "", desc: ""},
  {id: 2, type: "0", category: 0, folderName: "bussola-2", name: "Bússola", img: "", desc: ""},
  {id: 3, type: "0", category: 0, folderName: "voice-modifier-3", name: "Voice Modifier", img: "", desc: ""},
  {id: 4, type: "0", category: 0, folderName: "youtube-downloader-4", name: "Youtube Downloader", img: "", desc: ""},
  {id: 5, type: "0", category: 0, folderName: "text-to-speach-5", name: "Text to Speach", img: "", desc: ""},
  {id: 6, type: "0", category: 0, folderName: "share-position-6", name: "Share position", img: "", desc: ""},
  {id: 7, type: "0", category: 0, folderName: "qr-code-generator-7", name: "QR Code Generator", img: "", desc: ""},
  {id: 8, type: "0", category: 0, folderName: "color-identifier-8", name: "Color identifier", img: "", desc: ""},
  {id: 9, type: "0", category: 0, folderName: "post-maker-9", name: "Post Maker", img: "", desc: ""},
  {id: 10, type: "0", category: 0, folderName: "kittens-curiosities-10", name: "Kittens Curiosities", img: "", desc: ""},
  {id: 11, type: "1", category: 0, folderName: "gess-flag-name-11", name: "Gess flag name", img: "", desc: ""},
  {id: 12, type: "0", category: 0, folderName: "dicionario-de-calao-12", name: "Dicionário de calão", img: "", desc: ""},
  {id: 13, type: "0", category: 0, folderName: "charadas-13", name: "Charadas", img: "", desc: ""},
  {id: 14, type: "0", category: 0, folderName: "fatos-curiosos-14", name: "Fatos curiosos", img: "", desc: ""},
  {id: 15, type: "0", category: 0, folderName: "geek-quiz-15", name: "Geek quiz", img: "", desc: ""},
  {id: 16, type: "0", category: 0, folderName: "famous-identifier-16", name: "Famous identifier", img: "", desc: ""},
  {id: 17, type: "0", category: 0, folderName: "music-identifier-17", name: "Music identifier", img: "", desc: ""},
  {id: 18, type: "0", category: 0, folderName: "desenho-18", name: "Desenho", img: "", desc: ""},
  {id: 19, type: "0", category: 0, folderName: "network-spped-tester-19", name: "Natwork Speed Tester", img: "", desc: ""},
];

let limit = 9;
const limitIncrement = limit;

const App = (id, name, img) => {
  const _img = img == "" ? "assets/img/image-solid.svg" : img; 

  return(`
    <a href="/app/${id}" target="" class="app">
      <div class="cover" style='background-image: url(${_img})'></div>
      <div class="title"><p>${name}</p></div>
    </a>
  `);
}

function getApps() {
  let _apps = "";
  
  let auxApps = apps;

  if(type !== null) {
    auxApps = apps.filter(app => app.type == type);
  }

  const _limit = limit >= auxApps.length ? auxApps.length : limit;
 
  for (let i = 0; i < _limit; i++) {
    const app = auxApps[i];
    _apps += App(app.id, app.name, app.img);
  }

  document.getElementById("apps").innerHTML = _apps;
  
  if(limit < auxApps.length) {
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

$("#slider-container").on("click", e => {
  if(e.target.id === "slider-container") {
    $("#slider-container").fadeOut(700);
    $("#slider").animate({left: "-75%"}, 500, ()=> {
    });
  }
});

$(".tab").click((e) => {
  const id = e.target.id;
  if(["tab-1", "icon-tab-1", "label-tab-1"].includes(id)) {
    $("#label-tab-2").css({"color": "#999"})
    $("#label-tab-1").css({"color": config.colors.primary});
    type = 0;
  } else {
    $("#label-tab-1").css({"color": "#999"})
    $("#label-tab-2").css({"color": config.colors.primary})
    type = 1;
  }
  getApps();
});



$(document).on("scroll", e => {
  const t = $(document).scrollTop();
  if(t > 0) {
    $("header").css({"box-shadow": "1px 1px 1px #eee"})
  } else {
    $("header").css({"box-shadow": "none"})
  }
});

$("#btn-bookmark").click(() => {
  console.log("Bookmark");
});

$("#input-search").focus(() => {
  $("#logo-title").hide();
  $("#form-search").css({width: "auto", flex: 1});
});

$("#input-search").blur(() => {
  $("#logo-title").show();
  $("#form-search").css({width: "45px", flex: "unset"});
});