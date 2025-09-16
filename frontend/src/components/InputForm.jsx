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
} from '@chakra-ui/react';

const InputForm = ({ formData, handleChange, handleSliderChange, handleNumberChange, handleSubmit }) => {
  return (
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
  );
};

export default InputForm;
