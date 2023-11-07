import React from "react";
import {
    Box,
    Flex,
    Text,
    Heading,
    Badge,
    Button,
    useToast,
} from "@chakra-ui/react";

import image from "../../Assets/milky-way.jpg"
import { Link } from "react-router-dom";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useFavouriteCharacter } from "../../hooks/useFavouriteCharacter";
import { useSelector } from "react-redux";


function Card({ props, id }) {
    const toast = useToast()
    const { logged_in_user_details } = useSelector((store) => store.auth)

    const { mutate: createFavCharacter, isLoading } = useFavouriteCharacter()

    const handleCreateFavChracter = (props) => {
        let data = { name: props.name, gender: props.gender, birth_year: props.birth_year, token: logged_in_user_details }
        createFavCharacter(data, {
            onSuccess: (response) => {
                if (response.status) {
                    toast({
                        title: response.message,
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                    })
                }
            }
        })
    }

    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            m={1}
            boxShadow="lg"
            maxW="sm"
            // minW="250px"
            fontFamily="Poppins"
            bg="black"
            color="white"
            sx={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <Flex justifyContent="center" gap="2" alignItems="center">
                <Box borderRadius="50%" display="flex" alignItems="center" justifyContent="center" backgroundColor="grey" height="2.8rem" width="2.8rem" >
                    <Text textAlign="center" fontSize="3xl" >
                        {props.name.split('')[0]}
                    </Text>
                </Box>
                <Heading as="h3" size="md" textAlign="center" fontFamily="Poppins">
                    {props.name}
                </Heading>
            </Flex>
            <Flex
                justifyContent="space-between"
                mt={2}
                gap={{ sm: '3' }}
            >
                <Badge variant="solid" colorScheme="teal">
                    Gender - {props.gender}
                </Badge>
                <Badge variant="solid" colorScheme="purple">
                    Birth Year - {props.birth_year}
                </Badge>
            </Flex>
            <Text fontSize="sm" mt={4}>
                <strong>Height:</strong> {props.height} cm
            </Text>
            <Text fontSize="sm">
                <strong>Mass:</strong> {props.mass} kg
            </Text>
            <Text fontSize="sm">
                <strong>Hair Color:</strong> {props.hair_color}
            </Text>
            <Text fontSize="sm">
                <strong>Skin Color:</strong> {props.skin_color}
            </Text>
            <Text fontSize="sm">
                <strong>Eye Color:</strong> {props.eye_color}
            </Text>
            <Flex justifyContent="space-between" mt={1} >
                <Button isLoading={isLoading} onClick={() => handleCreateFavChracter(props)} size="xs"><span>Add to Favourites</span>
                    <svg
                        width='1em'
                        height='1em'
                        viewBox='0 0 16 16'
                        className='bi bi-heart-fill'
                        fill='red'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            fill-rule='evenodd'
                            d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
                        />
                    </svg></Button>
                <Button p=".2rem" size="xs" float="right" title="Click to see more details" fontSize="sm" cursor="pointer" >
                    <Link to={`/details/${id + 1}`} >
                        <strong>View Details</strong> <ExternalLinkIcon />
                    </Link>
                </Button>
            </Flex>
        </Box>
    );
}

export default Card;
