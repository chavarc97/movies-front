import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



const MovieCard = ({movie}) => {
  // onclick on poster redirecting to movie details page
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/movie/${movie._id}`);
  }

  return (
    <>
      <Box
        bg="white"
        borderRadius="md"
        boxShadow='xl'
        mb={4}
        _hover={{transform: 'scale(1.05)', transition: 'all 0.3s ease-in-out'}}
        id={movie._id}
        onClick={onClick}
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
