const driver = {
  driverLicense: "B1",
  licenseIssued: new Date().getFullYear() - 10, // 10 years old license
  numberOfAccident: 0,
  bonus: 0.8,
};

// Write a function canRentACar:
// * Input: a driver
// * Output: a boolean if the driver can rent a car


function canRentACar(driver) {
  return (driver.driverLicense === "B1" && driver.licenseIssued > 2015 && (driver.numberOfAccident = 0 || driver.bonus > 0.7));
}


function canRentACarWithIf(driver) {
  if (driver.driverLicense === "B1" && driver.licenseIssued > 2015 && (driver.numberOfAccident = 0 || driver.bonus > 0.7)) {
    const canRentACar = true;
    return canRentACar;
  } else { return canRentACar;}
}



// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = canRentACar
