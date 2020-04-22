const api_key = "TW8uocddzGI40lSrPSm8hM4cNSTUyqiQ";
let vectorTitle = [];

window.onload = function () {
  suggestionsGif();
  topVideos();
};

//resultados sugeridos, batman , hello, homero
let searchGif = document.getElementById("search-gif");
let textBatman = document.getElementById("textBatman");
let textHomero = document.getElementById("textHomero");
let textHello = document.getElementById("textHello");
let textSuggestion;
let styleInputButon, styleInputText, styleInputLupa;

styleInputButon = document.getElementById("buton-buscar");
styleInputText = document.getElementById("button");
styleInputLupa = document.getElementById("styleInputLupa");

// resultado sugerido Batman
textBatman.addEventListener("click", function () {
  textSuggestion = textBatman.text;
  noShowTitleGif();
  getData(textSuggestion);
  showHistorySearch(textSuggestion);
  noShowCtrSuggestion();
  noShowInputText();
});

// resulatdo sugerido Homero
textHomero.addEventListener("click", function () {
  textSuggestion = textHomero.text;
  console.log("valor de getvaluesu" + textSuggestion);
  noShowTitleGif();
  getData(textSuggestion);
  showHistorySearch(textSuggestion);
  noShowCtrSuggestion();
  noShowInputText();
});

// resulatdo sugerido Hello
textHello.addEventListener("click", function () {
  textSuggestion = textHello.text;
  console.log("valor de getvaluesu" + textSuggestion);
  noShowTitleGif();
  getData(textSuggestion);
  showHistorySearch(textSuggestion);
  noShowCtrSuggestion();
  noShowInputText();
});

function noShowCtrSuggestion() {
  searchSuggestion.style.display = "none";
}

//buscar el valor de la barra search
document.getElementById("button").addEventListener("click", function () {
  let valueSearch = document.getElementById("search-gif").value;
  noShowTitleGif();
  getData(valueSearch);
  showHistorySearch(valueSearch);
  noShowInputText();
});

// click a boton ver mas de los gif y realizar busqueda
document.getElementById("boton-1").addEventListener("click", function () {
  console.log("este es el vector " + vectorTitle[0]);
  noShowTitleGif();
  getData(vectorTitle[0]);
  showHistorySearch(vectorTitle[0]);
  noShowInputText();
});

document.getElementById("boton-2").addEventListener("click", function () {
  console.log("este es el vector " + vectorTitle[1]);
  noShowTitleGif();
  getData(vectorTitle[1]);
  showHistorySearch(vectorTitle[1]);
  noShowInputText();
});

document.getElementById("boton-3").addEventListener("click", function () {
  console.log("este es el vector " + vectorTitle[2]);
  noShowTitleGif();
  getData(vectorTitle[2]);
  showHistorySearch(vectorTitle[2]);
  noShowInputText();
});

document.getElementById("boton-4").addEventListener("click", function () {
  console.log("este es el vector " + vectorTitle[3]);
  noShowTitleGif();
  getData(vectorTitle[3]);
  showHistorySearch(vectorTitle[3]);
  noShowInputText();
});

// Variables cambio de tema
let tag = document.getElementById("content-Themes");
let themeBodyNight = document.getElementById("themeNight");
let themeBodyDay = document.getElementById("themeDay");
let sailorDay = document.getElementById("boxSailorday");
let textSailorNight = document.getElementById("textSailorNight");
let themeBody = document.getElementById("themeBody");
let counterVisits = document.getElementById("counterVisits");
let themeLogo = document.getElementById("themeLogo");
let botonCrear = document.getElementById("botonCrear");
let createGif = document.getElementById("createGif");
let botonElegir = document.getElementById("ElegirTemas");
let DropDown = document.getElementById("DropDown");
let iconDrop = document.getElementById("iconDrop");
let themeTxtGuifos = document.getElementById("colorTextGuifos");
let BoxSearch = document.getElementById("themeBoxSearch");
let subBoxSearch = document.getElementById("containerSearch");
let textBuscar = document.getElementById("button");
let textSearch1 = document.getElementById("textSearch-1");
let textSearch2 = document.getElementById("textSearch-2");
let textSearch3 = document.getElementById("textSearch-3");
let suggestion1 = document.getElementById("suggestion-1");
let suggestion2 = document.getElementById("suggestion-2");
let suggestion3 = document.getElementById("suggestion-3");
let suggestion4 = document.getElementById("suggestion-4");

