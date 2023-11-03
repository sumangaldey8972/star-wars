import { Box, Button, CircularProgress, Flex, SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useCharacterList } from '../hooks/useCharacterList'
import Card from '../Common/Cards/CharacterCards'

const CharacterList = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading } = useCharacterList(currentPage);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(data?.count / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            {
                isLoading ? <Box display="flex" alignItems="center" maxHeight="90vh" justifyContent="center" > <CircularProgress isIndeterminate margin="auto" color="black" /> </Box> :
                    <SimpleGrid columns={[1, 3, 4]} gap={4} alignItems="center" justifyContent="center" p={3} >
                        {data.results.map((el, i) => {
                            return (
                                <Box key={i} borderColor='#32e3ff'
                                    boxShadow='0 0 10px #32e3ff' p={0} borderRadius="lg" >
                                    <Card props={el} id={i} />
                                </Box>
                            )
                        })}
                    </SimpleGrid>
            }

            <Flex justify="center" mt={4} mb={2} >
                {Array.from({ length: totalPages }).map((_, i) => (
                    <Button
                        key={i}
                        cursor="pointer"
                        mx={2}
                        onClick={() => handlePageChange(i + 1)}
                        color={currentPage === i + 1 ? 'white' : 'black'}
                        bg={currentPage === i + 1 ? 'black' : 'white'}
                        borderColor='#32e3ff'
                        boxShadow='0 0 10px #32e3ff'
                        _hover={{ color: 'black', bg: 'white' }}
                    >
                        {i + 1}
                    </Button>
                ))}
            </Flex>
        </>
    )
}

export default CharacterList