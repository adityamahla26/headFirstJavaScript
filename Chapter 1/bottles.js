const word = "bottles";
let count = 99;
while (count > 0) {
  console.log(count + " " + word + " of rootbeer");
  console.log(count + " " + word + " of rootbeer");
  console.log("Take one down, pass it around,");
  count = count - 1;

  if (count > 0) {
    console.log(count + " " + word + " of rootbeer");
  } else {
    console.log("No more " + word + " of rootbeer");
  }
  console.log();
}
