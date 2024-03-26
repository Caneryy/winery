import React from 'react';
import { ChakraProvider, Box, VStack, Link, Text } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import WineForm from './components/WineForm';
import WineList from './components/WineList';

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Box display="flex" minHeight="100vh">
          <Box width="200px" bg="gray.100" p={5}>
            <VStack spacing={4} align="stretch">
              <Link as={RouterLink} to="/add">
                <Text fontSize="xl">Ekle</Text>
              </Link>
              <Link as={RouterLink} to="/list">
                <Text fontSize="xl">Liste</Text>
              </Link>
            </VStack>
          </Box>
          <Box flex="1" p={5}>
            <Routes>
              <Route path="/add" element={<WineForm />} />
              <Route path="/list" element={<WineList />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;
