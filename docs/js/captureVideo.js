let butonComenzar = document.getElementById("butonComenzar");
let textTitle = document.getElementById("textTitle1");
let butonCancelar = document.getElementById("butonCancelar");
let divIconCamara = document.getElementById("icon-camara");
let subBoxMain = document.getElementById("boxContent");
let boxButton = document.getElementById("boxButtons");
let contentVideo = document.getElementById("contentVideo");
let tagVideo = document.getElementById("tagVideo");
let captureGif = document.getElementsByClassName("capture");
let butonCapturar = document.getElementById("butonCapturar");
let butonListo = document.getElementById("butonListo");
let butonRepetir = document.getElementById("butonRepetir");
let uploadGif = document.getElementById("uploadGif");
let boxForward = document.getElementById("box-forward");
let imgCam = document.getElementById("imgCam");
let UploadMessage = document.getElementById("Uploadmessage");
let cancelarUpload = document.getElementById("cancelarUpload");
let BoxMain = document.getElementById("boxMain");
let GifUploaded = document.getElementById("GifUploaded");
let gifUplo = document.getElementById("gifUplo");
let uploadSuccess = document.getElementById("uploadSuccess");
let boxGaleryGuifos = document.getElementById("boxGaleryGuifos");

let stream, recorder, form;
let imgGifUploaded, getDataId;

printGalery();

butonComenzar.addEventListener("click", function () {
  ChangeBeforeToStart();
  getStream();
});

butonCapturar.addEventListener("click", function () {
  startCapture();
});

butonListo.addEventListener("click", function () {
  stop();
});

butonRepetir.addEventListener("click", function () {
  startCapture();
  butonRepetir.style.display = "none";
  uploadGif.style.display = "none";
  divIconCamara.style.display = "inline-block";
});

uploadGif.addEventListener("click", function () {
  subirGIF(form);
});

// cambios en el dom luego del listen comenzar
function ChangeBeforeToStart() {
  console.log("entro change");

  textTitle.innerHTML = "Un Chequeo Antes de Empezar";
  butonCancelar.style.display = "none";

  butonCapturar.style.display = "block";

  // ocultar butonComenzar en el dom del box - button
  butonComenzar.style.display = "none";
  boxButton.style.marginTop = "2%";

  // mostrar div del img camara
  divIconCamara.style.display = "inline-block";

  //div contenido text indicaciones e img
  subBoxMain.style.display = "none";

  // mostrar y cambios en el div video
  contentVideo.style.display = "block";
  contentVideo.style.marginRight = "auto";
  contentVideo.style.marginLeft = "auto";
  contentVideo.style.marginTop = "2%";
}

function getStream() {
  console.log(" ingerso getstream ");

  stream = navigator.mediaDevices
    .getUserMedia({
      audio: false,

      video: {
        height: {
          max: 480,
        },
      },
    })

    .then(function (stream) {
      tagVideo.srcObject = stream;
      tagVideo.play();

      recorder = RecordRTC(stream, {
        type: "gif",
        frameRate: 1,
        quality: 10,
        width: 360,
        hidden: 240,

        onGifRecordingStarted: function () {
          console.log("started");
        },
      });
    });
}

function startCapture() {
  console.log("star captura ");

  textTitle.innerHTML = "Capturando tu Guifo";

  // ocultar boton captuar, mostrar listo
  butonCapturar.style.display = "none";
  butonListo.style.display = "inline-block";
  divIconCamara.style.backgroundColor = "#FF6161";

  // icon defectuoso
  imgCam.setAttribute("src", "./img/recording");
  recorder.startRecording();
}

function stop() {
  recorder.stopRecording(function () {
    form = new FormData();
    // creamos  archivo gif
    //con getblod, accedemos a los datos grabados
    form.append("file", recorder.getBlob(), "myGif.gif");
    console.log(form.get("file"));
  });

  console.log(" stop captura");
  //  oculta boton stop y div del video
  butonListo.style.display = "none";
  divIconCamara.style.display = "none";

  //mostrar botones listo
  butonRepetir.style.display = "inline-block";
  uploadGif.style.display = "inline-block";
}

