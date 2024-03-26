import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Heading } from '@chakra-ui/react';
import axios from 'axios';

const WineList = () => {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    const fetchWines = async () => {
      try {
        const response = await axios.get('http://localhost:5000/wines');
        setWines(response.data);
      } catch (error) {
        console.error('Error fetching wines:', error);
      }
    };

    fetchWines();
  }, []);

  return (
    <Box p={8} maxWidth="1200px" mx="auto">
      <Heading as="h2" size="xl" textAlign="center" mb={8}>Şarap Listesi</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>KODU</Th>
            <Th>ÜLKE</Th>
            <Th>BÖLGE</Th>
            <Th>CL</Th>
            <Th>TÜR</Th>
            <Th>ÜRÜN ADI</Th>
            <Th>YIL</Th>
            <Th>ÜZÜM</Th>
            <Th>Fiyatı</Th>
            <Th>İSKONTO (%)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {wines.map((wine, index) => (
            <Tr key={index}>
              <Td>{wine.code}</Td>
              <Td>{wine.country}</Td>
              <Td>{wine.region}</Td>
              <Td>{wine.volume}</Td>
              <Td>{wine.type}</Td>
              <Td>{wine.productName}</Td>
              <Td>{wine.year}</Td>
              <Td>{wine.grape}</Td>
              <Td>{wine.price}</Td>
              <Td>{wine.discount}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default WineList;
