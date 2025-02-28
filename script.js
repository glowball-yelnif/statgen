const masterArrays = {
'A': ["JS", "KC", "5C", "2H", "9S", "AS", "3H", "6C", "8D", "AC", "TS", "5H", "2D", "KD", "7D", "8C", "3S", "AD", "7S", "5S", "QD", "AH", "8S", "3D", "7H", "QH", "5D", "7C", "4H", "KH", "4D", "TD", "JC", "JH", "TC", "JD", "4S", "TH", "6H", "3C", "2S", "9H", "KS", "6S", "4C", "8H", "9C", "QS", "6D", "QC", "2C", "9D"], // Aronson stack above 

'M': ["4C", "2H", "7D", "3C", "4H", "6D", "AS", "5H", "9S", "2S", "QH", "3D", "QC", "8H", "6S", "5S", "9H", "KC", "2D", "JH", "3S", "8S", "6H", "TC", "5D", "KD", "2C", "3H", "8D", "5C", "KS", "JD", "8C", "TS", "KH", "JC", "6S", "TH", "AD", "4S", "7H", "4D", "AC", "9C", "JS", "QD", "7C", "QS", "TD", "6C", "AH", "9D"], // Mnemonica stack above

'W': ["6H", "AS", "8S", "9S", "KC", "JD", "5D", "AH", "3H", "9H", "3C", "7S", "7H", "2S", "QS", "2H", "QH", "6D", "2C", "KD", "4D", "4H", "JH", "6C", "4C", "TC", "4S", "JS", "2D", "3S", "9D", "7D", "AD", "JC", "8C", "5S", "AC", "QC", "QD", "5H", "7C", "TH", "9C", "TD", "8D", "3D", "8H", "5C", "6S", "KH", "TS", "KS"], // Nuclear White Sands stack above

'R': ["QH", "2S", "5D", "8C", "JH", "KS", "TH", "7C", "4D", "AS", "8H", "5C", "2D", "QS", "9H", "6C", "3D", "TS", "7H", "4C", "AD", "JS", "9S", "6H", "3C", "KD", "QD", "TD", "7S", "4H", "AC", "JD", "8S", "5H", "2C", "2H", "QC", "9D", "6S", "3H", "KC", "4S", "AH", "JC", "8D", "5S", "3S", "KH", "TC", "7D", "6D", "9C"], // Redford stack above

'S': ["8S", "JD", "AC", "4H", "7S", "TD", "KC", "3H", "6S", "9D", "QC", "2H", "5S", "8D", "JC", "AH", "4S", "7D", "TC", "KH", "3S", "6D", "9C", "QH", "2S", "5D", "8C", "JH", "AS", "4D", "7C", "TH", "KS", "3D", "6C", "9H", "QS", "2D", "5C", "8H", "JS", "AD", "4C", "7H", "TS", "KD", "3C", "6H", "9S", "QD", "2C", "5H"], // Stebbins Chased 8S top above

'K': ["JS", "KC", "5C", "2H", "9S", "AS", "3H", "6C", "8D", "AC", "TS", "5H", "2D", "KD", "7D", "8C", "3S", "AD", "7S", "5S", "QD", "AH", "8S", "3D", "7H", "QH", "5D", "7C", "4H", "KH", "4D", "TD", "JC", "JH", "TC", "JD", "4S", "TH", "6H", "3C", "2S", "9H", "KS", "6S", "4C", "8H", "9C", "QS", "6D", "QC", "2C", "9D"], // Stebbins ShocKed 8S top above

'T': ["4C", "5H", "2D", "AS", "QH", "5C", "8D", "TD", "3S", "KC", "JD", "3C", "TS", "9H", "5S", "QD", "6C", "3D", "7S", "4S", "6D", "JH", "4H", "9C", "JC", "4D", "6H", "6S", "JS", "7C", "2H", "KS", "8C", "2C", "AH", "TH", "QS", "7H", "9D", "KH", "QC", "8H", "AC", "8S", "TC", "2S", "AD", "9S", "5D", "KD", "3H", "7D"], // Tritium above
};

