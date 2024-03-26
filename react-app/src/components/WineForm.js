import React, { useState } from 'react';
import axios from 'axios';

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Heading,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormHelperText,
} from '@chakra-ui/react';


const WineForm = () => {
  const [formData, setFormData] = useState({
    code: '',
    country: '',
    region: '',
    volume: '',
    type: '',
    productName: '',
    year: '',
    grape: '',
    price: '',
    discount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace 'http://localhost:5000/wine' with the actual endpoint of your backend
      const response = await axios.post('http://localhost:5000/wine', formData);
      alert('Wine entry saved successfully!');
      console.log(response.data);
      // Optionally, clear the form or handle the response further
    } catch (error) {
      console.error('Failed to submit form:', error);
      alert('Failed to save wine entry.');
    }
  };

  return (
    <Box p={8} maxWidth="500px" mx="auto">
      <Heading as="h2" size="xl" textAlign="center" mb={8}>ÜLKE ŞARAPLARI ÜRÜN GİRİŞİ</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={5}>
          <FormControl isRequired>
            <FormLabel>KODU</FormLabel>
            <Input type="text" name="code" value={formData.code} onChange={handleChange} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>ÜLKE</FormLabel>
            <Input type="text" name="country" value={formData.country} onChange={handleChange} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>BÖLGE</FormLabel>
            <Input type="text" name="region" value={formData.region} onChange={handleChange} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>CL</FormLabel>
            <Select name="volume" value={formData.volume} onChange={handleChange}>
              {/* Example options, can be replaced or populated dynamically */}
              <option value="375">375 CL</option>
              <option value="750">750 CL</option>
              <option value="1500">1500 CL</option>
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>TÜR</FormLabel>
            <Input type="text" name="type" value={formData.type} onChange={handleChange} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>ÜRÜN ADI</FormLabel>
            <Input type="text" name="productName" value={formData.productName} onChange={handleChange} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>YIL</FormLabel>
            <NumberInput min={1900} max={new Date().getFullYear()}>
              <NumberInputField name="year" value={formData.year} onChange={handleChange} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>ÜZÜM</FormLabel>
            <Select name="grape" value={formData.grape} onChange={handleChange}>
              {/* Example options */}
              <option value="merlot">Merlot</option>
              <option value="sauvignon">Sauvignon Blanc</option>
              <option value="chardonnay">Chardonnay</option>
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Fiyatı</FormLabel>
            <Input type="number" name="price" value={formData.price} onChange={handleChange} />
          </FormControl>

          <FormControl>
            <FormLabel>İSKONTO (%)</FormLabel>
            <NumberInput max={100} min={0} value={formData.discount} onChange={handleChange}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormHelperText>Ürüne uygulanacak iskonto oranını giriniz.</FormHelperText>
          </FormControl>
          <Button
            type="submit"
            colorScheme="teal"
            size="lg"
            isFullWidth
          >
            Kaydet
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default WineForm;