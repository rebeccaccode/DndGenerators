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

    return totalStats;
}


function statsClassModification(stats, selectedClass, selectedRace) {

    // gotta clean up the class and race variables
    selectedClass = selectedClass.trim();
    selectedRace = selectedRace.trim();

    // creates a new array to hold the stats
    var newStats = [6];

    // sorts the array from largest to smallest 
    stats.sort(function(a, b){return b-a});

    // first, sort the stats by class priorities
    if (selectedClass == "Barbarian") { // Str, Con, Dex, Wis, Int, Cha
        newStats[0] = stats[0];  
        newStats[2] = stats[1];   
        newStats[1] = stats[2]; 
        newStats[4] = stats[3]; 
        newStats[3] = stats[4]; 
        newStats[5] = stats[5]; 
    }
    else if (selectedClass == "Bard") { // Cha, Con, Dex, Wis, Int, Str
        newStats[5] = stats[0];
        newStats[2] = stats[1];
        newStats[1] = stats[2];
        newStats[4] = stats[3];
        newStats[3] = stats[4];
        newStats[0] = stats[5];
    }
    else if (selectedClass == "Cleric") { // Wis, Con, Dex, Str, Int, Cha  (Medium Armor)
        newStats[3] = stats[0];
        newStats[2] = stats[1];
        newStats[1] = stats[2];
        newStats[4] = stats[3];
        newStats[0] = stats[4];
        newStats[5] = stats[5];
    }
    else if (selectedClass == "Druid") { // Wis, Con, Dex, Int, Cha, Str
        newStats[5] = stats[0];
        newStats[2] = stats[1];
        newStats[1] = stats[2];
        newStats[3] = stats[3];
        newStats[0] = stats[4];
        newStats[4] = stats[5];
    }
    else if (selectedClass == "Fighter") { // Str, Con, Wis, Dex, Int, Cha (heavy armor)
        newStats[0] = stats[0];
        newStats[3] = stats[1];
        newStats[1] = stats[2];
        newStats[4] = stats[3];
        newStats[2] = stats[4];
        newStats[5] = stats[5];
    }
    else if (selectedClass == "Monk") { // Dex, Wis, Con, Int, Str, Cha
        newStats[4] = stats[0];
        newStats[0] = stats[1];
        newStats[2] = stats[2];
        newStats[3] = stats[3];
        newStats[1] = stats[4];
        newStats[5] = stats[5];
    }
    else if (selectedClass == "Paladin") { // Str, Con, Cha, Wis, Dex, Int
        newStats[0] = stats[0];
        newStats[4] = stats[1];
        newStats[1] = stats[2];
        newStats[5] = stats[3];
        newStats[3] = stats[4];
        newStats[2] = stats[5];
    }
    else if (selectedClass == "Ranger") { // Dex, Con, Wis, Int, Str, Cha
        newStats[4] = stats[0];
        newStats[0] = stats[1];
        newStats[1] = stats[2];
        newStats[3] = stats[3];
        newStats[2] = stats[4];
        newStats[5] = stats[5];
    }
    else if (selectedClass == "Rogue") { // Dex, Con, Wis, Int, Cha, Str
        newStats[5] = stats[0];
        newStats[0] = stats[1];
        newStats[1] = stats[2];
        newStats[3] = stats[3];
        newStats[2] = stats[4];
        newStats[4] = stats[5];
    }
    else if (selectedClass == "Sorceror") { // Cha, Con, Dex, Int, Wis, Str
        newStats[5] = stats[0];
        newStats[2] = stats[1];
        newStats[1] = stats[2];
        newStats[3] = stats[3];
        newStats[4] = stats[4];
        newStats[0] = stats[5];
    }
    else if (selectedClass == "Warlock") { // Cha, Con, Dex, Int, Wis, Str
        newStats[5] = stats[0];
        newStats[2] = stats[1];
        newStats[1] = stats[2];
        newStats[3] = stats[3];
        newStats[4] = stats[4];
        newStats[0] = stats[5];
    }
    else if (selectedClass == "Wizard") { // Int, Con, Dex, Wis, Cha, Str
        newStats[5] = stats[0];
        newStats[2] = stats[1];
        newStats[1] = stats[2];
        newStats[3] = stats[3];
        newStats[4] = stats[4];
        newStats[0] = stats[5];
    }
    else { // this else statement should NOT run
        newStats[0] = stats[0];
        newStats[1] = stats[1];
        newStats[2] = stats[2];
        newStats[3] = stats[3];
        newStats[4] = stats[4];
        newStats[5] = stats[5];
    }


    // then, add points based on race bonuses
    if (selectedRace == "Human") {
        for (var i=0; i<6; i++) {
            newStats[i] = newStats[i] + 1;
        }
    }
    else if (selectedRace == "Elf") {
        newStats[1] = newStats[1] + 2;
        // figure out what to do with subclass
    }
    else if (selectedRace == "Gnome") {

    }
    else if (selectedRace == "Dwarf") {
        newStats[2] = newStats[2] + 2;
    }

    /*
    Human
    Elf
    Gnome
    Dwarf
    Tiefling
    Aasimar
    Half-Elf
    Half-Orc
    Dragonborn
    Halfling
    */


    return newStats;
}


function getStatModifierArray(stats) {
    var newArray = [];

    for (var i = 0; i < 6; i++) {
        var tempNum = (stats[i]-11)/2;      
        var mo = (Math.round(tempNum));
        newArray.push(mo);
    }

    return newArray;
}