document.getElementById("dropDown"),
  addEventListener("click", function () {
    if (tag.style.display === "none") {
      tag.style.display = "block";
      themeBodyNight.addEventListener("click", themeNight);
      themeBodyDay.addEventListener("click", themeDay);
    } else {
      tag.style.display = "none";
    }
  });

let boxtitle1 = document.getElementById("boxTitleName-1");
let textTitle1 = document.getElementById("nameTitle-1");
let boxtitle2 = document.getElementById("boxTitleName-2");
let textTitle2 = document.getElementById("nameTitle-2");
let boxtitle3 = document.getElementById("boxTitleName-3");
let textTitle3 = document.getElementById("nameTitle-3");
let boxtitle4 = document.getElementById("boxTitleName-4");
let textTitle4 = document.getElementById("nameTitle-4");
let boxtitle5 = document.getElementById("boxTitleName-5");
let textTitle5 = document.getElementById("nameTitle-5");
let boxtitle6 = document.getElementById("boxTitleName-6");
let textTitle6 = document.getElementById("nameTitle-6");
let boxtitle7 = document.getElementById("boxTitleName-7");
let textTitle7 = document.getElementById("nameTitle-7");
let boxtitle8 = document.getElementById("boxTitleName-8");
let textTitle8 = document.getElementById("nameTitle-8");

