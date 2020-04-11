//TODO Peruse the docs regarding String.prototype - specifically the methods. YK the drill - pick 5 and make up your own examples with comments to show me that you understand how to apply said methods. 5 points.

const good = "Good";
const morning = "Morning!";
console.log(good.concat(" ", morning)); //concatenates first string good with second string morning to print "Good Morning!";

const spring = "Spring began on March 19";
console.log(spring.endsWith("March 19")); //checks to see if string "spring" ends with "March 19"; if so, returns "true"; if not, returns "false"; here returns "true"

const color = "Blue is my favorite color. My favorite color is blue.";
console.log(color.lastIndexOf("Blue")); //will find last index of Blue--returns 0 since lastIndexOf is case sensitive
console.log(color.lastIndexOf("blue")); //will find last index of blue; will return 48 as this "blue" begins with lc "b"

const yay = "Yay! ";
console.log(yay.repeat(10)); //repeat causes indicated string to be repeated the indicated # of times; here "Yay! " will be repeated 10x
