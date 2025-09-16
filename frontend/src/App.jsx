import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  VStack,
  Heading,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import axios from 'axios';

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
      const response = await axios.post('http://localhost:8000/predict', formData);
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
      <VStack as="form" onSubmit={handleSubmit} spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Citizenship</FormLabel>
          <Select name="Citizenship" value={formData.Citizenship} onChange={handleChange}>
            <option value={1}>Tanzanian</option>
            <option value={0}>Other</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Admission Status</FormLabel>
          <Select name="Admission_Status" value={formData.Admission_Status} onChange={handleChange}>
            <option value={1}>Valid</option>
            <option value={0}>Invalid</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Outstanding Loans</FormLabel>
          <Select name="Outstanding_Loans" value={formData.Outstanding_Loans} onChange={handleChange}>
            <option value={0}>No</option>
            <option value={1}>Yes</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Academic Performance (GPA: {formData.Academic_Performance})</FormLabel>
          <Slider
            name="Academic_Performance"
            value={formData.Academic_Performance}
            min={0.0}
            max={5.0}
            step={0.1}
            onChange={handleSliderChange}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </FormControl>
        <FormControl>
          <FormLabel>Field of Study</FormLabel>
          <Select name="Field_of_Study" value={formData.Field_of_Study} onChange={handleChange}>
            <option value="STEM">STEM</option>
            <option value="Humanities">Humanities</option>
            <option value="Business">Business</option>
            <option value="Health Sciences">Health Sciences</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Year of Study</FormLabel>
          <Select name="Year_of_Study" value={formData.Year_of_Study} onChange={handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Family Income (TZS)</FormLabel>
          <NumberInput
            name="Family_Income"
            value={formData.Family_Income}
            min={0}
            onChange={(value) => handleNumberChange('Family_Income', value)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Number of Dependents</FormLabel>
          <NumberInput
            name="Number_of_Dependents"
            value={formData.Number_of_Dependents}
            min={0}
            onChange={(value) => handleNumberChange('Number_of_Dependents', value)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Orphan</FormLabel>
          <Select name="Orphan" value={formData.Orphan} onChange={handleChange}>
            <option value={0}>No</option>
            <option value={1}>Yes</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Parents Disability</FormLabel>
          <Select name="Parents_Disability" value={formData.Parents_Disability} onChange={handleChange}>
            <option value={0}>No</option>
            <option value={1}>Yes</option>
          </Select>
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg" fontSize="md">
          Predict
        </Button>
      </VStack>
      {prediction && (
        <Box mt={6} p={4} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="md">Prediction Result</Heading>
          <Text>Eligibility: {prediction.eligibility}</Text>
          <Text>Probability: {prediction.probability}</Text>
        </Box>
      )}
      {error && (
        <Box mt={6} p={4} borderWidth="1px" borderRadius="lg" color="red.500">
          <Text>{error}</Text>
        </Box>
      )}
    </Box>
  );
}

export default App;
