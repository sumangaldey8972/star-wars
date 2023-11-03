import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useGetVehicles } from '../../hooks/useGetVehicles'

const VehiclesDetails = ({ url }) => {
    console.log(url)
    const { isLoading, data } = useGetVehicles(url)
    return (
        <Box borderRadius="1rem" sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} padding=".5rem" m=".5rem" >
            {
                isLoading ? <Text>Loading...</Text> :
                    <React.Fragment>
                        <Heading textAlign="center" fontFamily="Poppins" as='h5' size='sm' >{data?.name}</Heading>
                        <Text fontSize="sm" mt={4}>
                            <strong>Model:</strong> {data?.model}
                        </Text>
                        <Text fontSize="sm">
                            <strong>Manufacturer:</strong> {data?.manufacturer}
                        </Text>
                        <Text fontSize="sm">
                            <strong>Vehicle Class:</strong> {data?.vehicle_class}
                        </Text>
                        <Text fontSize="sm">
                            <strong>Crew:</strong> {data?.crew} <strong>Passanger:</strong> {data?.passengers}
                        </Text>
                    </React.Fragment>
            }

        </Box>
    )
}

export default VehiclesDetails