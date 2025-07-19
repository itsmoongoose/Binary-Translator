//Dictionary -- Binary & ASCII Characters
/* 
const chart = {
    "00100001": "!",
    ""

}
*/







//Function -- Main
async function main() {
    do {

        //Menu
        output("Choose one of the following: \na) Create Binary Numbers \nb) Translate Binary Code");
        let menuChoice = await input("");

        //Input Not Recognized
        while (menuChoice != "a" || "b") {
            menuChoice = await input("Sorry, I don't recognize what you're typing. Please try again: ");
        }

        //Creating Binary Number List
        if (menuChoice == "a") {
            
        }
        
        //Translating Binary Code
        else if (menuChoice == "b") {
            let binaryCode = await input("Please enter your binary code: ");
            binaryCode = binaryCode.trim();
            let binaryCodeArray = binaryCode.split(" ");
            for (character of binaryCodeArray) {
            
            }
        }







    }
    while (binaryCode) {}
}