// Here are global variables that should make everything easier to reference
// in parent functions and child functions and thus not use the complicated
// "results" feature. This is a very small simple program therefore
// global variables that can be changed and referenced anywhere
// inside this program should make the coding syntax much simpler.

// Note that variables that can be changed should be defined using
// the LET statement, not the const statement. Use const if they are never changed.

// The fact that these variables are defined outside of the functions
// is what makes them "global".

// Global Constants and Variables:
    const defHitIndicator = "N";
    const defFaceUp = "N";
    const defPlus1Hit = "N";
    const defBreatherCut = "9";
    const defBottomPosition = "88";
    const defBottomCard = "ZZ";

    let retHitIndicator;
    let retFaceUp;
    let retPlus1Hit;
    let retBreatherCut;
    let retBottomPosition;
    let retBottomCard;
	
	let tempDiff;
    let	tempBottomPosition;
	let actualPosition; 
	let reverseActualPosition;
	
// end of global variables

function setInitialDefaults() {
        retHitIndicator = defHitIndicator;
        retFaceUp = defFaceUp;
        retPlus1Hit = defPlus1Hit;
        retBreatherCut = defBreatherCut;
        retBottomPosition = defBottomPosition;
        retBottomCard = defBottomCard;
		// note that the above fields are global
    };

function matchCardPosition(workArray, guessedCard) {
	 console.log("Match  Card Position called");
	
     actualPosition = workArray.indexOf(guessedCard) + 1; // 1-based
     console.log("actualPosition", actualPosition);

	 reverseActualPosition = 53 - actualPosition;
	 console.log("reverseActualPosition", reverseActualPosition);
     // note that the above 2 fields are global
}

function determineBottomCard(workArray, guessedPosition, actualPosition) {
    console.log("workArray",workArray);
	console.log("guessedPosition",guessedPosition);
	console.log("actualPosition",actualPosition);
	
    if (guessedPosition > actualPosition) {
        tempDiff = guessedPosition - actualPosition;
        tempBottomPosition = 52 - tempDiff;
		console.log("guess is high vs actual, tempDiff=",tempDiff);
  } else {
        tempDiff = actualPosition - guessedPosition;
        tempBottomPosition = tempDiff;
		console.log("guess is =< vs actual, tempDiff=",tempDiff);
    }
    retBottomCard = workArray[tempBottomPosition - 1]; // Zero-based
	// retBottomCard = retBottomCard - 1; // subtracting 1 more ?? modify tempDiff instead?? 
    retBottomPosition = tempBottomPosition.toString().padStart(2, '0'); // Two digits
	console.log("retBottomPosition=",retBottomPosition);
}

function detailSubroutine(workArray, guessedCard, guessedPosition, retBreatherCut) {
	 console.log("++++++ detailSubroutine +++++++++++++");
	 console.log("workArray", workArray);
 	 console.log("guessedCard", guessedCard);
	 console.log("guessedPosition", guessedPosition);
	 console.log("retBreatherCut", retBreatherCut);

    // below sets the "ret" fields to "N" etc.
        retHitIndicator = defHitIndicator;
        retFaceUp = defFaceUp;
        retPlus1Hit = defPlus1Hit;
		// we don't want to reset the below in the 4 times loop detail
        // retBreatherCut = defBreatherCut;
        // retBottomPosition = defBottomPosition;
        // retBottomCard = defBottomCard;
		// note that the above fields are global


    // below sets the actualPostion and the reverseActualPosition	
	matchCardPosition(workArray, guessedCard);

    if (guessedPosition === actualPosition || guessedPosition === actualPosition - 1) {
        retHitIndicator = "Y";
        retFaceUp = "N";
    }
    if (guessedPosition === reverseActualPosition || guessedPosition === reverseActualPosition - 1) {
        retHitIndicator = "Y";
        retFaceUp = "Y";
    }
    if (guessedPosition === actualPosition - 1 || guessedPosition === reverseActualPosition - 1) {
        retPlus1Hit = "Y";
    }

    if (retBreatherCut === "0") {
        determineBottomCard(workArray, guessedPosition, actualPosition);
		// above ret fields now global so set by the determineBottomCard
    }
	 console.log("------ detail results below ------");
	 console.log("retHitIndicator", retHitIndicator);
	 console.log("retFaceUp", retFaceUp);
	 console.log("retPlus1Hit", retPlus1Hit);
	 console.log("retBreatherCut", retBreatherCut);
	 console.log("retBottomPosition", retBottomPosition);
	 console.log("retBottomCard", retBottomCard);
	 console.log("----------------------------");
}

