const apps = [
  {id: 0, folderName: "share-position", name: "Share Position", img: ""},
  {id: 1, folderName: "unit-conversor", name: "Unit Conversor", img: ""}
];

let limit = 9;
const limitIncrement = limit;

const openUrl = (id) => {
  window.location.href = "/app/share-position/";
}

const App = (id, name, img) => {
  const _img = img == "" ? "assets/img/image-solid.svg" : img; 

  return(`
    <div class="app">
      <div class="cover" style='background-image: url(${_img})' 
        onClick='openUrl(${id});'
      ></div>
      <p>${name}</p>
    </div>
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
  document.getElementById("slider-container").style.left = 0;
});

document.getElementById("slider-container").addEventListener("click", e => {
  if(e.target.id === "slider-container") {
    document.getElementById("slider-container").style.left = "-100%";
  }
});