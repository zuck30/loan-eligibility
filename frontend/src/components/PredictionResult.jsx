import { 
  Box, 
  Heading, 
  Text, 
  Card, 
  CardBody, 
  Progress, 
  useColorModeValue, 
  VStack,
  HStack 
} from '@chakra-ui/react';
import { FaCheckCircle, FaTimesCircle, FaChartBar, FaLightbulb } from 'react-icons/fa';

const PredictionResult = ({ prediction, error, isLoading }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const successColor = useColorModeValue('green.600', 'green.300');
  const errorColor = useColorModeValue('red.600', 'red.300');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const infoBg = useColorModeValue('blue.50', 'blue.900');

  if (isLoading) {
    return (
      <Card bg={cardBg} boxShadow="md" borderRadius="xl" border="1px solid" borderColor={borderColor}>
        <CardBody p={4}>
          <VStack spacing={3}>
            <Progress size="sm" isIndeterminate colorScheme="blue" width="100%" borderRadius="full" />
            <Text color="gray.500" fontSize="sm">
              The model is analyzing your eligibility...
            </Text>
          </VStack>
        </CardBody>
      </Card>
    );
  }

  if (error) {
    return (
      <Card bg={cardBg} boxShadow="md" borderRadius="xl" border="1px solid" borderColor={borderColor}>
        <CardBody p={4}>
          <VStack spacing={3} textAlign="center">
            <Box color={errorColor}>
              <FaTimesCircle size={40} />
            </Box>
            <Heading as="h3" size="sm" color={errorColor}>
              Analysis Failed
            </Heading>
            <Text color="gray.600" fontSize="sm">
              {error}
            </Text>
          </VStack>
        </CardBody>
      </Card>
    );
  }

  if (!prediction) {
    return (
      <Card bg={cardBg} boxShadow="md" borderRadius="xl" border="1px solid" borderColor={borderColor}>
        <CardBody p={6}>
          <VStack spacing={3} textAlign="center">
            <Box color="gray.400">
              <FaChartBar size={40} />
            </Box>
            <Heading as="h3" size="sm" color="gray.600">
              Ready to Analyze.
            </Heading>
            <Text color="gray.500" fontSize="sm">
              Submit the form for eligibility check.
            </Text>
          </VStack>
        </CardBody>
      </Card>
    );
  }

  const isEligible = prediction.eligibility?.toLowerCase().includes('eligible');
  const probability = parseFloat(prediction.probability) * 100;

  return (
    <Card bg={cardBg} boxShadow="md" borderRadius="xl" border="1px solid" borderColor={borderColor}>
      <CardBody p={4}>
        <VStack spacing={4} textAlign="center">
          <Box color={isEligible ? successColor : errorColor}>
            {isEligible ? <FaCheckCircle size={48} /> : <FaTimesCircle size={48} />}
          </Box>
          
          <Heading as="h3" size="md" color={isEligible ? successColor : errorColor}>
            {isEligible ? 'Eligible' : 'Not Eligible'}
          </Heading>
          
          <Text color="gray.600" fontSize="sm" fontWeight="medium">
            {prediction.eligibility}
          </Text>

          {/* Probability Meter */}
          <Box width="100%" mt={2}>
            <HStack justify="space-between" mb={1}>
              <Text fontSize="sm" color="gray.600" fontWeight="medium">
                Confidence Level
              </Text>
              <Text fontSize="sm" color="gray.600" fontWeight="bold">
                {probability.toFixed(1)}%
              </Text>
            </HStack>
            <Progress 
              value={probability} 
              colorScheme={isEligible ? 'green' : 'red'} 
              size="sm" 
              borderRadius="full"
              bg="gray.100"
            />
          </Box>

          {/* Additional Info */}
          <Box mt={3} p={3} bg={infoBg} borderRadius="md" width="100%">
            <HStack spacing={2}>
              <Box color="blue.500">
                <FaLightbulb size={16} />
              </Box>
              <Text fontSize="xs" color="blue.700" fontWeight="medium">
                {isEligible ? 
                  'Consider applying through our streamlined process' : 
                  'Improve your GPA or complete the criteria to increase eligibility'
                }
              </Text>
            </HStack>
          </Box>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default PredictionResult;
