import { Flex, Container} from "@chakra-ui/react";
import LoginForm from '../components/Loginform/LoginForm'

const Login = () => {
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
        filter={"auto"}
      >
        <Container maxW={"container.md"} padding={0} maxH={"container.lg"}>
          <LoginForm />
        </Container>
      </Flex>
    </>
  );
};
export default Login;
