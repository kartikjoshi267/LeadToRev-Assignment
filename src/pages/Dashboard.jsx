import DateFilter from "../components/DateFilter";
import MyLineChart from "../components/LineChart";
import MyPieChart from "../components/PieChart";
import SearchBox from "../components/SearchBox";
import StatisticsCard from "../components/StatisticsCard";
import { useAppContext } from "../context/appContext";

const Dashboard = () => {
    const {
        totals,
        covidData,
        countries,
        country,
        setCountry,
        dates,
        setDates,
    } = useAppContext();

    return (
        <div className="py-10 px-[12vw] md:px-[6vw] sm:px-[3vw]">
            <h1 className="text-2xl font-semibold mb-6 md:mb-4">
                COVID-19 and Population Dashboard
            </h1>
            <div className="flex gap-4 md:flex-nowrap flex-wrap w-full md:items-center items-end justify-between mb-8">
                <SearchBox
                    countries={countries}
                    setCountry={setCountry}
                    country={country}
                />
                <DateFilter dates={dates} setDates={setDates} />
            </div>
            <div className="flex flex-wrap gap-4 w-full items-center justify-between mb-6 md:mb-4">
                <StatisticsCard
                    title="Total Cases"
                    cases={totals.totalCases}
                    color="bg-[#9CA8FF]"
                />
                <StatisticsCard
                    title="Total Recovered"
                    cases={totals.totalRecovered}
                    color="bg-[#47D928]"
                />
                <StatisticsCard
                    title="Total Deaths"
                    cases={totals.totalDeaths}
                    color="bg-[#FF4D57]"
                />
            </div>
            <div className="flex 2xl:justify-between w-full gap-3 items-center 2xl:flex-row flex-col justify-center">
                <MyLineChart data={covidData} />
                <MyPieChart
                    data={[
                        {
                            name: "Cases",
                            value: totals.totalCases,
                        },
                        {
                            name: "Recovered",
                            value: totals.totalRecovered,
                        },
                        {
                            name: "Deaths",
                            value: totals.totalDeaths,
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default Dashboard;