function themeNight() {
  themeBody.style.backgroundColor = "#110038";
  counterVisits.classList.add("themeNightHeader");
  themeLogo.setAttribute("src", "../img/gifOF_logo_dark.png");
  botonCrear.style.background = "#EE3EFE";
  createGif.style.color = "#FFFFFF";
  botonElegir.style.background = "#EE3EFE";
  textElegir.style.color = "#FFFFFF";
  tag.style.background = "#B4B4B4";
  sailorDay.classList.remove("themeDay");
  sailorDay.classList.add("sailorDayThemeNight");
  themeBodyNight.classList.remove("themeNight");
  themeBodyNight.classList.add("sailorNightThemeNight");
  textSailorNight.style.color = "#FFFFFF";
  DropDown.style.background = "#EE3EFE";
  iconDrop.style.color = "#ffffff";
  themeTxtGuifos.style.color = "#FFFFFF";
  BoxSearch.classList.add("themeNightSearch");
  subBoxSearch.style.background = "#B4B4B4";
  styleInputButon.style.background = "#B4B4B4";
  textBuscar.style.background = "#B4B4B4";
  styleInputLupa.setAttribute("src", "../img/Combined Shape.svg");
  textBuscar.style.color = "#8F8F8F";
  searchSuggestion.style.background = "#B4B4B4";
  textSearch1.style.background = "#CCCCCC";
  textSearch2.style.background = "#CCCCCC";
  textSearch3.style.background = "#CCCCCC";
  suggestion1.style.backgroundImage =
    "linear-gradient(270deg, #ee3efe 0%, #2e32fb 100%) ";
  suggestion2.style.backgroundImage =
    "linear-gradient(270deg, #ee3efe 0%, #2e32fb 100%) ";
  suggestion3.style.backgroundImage =
    "linear-gradient(270deg, #ee3efe 0%, #2e32fb 100%) ";
  suggestion4.style.backgroundImage =
    "linear-gradient(270deg, #ee3efe 0%, #2e32fb 100%) ";

  // estilos en la barra de busqueda theme night
  searchGif.addEventListener("click", function () {
    console.log("entro al theme night");
    searchSuggestion.style.display = "block";
    styleInputButon.style.background = "#EE3EFE";
    styleInputText.style.background = "#EE3EFE";
    styleInputText.style.color = "#FFFFFF";
    styleInputLupa.setAttribute("src", "../img/lupa_light.svg");
  });

  // estilos efecto hover sobre los gifs segun el theme
  // estilos box1
  boxtitle1.addEventListener("mouseover", function () {
    boxtitle1.classList.add("TitleThemeNight");
    textTitle1.innerHTML = "#" + arrayTitles[0].substr(0, 13);
    textTitle1.style.color = "#FFFFFF";
    textTitle1.style.fontWeight = "bold";
  });

  boxtitle1.addEventListener("mouseout", function () {
    boxtitle1.classList.remove("TitleThemeNight");
    textTitle1.innerHTML = "";
    textTitle1.style.color = "";
  });

  // estilos box2
  boxtitle2.addEventListener("mouseover", function () {
    boxtitle2.classList.add("TitleThemeNight");
    textTitle2.innerHTML = "#" + arrayTitles[1].substr(0, 13);
    textTitle2.style.color = "#FFFFFF";
    textTitle2.style.fontWeight = "bold";
  });

  boxtitle2.addEventListener("mouseout", function () {
    boxtitle2.classList.remove("TitleThemeNight");
    textTitle2.innerHTML = "";
    textTitle2.style.color = "";
  });

  // box3
  boxtitle3.addEventListener("mouseover", function () {
    boxtitle3.classList.add("TitleThemeNight");
    textTitle3.innerHTML = "#" + arrayTitles[2].substr(0, 13);
    textTitle3.style.color = "#FFFFFF";
    textTitle3.style.fontWeight = "bold";
  });

  boxtitle3.addEventListener("mouseout", function () {
    boxtitle3.classList.remove("TitleThemeNight");
    textTitle3.innerHTML = "";
    textTitle3.style.color = "";
  });

  // box 4
  boxtitle4.addEventListener("mouseover", function () {
    boxtitle4.classList.add("TitleThemeNight");
    textTitle4.innerHTML = "#" + arrayTitles[3].substr(0, 13);
    textTitle4.style.color = "#FFFFFF";
    textTitle4.style.fontWeight = "bold";
  });

  boxtitle4.addEventListener("mouseout", function () {
    boxtitle4.classList.remove("TitleThemeNight");
    textTitle4.innerHTML = "";
    textTitle4.style.color = "";
  });

  // box 5
  boxtitle5.addEventListener("mouseover", function () {
    boxtitle5.classList.add("TitleThemeNight");
    textTitle5.innerHTML = "#" + arrayTitles[4].substr(0, 13);
    textTitle5.style.color = "#FFFFFF";
    textTitle5.style.fontWeight = "bold";
  });

  boxtitle5.addEventListener("mouseout", function () {
    boxtitle5.classList.remove("TitleThemeNight");
    textTitle5.innerHTML = "";
    textTitle5.style.color = "";
  });

  // box 6
  boxtitle6.addEventListener("mouseover", function () {
    boxtitle6.classList.add("TitleThemeNight");
    textTitle6.innerHTML = "#" + arrayTitles[5].substr(0, 13);
    textTitle6.style.color = "#FFFFFF";
    textTitle6.style.fontWeight = "bold";
  });

  boxtitle6.addEventListener("mouseout", function () {
    boxtitle6.classList.remove("TitleThemeNight");
    textTitle6.innerHTML = "";
    textTitle6.style.color = "";
  });

  // box 7
  boxtitle7.addEventListener("mouseover", function () {
    boxtitle7.classList.add("TitleThemeNight");
    textTitle7.innerHTML = "#" + arrayTitles[6].substr(0, 13);
    textTitle7.style.color = "#FFFFFF";
    textTitle7.style.fontWeight = "bold";
  });

  boxtitle7.addEventListener("mouseout", function () {
    boxtitle7.classList.remove("TitleThemeNight");
    textTitle7.innerHTML = "";
    textTitle7.style.color = "";
  });
  // box 8
  boxtitle8.addEventListener("mouseover", function () {
    boxtitle8.classList.add("TitleThemeNight");
    textTitle8.innerHTML = "#" + arrayTitles[7].substr(0, 13);
    textTitle8.style.color = "#FFFFFF";
    textTitle8.style.fontWeight = "bold";
  });

  boxtitle8.addEventListener("mouseout", function () {
    boxtitle8.classList.remove("TitleThemeNight");
    textTitle8.innerHTML = "";
    textTitle8.style.color = "";
  });
}

