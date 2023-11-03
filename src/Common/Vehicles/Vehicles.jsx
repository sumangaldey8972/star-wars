import React from 'react'
import VehiclesDetails from './VehiclesDetails'
import { Box, Divider, Heading, Text } from '@chakra-ui/react'

const Vehicles = ({ data }) => {
    return (
        <Box padding="1rem" >
            <Heading textAlign="center" as='h3' size='lg' fontFamily="Roboto Condensed">Vehicles</Heading>
            <Divider orientation='horizontal' />
            {
                data.length > 0 ?
                    data.map((url, i) => {
                        return (
                            <VehiclesDetails url={url} key={i} />
                        )
                    })
                    : <Text>No Vehicles Found</Text>
            }
        </Box>
    )
}

export default Vehicles