import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import totalCasesCalculator from "../utils/totalCasesCalculator";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const COVID_API_BASE_URL = `https://disease.sh/v3/covid-19/historical/`;
    const COUNTRIES_API_BASE_URL = `https://restcountries.com/v3.1/all`;
    const date = new Date();
    const [covidData, setCovidData] = useState([
        {
            cases: 0,
            deaths: 0,
            recovered: 0,
            date: `${date.getMonth()}/${date.getDate()}/${date
                .getFullYear()
                .toString()
                .substring(2)}`,
        },
    ]);
    const [country, setCountry] = useState("United States");
    const [dates, setDates] = useState({
        startDate: new Date().toISOString().substring(0, 10),
        endDate: new Date().toISOString().substring(0, 10),
    });
    const [totals, setTotals] = useState({
        totalCases: 0,
        totalDeaths: 0,
        totalRecovered: 0,
    });
    const [countries, setCountries] = useState([country]);

    useEffect(() => {
        getCovidData();
    }, [country]);

    useEffect(() => {
        getCountries();
    }, []);

    useEffect(() => {
        const { totalCases, totalDeaths, totalRecovered } =
            totalCasesCalculator(covidData);

        setTotals({
            totalCases,
            totalDeaths,
            totalRecovered,
        });
    }, [covidData]);

    useEffect(() => {
        if (dates.startDate !== dates.endDate) {
            setCovidData(
                covidData.filter(
                    (data) =>
                        new Date(data.date) >= new Date(dates.startDate) &&
                        new Date(data.date) <= new Date(dates.endDate)
                )
            );
        }
    }, [dates.startDate, dates.endDate]);

    const getCovidData = async () => {
        try {
            const { data } = await axios.get(
                `${COVID_API_BASE_URL}${country}?lastdays=1500`
            );
            console.log(data);
            const { cases, deaths, recovered } = data.timeline;

            const covidDataByDates = Object.keys(cases).map((date) => ({
                date,
                cases: cases[date],
                deaths: deaths[date],
                recovered: recovered[date],
            }));

            setCovidData(covidDataByDates);
        } catch (error) {
            console.log(error);
        }
    };

    const getCountries = async () => {
        try {
            const { data } = await axios.get(COUNTRIES_API_BASE_URL);
            setCountries(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AppContext.Provider
            value={{
                covidData,
                setCovidData,
                country,
                setCountry,
                dates,
                setDates,
                totals,
                countries,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
