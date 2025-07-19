//Dictionary -- Binary & ASCII Characters
/* 
const chart = {
    "00100001": "!",
    ""

}
*/

//Defining Variables
let paddedNum = "";
let generatedNum = 0;
let menuChoice = "";

//Function -- Padded Number
function padding() {
    paddedNum = String(generatedNum).padStart(8, '0');
}

//Function -- Main
async function main() {
    do {

        //Menu
        output("Choose one of the following: \n1. Create Binary Numbers \n2. Translate Binary Code");
        menuChoice = await input("");

        //Input Not Recognized
        while (menuChoice != "1" && menuChoice != "2") {
            menuChoice = await input("Sorry, I don't recognize what you're typing. Please try again: ");
        }

        //Creating Binary Number List
        if (menuChoice == "1") {
            let startNum = 0;

            //Listing Numbers
            for (let number = 0; number < 94; number = number + 1) {
                generatedNum = startNum + 1
                padding();
 
                //Checking For "2"
                let check = paddedNum.includes("2");
                if (check == true) {
                    generatedNum = startNum - 1;

                    //Finding Last 0
                    lastOccur = str.lastIndexOf("0");

                    //Replacing lastOccur With 1
                    if (lastOccur == true) {
                        let generatedNumFixed = str.slice(0, lastOccur) + "1" + str.slice(lastOccur + 1);
                    }
                    output(generatedNumFixed)
                } else {
                    output(generatedNum);
                }
            }
        }
        
        //Translating Binary Code
        else if (menuChoice == "2") {
            let binaryCode = await input("Please enter your binary code: ");
            binaryCode = binaryCode.trim();
            let binaryCodeArray = binaryCode.split(" ");
            for (let character of binaryCodeArray) {
            
            }
        }







    }
    while (menuChoice === String) {}
}