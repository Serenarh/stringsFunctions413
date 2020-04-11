//Create a 'traditional' gender detector. - 5 pts.
//TODO: Given a STRING such as 'Mr. Misra', return back 'M.' //Given a STRING that STARTS WITH 'Mrs.' or 'Ms.', return back 'F.' //Else, RETURN 'Unknown'

const man = "Mr. Smith";
const woman1 = "Mrs. Smith";
const woman2 = "Ms. Smith";
const none = "Smith";

function getTraditionalGender(nameWithSalutation) {
  if (nameWithSalutation.startsWith("Mr.")) {
    return "M";
  }

  if (nameWithSalutation.startsWith("Mrs.")) {
    return "F";
  }

  if (nameWithSalutation.startsWith("Ms.")) {
    return "F";
  }

  return "Unknown";
}

console.log(getTraditionalGender(woman2));
console.log(getTraditionalGender(none));
console.log(getTraditionalGender(woman1));
console.log(getTraditionalGender(man));
