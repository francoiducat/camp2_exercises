// temperatureAt("Decathlon Campus"); // Displays 17 ˚C
const places = require("./places");

test("Coordinates for Decathlon Marseille should be lat : 43.2396603 lng : 5.3966047", () => {
  expect.assertions(2);
  return places.getPlaceCoordinates("Decathlon Marseille Bonneveine, Chemin du Roi d'Espagne, 13009 Marseille")
    .then(coordinates => {
      expect(coordinates.lat).toEqual(43.2396603);
      expect(coordinates.lng).toEqual(5.3966047);
    });
});

// VCR_MODE=cache jest
// VCR_MODE=playback jest permet d'appeler en mode mock
