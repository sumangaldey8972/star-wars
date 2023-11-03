import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useGetVehicles } from '../../hooks/useGetVehicles'

const StarshipsDetails = ({ url }) => {
    const { isLoading, data } = useGetVehicles(url)
    return (
        <Box borderRadius="1rem" sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} padding=".5rem" m=".5rem" >
            {
                isLoading ? <Text>Loading...</Text> :
                    <React.Fragment>
                        <Heading className='sub-heading' textAlign="center" fontFamily="Poppins" as='h5' size='sm' >{data?.name}</Heading>
                        <Text fontSize="sm" mt={4}>
                            <strong>Model:</strong> {data?.model}
                        </Text>
                        <Text fontSize="sm">
                            <strong>Manufacturer:</strong> {data?.manufacturer}
                        </Text>
                        <Text fontSize="sm">
                            <strong>Starship Class:</strong> {data?.starship_class}
                        </Text>
                        <Text fontSize="sm">
                            <strong>Crew:</strong> {data?.crew} <strong>Passanger:</strong> {data?.passengers}
                        </Text>
                        <Text fontSize="sm">
                            <strong>Max Speed:</strong> {data?.max_atmosphering_speed}
                        </Text>
                    </React.Fragment>
            }

        </Box>
    )
}

export default StarshipsDetails