import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadMovies, reset } from "../features/movies/movieSlice";
import { toast } from "react-toastify";
import { Box, Button, Flex, useMediaQuery, Text} from "@chakra-ui/react";
import MovieCard from "../components/MovieCard/MovieCard";
import Spinner from "../components/Spinner/Spinner";

const Home = () => {
  const { isSmallerThan768 } = useMediaQuery("(max-width: 767.98px)");

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

    if (!user) {
      navigate("/login");
    } else {
      dispatch(loadMovies());
    }

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
        <Text fontSize="2xl" textAlign="center">
        Welcome {user && user.name}
        </Text>
      </Box>
      ) : (null)}
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        mt={8}
        gap={6}
      >
        {movies.movies.length > 0 ? (
          movies.movies.map((movie) => <MovieCard key={movie._id} movie={movie} />)
        ) : (
          <Text>No movies to display</Text>
        )}

      </Flex>
      <Flex justifyContent="center" alignContent={"center"} my={8} gap={6}>
        <Button>1</Button>
      </Flex>
    </>
  );
};
export default Home;
