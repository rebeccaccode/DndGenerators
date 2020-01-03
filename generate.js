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
        var races = readTextFile("file:///C:/Users/Rebecca/Desktop/DndRand/files/races.txt");
        var rn = Math.floor(Math.random() * races.length);
        selectedRace = races[rn];  
    }

    // class
    if (selectedClass == "Choose a class.") {
        var classes = readTextFile("file:///C:/Users/Rebecca/Desktop/DndRand/files/classes.txt");
        var cn = Math.floor(Math.random() * classes.length);
        selectedClass = classes[cn];  
    }

    // level
    if (selectedLevel == "Choose a level.") {
        selectedLevel = Math.floor(Math.random() * 20) + 1;
    }

    // alignment
    if (selectedAlignment == "Choose an alignment.") {
        var alignments = readTextFile("file:///C:/Users/Rebecca/Desktop/DndRand/files/alignments.txt");
        var an = Math.floor(Math.random() * alignments.length);
        var selectedAlignment = alignments[an];
    }

    // traits (not selectable)
    var traits = readTextFile("file:///C:/Users/Rebecca/Desktop/DndRand/files/traits.txt");
    var tn = Math.floor(Math.random() * traits.length);
    var selectedTrait = traits[tn];


    // print out the results
    var result = "You are a level " + selectedLevel + " " + selectedAlignment + " " + selectedTrait + " " + selectedRace + " " + selectedClass + "!";
    document.getElementById("result").innerHTML = result;
    getStats();

 
}


function getStats() {

    var totalStats = [];
    var i = 0;
    while (i < 6) {
        var s1 = Math.floor(Math.random() * 6) + 1;
        var s2 = Math.floor(Math.random() * 6) + 1;
        var s3 = Math.floor(Math.random() * 6) + 1;
        var s4 = Math.floor(Math.random() * 6) + 1;

        var nums = [s1, s2, s3, s4];
        var total = s1 + s2 + s3 + s4;
        var lowNum = Math.min(...nums);
        var overallStat = total - lowNum;
        totalStats.push(overallStat);

        i++;
    }
    document.getElementById("stats").innerHTML = totalStats;
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