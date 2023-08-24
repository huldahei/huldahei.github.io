// 24.8.2023 (earlier version on github (github v.01)
//
// added sellFiftyShit-button that appears after having sold 1000 shit
// tuned costs and incomes a lot




let secondsPassed = 0;
let minutesPassed = 0;
let hoursPassed = 0;
let daysPassed = 0;
let weeksPassed = 0;

let gold = 10;
let totalGoldMade = 0;
let goldValue = 5;                  // 1 gold = 5 shit 
let shitValue = 1;                  // 5 shit = 1 gold

let shitProduced = 0;
let totalShitProduced = 0;
let shitShoveled = 0;
let totalShitShoveled = 0;
let totalShitSold = 0;
let shovelPower = 1; 
let totalClicks = 0;

let cows = 0;
let cowIncome = 1;
let cowCost = 8;

let moose = 0;
let mooseIncome = 5;
let mooseCost = 50;

let dragons = 0;
let dragonIncome = 30;
let dragonCost = 250;

let powerShovels = 0;
let powerShovelIncome = 2;
let powerShovelCost = 25

let diggers = 0;
let diggerIncome = 10;
let diggerCost = 125;

let excavators = 0;
let excavatorIncome = 40;
let excavatorCost = 600;

let workers = 0;
let workerPay = 2;
let workerPayTotal = 0;
let workersPaidTotal = 0;
let workerPayPerInterval = 0;
let workerIncome = 5;
let shitRequired = 25;
let shitRequiredPerInterval = 0;
let totalGoldMadeByWorkers = 0;

/* TIME */

function passTime() {

    secondsPassed = secondsPassed + 1;
    document.getElementById("seconds").innerHTML = secondsPassed + " s ";

    if (secondsPassed >= 60) {

        secondsPassed = 0;
        minutesPassed = minutesPassed + 1;
        document.getElementById("minutes").innerHTML = minutesPassed + " min ";
    }
    if (minutesPassed >= 60) {
        minutesPassed = 0;
        hoursPassed = hoursPassed + 1;
        document.getElementById("hours").innerHTML = hoursPassed + " h ";

    }
    if (hoursPassed >= 24) {
        hoursPassed = 0;
        daysPassed = daysPassed + 1;
        document.getElementById("days").innerHTML = daysPassed + " d ";
    }
    if (daysPassed >= 7) {
        daysPassedPassed = 0;
        weeksPassed = weeksPassed + 1;
        document.getElementById("weeks").innerHTML = weeksPassed + " w ";
    }
}

/* 
-------------------------------------

SHIT PRODUCTION BASICS*/

function produceShit() {

    if (cows >= 1) {

        shitProduced = shitProduced + cowIncome * cows + mooseIncome * moose + dragonIncome * dragons;  //produces shit per interval
        totalShitProduced = totalShitProduced + cowIncome * cows + mooseIncome * moose;                 //adds to total shit produced
        document.getElementById("shit-produced").innerHTML = shitProduced;
        document.getElementById("total-shit-produced").innerHTML = totalShitProduced;

    }
}

function shovelShit() {

    if (shitProduced >= shovelPower) {

        shitProduced = shitProduced - shovelPower;
        shitShoveled = shitShoveled + shovelPower;
        totalShitShoveled = totalShitShoveled + shovelPower;
        document.getElementById("shit-produced").innerHTML = shitProduced;
        document.getElementById("shit-shoveled").innerHTML = shitShoveled;
        document.getElementById("total-shit-shoveled").innerHTML = totalShitShoveled;

    }
}


function sellShit() {

    if (shitShoveled >= goldValue) {

        totalClicks++;

        shitShoveled = shitShoveled - goldValue;
        gold = gold + shitValue;
        totalGoldMade = totalGoldMade + shitValue;
        totalShitSold = totalShitSold + goldValue;
        document.getElementById("shit-shoveled").innerHTML = shitShoveled;
        document.getElementById("gold").innerHTML = gold;
        document.getElementById("total-gold-made").innerHTML = totalGoldMade;
        document.getElementById("total-shit-sold").innerHTML = totalShitSold;

        document.getElementById("total-clicks").innerHTML = totalClicks;
    }

}

function sellFiftyShit() {

    if (shitShoveled >= goldValue * 10) { // if have more than 50 shit Shoveled  

        totalClicks++;

        shitShoveled = shitShoveled - goldValue * 10;   // 5 x 10 = 50 shit
        gold = gold + shitValue * 10;                   // 5 x 1 = 5  gold 
        totalGoldMade = totalGoldMade + shitValue * 10;
        totalShitSold = totalShitSold + goldValue * 10;
        document.getElementById("shit-shoveled").innerHTML = shitShoveled;
        document.getElementById("gold").innerHTML = gold;
        document.getElementById("total-gold-made").innerHTML = totalGoldMade;
        document.getElementById("total-shit-sold").innerHTML = totalShitSold;

        document.getElementById("total-clicks").innerHTML = totalClicks;

    }
}



function getShitProducedPerInterval() {

    let shitProducedPerInterval = 0;
    if(cows >= 1) {

        shitProducedPerInterval = cowIncome * cows + mooseIncome * moose + dragonIncome * dragons;
        document.getElementById("shit-produced-per-interval").innerHTML = shitProducedPerInterval;
    }
    return shitProducedPerInterval;
}


/* 
------------------------------------------

ANIMALS */

function buyCow() {

    if (gold >= cowCost) {

        totalClicks++;

        gold = gold - cowCost;
        cows++;
        cowCost = Math.ceil(cowCost * 1.10);
        

        document.getElementById("gold").innerHTML = gold;
        document.getElementById("cows").innerHTML = cows;
        document.getElementById("cow-cost").innerHTML = cowCost;
        document.getElementById("cow-income").innerHTML = cowIncome;

        document.getElementById("total-clicks").innerHTML = totalClicks;

    }
}

