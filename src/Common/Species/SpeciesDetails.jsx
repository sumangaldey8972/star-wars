import React from 'react'
import { useGetSpecies } from '../../hooks/useGetSpecies'
import { Box, Heading, Text } from '@chakra-ui/react'

const SpeciesDetails = ({ url }) => {
    const { isLoading, data: speciesData } = useGetSpecies(url)
    return (
        <Box borderRadius="1rem" sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} padding=".5rem" m=".5rem" >
            {
                isLoading ? <Text>Loading...</Text> :
                    <React.Fragment>
                        <Heading className='sub-heading' textAlign="center" fontFamily="Poppins" as='h5' size='sm' >{speciesData?.name}</Heading>
                        <Text fontSize="sm" mt={4}>
                            <strong>classification:</strong> {speciesData?.classification}
                        </Text>
                        <Text fontSize="sm">
                            <strong>designation:</strong> {speciesData?.designation}
                        </Text>
                        <Text fontSize="sm">
                            <strong>Average Lifespan:</strong> {speciesData?.average_lifespan}
                        </Text>
                    </React.Fragment>
            }

        </Box>
    )
}

export default SpeciesDetails