import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';

function GraphThree({ data, kind }) {
  const formatData = data.map((item) => ({
    ...item,
    kind: kind[item.kind],
  }));

  return (
    <RadarChart
      outerRadius={90}
      width={258}
      height={263}
      data={formatData}
      style={{ background: '#282D30' }}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" tick={{ fontSize: 10, fill: '#FFFFFF' }} />

      <Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" />
    </RadarChart>
  );
}

export default GraphThree;