function buyMoose() {

    if (gold >= mooseCost) {

        totalClicks++;

        gold = gold - mooseCost;
        moose++;
        mooseCost = Math.ceil(mooseCost * 1.10);

        document.getElementById("gold").innerHTML = gold;
        document.getElementById("moose").innerHTML = moose;
        document.getElementById("moose-cost").innerHTML = mooseCost;
        document.getElementById("moose-income").innerHTML = mooseIncome;

        document.getElementById("total-clicks").innerHTML = totalClicks;

    }
}

function buyDragon() {

    if (gold >= dragonCost) {

        totalClicks++;

        gold = gold - dragonCost;
        dragons++;
        dragonCost = Math.ceil(dragonCost * 1.10);

        document.getElementById("gold").innerHTML = gold;
        document.getElementById("dragons").innerHTML = dragons;
        document.getElementById("dragon-cost").innerHTML = dragonCost;
        document.getElementById("dragon-income").innerHTML = dragonIncome;

        document.getElementById("total-clicks").innerHTML = totalClicks;

    }
}

/* 

-----------------------------------------------

MACHINES */

function buyPowerShovel() {

    if (gold >= powerShovelCost) {

        totalClicks++;

        gold = gold -= powerShovelCost
        
        powerShovels = powerShovels + 1;
        powerShovelCost = Math.ceil(powerShovelCost * 1.10);
        
        document.getElementById("gold").innerHTML = gold;
        document.getElementById("power-shovels").innerHTML = powerShovels
        document.getElementById("power-shovel-cost").innerHTML = powerShovelCost;

        document.getElementById("total-clicks").innerHTML = totalClicks;
       
    }
}

function buyDigger() {

    if (gold >= diggerCost) {

        totalClicks++;

        gold = gold -= diggerCost
        
        diggers = diggers + 1;
        diggerCost = Math.ceil(diggerCost * 1.10);
        
        document.getElementById("gold").innerHTML = gold;
        document.getElementById("diggers").innerHTML = diggers;
        document.getElementById("digger-cost").innerHTML = diggerCost;

        document.getElementById("total-clicks").innerHTML = totalClicks;
       
    }
}

function buyExcavator() {

    if (gold >= excavatorCost) {

        totalClicks++;

        gold = gold -= excavatorCost
        
        excavators = excavators + 1;
        excavatorCost = Math.ceil(excavatorCost * 1.10);
        
        document.getElementById("gold").innerHTML = gold;
        document.getElementById("excavators").innerHTML = excavators;
        document.getElementById("excavator-cost").innerHTML = excavatorCost;

        document.getElementById("total-clicks").innerHTML = totalClicks;
       
    }
}


function autoShovelShit() {         

    if (shitProduced >= 1 && powerShovels >= 1 ) {    

        shitProduced = shitProduced - powerShovelIncome * powerShovels - diggerIncome * diggers - excavatorIncome * excavators;

        shitShoveled = shitShoveled + powerShovelIncome * powerShovels + diggerIncome * diggers + excavatorIncome * excavators;
        totalShitShoveled = totalShitShoveled + powerShovelIncome * powerShovels + diggerIncome * diggers + excavatorIncome * excavators;

        document.getElementById("shit-produced").innerHTML = shitProduced;
        document.getElementById("shit-shoveled").innerHTML = shitShoveled;
        document.getElementById("total-shit-shoveled").innerHTML = totalShitShoveled;
        
    }
    return;
}



function getShitShoveledPerInterval() {

    let shitShoveledPerInterval = 0;
    if(powerShovels >= 1) {

        shitShoveledPerInterval = powerShovelIncome * powerShovels + diggerIncome * diggers + excavatorIncome * excavators;
        document.getElementById("shit-shoveled-per-interval").innerHTML = shitShoveledPerInterval;
    }
    return shitShoveledPerInterval;
}

/*

-------------------------------------

WORKERS */

function hireWorker() {

    totalClicks++;

    workers++;
    workerPayPerInterval = workerPay * workers;
    shitRequiredPerInterval = shitRequired * workers;
    document.getElementById("workers").innerHTML = workers;
    document.getElementById("worker-pay-per-interval").innerHTML = workerPayPerInterval;
    document.getElementById("shit-required-per-interval").innerHTML = shitRequiredPerInterval;

    document.getElementById("total-clicks").innerHTML = totalClicks;

}

function autoSellShit() {

        if (shitShoveled >= shitRequired * workers) {

            shitShoveled -= shitRequired * workers;
            document.getElementById("shit-shoveled").innerHTML = shitShoveled;

            gold += workers * workerIncome;
            document.getElementById("gold").innerHTML = gold;
            
            totalGoldMade += workerIncome * workers; 
            document.getElementById("total-gold-made").innerHTML = totalGoldMade;

            totalGoldMadeByWorkers += workerIncome * workers; 
            document.getElementById("total-gold-made-by-workers").innerHTML = totalGoldMadeByWorkers;  
            
        }
    
}

function payWorkers() {

    if (workers >= 1) {

        gold -= workerPay * workers;
        workersPaidTotal += workerPay * workers;
        
        document.getElementById("gold").innerHTML = gold;
        document.getElementById("workers-paid-total").innerHTML = workersPaidTotal;
        
    }

}


function getWorkerIncomePerInterval() {

    let workerIncomePerInterval = 0;
    if(workers >= 1) {

        workerIncomePerInterval = workerIncome * workers;
        document.getElementById("worker-income-per-interval").innerHTML = workerIncomePerInterval;
    }
    return workerIncomePerInterval;
}



/* 
-------------------------------------

UPGRADES */


