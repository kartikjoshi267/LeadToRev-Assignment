const StatisticsCard = ({
  title,
  cases,
  color,
}) => {
  return (
    <div className={`flex rounded-md ${color} w-fit`}>
      <div className="p-2 font-semibold text-lg">
        {title}
      </div>
      <div className="bg-white p-3 rounded-md font-bold">
        {(cases / 1000000).toFixed(1)}M
      </div>
    </div>
  );
}

export default StatisticsCard