// TODO: Build an 'admission' system that gets the first 3 'entries' in an Array.

//set up original array of 6 possible students
const students = [
  "Susan Brown",
  "Don Baum",
  "Wes Martin",
  "Tally Stephens",
  "Denver Laxton",
  "Dana Reichert"
];

function first3(entries) {
  // TODO: Use ARRAY DESTRUCTURING to assign the first 3 'Array items' in 'entries' to VARIABLES (e.g. 'x', 'y', 'z' - whatever), and simply RETURN those. - 3 PTS.
  const [name1, name2, name3] = entries; //pull the first 3 names and assign those to variables
  return `${name1} ${name2} ${name3}`; //return the first 3 names
}

console.log(first3(students)); //pass array students to function first3; after processing, log the first 3 names in the students array