let cowUpgrade = {

    name: ["cow upgrade 1", "cow upgrade 2", "cow upgrade 3"], 
    description: ["doubles the amount of shit produced by cows", "doubles the amount of shit produced by cows",
                "doubles the amount of shit produced by cows"],
    cost: [40, 120, 360], //x3
    buildingIndex: [0, 0, 0], 
    requirement: [2, 10, 25],
    bonus: [2, 2, 2],
    purchased: [false, false, false],

    purchase: function(index) {
        if(!this.purchased[index] && gold >= this.cost[index]) {    // if NOT bought && have enough gold
            if(cows >= this.requirement[index]) {                   // if required amount of cows
                gold -= this.cost[index];                           // gold - cost
                cowIncome = cowIncome * this.bonus[index];                  // income * bonus
                this.purchased[index] = true;                                   //is purchased

                document.getElementById("moose-income").innerHTML = mooseIncome;    //updates income display
                document.getElementById("gold").innerHTML = gold;                   //updates gold
                document.getElementById("cow-income").innerHTML = cowIncome;        //updates cowIncome/s
                

                display.updateUpgrades();
                display.updateAnimalShop();
            }
        }
    }
};

let mooseUpgrade = {

    name: ["moose upgrade 1", "moose upgrade 2", "moose upgrade 3"], 
    description: ["doubles the amount of shit produced by moose", "doubles the amount of shit produced by moose",
                "doubles the amount of shit produced by moose"  ],
    cost: [250, 750, 2250],
    buildingIndex: [0, 0, 0], 
    requirement: [2, 10, 25],
    bonus: [2, 2, 2],
    purchased: [false, false, false],

    purchase: function(index) {
        if(!this.purchased[index] && gold >= this.cost[index]) {    // if NOT bought && have enough gold
            if(moose >= this.requirement[index]) {                   // if required amount of cows
                gold -= this.cost[index];                           // gold - cost
                mooseIncome = mooseIncome * this.bonus[index];                  // income * bonus
                
                this.purchased[index] = true;                                   //is purchased
                
                document.getElementById("moose-income").innerHTML = mooseIncome;    //updates income display
                document.getElementById("gold").innerHTML = gold;                   //updates gold
                document.getElementById("moose-income").innerHTML = mooseIncome;    //updates mooseIncome/s
                

                display.updateUpgrades();
                display.updateAnimalShop();
            }
        }
    }
};

let dragonUpgrade = {

    name: ["dragon upgrade 1", "dragon upgrade 2", "dragon upgrade 3"], 
    description: ["doubles the amount of shit produced by dragons", "doubles the amount of shit produced by dragons",
                "doubles the amount of shit produced by dragons"    ],
    cost: [1000, 3000, 9000],
    buildingIndex: [0, 0, 0], 
    requirement: [2, 10, 25],
    bonus: [2, 2, 2],
    purchased: [false, false, false],

    purchase: function(index) {
        if(!this.purchased[index] && gold >= this.cost[index]) {                    // if NOT bought && have enough gold
            if(dragons >= this.requirement[index]) {                                // if required amount of cows
                gold -= this.cost[index];                                           // gold - cost
                dragonIncome = dragonIncome * this.bonus[index];                    // income * bonus
                this.purchased[index] = true;                                       //is purchased

                document.getElementById("dragon-income").innerHTML = dragonIncome;  //updates income display
                document.getElementById("gold").innerHTML = gold;                   //updates gold
                document.getElementById("dragon-income").innerHTML = dragonIncome;  //updates dragonIncome/s
                

                display.updateUpgrades();
                display.updateAnimalShop();
            }
        }
    }
};

let shovelUpgrade = {

    name: ["shovel upgrade 1", "shovel upgrade 2", "shovel upgrade 3", "shovel upgrade 4", "shovel upgrade 5"], 
    description: ["doubles shovel power", 
                "doubles shovel power", 
                "doubles shovel power",
                "doubles shovel power", 
                "triples shovel power"],
    cost: [10, 20, 40, 80, 160],    // x2
    buildingIndex: [-1, -1, -1, -1, -1], 
    requirement: [10, 100, 500, 1000, 2000], // 1-3 = x5, 4-5 = x2
    bonus: [2, 2, 2, 2, 3],
    purchased: [false, false, false, false, false],

    purchase: function(index) {
        if(!this.purchased[index] && gold >= this.cost[index]) { 

            if (totalClicks >= this.requirement[index]) {
                gold -= this.cost[index];
                shovelPower = shovelPower * this.bonus[index];
                this.purchased[index] = true;

                document.getElementById("shovel-power").innerHTML = shovelPower;
                display.updateUpgrades();

            }
        }
    }
};

let shitUpgrade = {

    name: ["shit upgrade 1", "shit upgrade 2", "shit upgrade 3"], 
    description: ["doubles the value of shit", "doubles the value of shit", "doubles the value of shit"],
    cost: [30, 150, 750], //x5
    buildingIndex: [-1, -1, -1], 
    requirement: [250, 750, 2250], //x3
    bonus: [2, 2, 2],
    purchased: [false, false, false],

    purchase: function(index) {
        if(!this.purchased[index] && gold >= this.cost[index]) { 

            if (totalShitSold >= this.requirement[index]) {
                gold -= this.cost[index];
                shitValue = shitValue * this.bonus[index];
                this.purchased[index] = true;

                document.getElementById("shit-value").innerHTML = shitValue;
                display.updateUpgrades();

            }
        }
    }

};

let powerShovelUpgrade = {

    name: ["power shovel upgrade 1", "power shovel upgrade 2", "power shovel upgrade 3"], 
    description: ["doubles the amount of shit shoveled by power shovels", 
    "doubles the amount of shit shoveled by power shovels", "doubles the amount of shit shoveled by power shovels"],
    cost: [100, 500, 2500], // x5
    buildingIndex: [0, 0, 0], 
    requirement: [2, 10, 25], 
    bonus: [2, 2, 2],
    purchased: [false, false, false],

    purchase: function(index) {
        if(!this.purchased[index] && gold >= this.cost[index]) {
            if(powerShovels >= this.requirement[index]) {
                gold -= this.cost[index];
                powerShovelIncome = powerShovelIncome * this.bonus[index];
                this.purchased[index] = true;

                document.getElementById("power-shovel-income").innerHTML = powerShovelIncome;
                display.updateUpgrades();
            }
        }
    }
};


