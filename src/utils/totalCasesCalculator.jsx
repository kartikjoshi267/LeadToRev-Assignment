const totalCasesCalculator = (covidDataWithDates) => {
  const totalCases = covidDataWithDates.reduce((total, curr) => {
    return total + curr.cases
  }, 0);
  const totalDeaths = covidDataWithDates.reduce((total, curr) => {
    return total + curr.deaths
  }, 0);
  const totalRecovered = covidDataWithDates.reduce((total, curr) => {
    return total + curr.recovered
  }, 0);

  return {
    totalCases,
    totalDeaths,
    totalRecovered
  };
}

export default totalCasesCalculator