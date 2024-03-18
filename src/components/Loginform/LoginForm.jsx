import {
  Box,
  VStack,
  Image,
  Input,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
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
        <Input
          variant={"flushed"}
          placeholder="Email"
          fontSize={14}
          type="email"
        />
        <Input
          variant={"flushed"}
          placeholder="Pasword"
          fontSize={14}
          type="password"
        />
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          my={4}
          gap={1}
          w={"full"}
        >
          <Box flex={2} h={"1px"} bg={"gray.400"} />
          <Text mx={1} color={"grey"}>
            OR
          </Text>
          <Box flex={2} h={"1px"} bg={"gray.400"} />
        </Flex>
        <Link to={"/register"}>
          <Button>Sign Up</Button>
        </Link>
      </VStack>
    </Box>
  );
};
export default LoginForm;
