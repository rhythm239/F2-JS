const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Printing Developers
function printDeveloper() {
  console.log(data);
}
printDeveloper();

// 2. Adding Data
function addData() {
  //Collecting data from users
  const name = prompt("Enter the name");
  const age = parseInt(prompt("Enter the age"));
  const profession = prompt("Enter the profession");
  
  if (name && !isNaN(age) && profession) {
    //Creating a new data object object with the collected data
    const newData = { name, age, profession };
    //Adding new data object to the data Array
    data.push(newData);
    //Logging a message to confirm  the addition
    console.log("Data added", newData);
  } else {
    console.log("Invalid Input.Data not added.");
  }
}

// 3. Remove Admins
function removeAdmin() {
  // Creating a new array
  const filteredData = data.filter((person) => person.profession !== "admin");

  console.log("Admins removed:", filteredData);
}

// 4 Concatenate Array
function concatenateArray() {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const concatenatedArray = array1.concat(array2);
  console.log("Concatenated Array", concatenatedArray);
}

// 5 Average Age
function averageAge() {
  let totalAge = 0;
  for (let i = 0; i < data.length; i++) {
    totalAge += data[i].age;
  }
  const averageAge = totalAge / data.length;
  console.log("Average age", averageAge);
}
averageAge();

// 6 Age Check
function checkAgeAbove25() {
  const isAbove25 = data.some((person) => person.age > 25);
  if (isAbove25) {
    console.log("At least one person is above age of 25.");
  } else {
    console.log("No person is above the age of 25");
  }
}

// 7 Unique Professions
function uniqueProfessions() {
  //creating empty object.
  const uniqueProfessions = {};
  for (let i = 0; i < data.length; i++) {
    const profession = data[i].profession;
    uniqueProfessions[profession] = true;
  }
  const uniqueProfessionsArray = Object.keys(uniqueProfessions);
  console.log("Unique Profession", uniqueProfessionsArray);
}

// 8 Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log("Sorted by Age Ascending", data);
}

// 9 Update Profession
function updateJohnsProfession() {
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === "John") {
      data[i].profession = "manager";
      break;
    }
  }
  console.log("John's Updated Profession", data);
}
