import { Pie, PieChart, Label, Cell, Sector } from 'recharts';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

const CustomLabel = ({ viewBox, labelText, value }) => {
  const { cx, cy } = viewBox;
  return (
    <g>
      <text
        x={cx}
        y={cy}
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
        alignmentBaseline="middle"
        fill="#282D30"
        fontSize="26"
        fontWeight="600"
      >
        {value}%
      </text>

      <text
        x={cx}
        y={cy + 15}
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
        alignmentBaseline="middle"
        fontSize="15"
      >
        {labelText}
      </text>
    </g>
  );
};

function GraphFour({ score }) {
  console.log(score);

  let transformData = [];
  transformData.push(
    {
      name: 'todayScore',
      value: score.todayScore,
    },
    { name: 'todayScore', value: 1 - score.todayScore }
  );

  return (
    <PieChart width={258} height={263} style={{ background: '#fbfbfb' }}>
      <text
        x={30}
        y={30}
        style={{
          fontSize: '15px',
          fontWeight: '500',
          fill: '#20253A',
        }}
      >
        Score
      </text>
      <Pie
        data={transformData}
        cx="50%"
        cy="50%"
        startAngle={90}
        endAngle={450}
        minAngle={1}
        dataKey="value"
        innerRadius={80}
        outerRadius={90}
      >
        {transformData.map((entry, index) => {
          if (index === 1) {
            return <Cell key={`cell-${index}`} fill="#f3f6f9" />;
          }
          return <Cell key={`cell-${index}`} fill="#FF0000" />;
        })}
        <Label
          content={
            <CustomLabel
              labelText="de votre objectif"
              value={score.todayScore * 100}
            />
          }
          position="center"
        />
      </Pie>
    </PieChart>
  );
}

export default GraphFour;
