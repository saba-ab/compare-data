import { readFileSync, writeFileSync } from "fs";

export default function parseGetHomeData() {
  const rawData = readFileSync("./data/gethome-data.json", "utf-8");
  const jsonData = JSON.parse(rawData);
  const resultData = [];

  jsonData.data.forEach((city) => {
    if (city.name.ka === "თბილისი" && city.children) {
      city.children.forEach((district) => {
        const districtInfo = {
          districtName: district.name.ka,
          subDistricts: [],
        };

        if (district.children) {
          district.children.forEach((subDistrict) => {
            districtInfo.subDistricts.push({
              subDistrictName: subDistrict.name.ka,
            });
          });
        }

        resultData.push(districtInfo);
      });
    }
  });

  writeFileSync(
    "./data/getHomeTbilisi.json",
    JSON.stringify(resultData, null, 2),
    "utf-8"
  );

  return resultData;
}
