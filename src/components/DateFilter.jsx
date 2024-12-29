const DateFilter = ({ dates, setDates }) => {
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setDates({ ...dates, [name]: value });
    };

    return (
        <div className="flex items-center gap-2 flex-col md:w-fit w-full">
            <h3 className="text-sm font-semibold">Filter by Date Range:</h3>
            <div className="flex gap-2">
                <div className="flex flex-col">
                    <p className="text-xs">From</p>
                    <input
                        type="date"
                        name="startDate"
                        className="border border-gray-300 rounded-md p-2"
                        max={dates.endDate}
                        value={dates.startDate}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-xs">To</p>
                    <input
                        type="date"
                        name="endDate"
                        className="border border-gray-300 rounded-md p-2"
                        min={dates.startDate}
                        value={dates.endDate}
                        onChange={onChangeHandler}
                    />
                </div>
            </div>
        </div>
    );
};

export default DateFilter;
