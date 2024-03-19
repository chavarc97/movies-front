import { Flex, Spacer, Heading, Button, IconButton } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


const Header = () => {
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding="1rem"
        borderBottom={"1px solid"}
        borderColor={"blackAlpha.100"}
        boxShadow={"md"}
        color="blackAlpha.700"
        position={"sticky"}
        top={0}
        zIndex={10}
        bg="white"
      >
        <Heading size="md">Logo</Heading>
        <Spacer />
        <Link to={'/'}>
          <Button variant="link" mr={4}>
            Home
          </Button>
        </Link>
        <Link to={'/about'}>
        <Button variant="link" mr={4}>
          About
        </Button>
        </Link>
        <Button variant="link" mr={4}>
          Upload
        </Button>
        <Link to={'/login'}>
        <Button variant="link" mr={4}>
          Login
        </Button>
        </Link>
        <Link to={'/register'}>
        <Button variant="link" mr={4}>
          Register
        </Button>
        </Link>
        <IconButton
          aria-label="Toggle navigation"
          display={{ base: "flex", md: "none" }}
        />
      </Flex>
    </>
  );
};
export default Header;
