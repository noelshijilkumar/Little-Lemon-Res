import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Input, Button, VStack, FormLabel } from "@chakra-ui/react";

// Validation schema for StepBasicInfo
const validationSchema = Yup.object({
    name: Yup.string().required("Please enter a name for the reservesion"),
    phone: Yup.string()
                .matches(/^[0-9]{10}$/, "Phone must be 10 digits.")
                .required("Please enter a phone for any change that may occur."),
    email: Yup.string()
                .email("Invalid email format")
                .required("Please enter a email for confirmation."),
});

const StepBasicInfo = ({ basicInfo, setBasicInfo, onNext }) => {
    const formik = useFormik({
        initialValues: basicInfo,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setBasicInfo(values); // Update parent state
            onNext(); // Move to next step
        },
    });

    return (
        <Box p={4}>
            <VStack spacing={4} as="form" onSubmit={formik.handleSubmit}>
                <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel htmlFor="name">Name*</FormLabel>
                    <Input
                        id="name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter your name"
                        focusBorderColor="secondary.100"
                        aria-invalid={formik.touched.name && !!formik.errors.name}
                        aria-describedby="name-error"
                    />
                    {formik.touched.name && formik.errors.name && (
                        <Box id="name-error" color="red.500" fontSize="sm">{formik.errors.name}</Box>
                    )}
                </Box>
                <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel htmlFor="phone">Phone*</FormLabel>
                    <Input
                        id='phone'
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter your phone"
                        focusBorderColor="secondary.100"
                        aria-invalid={formik.touched.phone && !!formik.errors.phone}
                        aria-describedby="phone-error"
                    />
                    {formik.touched.phone && formik.errors.phone && (
                        <Box id="phone-error"  color="red.500" fontSize="sm">{formik.errors.phone}</Box>
                    )}
                </Box>
                <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel htmlFor="email">Email*</FormLabel>
                    <Input
                        id='email'
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter your email"
                        focusBorderColor="secondary.100"
                        aria-invalid={formik.touched.email && !!formik.errors.email}
                        aria-describedby="email-error"
                    />
                    {formik.touched.email && formik.errors.email && (
                        <Box  id="email-error"  color="red.500" fontSize="sm">{formik.errors.email}</Box>
                    )}
                </Box>
                <Button type="submit" bg="primary.200" color="primary.100" size="lg" _hover={{ bg: "secondary.100" }} isLoading={formik.isSubmitting}>
                    Next
                </Button>
            </VStack>
        </Box>
    );
};

export default StepBasicInfo;
