import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from "recharts";
import { COLORS } from "../utils/colors";

const MyPieChart = ({ data }) => {
    return (
      <div className="flex flex-col gap-2 2xl:w-1/2 w-full">
        <h3 className="text-md font-semibold">Pie Chart</h3>
        <ResponsiveContainer
          width={"100%"}
          height={450}
        >
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                    innerRadius={50}
                    fill="#8884d8"
                    label={(entry) => `${entry.name}: ${(entry.value / 1000000).toFixed(2)}M`}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length].color} />
                    ))}
                </Pie>
                <Tooltip formatter={(value) => `${(value / 1000000).toFixed(2)}M`} />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
      </div>
    );
};

export default MyPieChart;
