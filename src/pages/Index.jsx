import { Box, Container, Flex, HStack, IconButton, Image, Input, InputGroup, InputRightElement, Text, VStack } from "@chakra-ui/react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Flex as="header" bg="red.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <HStack spacing={4}>
          <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0YW9iYW8lMjBsb2dvfGVufDB8fHx8MTcxNzE0Njk5OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Taobao Logo" boxSize="50px" />
          <Text fontSize="2xl" fontWeight="bold">
            Taobao
          </Text>
        </HStack>
        <InputGroup maxW="600px">
          <Input placeholder="Search for products" bg="white" color="black" />
          <InputRightElement>
            <IconButton aria-label="Search" icon={<FaSearch />} />
          </InputRightElement>
        </InputGroup>
        <HStack spacing={4}>
          <IconButton aria-label="User" icon={<FaUser />} />
          <IconButton aria-label="Cart" icon={<FaShoppingCart />} />
        </HStack>
      </Flex>

      {/* Main Content */}
      <VStack spacing={8} mt={8}>
        {/* Banner */}
        <Box w="full" h="300px" bg="gray.200">
          <Image src="https://images.unsplash.com/photo-1607082349566-187342175e2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMGJhbm5lcnxlbnwwfHx8fDE3MTcxNDY5OTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Shopping Banner" w="full" h="full" objectFit="cover" />
        </Box>

        {/* Categories */}
        <HStack spacing={4} wrap="wrap" justifyContent="center">
          {["Electronics", "Fashion", "Home", "Beauty", "Toys", "Sports"].map((category) => (
            <Box key={category} p={4} bg="gray.100" borderRadius="md" boxShadow="md" textAlign="center" w="150px">
              <Image src={`https://images.unsplash.com/photo-1707759642885-42994e023046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwlMjQlN0JjYXRlZ29yeSU3RCUyMGljb258ZW58MHx8fHwxNzE3MTQ2OTk5fDA&ixlib=rb-4.0.3&q=80&w=1080`} alt={`${category} Icon`} boxSize="50px" mb={2} />
              <Text>{category}</Text>
            </Box>
          ))}
        </HStack>

        {/* Featured Products */}
        <VStack spacing={4} w="full">
          <Text fontSize="2xl" fontWeight="bold">
            Featured Products
          </Text>
          <HStack spacing={4} wrap="wrap" justifyContent="center">
            {Array(6)
              .fill("")
              .map((_, index) => (
                <Box key={index} p={4} bg="white" borderRadius="md" boxShadow="md" textAlign="center" w="200px">
                  <Image src="https://images.unsplash.com/photo-1604935067269-27c7e8b36618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwaW1hZ2V8ZW58MHx8fHwxNzE3MTQ2OTk5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Product Image" boxSize="150px" mb={2} />
                  <Text>Product Name</Text>
                  <Text fontWeight="bold">$99.99</Text>
                </Box>
              ))}
          </HStack>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
