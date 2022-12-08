import axios from 'axios';


export const getCompanyDetails = async (name) => {
  const details = await axios({
    method: 'GET',
    url: `https://financialmodelingprep.com/api/v3/quote/${name}`,
    params: {
      apikey: 'da7623cfbe7a9dd8b3739829cc5849cb',
    },

  }).then((response) => response.data)
    .catch((err) => err.response.data);
  return details;
};
