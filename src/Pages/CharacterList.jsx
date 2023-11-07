import { Box, Button, CircularProgress, Flex, SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useCharacterList } from '../hooks/useCharacterList'
import Card from '../Common/Cards/CharacterCards'
import DesktopAndTabPagination from '../Common/Pagination/DesktopAndTabPagination'
import MobilePagination from '../Common/Pagination/MobilePagination'

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
                isLoading ? <Box mt="4.5rem" display="flex" alignItems="center" maxHeight="90vh" justifyContent="center" > <CircularProgress isIndeterminate margin="auto" color="black" /> </Box> :
                    <SimpleGrid mt="4rem" columns={[1, 3, 4]} gap={{ sm: "3", lg: "3" }} alignItems="center" justifyContent="center" p={3} >
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
            {isLoading ? "" : <DesktopAndTabPagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />}
            {isLoading ? "" : <MobilePagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />}
        </>
    )
}

export default CharacterList