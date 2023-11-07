import { Box, Divider, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const PersonalDetails = ({ data, homeWorld }) => {
    return (
        <Box padding="1rem" width={{ base: '100%', sm: '20%', lg: '20%' }} >
            <Heading textAlign="center" as='h3' size='lg' fontFamily="Roboto Condensed">Personal Details</Heading>
            <Divider orientation='horizontal' />
            <Text fontSize="sm" mt={4}>
                <strong>Height:</strong> {data?.height} cm
            </Text>
            <Text fontSize="sm">
                <strong>Mass:</strong> {data?.mass} kg
            </Text>
            <Text fontSize="sm">
                <strong>Hair Color:</strong> {data?.hair_color}
            </Text>
            <Text fontSize="sm">
                <strong>Skin Color:</strong> {data?.skin_color}
            </Text>
            <Text fontSize="sm">
                <strong>Eye Color:</strong> {data?.eye_color}
            </Text>
            <Text fontSize="sm">
                <strong>Home World:</strong> {homeWorld}
            </Text>
        </Box>
    )
}

export default PersonalDetails