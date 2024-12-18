import { Box, Flex, IconButton, Stack, useDisclosure, Image, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../assets/Logo.svg";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="highlight.100" px={{ base:'2', md:'12' }} >
      <Flex h={16} alignItems="center" justifyContent="space-between" gap={{ base:'5', md:'0' }}>
        {/* Mobile Menu (Hamburger Icon) */}
        <IconButton
          size="md"
          icon={isOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        {/* Left: Logo */}
        <Box fontWeight="bold" fontSize="lg">
          <Image loading="lazy" src={Logo} alt="Little Lemon logo" boxSize="140px" />
        </Box>

        {/* Middle: Navigation Links */}
        <Flex alignItems="center" display={{ base: 'none', md: 'flex' }}>
          <Stack direction="row" spacing={4}>
            <Link
                  px={2} py={1} rounded="md"
                  _hover={{
                      textDecoration: 'none',
                      bg: 'secondary.100',
                  }}
                  href='/'
                  fontFamily='heading'
                  aria-current={window.location.pathname === "/" ? "page" : undefined}
              >
                Home
            </Link>
            <Link
                  px={2} py={1} rounded="md"
                  _hover={{
                      textDecoration: 'none',
                      bg: 'secondary.100',
                  }}
                  href='/about'
                  fontFamily='heading'
                  aria-current={window.location.pathname === "/about" ? "page" : undefined}
              >
                About
            </Link>
            <Link
                  px={2} py={1} rounded="md"
                  _hover={{
                      textDecoration: 'none',
                      bg: 'secondary.100',
                  }}
                  href='/menu'
                  fontFamily='heading'
                  aria-current={window.location.pathname === "/menu" ? "page" : undefined}
              >
                Menu
            </Link>
            <Link
                  px={2} py={1} rounded="md"
                  _hover={{
                      textDecoration: 'none',
                      bg: 'secondary.100',
                  }}
                  href='/reservation'
                  fontFamily='heading'
                  aria-current={window.location.pathname === "/reservation" ? "page" : undefined}
              >
                Reservation
            </Link>
            <Link
                  px={2} py={1} rounded="md"
                  _hover={{
                      textDecoration: 'none',
                      bg: 'secondary.100',
                  }}
                  href='/order-online'
                  fontFamily='heading'
                  aria-current={window.location.pathname === "/order-online" ? "page" : undefined}
              >
                Order Online
            </Link>
            <Link
                  px={2} py={1} rounded="md"
                  _hover={{
                      textDecoration: 'none',
                      bg: 'secondary.100',
                  }}
                  href='/login'
                  fontFamily='heading'
                  aria-current={window.location.pathname === "/login" ? "page" : undefined}
              >
                Login
            </Link>
          </Stack>
        </Flex>

        {/* Right: Cart Icon */}
        <Box
          _hover={{
            cursor: 'pointer',
            color: 'secondary.100',
            transform: 'scale(1.05)',
          }}
          aria-label="Shopping Cart"
        >
          <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
        </Box>
      </Flex>

    {/* Mobile Menu Links */}
    {isOpen && (
      <Box pb={4} display={{ md: 'none' }}>
        <Stack as="nav" spacing={4}>
          <Link
                px={2} py={1} rounded="md"
                _hover={{
                    textDecoration: 'none',
                    bg: 'secondary.100',
                }}
                href='/'
                fontFamily='heading'
                aria-current={window.location.pathname === "/" ? "page" : undefined}
            >
              Home
          </Link>
          <Link
                px={2} py={1} rounded="md"
                _hover={{
                    textDecoration: 'none',
                    bg: 'secondary.100',
                }}
                href='/about'
                fontFamily='heading'
                aria-current={window.location.pathname === "/about" ? "page" : undefined}
            >
              About
          </Link>
          <Link
                px={2} py={1} rounded="md"
                _hover={{
                    textDecoration: 'none',
                    bg: 'secondary.100',
                }}
                href='/menu'
                fontFamily='heading'
                aria-current={window.location.pathname === "/menu" ? "page" : undefined}
            >
              Menu
          </Link>
          <Link
                px={2} py={1} rounded="md"
                _hover={{
                    textDecoration: 'none',
                    bg: 'secondary.100',
                }}
                href='/reservation'
                fontFamily='heading'
                aria-current={window.location.pathname === "/reservation" ? "page" : undefined}
            >
              Reservation
          </Link>
          <Link
                px={2} py={1} rounded="md"
                _hover={{
                    textDecoration: 'none',
                    bg: 'secondary.100',
                }}
                href='/order-online'
                fontFamily='heading'
                aria-current={window.location.pathname === "/order-online" ? "page" : undefined}
            >
              Order Online
          </Link>
          <Link
                px={2} py={1} rounded="md"
                _hover={{
                    textDecoration: 'none',
                    bg: 'secondary.100',
                }}
                href='/login'
                aria-current={window.location.pathname === "/login" ? "page" : undefined}
                fontFamily='heading'
            >
              Login
          </Link>
        </Stack>
      </Box>
    )}
    </Box>
  );
};

export default Header;
