//Create a 'traditional' gender detector. - 5 pts.
//TODO: Given a STRING such as 'Mr. Misra', return back 'M.' //Given a STRING that STARTS WITH 'Mrs.' or 'Ms.', return back 'F.' //Else, RETURN 'Unknown'

const man = "Mr. Smith";
const woman1 = "Mrs. Smith";
const woman2 = "Ms. Smith";
const none = "Smith";

function getTraditionalGender(nameWithSalutation) {
  if (nameWithSalutation.startsWith("Mr.")) {
    return "M"; //will return M if name passed begins with "Mr."
  }

  if (nameWithSalutation.startsWith("Mrs.")) {
    return "F"; //will return F if name passed begins with "Mrs."
  }

  if (nameWithSalutation.startsWith("Ms.")) {
    return "F"; //will return F if name passed begins with "Ms."
  }

  return "Unknown"; //will return Unknown if name passed does not begin with "Mr." "Mrs." or "Ms."
}

console.log(getTraditionalGender(woman2)); //returns F
console.log(getTraditionalGender(none)); //returns Unknown
console.log(getTraditionalGender(woman1)); //returns F
console.log(getTraditionalGender(man)); //returns M
