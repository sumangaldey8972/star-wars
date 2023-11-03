import { Box, Divider, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import SpeciesDetails from './SpeciesDetails'

const Species = ({ data }) => {
    return (
        <Box padding="1rem" >
            <Heading textAlign="center" as='h3' size='lg' fontFamily="Roboto Condensed">Species</Heading>
            <Divider orientation='horizontal' />
            {
                data.length > 0 ?
                    data.map((url, i) => {
                        return (
                            <SpeciesDetails url={url} key={i} />
                        )
                    })
                    : <Text>No Species Found</Text>
            }
        </Box>
    )
}

export default Species