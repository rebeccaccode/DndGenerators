function createHtmlDropdowns() {

    // Race dropdown menu
    var ddRace = document.getElementById("ddRace");
    var races = readTextFile("files/races.txt");

    for(var i=0; i<races.length; i++) {
        var item = races[i];
        var el = document.createElement("option");
        el.textContent = item;
        el.value = item;
        ddRace.appendChild(el);
    }


    // Class dropdown menu
    var ddClass = document.getElementById("ddClass");
    var classes = readTextFile("files/classes.txt");

    for(var i=0; i<classes.length; i++) {
        var item = classes[i];
        var el = document.createElement("option");
        el.textContent = item;
        el.value = item;
        ddClass.appendChild(el);
    }


    // Level dropdown menu
    var ddLevel = document.getElementById("ddLevel");
    
    for(var i=1; i<21; i++) {
        var el = document.createElement("option");
        el.textContent = i;
        el.value = i;
        ddLevel.appendChild(el);
    }


    // Alignment dropdown menu
    var ddAlignment = document.getElementById("ddAlignment");
    var alignments = readTextFile("files/alignments.txt");

    var el = document.createElement("option");
    el.textContent = "Any Good Alignment";
    el.value = "Any Good Alignment";
    ddAlignment.appendChild(el);

    el = document.createElement("option");
    el.textContent = "Any Good or Neutral Alignment";
    el.value = "Any Good or Neutral Alignment";
    ddAlignment.appendChild(el);


    for(var i=0; i<alignments.length; i++) {
        var item = alignments[i];
        el = document.createElement("option");
        el.textContent = item;
        el.value = item;
        ddAlignment.appendChild(el);
    }
}