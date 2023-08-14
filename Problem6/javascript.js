/*Chef and Chefina are playing with dice in one turn both of them roll their dice 
at once. They consider a turn to be good if the sum of the numbers on their
 dice id greater than 6 given that in a particular turn chef and Chefinagot x and y 
 on their respective dice, find whether the turn was good
 */

const GoodNotTurn = (x, y) => {
    return (x + y) > 6;
}

const chef = 3;
const chefina = 4;

const isTurnGood = GoodNotTurn(chef, chefina);

if (isTurnGood) {
    console.log("Good!!!");
} else {
    console.log("Not Good");
}
