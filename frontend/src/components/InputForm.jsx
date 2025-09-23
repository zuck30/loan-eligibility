import {
  Button,
  FormControl,
  FormLabel,
  Select,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  VStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Grid,
  GridItem,
  Card,
  CardBody,
  Heading,
  Text,
  Box,
  useColorModeValue,
  Progress,
  HStack,
} from '@chakra-ui/react';
import { 
  FaGlobe, 
  FaGraduationCap, 
  FaMoneyBillWave, 
  FaBook, 
  FaChartLine, 
  FaCalendarAlt,
  FaDollarSign,
  FaUsers,
  FaHeart,
  FaWheelchair 
} from 'react-icons/fa';

const InputForm = ({ formData, handleChange, handleSliderChange, handleNumberChange, handleSubmit, isLoading }) => {
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const hoverBorderColor = useColorModeValue('blue.400', 'blue.300');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  const FormField = ({ icon: Icon, label, children, ...props }) => (
    <FormControl {...props}>
      <FormLabel fontSize="sm" fontWeight="600" color={textColor}>
        <HStack spacing={2}>
          <Icon size={14} />
          <Text>{label}</Text>
        </HStack>
      </FormLabel>
      {children}
    </FormControl>
  );

  return (
    <Card 
      bg={cardBg} 
      boxShadow="xl" 
      borderRadius="xl" 
      border="1px solid"
      borderColor={borderColor}
    >
      <CardBody p={{ base: 4, md: 6, lg: 8 }}>
        <VStack as="form" onSubmit={handleSubmit} spacing={6} align="stretch">
          {/* Header */}
          <Box textAlign="center" mb={2}>
            <Heading as="h2" size="lg" color="blue.600" mb={2}>
              Loan Eligibility Prediction
            </Heading>
            <Text color="gray.500" fontSize="sm">
              Complete the form, Let the model analyze your loan eligibility.
            </Text>
          </Box>

          {isLoading && (
            <Progress size="sm" isIndeterminate colorScheme="blue" borderRadius="full" />
          )}

          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={{ base: 4, md: 6 }}>
            {/* Column 1 */}
            <GridItem>
              <VStack spacing={4}>
                <FormField icon={FaGlobe} label="Citizenship">
                  <Select 
                    name="Citizenship" 
                    value={formData.Citizenship} 
                    onChange={handleChange}
                    borderColor={borderColor}
                    borderRadius="md"
                    _hover={{ borderColor: hoverBorderColor }}
                    _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                    size="md"
                  >
                    <option value={1}>Tanzanian Citizen</option>
                    <option value={0}>International Student</option>
                  </Select>
                </FormField>

                <FormField icon={FaGraduationCap} label="Admission Status">
                  <Select 
                    name="Admission_Status" 
                    value={formData.Admission_Status} 
                    onChange={handleChange}
                    borderColor={borderColor}
                    borderRadius="md"
                    _hover={{ borderColor: hoverBorderColor }}
                    _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                    size="md"
                  >
                    <option value={1}>Valid Admission</option>
                    <option value={0}>Invalid Admission</option>
                  </Select>
                </FormField>

                <FormField icon={FaMoneyBillWave} label="Outstanding Loans">
                  <Select 
                    name="Outstanding_Loans" 
                    value={formData.Outstanding_Loans} 
                    onChange={handleChange}
                    borderColor={borderColor}
                    borderRadius="md"
                    _hover={{ borderColor: hoverBorderColor }}
                    _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                    size="md"
                  >
                    <option value={0}>No Outstanding Loans</option>
                    <option value={1}>Has Outstanding Loans</option>
                  </Select>
                </FormField>

                <FormField icon={FaBook} label="Field of Study">
                  <Select 
                    name="Field_of_Study" 
                    value={formData.Field_of_Study} 
                    onChange={handleChange}
                    borderColor={borderColor}
                    borderRadius="md"
                    _hover={{ borderColor: hoverBorderColor }}
                    _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                    size="md"
                  >
                    <option value="STEM">STEM</option>
                    <option value="Humanities">Humanities</option>
                    <option value="Business">Business</option>
                    <option value="Health Sciences">Health Sciences</option>
                  </Select>
                </FormField>
              </VStack>
            </GridItem>

            {/* Column 2 */}
            <GridItem>
              <VStack spacing={4}>
                <FormField icon={FaChartLine} label={`Academic Performance (GPA: ${formData.Academic_Performance})`}>
                  <Slider
                    name="Academic_Performance"
                    value={formData.Academic_Performance}
                    min={0.0}
                    max={5.0}
                    step={0.1}
                    onChange={handleSliderChange}
                    colorScheme="blue"
                    size="md"
                  >
                    <SliderTrack bg="gray.100" height="6px" borderRadius="full">
                      <SliderFilledTrack bg="blue.500" />
                    </SliderTrack>
                    <SliderThumb 
                      boxSize={5} 
                      bg="blue.500"
                      border="2px solid white"
                      boxShadow="sm"
                    />
                  </Slider>
                </FormField>

                <FormField icon={FaCalendarAlt} label="Year of Study">
                  <Select 
                    name="Year_of_Study" 
                    value={formData.Year_of_Study} 
                    onChange={handleChange}
                    borderColor={borderColor}
                    borderRadius="md"
                    _hover={{ borderColor: hoverBorderColor }}
                    _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                    size="md"
                  >
                    <option value={1}>First Year</option>
                    <option value={2}>Second Year</option>
                    <option value={3}>Third Year</option>
                    <option value={4}>Fourth Year</option>
                  </Select>
                </FormField>

                <FormField icon={FaDollarSign} label="Family Income (TZS)">
                  <NumberInput
                    name="Family_Income"
                    value={formData.Family_Income}
                    min={0}
                    onChange={(value) => handleNumberChange('Family_Income', value)}
                    size="md"
                  >
                    <NumberInputField 
                      borderColor={borderColor}
                      borderRadius="md"
                      _hover={{ borderColor: hoverBorderColor }}
                      _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper borderColor={borderColor} />
                      <NumberDecrementStepper borderColor={borderColor} />
                    </NumberInputStepper>
                  </NumberInput>
                </FormField>

                <FormField icon={FaUsers} label="Number of Dependents">
                  <NumberInput
                    name="Number_of_Dependents"
                    value={formData.Number_of_Dependents}
                    min={0}
                    onChange={(value) => handleNumberChange('Number_of_Dependents', value)}
                    size="md"
                  >
                    <NumberInputField 
                      borderColor={borderColor}
                      borderRadius="md"
                      _hover={{ borderColor: hoverBorderColor }}
                      _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper borderColor={borderColor} />
                      <NumberDecrementStepper borderColor={borderColor} />
                    </NumberInputStepper>
                  </NumberInput>
                </FormField>
              </VStack>
            </GridItem>
          </Grid>

          {/* Additional Fields - Single column on mobile */}
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4} mt={2}>
            <FormField icon={FaHeart} label="Orphan Status">
              <Select 
                name="Orphan" 
                value={formData.Orphan} 
                onChange={handleChange}
                borderColor={borderColor}
                borderRadius="md"
                _hover={{ borderColor: hoverBorderColor }}
                _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                size="md"
              >
                <option value={0}>Not an Orphan</option>
                <option value={1}>Orphan</option>
              </Select>
            </FormField>

            <FormField icon={FaWheelchair} label="Parents Disability">
              <Select 
                name="Parents_Disability" 
                value={formData.Parents_Disability} 
                onChange={handleChange}
                borderColor={borderColor}
                borderRadius="md"
                _hover={{ borderColor: hoverBorderColor }}
                _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                size="md"
              >
                <option value={0}>No Disability</option>
                <option value={1}>Has Disability</option>
              </Select>
            </FormField>
          </Grid>

          {/* Submit Button */}
          <Button 
            type="submit" 
            colorScheme="blue" 
            size="lg"
            height="50px"
            width="100%"
            mt={4}
            isLoading={isLoading}
            loadingText="Analyzing..."
            fontSize="md"
            fontWeight="600"
          >
            Analyze Eligibility
          </Button>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default InputForm;