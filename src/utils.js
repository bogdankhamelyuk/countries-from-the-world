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
