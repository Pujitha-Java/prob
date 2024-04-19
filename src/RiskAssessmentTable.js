import React, { useState } from 'react';
import styles from './risk-assessment.css';

function RiskAssessmentTable() {
  const [data] = useState([
    { Severity: 'Catastrophic', Rare: 3, Unlikely: 2, Possible: 1, 'Almost Certain': 1 },
    { Severity: 'Major', Rare: 4, Unlikely: 3, Possible: 2, 'Almost Certain': 1 },
    { Severity: 'Moderate', Rare: 4, Unlikely: 4, Possible: 3, 'Almost Certain': 2 },
    { Severity: 'Insignificant', Rare: 4, Unlikely: 4, Possible: 4, 'Almost Certain': 3 },
  ]);

  return (
    <div className="risk-assessment-container">
      <div className="risk-assessment-table-wrapper">
        <table className="risk-assessment">
          <thead>
            <tr>
              <th>Severity</th>
              {data.length > 0 &&
                Object.keys(data[0]).slice(1).map((header) => (
                  <th key={header}>{header}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>{row.Severity}</td>
                {Object.values(row).slice(1).map((value, colIndex) => (
                  <td
                    key={`${rowIndex}-${colIndex}`}
                    className={`risk-level-${value}`}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RiskAssessmentTable;