function subirGIF(data) {
  domUploadGif();

  fetch(
    "https://upload.giphy.com/v1/gifs" +
      "?api_key=" +
      "TW8uocddzGI40lSrPSm8hM4cNSTUyqiQ",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => {
      console.log(res.status);

      if (res.status != 200) {
        console.log("error en subida");
      } else {
        successUpload();
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);

      getDataId = data.data.id;
      saveStorage();
      GetUploadedGif();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function saveStorage() {
  localStorage.setItem(getDataId, JSON.stringify(getDataId));
}

function domUploadGif() {
  // deshabilito etiqueta video
  contentVideo.style.display = "none";

  //deshabiliatr boton repetir - subir guifo
  butonRepetir.style.display = "none";
  uploadGif.style.display = "none";

  // cambios en el dom de boxbuton para el upload
  boxButton.style.alignItems = "flex-end";
  boxButton.style.height = "30%";
  cancelarUpload.style.display = "block";
  BoxMain.style.backgroundColor = "#FFFFFF";

  // texto , imagen cargando gif
  textTitle.innerHTML = "Estamos Subiendo tu guifo";
  Uploadmessage.style.display = "block";
}

async function GetUploadedGif() {
  try {
    let url =
      "https://api.giphy.com/v1/gifs/" +
      getDataId +
      "?api_key=" +
      "TW8uocddzGI40lSrPSm8hM4cNSTUyqiQ";

    let response = await fetch(url);
    let resJSON = await response.json();
    let data = await resJSON;

    imgGifUploaded = data.data.images.fixed_height.url;

    showCaptureGIF(imgGifUploaded);
    gifGalery(imgGifUploaded);
  } catch (error) {
    console.log("error obteniendo data " + error);
  }
}

function successUpload() {
  //cambio titulo
  textTitle.innerHTML = "Guifo Subido Con Éxito";
  // oculto divs
  UploadMessage.style.display = "none";
  cancelarUpload.style.display = "none";
  // aplico estilos subida de guifo ok
  uploadSuccess.style.display = "flex";
  uploadSuccess.style.justifyContent = "space-evenly";
  BoxMain.style.backgroundColor = "#E6E6E6";
}

function showCaptureGIF(url) {
  butonsSuccess.addEventListener("click", function () {
    gifUplo.setAttribute("href", url);
  });

  GifUploaded.setAttribute("src", url);
}

function gifGalery() {
  //crear div galeria para inserta los replay de los gif

  let newDiv, contentImg;

  newDiv = document.createElement("div");
  newDiv.style.width = "25%";
  newDiv.style.height = "15%";
  newDiv.style.display = "inline-block";
  contentImg = document.createElement("img");
  contentImg.setAttribute("id", "gifReplay");
  contentImg.setAttribute("src", imgGifUploaded);
  newDiv.appendChild(contentImg);
  boxGaleryGuifos.appendChild(newDiv);
}

async function printGalery(id) {
  console.log("entra al pricnt");
  let newDiv, contentImg, url, keyIdJson, keyIdParse;

  for (let i = 0; i < localStorage.length; i++) {
    keyIdJson = localStorage.getItem(localStorage.key(i));

    keyIdParse = JSON.parse(keyIdJson);

    url =
      "https://api.giphy.com/v1/gifs/" +
      keyIdParse +
      "?api_key=" +
      "TW8uocddzGI40lSrPSm8hM4cNSTUyqiQ";

    try {
      let respose = await fetch(url);
      let respJSON = await respose.json();
      let data = await respJSON;
      let getUrlGif = data.data.images.fixed_height.url;

      newDiv = document.createElement("div");
      newDiv.style.width = "23%";
      newDiv.style.height = "14%";
      newDiv.style.display = "inline-block";
      newDiv.style.marginTop = "2%";
      newDiv.style.marginRight = "2%";
      contentImg = document.createElement("img");
      contentImg.style.width = "100%";
      contentImg.setAttribute("id", "gifReplay");
      contentImg.setAttribute("src", getUrlGif);
      newDiv.appendChild(contentImg);
      boxGaleryGuifos.appendChild(newDiv);
    } catch (error) {
      console.log("error al get url gif :" + +error);
    }
  }
}
