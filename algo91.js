const obj1 = {
    name: "Pizza",
    calories: 9001,
  };
  const expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
  ];
  
  const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
  };
  const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
  ];
  
//   obj1.__proto__ = obj2;
  
  function entries(obj) {
    newArr = [];
    tempArr =[];
    for (const property in obj) {
      newArr.push(property, obj[property]);
      tempArr.push(newArr);
      newArr =[];
    }
    return tempArr;
  }
  
  console.log(entries(obj1));