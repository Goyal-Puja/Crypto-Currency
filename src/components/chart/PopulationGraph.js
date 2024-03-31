import React, { useState, useEffect } from 'react';
import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import { CategoryScale, Chart, LineElement, LinearScale, PointElement, Title, Tooltip } from 'chart.js';


Chart.register(Title, Tooltip, CategoryScale, LinearScale, PointElement, LineElement);

const PopulationGraph = () => {
  const [populationData, setPopulationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopulationData = async () => {
      try {
        const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const { data } = await response.json();
        setPopulationData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching population data:', error);
        setLoading(false);
      }
    };

    fetchPopulationData();
  }, []);

  const formatChartData = () => {
    if (!populationData) return;

    const years = populationData.map(entry => entry.Year);
    const populations = populationData.map(entry => entry.Population);

    return {
      labels: years,
      datasets: [
        {
          label: 'Population by Year',
          data: populations,
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
          tension: 0.1,
        },
      ],
    };
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        position: 'average',
      },
    },
    animation: false, // Disable animations
  };

  return (
    <Box
      p={6}
      borderRadius={20}
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      mt={50}
      ml={50}
      shadow="md"
      pb={100}
      bg={useColorModeValue('white', 'gray.800')}
      maxHeight={700}
      overflow="hidden"
    >
      <Heading as="h2" mb={4}>
        Population Graph by Year
      </Heading>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Line data={formatChartData()} options={chartOptions} />
      )}
    </Box>
  );
};

export default PopulationGraph;
