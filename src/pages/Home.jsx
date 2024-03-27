import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadMovies, reset } from "../features/movies/movieSlice";
import { toast } from "react-toastify";
import { Box, Button, Flex, Text} from "@chakra-ui/react";
import MovieCard from "../components/MovieCard/MovieCard";
import Spinner from "../components/Spinner/Spinner";
/* import Hero from "../components/Hero/Hero";
 */
const Home = () => {


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { movies, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    
    dispatch(loadMovies());
    

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {user ? (
        <Box justifyContent={'center'} alignContent={'center'} mt={10}>
        <Text fontSize="2xl" textAlign="center" fontWeight={'bold'}>
       ¡ Welcome {user && user.name} !
        </Text>
      </Box>
      ) : (null)}

      {/* {
        <Hero key={movies._id} movie={movies.slice(0, 5)} />
      } */}
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        mt={8}
        gap={6}
        mb={8}
      >
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie._id} movie={movie} />)
        ) : (
          <Text>No movies to display</Text>
        )}

      </Flex>
      
    </>
  );
};
export default Home;
