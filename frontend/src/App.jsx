import { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import axios from 'axios';
import InputForm from './components/InputForm';
import PredictionResult from './components/PredictionResult';

function App() {
  const [formData, setFormData] = useState({
    Citizenship: 1,
    Admission_Status: 1,
    Outstanding_Loans: 0,
    Academic_Performance: 2.5,
    Field_of_Study: 'STEM',
    Year_of_Study: 1,
    Family_Income: 0,
    Number_of_Dependents: 0,
    Orphan: 0,
    Parents_Disability: 0,
  });

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSliderChange = (value) => {
    setFormData({
      ...formData,
      Academic_Performance: value,
    });
  };

  const handleNumberChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post('/predict', formData);
      setPrediction(response.data);
    } catch (err) {
      setError('An error occurred while making the prediction.');
      console.error(err);
    }
  };

  return (
    <Box p={8}>
      <Heading as="h1" mb={6} textAlign="center">
        HESLB Loan Eligibility Prediction
      </Heading>
      <InputForm
        formData={formData}
        handleChange={handleChange}
        handleSliderChange={handleSliderChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
      />
      <PredictionResult prediction={prediction} error={error} />
    </Box>
  );
}

export default App;
