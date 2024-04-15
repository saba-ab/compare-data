export default function calculateDifference(getHomeData, ssData) {
  let getHomeCount = 0;
  let ssCount = 0;
  getHomeData.forEach((district) => {
    getHomeCount += district.subDistricts.length;
  });
  ssData.forEach((region) => {
    ssCount += region.urbans.length;
  });
  const result = {
    getHome: `${getHomeCount} urbans`,
    ss: `${ssCount} urbans`,
    difference: Math.abs(getHomeCount - ssCount),
  };
  return result;
}
