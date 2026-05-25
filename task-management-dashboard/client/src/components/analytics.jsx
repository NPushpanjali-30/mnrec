import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar
} from "recharts";

function Analytics({ tasks }) {

  const completed =
    tasks.filter((t) => t.completed).length;

  const pending =
    tasks.length - completed;

  const data = [
    {
      name: "Completed",
      value: completed
    },
    {
      name: "Pending",
      value: pending
    }
  ];

  return (
    <div className="analytics">

      <div className="stats">

        <div className="stat-card">
          <h3>Total Tasks</h3>
          <p>{tasks.length}</p>
        </div>

        <div className="stat-card">
          <h3>Completed</h3>
          <p>{completed}</p>
        </div>

        <div className="stat-card">
          <h3>Pending</h3>
          <p>{pending}</p>
        </div>

      </div>

      <div className="charts">

        <PieChart width={300} height={250}>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={80}
          >
            <Cell fill="#22c55e" />
            <Cell fill="#ef4444" />
          </Pie>

          <Tooltip />

        </PieChart>

        <BarChart
          width={350}
          height={250}
          data={data}
        >

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="value" fill="#2563eb" />

        </BarChart>

      </div>

    </div>
  );
}

export default Analytics;