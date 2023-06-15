import React, { useEffect, useState } from 'react';
import { Workbook } from '@fortune-sheet/react';
import Papa from 'papaparse';

const App = () => {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    // Fetch CSV data from a file or an API endpoint
    fetch('sample.csv')
      .then(response => response.text())
      .then(csvString => {
        // Parse CSV data using Papa Parse library
        const { data } = Papa.parse(csvString);
        setCsvData(data);
      })
      .catch(error => {
        console.error('Error fetching CSV data:', error);
      });
  }, []);

  return (
    <div
      key="rootbox"
      style={{
        width: '20%',
        height: '500px',
      }}
    >
      <Workbook data={csvData} row={30} column={10} />
    </div>
  );
};

export default App;
