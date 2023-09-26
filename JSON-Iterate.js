//1.
const jsonData = {
    name: "John",
    age: 30,
    city: "New York",
};
//for loop
const keys = Object.keys(jsonData);

for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = jsonData[key];
    console.log(`${key}: ${value}`);
}

//for in loop
for (const key in jsonData) {
    if (jsonData.hasOwnProperty(key)) {
        const value = jsonData[key];
        console.log(`${key}: ${value}`);
    }
}

//for of loop
const entries = Object.entries(jsonData);

for (const [key, value] of entries) {
    console.log(`${key}: ${value}`);
}

//for each
const entrie = Object.entries(jsonData);

entrie.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
