var recontext = localStorage.getItem("recontext");

chrome.extension.sendMessage({method: "getStatus"}, function(response) {
  if (response.status == "on") {
    var css = "* {color: transparent !important; overflow: visible !important;}";
    var head = document.getElementsByTagName("head")[0];
    var style = document.createElement("style");

    style.setAttribute("id", "recontext");
    style.type = "text/css";

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
    document.getElementsByTagName("html")[0].style.visibility = "visible";

    //recontext styler
    var words = $("p").text().split(/[\s\.\,\-\t\n\r\[\/\!\?\(\)\"\'\;\:0-9]/g);
    var collective = document.getElementsByClassName("words");
    var rdm = Math.floor((Math.random() * 5) + 2);
    var longest1 = words.sort(function(a, b) {return b.length - a.length;})[0];
    var longest2 = words.sort(function(a, b) {return b.length - a.length;})[1];
    var longest3 = words.sort(function(a, b) {return b.length - a.length;})[2];

    var smallest1 = words.sort(function(a, b) {return b.length - a.length;})[words.length - (Math.round(words.length / 1.5))];
    var smallest2 = words.sort(function(a, b) {return b.length - a.length;})[words.length - (Math.round(words.length / 1.5))];
    var image = document.getElementsByTagName("img")[2].src;

    console.log(image);
    console.log(longest1, longest2, longest3);
    console.log(smallest1, smallest2);

    $("div").append("<p id='word1' class='words' style='color: black !important;'>" + longest1 + "</p>");
    $("div").append("<p id='wordsm1' class='words' style='color: black !important;'>" + smallest1 + "</p>");
    $("div").append("<p id='word2' class='words' style='color: black !important;'>" + longest2 + "</p>");
    $("div").append("<p id='wordsm2' class='words' style='color: black !important;'>" + smallest2 + "</p>");
    $("div").append("<p id='word3' class='words' style='color: black !important;'>" + longest3 + "</p>");
    $("div").append("<img id='image' src=" + image + " />");

    $("#word1").css({"display": "block", "margin": "30px"});
    $("#word1:nth-of-type(3)").css({"font-size": "100pt", "font-weight": "bold", "text-transform": "capitalize"});
    $("#word1:nth-child(7)").css("font-size", "75pt");
    $("#word1:nth-child(even)").css("color", "transparent");
    $("#word1:nth-child(3)").css("color", "transparent");
    $("#word1:nth-child(4)").css("font-size", "12pt");
    $("#word1:nth-child(odd)").css("font-size", "30pt");
    $("#word1:nth-child(odd)").css("margin", "50px");

    $("#word2").css({"display": "block", "margin": "30px"});
    $("#word2:nth-of-type(3)").css({"font-size": "300pt", "font-weight": "bold", "text-transform": "capitalize"});
    $("#word2:nth-child(7)").css("font-size", "50pt");
    $("#word2:nth-child(even)").css("color", "transparent");
    $("#word2:nth-child(3)").css("color", "transparent");
    $("#word2:nth-child(4)").css("font-size", "12pt");
    $("#word2:nth-child(odd)").css("font-size", "30pt");
    $("#word2:nth-child(odd)").css("margin", "50px");

    $("#word3").css({"display": "block", "margin": "30px"});
    $("#word3:nth-of-type(3)").css({"font-size": "100pt", "font-weight": "bold", "text-transform": "capitalize"});
    $("#word3:nth-child(7)").css("font-size", "75pt");
    $("#word3:nth-child(even)").css("color", "transparent");
    $("#word3:nth-child(3)").css("color", "transparent");
    $("#word3:nth-child(4)").css("font-size", "12pt");
    $("#word3:nth-child(odd)").css("font-size", "30pt");
    $("#word3:nth-child(odd)").css("margin", "50px");

    $("#image").css({"width": "20%", "z-index": "-5"});
    $("#image:nth-child(even)").css("display", "none");
    $("#image:nth-child(odd)").css("margin", "40px");




  } else {
    document.getElementsByTagName("html")[0].style.visibility = "visible";
  }

  //catch weirdo html repaint and what not
  setTimeout(function() {
    document.getElementsByTagName("html")[0].style.visibility = "visible";
  }, 1000);
  setTimeout(function() {
    document.getElementsByTagName("html")[0].style.visibility = "visible";
  }, 2000);
  setTimeout(function() {
    document.getElementsByTagName("html")[0].style.visibility = "visible";
  }, 3000);
});

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  var styles = document.getElementById("recontext");
  var css = "* {color: transparent !important; overflow: visible !important;}";
  var head = document.getElementsByTagName("head")[0];
  var style = document.createElement("style");

  style.setAttribute("id", "recontext");
  style.type = "text/css";

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  //recontext styler
  var words = $("p").text().split(/[\s\.\,\-\t\n\r\[\/\!\?\(\)\"\'\;\:0-9]/g);
  var collective = document.getElementsByClassName("words");
  var rdm = Math.floor((Math.random() * 5) + 2);
  var longest1 = words.sort(function(a, b) {return b.length - a.length;})[0];
  var longest2 = words.sort(function(a, b) {return b.length - a.length;})[1];
  var longest3 = words.sort(function(a, b) {return b.length - a.length;})[2];

  var smallest1 = words.sort(function(a, b) {return b.length - a.length;})[words.length - (Math.round(words.length / 1.5))];
  var smallest2 = words.sort(function(a, b) {return b.length - a.length;})[words.length - (Math.round(words.length / 1.5))];
  var image = document.getElementsByTagName("img")[2].src;

  console.log(image);
  console.log(longest1, longest2, longest3);
  console.log(smallest1, smallest2);

  $("div").append("<p id='word1' class='words' style='color: black !important;'>" + longest1 + "</p>");
  $("div").append("<p id='wordsm1' class='words' style='color: black !important;'>" + smallest1 + "</p>");
  $("div").append("<p id='word2' class='words' style='color: black !important;'>" + longest2 + "</p>");
  $("div").append("<p id='wordsm2' class='words' style='color: black !important;'>" + smallest2 + "</p>");
  $("div").append("<p id='word3' class='words' style='color: black !important;'>" + longest3 + "</p>");
  $("div").append("<img id='image' src=" + image + " />");

  $("#word1").css({"display": "block", "margin": "30px"});
  $("#word1:nth-of-type(3)").css({"font-size": "100pt", "font-weight": "bold", "text-transform": "capitalize"});
  $("#word1:nth-child(7)").css("font-size", "75pt");
  $("#word1:nth-child(even)").css("color", "transparent");
  $("#word1:nth-child(3)").css("color", "transparent");
  $("#word1:nth-child(4)").css("font-size", "12pt");
  $("#word1:nth-child(odd)").css("font-size", "30pt");
  $("#word1:nth-child(odd)").css("margin", "50px");

  $("#word2").css({"display": "block", "margin": "30px"});
  $("#word2:nth-of-type(3)").css({"font-size": "300pt", "font-weight": "bold", "text-transform": "capitalize"});
  $("#word2:nth-child(7)").css("font-size", "50pt");
  $("#word2:nth-child(even)").css("color", "transparent");
  $("#word2:nth-child(3)").css("color", "transparent");
  $("#word2:nth-child(4)").css("font-size", "12pt");
  $("#word2:nth-child(odd)").css("font-size", "30pt");
  $("#word2:nth-child(odd)").css("margin", "50px");

  $("#word3").css({"display": "block", "margin": "30px"});
  $("#word3:nth-of-type(3)").css({"font-size": "100pt", "font-weight": "bold", "text-transform": "capitalize"});
  $("#word3:nth-child(7)").css("font-size", "75pt");
  $("#word3:nth-child(even)").css("color", "transparent");
  $("#word3:nth-child(3)").css("color", "transparent");
  $("#word3:nth-child(4)").css("font-size", "12pt");
  $("#word3:nth-child(odd)").css("font-size", "30pt");
  $("#word3:nth-child(odd)").css("margin", "50px");

  $("#image").css({"width": "20%", "z-index": "-5"});
  $("#image:nth-child(even)").css("display", "none");
  $("#image:nth-child(odd)").css("margin", "40px");


  if (request.method == "start") {
    head.appendChild(style);
    document.getElementsByTagName("html")[0].style.visibility = "visible";
  }
  if (request.method == "stop") {
    if (styles) {
      styles.parentNode.removeChild(styles);
      $(".words").remove();
      $("#image").remove();
    }
    document.getElementsByTagName("html")[0].style.visibility = "visible";
  }
  if (request.method == "switchstart") {
    if (!styles) {
      head.appendChild(style);
    }
    document.getElementsByTagName("html")[0].style.visibility = "visible";
  }
  if (request.method == "switchstop") {
    if (styles) {
      styles.parentNode.removeChild(styles);
      $(".words").remove();
      $("#image").remove();
    }
  }
});
