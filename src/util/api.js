import axios from 'axios';


const getMarket = () => {
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per=100&page=1&sparkline=false')
  .then(res => {
    console.log(res.data);
    return res.data
  })
  .catch(err => console.log(err));
}


export default getMarket;