
import React from 'react'
import { useGetFilms } from '../../hooks/useFilms'
import { Badge, Box, Flex, Heading, Text } from '@chakra-ui/react'

export const Films = ({ url }) => {
    const { isLoading, data } = useGetFilms(url)
    return (
        <Box borderRadius="1rem" sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} padding=".5rem" m=".5rem" >
            {
                isLoading ? <Text>Loading...</Text> :
                    <React.Fragment>
                        <Heading textAlign="center" fontFamily="Poppins" as='h5' size='sm' >{data?.title}</Heading>
                        <Flex justifyContent="space-between" gap={2} mt={2}>
                            <Badge variant="solid" colorScheme="teal">
                                Director - {data?.director}
                            </Badge>
                            <Badge variant="solid" colorScheme="purple">
                                Released - {data?.release_date}
                            </Badge>
                        </Flex>
                    </React.Fragment>
            }

        </Box>
    )
}