function themeDay() {
  themeBody.style.backgroundColor = "#FFF4FD";
  counterVisits.classList.remove("themeNightHeader");
  themeLogo.setAttribute("src", "../img/gifOF_logo.png");
  botonCrear.classList.remove("themeNightBoton");
  botonCrear.style.background = "#F7C9F3";
  createGif.style.color = "#110038";
  botonElegir.style.background = "#F7C9F3";
  textElegir.style.color = "#110038";
  tag.style.background = "#E6E6E6";
  sailorDay.classList.remove("sailorDayThemeNight");
  sailorDay.classList.add("themeDay");
  themeBodyNight.classList.remove("sailorNightThemeNight");
  themeBodyNight.classList.add("themeNight");
  textSailorNight.style.color = "#110038";
  DropDown.style.background = "#F7C9F3";
  iconDrop.style.color = "#110038";
  themeTxtGuifos.style.color = "#110038";
  BoxSearch.classList.remove("themeNightSearch");
  subBoxSearch.style.background = "#E6E6E6";
  styleInputButon.style.background = "#E6E6E6";
  textBuscar.style.background = "#E6E6E6";
  styleInputLupa.setAttribute("src", "../img/lupa_inactive.svg");
  textBuscar.style.color = "#B4B4B4";
  searchSuggestion.style.background = "#E6E6E6";
  textSearch1.style.background = "#F0F0F0";
  textSearch2.style.background = "#F0F0F0";
  textSearch3.style.background = "#F0F0F0";
  suggestion1.style.backgroundImage =
    "linear-gradient(270deg, #f7c9f3 0%, #4180f6 100%)";
  suggestion2.style.backgroundImage =
    "linear-gradient(270deg, #f7c9f3 0%, #4180f6 100%)";
  suggestion3.style.backgroundImage =
    "linear-gradient(270deg, #f7c9f3 0%, #4180f6 100%)";
  suggestion4.style.backgroundImage =
    "linear-gradient(270deg, #f7c9f3 0%, #4180f6 100%)";

  // estilos en la barra de busqueda theme day
  searchGif.addEventListener("click", function () {
    console.log("entro al theme day");
    searchSuggestion.style.display = "block";
    styleInputButon.style.background = "#f7c9f3";
    styleInputText.style.background = "#f7c9f3";
    styleInputText.style.color = "#110038";
    styleInputLupa.setAttribute("src", "../img/lupa.svg");
  });

  // estilos efecto hover sobre los gifs en el theme day
  // box1
  boxtitle1.addEventListener("mouseover", function () {
    boxtitle1.classList.add("TitleThemeDay");
    textTitle1.innerHTML = "#" + arrayTitles[0].substr(0, 13);
    textTitle1.style.color = "#FFFFFF";
    textTitle1.style.fontWeight = "bold";
  });

  boxtitle1.addEventListener("mouseout", function () {
    boxtitle1.classList.remove("TitleThemeDay");
    textTitle1.innerHTML = "";
    textTitle1.style.color = "";
  });

  // box2
  boxtitle2.addEventListener("mouseover", function () {
    boxtitle2.classList.add("TitleThemeDay");
    textTitle2.innerHTML = "#" + arrayTitles[1].substr(0, 13);
    textTitle2.style.color = "#FFFFFF";
    textTitle2.style.fontWeight = "bold";
  });

  boxtitle2.addEventListener("mouseout", function () {
    boxtitle2.classList.remove("TitleThemeDay");
    textTitle2.innerHTML = "";
    textTitle2.style.color = "";
  });
  // box3
  boxtitle3.addEventListener("mouseover", function () {
    boxtitle3.classList.add("TitleThemeDay");
    textTitle3.innerHTML = "#" + arrayTitles[2].substr(0, 13);
    textTitle3.style.color = "#FFFFFF";
    textTitle3.style.fontWeight = "bold";
  });

  boxtitle3.addEventListener("mouseout", function () {
    boxtitle3.classList.remove("TitleThemeDay");
    textTitle3.innerHTML = "";
    textTitle3.style.color = "";
  });

  // box4
  boxtitle4.addEventListener("mouseover", function () {
    boxtitle4.classList.add("TitleThemeDay");
    textTitle4.innerHTML = "#" + arrayTitles[3].substr(0, 13);
    textTitle4.style.color = "#FFFFFF";
    textTitle4.style.fontWeight = "bold";
  });

  boxtitle4.addEventListener("mouseout", function () {
    boxtitle4.classList.remove("TitleThemeDay");
    textTitle4.innerHTML = "";
    textTitle4.style.color = "";
  });

  // box5
  boxtitle5.addEventListener("mouseover", function () {
    boxtitle5.classList.add("TitleThemeDay");
    textTitle5.innerHTML = "#" + arrayTitles[4].substr(0, 13);
    textTitle5.style.color = "#FFFFFF";
    textTitle5.style.fontWeight = "bold";
  });

  boxtitle5.addEventListener("mouseout", function () {
    boxtitle5.classList.remove("TitleThemeDay");
    textTitle5.innerHTML = "";
    textTitle5.style.color = "";
  });

  // box6
  boxtitle6.addEventListener("mouseover", function () {
    boxtitle6.classList.add("TitleThemeDay");
    textTitle6.innerHTML = "#" + arrayTitles[5].substr(0, 13);
    textTitle6.style.color = "#FFFFFF";
    textTitle6.style.fontWeight = "bold";
  });

  boxtitle6.addEventListener("mouseout", function () {
    boxtitle6.classList.remove("TitleThemeDay");
    textTitle6.innerHTML = "";
    textTitle6.style.color = "";
  });

  // box7
  boxtitle7.addEventListener("mouseover", function () {
    boxtitle7.classList.add("TitleThemeDay");
    textTitle7.innerHTML = "#" + arrayTitles[6].substr(0, 13);
    textTitle7.style.color = "#FFFFFF";
    textTitle7.style.fontWeight = "bold";
  });

  boxtitle7.addEventListener("mouseout", function () {
    boxtitle7.classList.remove("TitleThemeDay");
    textTitle7.innerHTML = "";
    textTitle7.style.color = "";
  });

  // box8
  boxtitle8.addEventListener("mouseover", function () {
    boxtitle8.classList.add("TitleThemeDay");
    textTitle8.innerHTML = "#" + arrayTitles[7].substr(0, 13);
    textTitle8.style.color = "#FFFFFF";
    textTitle8.style.fontWeight = "bold";
  });

  boxtitle8.addEventListener("mouseout", function () {
    boxtitle8.classList.remove("TitleThemeDay");
    textTitle8.innerHTML = "";
    textTitle8.style.color = "";
  });
}