let diggerUpgrade = {

    name: ["digger upgrade 1", "digger upgrade 2", "digger upgrade 3"], 
    description: ["doubles the amount of shit shoveled by diggers", "doubles the amount of shit shoveled by diggers",
                "doubles the amount of shit shoveled by diggers"],
    cost: [625, 3125, 15625],
    buildingIndex: [0, 0, 0], 
    requirement: [2, 5, 25],
    bonus: [2, 2, 2],
    purchased: [false, false, false],

    purchase: function(index) {
        if(!this.purchased[index] && gold >= this.cost[index]) {
            if(diggers >= this.requirement[index]) {
                gold -= this.cost[index];
                diggerIncome = diggerIncome * this.bonus[index];
                this.purchased[index] = true;

                document.getElementById("digger-income").innerHTML = diggerIncome;
                display.updateUpgrades();
            }
        }
    }
};

let excavatorUpgrade = {

    name: ["excavator upgrade 1", "excavator upgrade 2", "excavator upgrade 3"], 
    description: ["doubles the amount of shit shoveled by excavators", "doubles the amount of shit shoveled by excavators",
                "doubles the amount of shit shoveled by excavators"],
    cost: [3000, 15000, 75000],
    buildingIndex: [0, 0, 0], 
    requirement: [2, 5, 25],
    bonus: [2, 2, 2],
    purchased: [false, false, false],

    purchase: function(index) {
        if(!this.purchased[index] && gold >= this.cost[index]) {
            if(diggers >= this.requirement[index]) {
                gold -= this.cost[index];
                excavatorIncome = excavatorIncome * this.bonus[index];
                this.purchased[index] = true;

                document.getElementById("excavator-income").innerHTML = excavatorIncome;
                display.updateUpgrades();
            }
        }
    }
};


/*

------------------------

WORKERS */

let workerUpgrade = {

    name: ["worker upgrade 1", "worker upgrade 2", "worker upgrade 3"],
    description: ["doubles the amount of shit sold by workers", "doubles the amount of shit sold by workers",
    "doubles the amount of shit sold by workers"],
    cost: [420, 1260, 3780], // x3
    requirement: [2, 10, 25],
    bonus: [2, 2, 2],
    purchased: [false, false, false],

    purchase: function(index) {
        if(!this.purchased[index] && gold >= this.cost[index]) {
            if(workers >= this.requirement[index]) {
                gold -= this.cost[index];
                workerIncome = workerIncome * this.bonus[index];
                shitRequired = shitRequired * this.bonus [index];
                this.purchased[index] = true;

                document.getElementById("worker-income").innerHTML = workerIncome;
                document.getAnimations("shit-required").innerHTML = shitRequired;
                display.updateUpgrades();
            }
        }
    }

};


// ACHIEVEMENTS

let achievement = {

    name: [ /*1*/"acquintance of cows",
            /*2*/"not starving", 
            /*3*/"shit picker", 
            /*4*/"cow pal", 
            /*5*/"getting by",
            /*6*/"part of the herd", 
            /*7*/"shit scooper", 
            /*8*/"mate of moose", 
            /*9*/"moose friend", 
            /*10*/"peer moose",
            /*11*/"met a dragon", 
            /*12*/"fellow of dragons",  
            /*13*/"dragon confidante", 
            /*14*/"thriving", 
            /*15*/"shit tosser"],
    description: [
            /*1*/"have 1 cow", 
            /*2*/"make 10 gold", 
            /*3*/"shovel 10 units of shit manually", 
            /*4*/"have 10 cows", 
            /*5*/"make 100 gold",
            /*6*/"have 25 cows", 
            /*7*/"shovel 100 units of shit manually", 
            /*8*/"have 1 moose", 
            /*9*/"have 10 moose", 
            /*10*/"have 25 moose",
            /*11*/"have 1 dragon", 
            /*12*/"have 10 dragons", 
            /*13*/"have 25 dragons", 
            /*14*/"make 1000 gold", 
            /*15*/"shovel 100 units of shit manually"],
    type: [
            /*1*/"cow", 
            /*2*/"score", 
            /*3*/"click", 
            /*4*/"cow", 
            /*5*/"score", 
            /*6*/"cow", 
            /*7*/"click", 
            /*8*/"moose", 
            /*9*/"moose", 
            /*10*/"moose",
            /*11*/"dragon", 
            /*12*/"dragon", 
            /*13*/"dragon", 
            /*14*/"score", 
            /*15*/"click"],
    requirement: [
            /*1*/ 1, 
            /*2*/ 25, 
            /*3*/ 10, 
            /*4*/ 10, 
            /*5*/ 100, 
            /*6*/ 25, 
            /*7*/ 100, 
            /*8*/ 1, 
            /*9*/ 10, 
            /*10*/ 25, 
            /*11*/ 1, 
            /*12*/ 10, 
            /*13*/ 25, 
            /*14*/ 1000, 
            /*15*/ 100],
    objectIndex: [0, -1, -1, 0, -1, 0, -1, 0, 0, 0, 0, 0, 0, -1],
    awarded: [false, false, false, false, false, false, false, false, false, false, false, false, false, false],

    earn: function(index) {
        this.awarded[index] = true;

    }

};



/* 

------------------------------------

DISPLAY */

