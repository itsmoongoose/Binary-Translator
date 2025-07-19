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
            let startNum = "00000000";
            startNum = Number(startNum);

            //Listing Numbers
            for (let number = 0; number < 94; number = number + 1) {
                let generatedNum = Number(generatedNum)
                generatedNum = startNum + 1;

                //Checking For "2"
                let check = generatedNum.includes("2");
                if (check == true) {
                    generatedNum = startNum - 1;
                    let generatedNumStr = String(generatedNum);

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
        else if (menuChoice == "b") {
            let binaryCode = await input("Please enter your binary code: ");
            binaryCode = binaryCode.trim();
            let binaryCodeArray = binaryCode.split(" ");
            for (let character of binaryCodeArray) {
            
            }
        }







    }
    while (binaryCode) {}
}