function generate() {

    // grab the selected values from the arrays
    var raceDD = document.getElementById("ddRace");
    var selectedRace = raceDD.options[raceDD.selectedIndex].value;

    var classDD = document.getElementById("ddClass");
    var selectedClass = classDD.options[classDD.selectedIndex].value;

    var levelDD = document.getElementById("ddLevel");
    var selectedLevel = levelDD.options[levelDD.selectedIndex].value;

    var alignmentDD = document.getElementById("ddAlignment");
    var selectedAlignment = alignmentDD.options[alignmentDD.selectedIndex].value;

    // race
    if (selectedRace == "Choose a race.") {
        var races = readTextFile("files/races.txt");
        var rn = Math.floor(Math.random() * races.length);
        selectedRace = races[rn];  
    }

    // class
    if (selectedClass == "Choose a class.") {
        var classes = readTextFile("files/classes.txt");
        var cn = Math.floor(Math.random() * classes.length);
        selectedClass = classes[cn];  
    }

    // level
    if (selectedLevel == "Choose a level.") {
        selectedLevel = Math.floor(Math.random() * 20) + 1;
    }

    // alignment
    if (selectedAlignment == "Choose an alignment.") {
        var alignments = readTextFile("files/alignments.txt");
        var an = Math.floor(Math.random() * alignments.length);
        var selectedAlignment = alignments[an];
    }
    else if (selectedAlignment == "Any Good Alignment") {
        var alignments = readTextFile("files/alignments.txt");
        var an = Math.floor(Math.random() * 3);
        var selectedAlignment = alignments[an];
    }
    else if (selectedAlignment == "Any Good or Neutral Alignment") {
        var alignments = readTextFile("files/alignments.txt");
        var an = Math.floor(Math.random() * 6);
        var selectedAlignment = alignments[an];
    }
   
    // background (not selectable)
    var backgrounds = readTextFile("files/backgrounds.txt");
    var bn = Math.floor(Math.random() * backgrounds.length);
    var selectedBackground = backgrounds[bn];  
    
    // traits (not selectable)
    var traits = readTextFile("files/traits.txt");
    var tn = Math.floor(Math.random() * traits.length);
    var selectedTrait = traits[tn];

    // print out the results
    var result = "You are a level " + selectedLevel + " " + selectedAlignment + " " + 
    selectedTrait + " " + selectedRace + " " + selectedClass + " who used to be a " + selectedBackground + "!";
    document.getElementById("result").innerHTML = result;
  
    // create and display the stats
    var stats = getStats();
    document.getElementById("stats").innerHTML = stats;

    // modify the stats based on selected class and race
    var updatedStats = statsClassModification(stats, selectedClass, selectedRace);

    // get the stat array modifiers
    var statModsArray = getStatModifierArray(updatedStats);

    // display updated stats and their modifiers
    var displayHtmlStats = 
        "STR " + updatedStats[0] + ": " + statModsArray[0] + 
        "<br>DEX " + updatedStats[1] + ": " + statModsArray[1] + 
        "<br>CON " + updatedStats[2] + ": " + statModsArray[2] + 
        "<br>INT " + updatedStats[3] + ": " + statModsArray[3] + 
        "<br>WIS " + updatedStats[4] + ": " + statModsArray[4] + 
        "<br>CHA " + updatedStats[5] + ": " + statModsArray[5];
    document.getElementById("updatedStats").innerHTML = displayHtmlStats;
    
}





function readTextFile(file)
{
    var readArray = new Array();

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                readArray = allText.split("\n");
            }
        }
    }
    rawFile.send(null);

    return readArray;
}