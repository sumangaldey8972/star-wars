import { Box, Divider, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import SpeciesDetails from './SpeciesDetails'

const Species = ({ data }) => {
    return (
        <Box padding="1rem" width="20%"  >
            <Heading textAlign="center" as='h3' size='lg' fontFamily="Roboto Condensed">Species</Heading>
            <Divider orientation='horizontal' />
            <Box mt={4} maxHeight="40rem" height="31rem" overflow="auto" >
                {
                    data.length > 0 ?
                        data.map((url, i) => {
                            return (
                                <SpeciesDetails url={url} key={i} />
                            )
                        })
                        : <Text textAlign="center" className='not-found' >No Species <br /> Found!</Text>
                }
            </Box>
        </Box>
    )
}

export default Species