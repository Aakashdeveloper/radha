var map = [
  [true, false, true, true, true, false],
  [true, false, true, false, true, false],
  [true, true, true, false, true, false],
  [false, false, false, true, true, false],
  [true, true, true, true, false, true],
  [true, false, false, false, false, true],
  [true, true, true, true, true, true]
];
var i = j = k = n = 0;
var result = [];
var exit_X = 4;
var exit_Y = 5;


while (i != map.length-1 || j != map[0].length-1) {
  //console.log("i is "+i+"j is "+j);
  //i++;
  //j++;
  if (map[i][j + 1] == true && n != j + 1) {
    k = i;
    n = j;
    j = j + 1;
    result.push("down");
    //console.log("down")
  } else if (map[i + 1][j] == true && k != i + 1) {
    k = i;
    n = j;
    i = i + 1;
    result.push("right")
      //console.log("right")
  } else if (map[i - 1][j] == true && k != i - 1) {
    k = i;
    n = j;
    i = i - 1;
    result.push("left")
      //console.log("left")
  } else if (map[i][j - 1] == true && n != j - 1) {
    k = i;
    n = j;
    j = j - 1;
    result.push("up")
      //console.log("up")
  }
  console.log("i is " + i + " j is " + j);
}

if (i == map.length-1 && j == map[0].length-1) {

  while (i != exit_X || j != exit_Y) {
    if (map[i - 1][j] == true && k != i - 1) {
      k = i;
      n = j;
      i = i - 1;
      result.push("left")
        //console.log("left")
    } else if (map[i][j - 1] == true && n != j - 1) {
      k = i;
      n = j;
      j = j - 1;
      result.push("up")
        //console.log("up")
    }
  console.log("i is " + i + " j is " + j);
  }

}

console.log(result)