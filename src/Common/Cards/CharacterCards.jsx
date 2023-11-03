import React from "react";
import {
    Box,
    Flex,
    Text,
    Heading,
    Badge
} from "@chakra-ui/react";

import image from "../../Assets/milky-way.jpg"
import { Link } from "react-router-dom";


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
            minW="250px"
            fontFamily="Poppins"
            bg="black"
            color="white"
            sx={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <Heading as="h3" size="md" fontFamily="Poppins">
                {props.name}
            </Heading>
            <Flex justifyContent="space-between" mt={2}>
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
            <Text float="right" fontSize="sm" cursor="pointer" >
                <Link to={`/details/${id + 1}`} >
                    <strong>View Details</strong>
                </Link>
            </Text>

        </Box>
    );
}

export default Card;
