import { Flex, Spacer, Heading, Button, IconButton, Box, Icon } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import { PiPopcornThin } from "react-icons/pi";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Obtener el usuario del estado global
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

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
        <Box justifyContent={'center'} alignContent={'center'} mx={3}>
        <Icon as={PiPopcornThin} w={8} h={8} color="pink.500" />

        </Box>
        <Heading size="md"> Movie Mate</Heading>
        <Spacer />

        <Link to={"/"}>
          <Button variant="link" mr={4}>
            Home
          </Button>
        </Link>
        <Link to={"/about"}>
          <Button variant="link" mr={4}>
            About
          </Button>
        </Link>
        {user ? (
          <>
            <Link to={"/dashboard"}>
              <Button variant="link" mr={4}>
                Upload
              </Button>
            </Link>
            <Button colorScheme="pink" variant="solid" onClick={onLogout}>
              Log Out
            </Button>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <Button variant="link" mr={4}>
                Login
              </Button>
            </Link>
            <Link to={"/register"}>
              <Button variant="link" mr={4}>
                Register
              </Button>
            </Link>
            <IconButton
              aria-label="Toggle navigation"
              display={{ base: "flex", md: "none" }}
            />
          </>
        )}
      </Flex>
    </>
  );
};
export default Header;
