var Flowers;
(function (Flowers) {
    Flowers[Flowers["Allium"] = 0] = "Allium";
    Flowers[Flowers["Dandellions"] = 1] = "Dandellions";
    Flowers[Flowers["Cosmos"] = 2] = "Cosmos";
    Flowers[Flowers["Angelica"] = 3] = "Angelica";
    Flowers[Flowers["Bellflower_plant"] = 4] = "Bellflower_plant";
    Flowers[Flowers["Carnation"] = 5] = "Carnation";
    Flowers[Flowers["Daisy"] = 6] = "Daisy";
})(Flowers || (Flowers = {}));
console.log("Printing index of Cosmos flower: " + Flowers.Cosmos);
console.log("Printing the fruit with Index  4: " + Flowers[4]);
