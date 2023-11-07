import React from "react";
import * as Yup from 'yup'
import "../styles/loginpage.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sign_in_action } from "../ReduxStore/Auth/auth.action";
import { useSignInUser } from "../hooks/useAuth";
import { Form, Formik, useField } from "formik";
import { Box, Button, Container, Flex, FormControl, FormHelperText, FormLabel, IconButton, Input, Stack, Text, VStack, useToast } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import image from "../Assets/backgroundlogin.jpg"

const LoginPage = () => {
    const { logged_in_user_details } = useSelector((store) => store.auth)
    console.log(logged_in_user_details)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const toast = useToast()

    const [showPassword, setShowPassword] = React.useState(true)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const initialValue = {
        "email": "",
        "password": "",
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid Email').required('Email address is required'),
        password: Yup.string().required("Password required")
    })

    const { mutate: signInUser, isLoading } = useSignInUser()

    const handleUserSignIn = (creds) => {
        signInUser(creds, {
            onSuccess: (response) => {
                dispatch(sign_in_action(response));
                if (response?.status) {
                    toast({
                        title: response.message,
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                    })
                    navigate('/dashboard')
                } else {
                    toast({
                        title: response.message,
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    })
                }
            }
        })
    }

    const CustomInput = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (<FormControl>
            <FormLabel sx={{ color: 'white', fontFamily: 'Poppins' }} >
                {label} &nbsp;<span style={{ color: "red" }}>*</span>
            </FormLabel>
            <Input {...field} {...props} autoComplete="off" sx={{ color: 'white', fontFamily: 'Poppins' }} />
            {meta.touched && meta.error && (
                <FormHelperText sx={{ color: "red", fontSize: '.6rem' }}>
                    {meta.error}
                </FormHelperText>
            )}
        </FormControl>)
    }

    return (
        <Box sx={{ minHeight: '100vh', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
            <Container
                width="80%"
                height="40rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                borderRadius=".9rem"
                m="auto"
            >
                <Formik initialValues={initialValue} validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        handleUserSignIn(values);
                        setSubmitting(false)
                    }}
                >{({ errors, values, setFieldValue }) => {
                    return (
                        <Form >
                            <Stack spacing={1} width="100%" lineHeight="3rem" >
                                <CustomInput
                                    type="text"
                                    label="Email address"
                                    placeholder="Enter Your Email"
                                    name="email"
                                />

                                <Flex alignItems="center" gap=".4rem" >
                                    <CustomInput
                                        type={showPassword ? 'password' : 'text'}
                                        label="Password"
                                        placeholder="Enter Your Password"
                                        name="password"
                                    />
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        size="md"
                                        mt="3.5rem"
                                    >
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </IconButton>
                                </Flex>

                                <Button loading={isLoading.toString()} type="submit" >
                                    Sign in
                                </Button>
                            </Stack>
                        </Form>
                    )
                }}
                </Formik>
            </Container>
        </Box>
    );
};

export default LoginPage;