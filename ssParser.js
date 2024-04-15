import { readFileSync, writeFileSync } from "fs";

export default function parseSsData() {
  const ssData = readFileSync("./data/ss-data.json");
  const data = JSON.parse(ssData);
  const ssTbilisi = [];

  data.props.pageProps.locations.visibleCities.forEach((city) => {
    if (city.districts.length !== 0 && city.cityTitle === "თბილისი") {
      city.districts.forEach((district) => {
        if (district.subDistricts && district.subDistricts.length > 0) {
          const districtData = {
            region: district.districtTitle,
            urbans: district.subDistricts.map((subDistrict) => {
              return (
                {
                  subDistrictTitle: subDistrict.subDistrictTitle,
                  streets:
                    subDistrict.streets.map((street) => street.streetTitle) ||
                    [],
                } || []
              );
            }),
          };
          ssTbilisi.push(districtData);
        }
      });
      writeFileSync("./data/ssTbilisi.json", JSON.stringify(ssTbilisi));
    }
  });
  return ssTbilisi;
}
