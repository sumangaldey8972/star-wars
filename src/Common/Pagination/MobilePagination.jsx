import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const MobilePagination = ({ totalPages, currentPage, handlePageChange }) => {
    return (
        <Flex alignItems="center" justifyContent="space-between" display={{ base: "flex", sm: "none", lg: "none" }}>
            <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} >Prev</Button>
            <Text>Page {currentPage} of {totalPages} </Text>
            <Button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} >Next</Button>
        </Flex>
    )
}

export default MobilePagination