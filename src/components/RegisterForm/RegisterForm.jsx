import {
  Box,
  VStack,
  Image,
  Input,
  Flex,
  Button,
  FormControl,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset, registerUser } from "../../features/auth/authSlice";
import Spinner from "../Spinner/Spinner";

const RegisterForm = () => {
  // create a state to store the user's input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  //  destructuring the values from the formData
  const { name, email, password, password2 } = formData;

  // using useNavigate hook to redirect the user
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // destructuring the auth state
  const { user, isError, isSuccess, message, isLoading } = useSelector(
    (state) => state.auth
  );

  /* 
    // onCHange function allows us to write in the input fields and show the value
       in the console react components
    // it is used on the input tag using: onChange={onChange}
  */
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(formData);
  };

  // onSubmit function allows us to submit the form
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted")
    // if the password and the confirm password are not the same, show an error message
    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        email,
        name,
        password,
      };
      // dispatch the register action and pass the userData
      dispatch(registerUser(userData));
    }
  };

  // useEffect hook to show the error message if the user is not created
  // Show a success message if the user is created successfully and navigate to the login page
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success("User created successfully");
      navigate("/login");
    }
    dispatch(reset()); // reset the state
  }, [user, isSuccess, isError, message, navigate, dispatch]); // pass the user, isSuccess, isError, message, navigate and dispatch as dependencies

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
            placeholder="Name"
            fontSize={14}
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={onChange}
          />
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
            placeholder="Password"
            fontSize={14}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
          />
          <Input
            variant={"flushed"}
            placeholder="Confirm password"
            fontSize={14}
            type="password"
            id="password2"
            name="password2"
            value={password2}
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
export default RegisterForm;
