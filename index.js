//TODO Write your own example function that demonstrates your understanding of object destructuring and default parameters. Note that you don't have to do from scratch or be that creative. You can just take any of the numerous function examples we have used this year - either mine or yours - or even one you 'google' for, if necessary. The point is that the arguments should be passed in as an object upon invocation and the function's named parameters should be expecting that and be able to destructure and provide default values for any 'missing' arguments (i.e. default parameters)  - 2 pts.

//Add function with default parameters
function createJuniorCourseList({
  scienceClass = "Anatomy",
  mathClass = "Adv. Algebra",
  englishClass = "English III",
  physEdClass = "PE",
  socialStudiesClass = "US History",
  electives = ["Spanish III", "Welding"]
}) {
  //Return the list of courses; either defaults or the input parameters overriding the defaults
  return `
  ${scienceClass}
  ${mathClass}
  ${englishClass}
  ${physEdClass}
  ${socialStudiesClass}
  ${electives}`;
}

console.log(
  createJuniorCourseList({
    physEdClass: "Personal Fitness",
    electives: ["Art III", "\n  Welding"]
  })
);
