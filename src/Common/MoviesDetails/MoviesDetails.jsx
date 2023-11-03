import { Box, Divider, Heading } from '@chakra-ui/react'
import React from 'react'
import { Films } from './Films'

const MoviesDetails = ({ data }) => {
    return (
        <Box padding="1rem" width="20%"  >
            <Heading textAlign="center" as='h3' size='lg' fontFamily="Roboto Condensed">Movies</Heading>
            <Divider orientation='horizontal' />
            <Box mt={4} maxHeight="40rem" height="31rem" overflow="auto">
                {data?.films?.map((el, i) => {
                    return (
                        <Films url={el} key={i} />
                    )
                })}
            </Box>
        </Box>
    )
}

export default MoviesDetails