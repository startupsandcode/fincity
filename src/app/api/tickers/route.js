export async function GET(req) {
    try {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        const stocks = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA']
        const apiHeaders = { 'Authorization': 'Bearer '+ process.env.POLYGON_API_KEY, 'Content-Type': 'application/json'};
        const curStock = stocks[randomNum % 5];
        console.log(curStock)
        const ticker = req.nextUrl.searchParams.get('ticker')
        const response = await fetch(`https://api.polygon.io/v2/aggs/ticker/` + ticker + `/range/1/day/2024-03-15/2024-03-15?adjusted=true&sort=asc&limit=120`,{ headers: apiHeaders });
        const data = await response.json();
        return Response.json({ data })
      } catch (error) {
        console.error('Error fetching data:', error);
        return Response.error({ error });
      }
  }