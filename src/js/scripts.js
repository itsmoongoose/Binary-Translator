//Function Main
async function main() {

//Defining Variables
let x = 0;
let y = 0;
let z = 0;

do {

    //User Input -- x
    x = await input("What is X: ");
    x = x.trim();
    x = Number(x);

    //User Input -- y
    y = await input("What is Y: ");
    y = y.trim();
    y = Number(y);

    //User Input -- z
    z = await input("What is Z: ");
    z = z.trim();
    z = Number(z);

    //code1
    const equation1 = ((2*x) + 11);

    //code2
    const equation2 = (((2*z) + y) - 5);

    //code3
    let equation3 = ((y + z) - x);
    if (equation3 < 0) {
        equation3 = equation3 * (-1);
    }

    //Output Answer
    output(`The answer is: ${equation1} ${equation2} ${equation3}`)
    output(" ");  //line break -- adds space between first equations and next
}
while (x >= 0);
}