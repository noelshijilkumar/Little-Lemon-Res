import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  VStack,
  useToast,
  Text,
  Link,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FullScreenSection from "../components/layout/FullScreenSection";

// Validation Schema with Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const toast = useToast();

  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Simulate login action
      toast({
        title: "Login successful.",
        description: `Welcome, ${values.email}!`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
  });

  return (
    <FullScreenSection
      backgroundColor="highlight.100"
      title="Login to Your Account"
      isDarkBackground={false}
      titlePosition="center"
      titleColor='primary.100'
    >
      {/* Login Form Container */}
      <Box
        bg="white"
        boxShadow="md"
        borderRadius="md"
        p={8}
        maxWidth="400px"
        mx='auto'
        w="100%"
      >
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} alignItems="stretch">
            {/* Email Field */}
            <FormControl id="email"  color='highlight.200'  isInvalid={formik.touched.email && !!formik.errors.email} isRequired>
              <FormLabel >Email Address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-invalid={formik.touched.email && !!formik.errors.email}
                aria-describedby="email-error"
              />
              <FormErrorMessage id="email-error">{formik.errors.email}</FormErrorMessage>
            </FormControl>

            {/* Password Field */}
            <FormControl color='highlight.200' id="password" isRequired isInvalid={formik.touched.password && !!formik.errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-invalid={formik.touched.password && !!formik.errors.password}
                aria-describedby="password-error"
              />
              <FormErrorMessage id="password-error">{formik.errors.password}</FormErrorMessage>
            </FormControl>
            {/* forgot */}
            <Text align="right">
              <Link color="secondary.100" fontSize="sm" href="/forgot-password">
                Forgot Password?
              </Link>
            </Text>
            {/* Login Button */}
            <Button
              bg="primary.200"
              color="primary.100"
              _hover={{ bg: "secondary.100" }}
              _active={{ bg: "secondary.100" }}
              type="submit"
              size="lg"
              w="100%"
              isDisabled={formik.isSubmitting}
              isLoading={formik.isSubmitting}
            >
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </FullScreenSection>
  );
};

export default Login;
