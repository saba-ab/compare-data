import parseGetHomeData from "./getHomeParser.js";
import parseSsData from "./ssParser.js";
import calculateDifference from "./helper.js";

function main() {
  console.log(calculateDifference(parseGetHomeData(), parseSsData()));
}

main();
