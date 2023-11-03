
import React from 'react'
import { useGetFilms } from '../../hooks/useFilms'
import { Box, Heading, Text } from '@chakra-ui/react'

export const Films = ({ url }) => {
    const { isLoading, data } = useGetFilms(url)
    return (
        <Box borderRadius="1rem" sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} padding=".5rem" m=".5rem" >
            {
                isLoading ? <Text>Loading...</Text> :
                    <React.Fragment>
                        <Heading className='sub-heading' fontFamily="Poppins" as='h5' size='sm' >{data?.title}</Heading>
                        <Text fontSize="sm" mt={4}>
                            <strong>Director:</strong> {data?.director}
                        </Text>
                        <Text fontSize="sm">
                            <strong>Producer:</strong> {data?.producer}
                        </Text>
                        <Text fontSize="sm">
                            <strong>Realese Date:</strong> {data?.release_date}
                        </Text>

                    </React.Fragment>
            }

        </Box>
    )
}
