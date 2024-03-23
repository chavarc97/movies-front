import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadMovies } from "../../features/movies/movieSlice";


const MovieCard = ({movie}) => {

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
          src={movie.poster_path}
          borderRadius="md"
          mb={2}
          w={{base: '500px', md: '300px'}}
          h={'full'}
          objectFit='cover'
          overflow={'hidden'}
        />
      </Box>
    </>
  );
};
export default MovieCard;
