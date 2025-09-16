import { Box, Heading, Text } from '@chakra-ui/react';

const PredictionResult = ({ prediction, error }) => {
  if (error) {
    return (
      <Box mt={6} p={4} borderWidth="1px" borderRadius="lg" color="red.500">
        <Text>{error}</Text>
      </Box>
    );
  }

  if (!prediction) {
    return null;
  }

  return (
    <Box mt={6} p={4} borderWidth="1px" borderRadius="lg">
      <Heading as="h2" size="md">Prediction Result</Heading>
      <Text>Eligibility: {prediction.eligibility}</Text>
      <Text>Probability: {prediction.probability}</Text>
    </Box>
  );
};

export default PredictionResult;
