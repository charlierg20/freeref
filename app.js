function web() {
  var author = document.getElementById("w-author").value;
  var year = document.getElementById("w-year").value;
  var title = document.getElementById("w-title").value;
  var url = document.getElementById("w-url").value;
  var day = document.getElementById("w-day").value;
  var month = document.getElementById("w-month").value;
  var acyear = document.getElementById("w-acyear").value;

  document.getElementById("w-result").innerHTML = author + " (" + year + "), " + title + ", viewed " + day + " " + month + " " + acyear + ", &lt;" + url + ">.";
}

function book() {
  var author = document.getElementById("b-author").value;
  var year = document.getElementById("b-year").value;
  var title = document.getElementById("b-title").value;
  var pub = document.getElementById("b-pub").value;
  var publoc = document.getElementById("b-publoc").value;

  document.getElementById("b-result").innerHTML = author + " (" + year + "), " + title + ", " + pub + ", " + publoc + ".";
}

function img() {
  var author = document.getElementById("i-author").value;
  var year = document.getElementById("i-year").value;
  var title = document.getElementById("i-title").value;
  var container = document.getElementById("i-container").value;
  var url = document.getElementById("i-url").value;
  var day = document.getElementById("i-day").value;
  var month = document.getElementById("i-month").value;
  var acyear = document.getElementById("i-acyear").value;

  document.getElementById("i-result").innerHTML = author + " (" + year + "), " + title + ", " + container + ", viewed " + day + " " + month + " " + acyear + ", &lt;" + url + ">.";
}

function journal() {
  var author = document.getElementById("j-author").value;
  var year = document.getElementById("j-year").value;
  var atitle = document.getElementById("j-atitle").value;
  var jtitle = document.getElementById("j-jtitle").value;
  var volume = document.getElementById("j-volume").value;
  var issue = document.getElementById("j-issue").value;
  var from = document.getElementById("j-from").value;
  var to = document.getElementById("j-to").value;

  document.getElementById("j-result").innerHTML = author + " (" + year + "), '" + atitle + "', " + jtitle + ", vol. " + volume + ", no. " + issue + ", pp. " + from + "-" + to + ".";
}