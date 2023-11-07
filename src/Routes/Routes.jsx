import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { Box, CircularProgress } from "@chakra-ui/react";
import { systemChildren } from "./systemChildren";
import DashboardLayout from "../Common/Layout/DashboardLayout";
import LoginPage from "../Pages/Login";

const Routes = () => {
    const routes = useRoutes([
        {
            path: "/login", element: <LoginPage />
        },
        {
            path: "/", element: (
                <DashboardLayout />
            ),
            children: systemChildren
        },
    ]);

    return (
        <Suspense
            fallback={
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100vh",
                    }}
                >
                    <CircularProgress
                        sx={{ fontSize: "5rem", height: "10rem", width: "10rem" }}
                    />
                </Box>
            }
        >
            {routes}
        </Suspense>
    );
};

export default Routes;