let display = {

    addShitButton: function() {

        if (totalShitSold >= 1000) {

            document.getElementById("sell-fifty-shit-button").style.display = "block";
        }
    },

    updateStats: function() {

        document.getElementById("gold").innerHTML = gold;
        document.getElementById("total-gold-made").innerHTML = totalGoldMade;
        document.getElementById("shovel-power").innerHTML = shovelPower;

        document.getElementById("shit-produced").innerHTML = shitProduced;
        document.getElementById("total-shit-produced").innerHTML = totalShitProduced;
        
        document.getElementById("shit-shoveled").innerHTML = shitShoveled;
        document.getElementById("total-shit-shoveled").innerHTML = totalShitShoveled;

        document.getElementById("total-shit-sold").innerHTML = totalShitSold;
        
        document.getElementById("cows").innerHTML = cows;
        document.getElementById("cow-cost").innerHTML = cowCost;
        document.getElementById("cow-income").innerHTML = cowIncome;

        document.getElementById("moose").innerHTML = moose;
        document.getElementById("moose-cost").innerHTML = mooseCost;
        document.getElementById("moose-income").innerHTML = mooseIncome;

        document.getElementById("dragons").innerHTML = dragons;
        document.getElementById("dragon-cost").innerHTML = dragonCost;
        document.getElementById("dragon-income").innerHTML = dragonIncome;


        document.getElementById("power-shovels").innerHTML = powerShovels;
        document.getElementById("power-shovel-cost").innerHTML = powerShovelCost;
        document.getElementById("power-shovel-income").innerHTML = powerShovelIncome;

        document.getElementById("diggers").innerHTML = diggers;
        document.getElementById("digger-cost").innerHTML = diggerCost;
        document.getElementById("digger-income").innerHTML = diggerIncome;

        document.getElementById("excavators").innerHTML = excavators;
        document.getElementById("excavator-cost").innerHTML = excavatorCost;
        document.getElementById("excavator-income").innerHTML = excavatorIncome;

            

    },

    
    updateAnimalShop: function() {

        if (cows >= 5) {

            document.getElementById("moose-container").style.display = "block";
        }
        if (moose >= 5) {

            document.getElementById("dragon-container").style.display = "block";
        }

    },

    updateWorkerContainer: function() {

        document.getElementById("worker-pay-per-interval").innerHTML = workerPayPerInterval; 
 
         if (totalShitShoveled >= 500 ) { 
 
             document.getElementById("worker-container").style.display = "block";
             document.getElementById("workers").innerHTML = workers;
             document.getElementById("worker-income").innerHTML = workerIncome;

         }
     },

    updateMachineShop: function() {

        if(totalClicks >= 100) {
            document.getElementById("machine-shop-header").style.display = "block";
            document.getElementById("power-shovel-container").style.display = "block";
            document.getElementById("power-shovels").innerHTML = powerShovels;
            document.getElementById("power-shovel-cost").innerHTML = powerShovelCost;
            document.getElementById("power-shovel-income").innerHTML = powerShovelIncome;
        }

        if(powerShovels >= 5) {
            document.getElementById("digger-container").style.display = "block";
            document.getElementById("diggers").innerHTML = diggers;
            document.getElementById("digger-cost").innerHTML = diggerCost;
            document.getElementById("digger-income").innerHTML = diggerIncome;
        }

        if(diggers >= 5) {
            document.getElementById("excavator-container").style.display = "block";
            document.getElementById("excavators").innerHTML = excavators;
            document.getElementById("excavator-cost").innerHTML = excavatorCost;
            document.getElementById("excavator-income").innerHTML = excavatorIncome;
        }
    },

    updateAchievements: function() {
        document.getElementById("achievement-container").innerHTML = "";
        for (i = 0; i < achievement.name.length; i++) {
            if(achievement.awarded[i]) {
                document.getElementById("achievement-container").innerHTML += '<div class="achievement" title="'+achievement.description[i]+'">'+achievement.name[i]+'</p>';
                
            }
            
        }
    },

    updateUpgradeHeader: function() {

        if (totalClicks >= 5){

            document.getElementById("upgrade-header-container").style.display = "inline";
        }

    },

    updateUpgrades: function() {

        document.getElementById("upgrade-container").innerHTML = "";

        // SHOVEL & SHIT

        for(i = 0; i <shovelUpgrade.name.length; i++) {
            if(!shovelUpgrade.purchased[i]) {
                if(totalClicks >= shovelUpgrade.requirement[i]) {
                    document.getElementById("upgrade-container").innerHTML += '<button class="upgrade shovel" onclick="shovelUpgrade.purchase('+i+')" title="'+shovelUpgrade.description[i]+' &#10;cost: '+shovelUpgrade.cost[i]+'">'+shovelUpgrade.name[i]+'</button>';
                    }
                }
            }

        for(i = 0; i <shitUpgrade.name.length; i++) {
            if(!shitUpgrade.purchased[i]) {
                if(totalShitSold >= shitUpgrade.requirement[i]) {
                    document.getElementById("upgrade-container").innerHTML += '<button class="upgrade shit" onclick="shitUpgrade.purchase('+i+')" title="'+shitUpgrade.description[i]+' &#10;cost: '+shitUpgrade.cost[i]+'">'+shitUpgrade.name[i]+'</button>';
                    }
                }
            }

        //ANIMALS

        for(i = 0; i <cowUpgrade.name.length; i++) {
            if(!cowUpgrade.purchased[i]) {
                if(cows >= cowUpgrade.requirement[i]) {
                    document.getElementById("upgrade-container").innerHTML += '<button class="upgrade shop" onclick="cowUpgrade.purchase('+i+')" title="'+cowUpgrade.description[i]+' &#10;cost: '+cowUpgrade.cost[i]+'">'+cowUpgrade.name[i]+'</button>';
                }
            }
            if(!mooseUpgrade.purchased[i]) {
                if(moose >= mooseUpgrade.requirement[i]) {
                        document.getElementById("upgrade-container").innerHTML += '<button class="upgrade shop" onclick="mooseUpgrade.purchase('+i+')" title="'+mooseUpgrade.description[i]+' &#10;cost: '+mooseUpgrade.cost[i]+'">'+mooseUpgrade.name[i]+'</button>';
                }
            }
            if(!dragonUpgrade.purchased[i]) {
                    if(dragons >= dragonUpgrade.requirement[i]) {
                        document.getElementById("upgrade-container").innerHTML += '<button class="upgrade shop" onclick="dragonUpgrade.purchase('+i+')" title="'+dragonUpgrade.description[i]+' &#10;cost: '+dragonUpgrade.cost[i]+'">'+dragonUpgrade.name[i]+'</button>';
            
                }
            }

        // MACHINES

        for(i = 0; i <powerShovelUpgrade.name.length; i++) {
            if(!powerShovelUpgrade.purchased[i]) {
                if(powerShovels >= powerShovelUpgrade.requirement[i]) {
                    document.getElementById("upgrade-container").innerHTML += '<button class="upgrade shop" onclick="powerShovelUpgrade.purchase('+i+')" title="'+powerShovelUpgrade.description[i]+' &#10;cost: '+powerShovelUpgrade.cost[i]+'">'+powerShovelUpgrade.name[i]+'</button>';
                    }
                }
            }
        
        for(i = 0; i <diggerUpgrade.name.length; i++) {
            if(!diggerUpgrade.purchased[i]) {
                if(diggers >= diggerUpgrade.requirement[i]) {
                    document.getElementById("upgrade-container").innerHTML += '<button class="upgrade shop" onclick="diggerUpgrade.purchase('+i+')" title="'+diggerUpgrade.description[i]+' &#10;cost: '+diggerUpgrade.cost[i]+'">'+diggerUpgrade.name[i]+'</button>';
                    }
                }
            }


            for(i = 0; i <excavatorUpgrade.name.length; i++) {
                if(!excavatorUpgrade.purchased[i]) {
                    if(excavators >= excavatorUpgrade.requirement[i]) {
                        document.getElementById("upgrade-container").innerHTML += '<button class="upgrade shop" onclick="excavatorUpgrade.purchase('+i+')" title="'+excavatorUpgrade.description[i]+' &#10;cost: '+excavatorUpgrade.cost[i]+'">'+excavatorUpgrade.name[i]+'</button>';
                        }
                    }
                }

        // WORKERS        

        for(i = 0; i <workerUpgrade.name.length; i++) {
            if(!workerUpgrade.purchased[i]) {
                if(workers >= workerUpgrade.requirement[i]) {
                    document.getElementById("upgrade-container").innerHTML += '<button class="upgrade worker" onclick="workerUpgrade.purchase('+i+')" title="'+workerUpgrade.description[i]+' &#10;cost: '+workerUpgrade.cost[i]+'">'+workerUpgrade.name[i]+'</button>';
                    }
                }
            }        
        }
    }
}



