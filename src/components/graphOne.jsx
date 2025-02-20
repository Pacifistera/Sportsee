import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

// Ajoutez ce composant personnalisé
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: '#E60000',
          padding: '10px 10px 10px 10px',
          color: 'white',
          fontSize: '12px',
          textAlign: 'center',
          width: '60px',
          height: '75px',
          boxSizing: 'border-box',
        }}
      >
        <p style={{ margin: '0 0 15px 0' }}>{`${payload[0].value}kg`}</p>
        <p style={{ margin: 0 }}>{`${payload[1].value}kCal`}</p>
      </div>
    );
  }
  return null;
};

function GraphOne({ sessions }) {
  return (
    <BarChart
      width={835}
      height={320}
      data={sessions}
      style={{ background: '#fbfbfb' }}
    >
      <XAxis
        dataKey="day"
        tickFormatter={(value) => new Date(value).getDate()}
      />
      <YAxis
        yAxisId="left"
        orientation="right"
        dataKey="kilogram"
        hide={true}
      />
      <YAxis yAxisId="right" orientation="right" dataKey="calories" />
      <Tooltip content={<CustomTooltip />} cursor={{ opacity: 0.5 }} />
      <Legend
        verticalAlign="top"
        height={36}
        align="right"
        wrapperStyle={{
          paddingRight: '40px', // Ajustez cette valeur selon vos besoins
          fontSize: '12px',
        }}
        formatter={(value) => {
          // Remplacer les textes selon le dataKey
          if (value === 'kilogram')
            return <span style={{ color: '#74798C' }}>Poids (kg)</span>;
          if (value === 'calories')
            return (
              <span style={{ color: '#74798C' }}>Calories brûlées (kCal)</span>
            );
          return value;
        }}
      />
      <Bar yAxisId="left" dataKey="kilogram" fill="#282D30" barSize={10} />
      <Bar yAxisId="right" dataKey="calories" fill="#E60000" barSize={10} />
    </BarChart>
  );
}

export default GraphOne;
