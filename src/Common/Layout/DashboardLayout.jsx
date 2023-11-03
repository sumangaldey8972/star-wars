import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Box>
                <Outlet />
            </Box>
        </React.Fragment>
    )
}

export default DashboardLayout