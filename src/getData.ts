interface Idata {
  ticker: string;
  last: any;
  highestBid: any;
  percentChange: any;
}
export const requestData = async (): Promise<Idata[]> => {
  const respons = await fetch(
    'https://poloniex.com/public?command=returnTicker'
  )
    .then((resp) => {
      return resp.json();
    })
    .catch((e) => {
      console.log('Reject --> ' + e);
    });

  const dt: Idata[] = [];
  if (respons) {
    for (let i of Object.keys(respons)) {
      let tmp: Idata = {
        ticker: i,
        last: Object.values(respons[i])[1],
        highestBid: Object.values(respons[i])[3],
        percentChange: Object.values(respons[i])[4],
      };
      dt.push(tmp);
    }
  } else {
    dt.push({
      ticker: 'Ошибка',
      last: 'Ошибка',
      highestBid: 'Ошибка',
      percentChange: 'Ошибка',
    });
  }

  return dt;
};
