import React from 'react'
import VehiclesDetails from './VehiclesDetails'
import { Box, Divider, Heading, Text } from '@chakra-ui/react'

const Vehicles = ({ data }) => {
    return (
        <Box padding="1rem" width={{ base: '100%', sm: '20%', lg: '20%' }}  >
            <Heading textAlign="center" as='h3' size='lg' fontFamily="Roboto Condensed">Vehicles</Heading>
            <Divider orientation='horizontal' />
            <Box mt={4} maxHeight="40rem" height="31rem" overflow="auto">
                {
                    data.length > 0 ?
                        data.map((url, i) => {
                            return (
                                <VehiclesDetails url={url} key={i} />
                            )
                        })
                        : <Text textAlign="center" className='not-found'>No Vehicles <br /> Found!</Text>
                }
            </Box>
        </Box>
    )
}

export default Vehicles