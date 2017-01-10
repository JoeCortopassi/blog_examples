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
}

const swap = name => {
  const split = name.split(" ");
  return split[1] + ", " + split[0];
}

const displayAge = age => age.replace(/[^0-9]/g, "") + " years old";


// helpers
const compose = (a,b) => (...args) => a(b(...args));
const modifyProp = (func, prop) => obj => {
  const copyObj = Object.assign({}, obj);
  copyObj[prop] = func(copyObj[prop]);
  return copyObj;
}
  

// compositions
const displayName = compose(capitalize, swap);
const modifyName = modifyProp(displayName, "name"); 


// examples
console.log("display name", setA.map(displayName));
console.log("modify name", setB.map(modifyName)); 