//  mostrar historial de busqueda
function showHistorySearch(dataSearch) {
  let newDiv = document.createElement("div");
  let newP = document.createElement("p");
  let newContentP = document.createTextNode("#" + dataSearch);

  newP.appendChild(newContentP);
  newDiv.appendChild(newP);
  newDiv.className += " historySearch";
  newP.className += " elementChild";
  let list = document.getElementById("divParent");
  list.insertBefore(newDiv, list.childNodes[1]);
}

let arrayTitles = [];

// peticion videos tendencias
async function topVideos() {
  try {
    let urlTrendEndpoint =
      "//api.giphy.com/v1/gifs/trending?api_key=TW8uocddzGI40lSrPSm8hM4cNSTUyqiQ&limit=8";

    let stateRequest = await fetch(urlTrendEndpoint);
    let responseJson = await stateRequest.json();
    let arrayUrl = [],
      index = 0;
    responseJson.data.map(function (item) {
      arrayUrl[index] = item.images.original.url;
      arrayTitles[index] = item.title;
      index++;
    });

    showTredingGIf(arrayUrl);
    // console.log(responseJson)
  } catch (error) {
    console.log("error en la peticion tendecias " + error);
  }
}

// mostrar videos tendencias
function showTredingGIf(arrayUrlData) {
  console.log("ingreso al show trending");

  let vectorTrending = [];

  vectorTrending = document.getElementsByClassName("gifTrending");
  for (let i = 0; i <= vectorTrending.length; i++) {
    vectorTrending[i].setAttribute("src", arrayUrlData[i]);
  }
}

