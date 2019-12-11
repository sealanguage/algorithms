// Setup
var collection = {
//   2548: {
//     album: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"]
//   },
//   2468: {
//     album: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"]
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: []
//   },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {
   //  add "ABBA" to record 5439 using push()

   // for the id 5439, check for prop artist
   // if it exists, push value "ABBA"


  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
// After updateRecords(5439, "artist", "ABBA"), artist should be "ABBA"
// After updateRecords(5439, "tracks", "Take a Chance on Me"), tracks should have "Take a Chance on Me" as the last element.
// After updateRecords(2548, "artist", ""), artist should not be set
// After updateRecords(1245, "tracks", "Addicted to Love"), tracks should have "Addicted to Love" as the last element.
// After updateRecords(2548, "tracks", ""), tracks should not be set
// After updateRecords(1245, "album", "Riptide"), album should be "Riptide"