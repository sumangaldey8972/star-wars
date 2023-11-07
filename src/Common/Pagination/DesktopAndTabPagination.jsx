import { Button, Flex } from '@chakra-ui/react'
import React from 'react'

const DesktopAndTabPagination = ({ totalPages, currentPage, handlePageChange }) => {
    return (
        <Flex justify="center" mt={4} mb={2} display={{ base: "none", sm: "flex", lg: "flex" }} >
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
    )
}

export default DesktopAndTabPagination