// obtener gif random
async function suggestionsGif() {
  try {
    let urlRandom =
      "https://api.giphy.com/v1/gifs/random?api_key=TW8uocddzGI40lSrPSm8hM4cNSTUyqiQ&limit=4";
    let vectorSuggestions = [],
      stateRequest,
      responseJson;

    for (let i = 0; i <= 3; i++) {
      stateRequest = await fetch(urlRandom);
      responseJson = await stateRequest.json();
      vectorSuggestions[i] = responseJson.data.images.original.url;
      vectorTitle[i] = responseJson.data.title;
    }

    addTitleSuggestion(vectorTitle);
    showSuggetionsGif(vectorSuggestions);
  } catch (error) {
    console.log("error obtener gif random" + error);
  }
}

// muestra gifs tendencias
function showSuggetionsGif(Urlsuggestions) {
  let tagIdGif = document.getElementsByClassName("gif-suggetions");

  for (let i = 0; i <= tagIdGif.length; i++) {
    tagIdGif[i].setAttribute("src", Urlsuggestions[i]);
  }
}

// inserta title al sugerencias gif
function addTitleSuggestion(valueTitle) {
  let item = 0;
  let dato = document.getElementsByClassName("contentValue");
  let datoToString;

  for (item = 0; item < valueTitle.length; item++) {
    datoToString = valueTitle[item];
    dato[item].textContent = "#" + datoToString.substr(0, 13);
  }
}

// no mostrar title, cuando haga peticion
function noShowTitleGif() {
  let tag = [];
  let butonvermas = [];

  tag = document.getElementsByClassName("ValueSuggestionGif");
  butonvermas = document.getElementsByClassName("butonVermas");

  for (let i = 0; i < tag.length; i++) {
    console.log((tag[i].style.display = "none"));
    butonvermas[i].style.display = "none";
  }
}

// no mostrar placeholder de los inputs
function noShowInputText() {
  let showInput = document.getElementById("Results");
  showInput.style.display = "block";

  let noShow = document.getElementsByClassName("content-text");

  for (let e = 0; e <= noShow.length; e++) {
    if ((noShow[e].style.display = "inline-block")) {
      noShow[e].style.display = "none";
    }
  }
}

// obtener datos del search
async function getData(resul) {
  console.log("el valor de resul es :" + resul);

  try {
    let URL = [],
      con = 0;

    let res = await fetch(
      "http://api.giphy.com/v1/gifs/search?q=" +
        resul +
        "&api_key=" +
        api_key +
        "&limit=12"
    );

    let dato = await res.json();

    console.log(dato);
    dato.data.map(function (elemento) {
      URL[con] = elemento.images.original.url;
      con++;
    });

    showGif(URL);
  } catch (error) {
    console.log("error obteniendo datos de bsuqueda" + error);
  }
}

// muestra consulta de gif (search)
function showGif(URL) {
  let vectorGif = document.getElementsByClassName("gif");

  console.log("entro al show gif");
  console.log(typeof URL);

  for (let i = 0; i <= vectorGif.length; i++) {
    if (typeof URL === "string") {
      vectorGif[i].setAttribute("src", URL);
    } else {
      vectorGif[i].setAttribute("src", URL[i]);
    }
  }
}
