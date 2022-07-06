// Code your solution here
const findMatching = (driverNames, name) => {
  return driverNames.filter(
    (driverName) => driverName.toLowerCase() === name.toLowerCase()
  );
};
const fuzzyMatch = (driverNames, letters) => {
  return driverNames.filter(
    (driverName) =>
      driverName.toLowerCase().indexOf(letters.toLowerCase()) === 0
  );
};
const matchName = (driverObj, name) => {
  return driverObj.filter(
    (driver) => driver.name.toLowerCase() === name.toLowerCase()
  );
};