/* 

------------------------------------

CLICKER */

document.getElementById("clicker").addEventListener("click", function() {
    if (shitProduced >= shovelPower){
    totalClicks++;
    document.getElementById("total-clicks").innerHTML = totalClicks;
    shovelShit(shovelPower);
    }
}, false);

/* 

----------------------------------

SAVING, LOADING, RESET */

function loadGame() {

    let savedGame = JSON.parse(localStorage.getItem("gameSave")); // parses JSON string
    
    if (typeof savedGame.secondsPassed !== "undefined") secondsPassed = savedGame.secondsPassed; 
    if (typeof savedGame.minutesPassed !== "undefined") minutesPassed = savedGame.minutesPassed;
    if (typeof savedGame.hoursPassed !== "undefined") hoursPassed = savedGame.hoursPassed;
    if (typeof savedGame.daysPassed !== "undefined") daysPassed = savedGame.daysPassed;

    if (typeof savedGame.gold !== "undefined") gold = savedGame.gold;
    if (typeof savedGame.totalGoldMade !== "undefined") totalGoldMade = savedGame.totalGoldMade;
    if (typeof savedGame.goldValue !== "undefined") goldValue = savedGame.goldValue;
    if (typeof savedGame.shitValue !== "undefined") shitValue = savedGame.shitValue;

    if (typeof savedGame.shovelPower !== "undefined") shovelPower = savedGame.shovelPower;
    if (typeof savedGame.totalClicks !== "undefined") totalClicks = savedGame.totalClicks;

    if (typeof savedGame.shitProduced !== "undefined") shitProduced = savedGame.shitProduced;
    if (typeof savedGame.totalShitProduced !== "undefined") totalShitProduced = savedGame.totalShitProduced;
    if (typeof savedGame.shitShoveled !== "undefined") shitShoveled = savedGame.shitShoveled;
    if (typeof savedGame.totalShitShoveled !== "undefined") totalShitShoveled = savedGame.totalShitShoveled;

    if (typeof savedGame.totalShitSold !== "undefined") totalShitSold = savedGame.totalShitSold;

    if (typeof savedGame.cows !== "undefined") cows = savedGame.cows;
    if (typeof savedGame.cowCost !== "undefined") cowCost = savedGame.cowCost;
    if (typeof savedGame.cowIncome !== "undefined") cowIncome = savedGame.cowIncome;

    if (typeof savedGame.moose !== "undefined") moose = savedGame.moose;
    if (typeof savedGame.mooseCost !== "undefined") mooseCost = savedGame.mooseCost;
    if (typeof savedGame.mooseIncome !== "undefined") mooseIncome = savedGame.mooseIncome;

    if (typeof savedGame.dragons !== "undefined") dragons = savedGame.dragons;
    if (typeof savedGame.dragonCost !== "undefined") dragonCost = savedGame.dragonCost;
    if (typeof savedGame.dragonIncome !== "undefined") dragonIncome = savedGame.dragonIncome;

    if (typeof savedGame.powerShovels !== "undefined") powerShovels = savedGame.powerShovels;
    if (typeof savedGame.powerShovelCost !== "undefined") powerShovelCost= savedGame.powerShovelCost;
    if (typeof savedGame.powerShovelIncome !== "undefined") powerShovelIncome = savedGame.powerShovelIncome;

    if (typeof savedGame.diggers !== "undefined") diggers = savedGame.diggers;
    if (typeof savedGame.diggerCost !== "undefined") diggerCost = savedGame.diggerCost;
    if (typeof savedGame.diggerIncome !== "undefined") diggerIncome = savedGame.diggerIncome;

    if (typeof savedGame.excavators !== "undefined") excavators = savedGame.excavators;
    if (typeof savedGame.excavatorCost !== "undefined") excavatorCost = savedGame.excavatorCost;
    if (typeof savedGame.excavatorIncome !== "undefined") excavatorIncome = savedGame.excavatorIncome;

    if (typeof savedGame.workers !== "undefined") workers = savedGame.workers;
    if (typeof savedGame.workerPay !== "undefined") workerPay = savedGame.workerPay;
    if (typeof savedGame.workersPaidTotal !== "undefined") workersPaidTotal = savedGame.workersPaidTotal;
    if (typeof savedGame.workerPayPerInterval !== "undefined") workerPayPerInterval = savedGame.workerPayPerInterval;
    if (typeof savedGame.workerIncome !== "undefined") workerIncome = savedGame.workerIncome;

    if (typeof savedGame.shitRequiredPerInterval !== "undefined") shitRequiredPerInterval = savedGame.shitRequiredPerInterval;
    if (typeof savedGame.totalGoldMadeByWorkers !== "undefined") totalGoldMadeByWorkers = savedGame.totalGoldMadeByWorkers;

    if (typeof savedGame.cowUpgradePurchased !== "undefined") {
        for (i = 0; i < savedGame.cowUpgradePurchased.length; i++) {
        cowUpgrade.purchased[i] = savedGame.cowUpgradePurchased[i];
        }
    }
    if (typeof savedGame.mooseUpgradePurchased !== "undefined") {
        for (i = 0; i < savedGame.mooseUpgradePurchased.length; i++) {
        mooseUpgrade.purchased[i] = savedGame.mooseUpgradePurchased[i];
        }
    }

    if (typeof savedGame.dragonUpgradePurchased !== "undefined") {
        for (i = 0; i < savedGame.dragonUpgradePurchased.length; i++) {
        dragonUpgrade.purchased[i] = savedGame.dragonUpgradePurchased[i];
        }
    }

    if (typeof savedGame.powerShovelUpgradePurchased !== "undefined") {
        for (i = 0; i < savedGame.powerShovelUpgradePurchased.length; i++) {
        powerShovelUpgrade.purchased[i] = savedGame.powerShovelUpgradePurchased[i];
        }
    }

    if (typeof savedGame.diggerUpgradePurchased !== "undefined") {
        for (i = 0; i < savedGame.diggerUpgradePurchased.length; i++) {
        diggerUpgrade.purchased[i] = savedGame.diggerUpgradePurchased[i];
        }
    }

    if (typeof savedGame.excavatorUpgradePurchased !== "undefined") {
        for (i = 0; i < savedGame.excavatorUpgradePurchased.length; i++) {
        excavatorUpgrade.purchased[i] = savedGame.excavatorUpgradePurchased[i];
        }
    }


    if (typeof savedGame.shovelUpgradePurchased !== "undefined") {
        for (i = 0; i < savedGame.shovelUpgradePurchased.length; i++) {
        shovelUpgrade.purchased[i] = savedGame.shovelUpgradePurchased[i];
        }
    }

    if (typeof savedGame.shitUpgradePurchased !== "undefined") {
        for (i = 0; i < savedGame.shitUpgradePurchased.length; i++) {
        shitUpgrade.purchased[i] = savedGame.shitUpgradePurchased[i];
        }
    }

    if (typeof savedGame.workerUpgradePurchased !== "undefined") {
        for (i = 0; i < savedGame.workerUpgradePurchased.length; i++) {
        workerUpgrade.purchased[i] = savedGame.workerUpgradePurchased[i];
        }
    }

    if (typeof savedGame.achievementAwarded !== "undefined") {
        for (i = 0; i < savedGame.achievementAwarded.length; i++) {
            achievement.awarded[i] = savedGame.achievementAwarded[i];

        }
    }


}

