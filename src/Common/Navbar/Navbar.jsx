import { ChevronDownIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text, useMediaQuery } from '@chakra-ui/react'
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
            position="fixed"
            top="0"
            zIndex="1"
        >
            <Box>
                <Text fontSize={{ base: 'lg', sm: '2xl', lg: '3xl' }} color="white" fontFamily="Roboto Condensed" >Star Wars</Text>
            </Box>
            {/* <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Actions
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu> */}
            <Flex gap={2}>
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