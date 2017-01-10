// example sets 
const setA = ["john doe", "Jane doe", "james Smith", "diane smith"];
const setB = [
  {
    firstName: "john",
    lastName: "doe",
    birthday: {
      month: "january",
      day: 1,
      year: 1970
    },
    address: {
      street: "123 Tree Street",
      city: "Beverly Hills",
      state: "CA",
      zipcode: "90210"
    }
  },
  { 
    firstName: "jane",
    lastName: "smith",
    birthday: {
      month: "december",
      day: 12,
      year: 1980
    },
    address: {
      street: "321 Bush Drive",
      city: "Beverly Hills",
      state: "CA",
      zipcode: "90210"
    }
  }
];


// modifying functions
const capitalize = name => {
  const split = name.split(' ');
  const first = split[0].charAt(0).toUpperCase() + split[0].substring(1);
  const last = split[1].charAt(0).toUpperCase() + split[1].substring(1);
  return first + ' ' + last;
};

const swap = name => {
  const split = name.split(" ");
  return split[1] + ", " + split[0];
};

const createDisplayName = obj => {
  const copy = Object.assign({}, obj);
  copy['displayName'] = copy.firstName + ' ' + copy.lastName;
  return copy;
};

const displayAge = age => age.replace(/[^0-9]/g, "") + " years old";


// helpers
const compose = (a,b) => (...args) => b(a(...args));
const modifyProp = prop => func => obj => {
  const copyObj = Object.assign({}, obj);
  copyObj[prop] = func(copyObj[prop]);
  return copyObj;
}
  

// compositions
const modifyDisplayName = modifyProp("displayName"); // create curry function for modifying single prop
const displayNameSwap = modifyDisplayName(swap); // finish the curry with the modifier 
const displayNameCapitalize = modifyDisplayName(capitalize); // reuse the curry to create another modifier 
const displayName = compose(capitalize, swap);  // example with only two 
const formattedDisplayName = [createDisplayName, displayNameSwap, displayNameCapitalize].reduce(compose);  // example with arbitrary number 


// examples
console.log("\ndisplay name\n", setA.map(displayName));
console.log("\ncreate display name\n", setB.map(createDisplayName)); 
console.log("\ncreate formatted display name\n", setB.map(formattedDisplayName)); 