window.onload = function() {

    loadGame();
    getShitProducedPerInterval();
    getShitShoveledPerInterval();

    document.getElementById("gold").innerHTML = gold;
    document.getElementById("total-gold-made").innerHTML = totalGoldMade;
    
    document.getElementById("shovel-power").innerHTML = shovelPower;
    document.getElementById("total-clicks").innerHTML = totalClicks;
    document.getElementById("shit-value").innerHTML = shitValue;

    document.getElementById("shit-produced").innerHTML = shitProduced;
    document.getElementById("total-shit-produced").innerHTML = totalShitProduced;
    document.getElementById("shit-shoveled").innerHTML = shitShoveled;
    document.getElementById("total-shit-shoveled").innerHTML = totalShitShoveled;
    document.getElementById("total-shit-sold").innerHTML = totalShitSold;

    document.getElementById("cows").innerHTML = cows;
    document.getElementById("cow-cost").innerHTML = cowCost;
    document.getElementById("cow-income").innerHTML = cowIncome;

    document.getElementById("moose").innerHTML = moose;
    document.getElementById("moose-cost").innerHTML = mooseCost;
    document.getElementById("moose-income").innerHTML = mooseIncome;

    document.getElementById("dragons").innerHTML = dragons;
    document.getElementById("dragon-cost").innerHTML = dragonCost;
    document.getElementById("dragon-income").innerHTML = dragonIncome;

    document.getElementById("power-shovels").innerHTML = powerShovels
    document.getElementById("power-shovel-income").innerHTML = powerShovelIncome;
    document.getElementById("power-shovel-cost").innerHTML = powerShovelCost;

    document.getElementById("diggers").innerHTML = diggers;
    document.getElementById("digger-income").innerHTML = diggerIncome;
    document.getElementById("digger-cost").innerHTML = diggerCost;

    document.getElementById("excavators").innerHTML = excavators;
    document.getElementById("excavator-income").innerHTML = excavatorIncome;
    document.getElementById("excavator-cost").innerHTML = excavatorCost;

    document.getElementById("workers").innerHTML = workers;
    document.getElementById("worker-pay").innerHTML = workerPay;
    document.getElementById("workers-paid-total").innerHTML = workersPaidTotal;
    document.getElementById("worker-pay-per-interval").innerHTML = workerPayPerInterval;
    document.getElementById("worker-income").innerHTML = workerIncome;

    document.getElementById("shit-required-per-interval").innerHTML = shitRequiredPerInterval;
    document.getElementById("total-gold-made-by-workers").innerHTML = totalGoldMadeByWorkers;

};

