import { Box, Container, Flex, VStack, Image } from "@chakra-ui/react";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <>
      <Flex
        minH={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        px={4}
        bgImage={"url('/auth-bg-2.jpg')"}
        bgSize={"cover"}
        bgPosition="center"
        bgRepeat="no-repeat"
        filter={'auto'}
      >
        <Container maxW={"container.md"} padding={0} maxH={'container.lg'}>
            <RegisterForm />
        </Container>
      </Flex>
    </>
  );
};
export default Register;
