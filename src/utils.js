export const getCountries = async () => {
  return new Promise(async (resolve, reject) => {
    const resp = await fetch("https://a2gtar91a4.execute-api.us-east-1.amazonaws.com/dev/get-countries");
    const result = await resp.json();
    const resArr = result.reduce((acc, obj) => {
      return [...acc, obj];
    }, []);
    resolve(resArr);
  });
};
const sortName = (a, b) => {
  // Handle undefined or null values
  const valueA = a.name.common;
  const valueB = b.name.common;
  // Compare the values alphabetically
  return valueA.localeCompare(valueB);
};
export const columns = [
  {
    title: "Country Name",
    dataIndex: "name",
    sorter: (a, b) => sortName(a, b),
    render: (name) => `${name.common}, ${name.official}`,
    width: "20%",
  },
  {
    title: "Region",
    dataIndex: "region",
    width: "20%",
    sorter: true,
  },
  {
    title: "Population",
    dataIndex: "population",
    sorter: true,
  },
  {
    title: "Flag",
    dataIndex: "flags",
    sorter: true,
    render: (flags) => `${flags.svg}`,
  },
];