function saveGame() {

    let gameSave = { //filing cabinet called gameSave

        secondsPassed:/*folder called secondsPassed*/ secondsPassed,
        minutesPassed: minutesPassed,
        hoursPassed: hoursPassed,
        daysPassed: daysPassed,

        gold: gold,
        totalGoldMade: totalGoldMade,
        goldValue: goldValue,
        shitValue: shitValue,

        shovelPower: shovelPower,
        totalClicks: totalClicks,

        shitProduced: shitProduced,
        totalShitProduced: totalShitProduced,
        shitShoveled: shitShoveled,
        totalShitShoveled: totalShitShoveled,
        totalShitSold: totalShitSold,

        cows: cows,
        cowCost: cowCost,
        cowIncome: cowIncome,

        moose: moose,
        mooseCost: mooseCost,
        mooseIncome: mooseIncome,

        dragons: dragons,
        dragonCost: dragonCost,
        dragonIncome: dragonIncome,

        powerShovels: powerShovels,
        powerShovelCost: powerShovelCost,
        powerShovelIncome: powerShovelIncome,

        diggers: diggers,
        diggerCost: diggerCost,
        diggerIncome: diggerIncome,

        excavators: excavators,
        excavatorCost: excavatorCost,
        excavatorIncome: excavatorIncome,

        workers: workers,
        workerPay: workerPay,
 
        workerPayPerInterval: workerPayPerInterval,
        workersPaidTotal: workersPaidTotal,
        workerIncome: workerIncome,
        shitRequiredPerInterval: shitRequiredPerInterval, 
        totalGoldMadeByWorkers: totalGoldMadeByWorkers,

        cowUpgradePurchased: cowUpgrade.purchased,
        mooseUpgradePurchased: mooseUpgrade.purchased,
        dragonUpgradePurchased: dragonUpgrade.purchased,

        shovelUpgradePurchased: shovelUpgrade.purchased,

        shitUpgradePurchased: shitUpgrade.purchased,
        
        powerShovelUpgradePurchased: powerShovelUpgrade.purchased,
        diggerUpgradePurchased: diggerUpgrade.purchased,
        excavatorUpgradePurchased: excavatorUpgrade.purchased,
        
        workerUpgradePurchased: workerUpgrade.purchased,

        achievementAwarded: achievement.awarded

    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave)); // turns into a JSON string

}

function resetGame() {

    if(confirm("are you sure you want to reset your game?"))    {
        let gameSave = {};
        localStorage.setItem("gameSave", JSON.stringify(gameSave));
        location.reload();
    }
}

// TEST BUTTONS

function addTenShit() {

    shitProduced = shitProduced + 10;
    document.getElementById("shit-produced").innerHTML = shitProduced;
}

function addTenGold() {

    gold = gold + 10;
    document.getElementById("gold").innerHTML = gold;
}

function addHundredGold() {

    gold = gold + 100;
    document.getElementById("gold").innerHTML = gold;
}

function addThousandGold() {

    gold = gold + 1000;
    document.getElementById("gold").innerHTML = gold;
}

/* SETINTERVALS */

setInterval(function(){
    passTime();
    produceShit();
    autoShovelShit();

    getShitProducedPerInterval();
    getShitShoveledPerInterval();  
    getWorkerIncomePerInterval();

    display.addShitButton();

    display.updateStats();

    display.updateUpgradeHeader();
    display.updateUpgrades(); 

    display.updateAnimalShop();
    display.updateMachineShop();
    display.updateWorkerContainer();

    display.updateAchievements();
    for (i = 0; i < achievement.name.length; i++) {
        if(achievement.type[i] == "score" && totalGoldMade >= achievement.requirement[i]) achievement.earn(i);
        else if (achievement.type[i] == "click" && totalClicks >= achievement.requirement[i]) achievement.earn(i);
        else if (achievement.type[i] == "cow" && cows >= achievement.requirement[i]) achievement.earn(i);
        else if (achievement.type[i] == "moose" && moose >= achievement.requirement[i]) achievement.earn(i);
        else if (achievement.type[i] == "dragon" && dragons >= achievement.requirement[i]) achievement.earn(i);
    }

},1000);

setInterval(function(){
    autoSellShit();
},5000);

setInterval(function(){
    payWorkers();
},10000);

setInterval(function(){
    saveGame();
},30000);

// prevents ctrl + s default & saves the game instead 

document.addEventListener("keydown", function(event) {

    if (event.ctrlKey && event.which == 83) {
        event.preventDefault();
        saveGame();
    }

}, false);

/* COLLAPSIBLE */  //NOT WORKING !!!!!

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