function intermediateSubroutine(workArray, guessedCard, guessedPosition) {
    let currentArray = [...workArray]; // Copy to avoid modifying original

    retBreatherCut = 0;
    // First call, pristine array
    detailSubroutine(currentArray, guessedCard, guessedPosition, "0");

    console.log("***retHitIndicator***", retHitIndicator);
   if (retHitIndicator === "N") {
     // If we got a "Y" hit we don't want to try 
	 // any breather cuts because the defaults
	 // will wipe out the good results from the above hit.
    // Shift by 13 and call three more times
    for (let i = 1; i <= 3; i++) {
		retBreatherCut = i;
        currentArray = currentArray.slice(13).concat(currentArray.slice(0, 13));
        detailSubroutine(currentArray, guessedCard, guessedPosition, i.toString());
        if (retHitIndicator === "Y") {
			i = 9;
			// making i greater than 3 to stop the loop because of a hit
		}
   }
  }
} // End of intermediateSubroutine

// Main entry point to main program
document.getElementById("calcForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const stackType = document.getElementById("stackType").value;
    const guessedCard = document.getElementById("guessedCard").value.toUpperCase();
    const guessedPosition = parseInt(document.getElementById("guessedPosition").value);

    if (!masterArrays[stackType] || !guessedCard || isNaN(guessedPosition) || guessedPosition < 1 || guessedPosition > 52) {
        document.getElementById("result").innerHTML = "Invalid input. Please check stack type, card format (e.g., 9S), and position (1-52).";
        return;
    }

    const workArray = masterArrays[stackType];

    // Here we have the input selections, now do the process
	
	// below is setting all the ret fields to "N" etc
    setInitialDefaults()
	
    intermediateSubroutine(workArray, guessedCard, guessedPosition);
    // above intermediateSubroutine executes the detailSubroutine maybe 4 times
 
    // Here we are done therefore display some stuff and the bogus percent
     console.log("StackType", stackType);
	 console.log("workArray", workArray);
	 console.log("guessedCard", guessedCard);
	 console.log("guessedPosition", guessedPosition);
	 console.log("### retHitIndicator ###", retHitIndicator);
	
    let Bogus1 = "6"; // Default for miss
    let Bogus2 = "1";
    let Bogus3 = "7";
    let Bogus4 = "7";
    let Bogus5 = "??";


	Bogus5 = retBottomCard; // bottom card to make it work
    // Check for hits
    if (retHitIndicator === "Y") {
        Bogus1 = "0"; // Hit
		Bogus2 = retFaceUp === "Y" ? "3" : "0";
        Bogus3 = retBreatherCut;
        Bogus4 = retPlus1Hit === "Y" ? "2" : "0";
    } else {
        // No hit, use first result's bottom position
           	Bogus2 = "0";
			Bogus3 = retBottomPosition[0]; // First digit
            Bogus4 = retBottomPosition[1]; // Second digit
        // }
    }
	 console.log("Bogus1", Bogus1);
	 console.log("Bogus2", Bogus2);
	 console.log("Bogus3", Bogus3);
	 console.log("Bogus4", Bogus4);
	 console.log("Bogus5", Bogus5);
    const fudgePct = `${Bogus1}.${Bogus2}${Bogus3}${Bogus4}--${Bogus5}`;
    document.getElementById("result").innerHTML = `Fudge Percentage: ${fudgePct}`;
});