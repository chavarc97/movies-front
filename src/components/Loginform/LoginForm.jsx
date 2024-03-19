import { Box, VStack, Image, Input, Flex, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginUser, reset } from "../../features/auth/authSlice";
import { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  // useEffect hook to show the error message if the user is not registered
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess ) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState, // uses spread operator to copy the values and save them in the state
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(loginUser(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box
      boxShadow={"dark-lg"}
      borderRadius={4}
      padding={10}
      margin={30}
      bg={"white"}
    >
      <VStack gap={4}>
        <Image
          src="/movie-icon.png"
          h={50}
          cursor={"pointer"}
          align={"logo"}
          mb={5}
        />
        <form onSubmit={onSubmit}>
          <Input
            variant={"flushed"}
            placeholder="Email"
            fontSize={14}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
          />
          <Input
            variant={"flushed"}
            placeholder="Pasword"
            fontSize={14}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
          />
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Button type="submit">Sign Up</Button>
          </Flex>
        </form>
      </VStack>
    </Box>
  );
};
export default LoginForm;
