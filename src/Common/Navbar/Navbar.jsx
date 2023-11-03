import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
    return (
        <Flex as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            p={3}
            bg="black"
        >
            <Box>
                <Text fontSize='2xl' color="white" fontFamily="Roboto Condensed" >Star Wars</Text>
            </Box>
            <Flex gap={2} >
                <Box>
                    <Text color="white" fontFamily="Roboto Condensed">Welcome!</Text>
                    <Text color="white" fontFamily="Roboto Condensed">Jedi</Text>
                </Box>
                <Box>
                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' sx={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} />
                </Box>
            </Flex>
        </Flex>
    )
}

export default Navbar