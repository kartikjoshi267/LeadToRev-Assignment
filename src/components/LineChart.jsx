import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { COLORS } from "../utils/colors";

const MyLineChart = ({
  data
}) => {
    return (
      <div className="flex flex-col gap-2 2xl:w-1/2 w-full">
        <h3 className="text-md font-semibold">Line Chart</h3>
        <ResponsiveContainer
          width={"100%"}
          height={450}
        >
          <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis tickFormatter={(value) => `${(value / 1000000)}M`} />
              <Tooltip 
                  formatter={(value) => `${(value / 1000000).toFixed(2)}M`}
              />
              <Legend />
              {/* show number of cases in millions with M in the end */}
              <Line type="monotone" strokeWidth={3} dot={false} dataKey="cases" stroke={COLORS[0].color} />
              <Line type="monotone" strokeWidth={3} dot={false} dataKey="recovered" stroke={COLORS[1].color} />
              <Line type="monotone" strokeWidth={3} dot={false} dataKey="deaths" stroke={COLORS[2].color} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
};

export default MyLineChart;
