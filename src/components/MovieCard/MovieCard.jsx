import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import MovieFooter from "./MovieFooter";


const MovieCard = () => {
  return (
    <>
      <Box
        bg="white"
        borderRadius="md"
        boxShadow="lg"
        mb={4}
        _hover={{transform: 'scale(1.05)', transition: 'all 0.3s ease-in-out'}}
      >
        <Image
          src="/auth-bg-2.jpg"
          borderRadius="md"
          mb={2}
          w={{base: '500px', md: '300px'}}
          h={{base: '600px', md: '400px'}}
          objectFit='cover'
        />
        <Box px={3} justifyItems={'center'}>
        <Heading size={'md'} mb={1} >
          Movie Title
        </Heading>
        <Text fontSize={'medium'} fontWeight="md" mb={1}>
          Release date
        </Text>
        <span>Rating: </span>
        </Box>
      </Box>
    </>
  );
};
export default MovieCard;
