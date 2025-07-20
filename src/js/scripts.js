//Dictionary -- Binary & ASCII Characters

const chart = {
    "00100001": "!",
    "00100010": "\"",
    "00100011": "#",
    "00100100": "$",
    "00100101": "%",
    "00100110": "&",
    "00100111": "'",
    "00101000": "(",
    "00101001": ")",
    "00101010": "*",
    "00101011": "+",
    "00101100": ",",
    "00101110": ".",
    "00101111": "/",
    "00110000": "0",
    "00110001": "1",
    "00110010": "2",
    "00110011": "3",
    "00110100": "4",
    "00110101": "5",
    "00110110": "6",
    "00110111": "7",
    "00111000": "8",
    "00111001": "9",
    "00111010": ":",
    "00111011": ";",
    "00111100": "<",
    "00111101": "=",
    "00111110": ">",
    "00111111": "?",
    "01000000": "@",
    "01000001": "A",
    "01000010": "B",



}


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
                paddedNum = String(generatedNum).padStart(8, '0');
 
                //Checking For "2"
                let check = paddedNum.includes("2");
                if (check == true) {
                    let generatedNumber = generatedNum - 1;

                    //Finding Last 0
                    lastOccur = str.lastIndexOf("0");

                    //Replacing lastOccur With 1
                    if (lastOccur == true) {
                        let generatedNumFixed = str.slice(0, lastOccur) + "1" + str.slice(lastOccur + 1);
                    }
                    output(generatedNumFixed)
                } else {
                    output(paddedNum);
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