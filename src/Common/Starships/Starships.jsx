import React from 'react'
import { Box, Divider, Heading, Text } from '@chakra-ui/react'
import StarshipsDetails from './StarshipsDetails'

const Starships = ({ data }) => {
    return (
        <Box padding="1rem" >
            <Heading textAlign="center" as='h3' size='lg' fontFamily="Roboto Condensed">StarShips</Heading>
            <Divider orientation='horizontal' />
            {
                data.length > 0 ?
                    data.map((url, i) => {
                        return (
                            <StarshipsDetails url={url} key={i} />
                        )
                    })
                    : <Text>No StarShips Found</Text>
            }
        </Box>
    )
}

export default Starships