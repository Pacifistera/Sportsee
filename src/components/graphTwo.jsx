import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: '#FFFFFF',
          padding: '5px',
          color: '#000000',
          fontSize: '10px',
          textAlign: 'center',
          width: '50px',
          height: '25px',
          boxSizing: 'border-box',
        }}
      >
        <p style={{ margin: 0 }}>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

function GraphTwo({ sessions }) {
  console.log('GraphTwo sessions:', sessions);
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  return (
    <LineChart
      width={258}
      height={263}
      data={sessions}
      margin={{ top: 80, right: 0, left: 0, bottom: 0 }}
      style={{ background: '#FF0000' }}
      padding={{ left: 10, right: 10, top: 10, bottom: 10 }}
    >
      <XAxis
        dataKey="day"
        axisLine={false}
        tickLine={false}
        tick={{ fill: '#FFFFFF', fontSize: '12px' }}
        tickFormatter={(value, index) => days[index]}
        padding={{ left: 20, right: 20 }}
      />
      <YAxis hide={true} domain={['dataMin - 30', 'dataMax + 30']} />
      <Tooltip content={<CustomTooltip />} cursor={false} />
      <Legend
        verticalAlign="top"
        align="left"
        formatter={() => 'Durée moyenne des sessions'}
        iconSize={0}
        wrapperStyle={{
          color: '#FFFFFF',
          opacity: 0.5,
          top: 20,
          left: 20,
          fontSize: '12px',
        }}
      />
      <Line
        type="monotone"
        dataKey="sessionLength"
        stroke="#FFFFFF"
        dot={false}
      />
    </LineChart>
  );
}

export default GraphTwo;
