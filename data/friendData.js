// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
  {
    name: "Happy",
    scores: [1, 5, 3, 2, 4],
  },
  {
    name: "Miku",
    scores: [1, 5, 3, 2, 4],
  },
  {
    name: "Bleep",
    scores: [3, 3, 2, 3, 1,]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
