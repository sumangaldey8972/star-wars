import React from "react";
import {
    Box,
    Flex,
    Text,
    Heading,
    Badge,
    Button,
} from "@chakra-ui/react";

import image from "../../Assets/milky-way.jpg"
import { Link } from "react-router-dom";
import { ExternalLinkIcon } from "@chakra-ui/icons";


function Card({ props, id }) {
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
            <Flex justifyContent="end" mt={1} >
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
