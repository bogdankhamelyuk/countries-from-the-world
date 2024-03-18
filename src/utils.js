export const getCountries = async () => {
  return new Promise(async (resolve, reject) => {
    const resp = await fetch("https://a2gtar91a4.execute-api.us-east-1.amazonaws.com/dev/get-countries");
    const config = await resp.json();
    resolve(config);
  });
};
