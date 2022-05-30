const kanjiSearchText = document.getElementById("kanji");

const infoSection = document.getElementById("infoSection");
const kanjiInfo = infoSection.getElementsByTagName("p");

const kanjiDrawingSection = document.getElementById("kanjiDrawing");
const kanjiDrawing = kanjiDrawingSection.getElementsByTagName("p");

const mainInfo = document.createElement("b");
const mainInfoTextNode = document.createTextNode("Character: ");
mainInfo.appendChild(mainInfoTextNode);

const printKanjiInfo = (kanjiInfoArray) => {
  kanjiInfo[0].textContent = "Character: " + kanjiInfoArray.kanji;
  kanjiInfo[1].textContent = "Meanings: " + kanjiInfoArray.meanings;
  kanjiInfo[2].textContent = "ON Readings: " + kanjiInfoArray.on_readings;
  kanjiInfo[3].textContent = "KUN Readings: " + kanjiInfoArray.kun_readings;
  kanjiInfo[4].textContent = "JLPT: " + kanjiInfoArray.jlpt;
  kanjiInfo[5].textContent = "Stroke count: " + kanjiInfoArray.stroke_count;

  kanjiDrawing[0].textContent = kanjiInfoArray.kanji;
};

const loadKanjiRequest = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const responseHTTP = JSON.parse(this.responseText);
      console.log(responseHTTP);
      printKanjiInfo(responseHTTP);
    }
  };
  xhttp.open(
    "GET",
    "https://kanjiapi.dev/v1/kanji/" + kanjiSearchText.value.replace(/\s/g, ""),
    true
  );
  xhttp.send();
};

const kanjiRequestButton = document.getElementById("getKanjiData");

kanjiRequestButton.addEventListener("click", loadKanjiRequest);
