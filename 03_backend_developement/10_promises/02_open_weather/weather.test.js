require("sepia");
const weather = require("./weather");

test("Should dispay 4.74", ()=> {
  expect.assertions(1);
  return weather.weatherByCityName("lille")
    .then(temp => {
      expect(temp).toEqual(4.74);
    });
});


test("Should display 0.07", () => {
  expect.assertions(1);
  return weather.weatherByLatitudeAndLongitude(32.661343,51.680374)
    .then(temps => {
      expect(temps[0]).toEqual(0.07);});
});

// VCR_MODE=cache jest
// VCR_MODE=playback jest permet d'appeler en mode mock
