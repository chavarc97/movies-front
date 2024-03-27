import { Box } from "@chakra-ui/react";
import { getMovieById, reset } from "../features/movies/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner/Spinner";
import { useNavigate } from "react-router-dom";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { movie, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getMovieById());
    }
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Box></Box>
    </>
  );
};
export default MovieDetail;
