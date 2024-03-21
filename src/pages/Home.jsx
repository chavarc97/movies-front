import { Box, Button, Flex, useMediaQuery } from "@chakra-ui/react";
import MovieCard from "../components/MovieCard/MovieCard";

const Home = () => {
  const {isSmallerThan768} = useMediaQuery("(max-width: 767.98px)");
  return (
    <>
      <Flex
        
        flexWrap="wrap"
        justifyContent="center"
        mt={8}
        gap={6}
        
        {...(isSmallerThan768 ? {
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          minWidth: '100%',
        } :
        {})}
      >
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </Flex>
      <Flex justifyContent="center"
      alignContent={'center'}
        my={8}
        gap={6}>
      <Button >
        1
      </Button>
      </Flex>
    </>
  );
};
export default Home;
