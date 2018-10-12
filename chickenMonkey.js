// Write a program that prints the numbers from 1 to 100.

// Multiples of 5 print "Chicken" instead of the number
// Multiples of 7 print "Monkey"

// Numbers that are both multiples of 5 and 7 print "ChickenMonkey"

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 7 === 0) {
    console.log("ChickenMonkey");
  } else if (i % 5 === 0) {
    console.log("Chicken");
  } else if (i % 7 === 0) {
    console.log("Monkey");
  } else {
    console.log(i);
  }
}

// Trying another way

for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 5 === 0 || i % 7 === 0) {
    if (i % 5 === 0) {
      output += "Chicken";
    }
    if (i % 7 === 0) {
      output += "Monkey";
    }
  } else {
    output = i;
  }
  console.log(output);
}

// Trying out Conditional Operator

for (let i = 1; i <= 100; i++) {
  let output = (i % 5 === 0 && i % 7 === 0) ? "ChickenMonkey"
    : (i % 5 === 0) ? "Chicken"
    : (i % 7 === 0) ? "Monkey"
    : i;
    console.log(output);
}