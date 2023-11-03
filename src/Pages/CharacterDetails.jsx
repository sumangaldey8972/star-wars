import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCharacterById } from '../hooks/useCharacterList'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { Box, CircularProgress, Flex, Heading, } from '@chakra-ui/react'
import { useGetHome } from '../hooks/useGetHome'
import PersonalDetails from '../Common/PersonalDetails/PersonalDetails'
import MoviesDetails from '../Common/MoviesDetails/MoviesDetails'
import Species from '../Common/Species/Species'
import Vehicles from '../Common/Vehicles/Vehicles'
import Starships from '../Common/Starships/Starships'
import image from "../Assets/jedi.jpg"
const CharacterDetails = () => {
    const params = useParams()
    const { isLoading, data } = useCharacterById(params.id)
    const { data: homeWorld } = useGetHome(data?.homeworld)


    return (
        <React.Fragment>
            {
                isLoading ? <Box display="flex" alignItems="center" maxHeight="90vh" justifyContent="center" > <CircularProgress isIndeterminate margin="auto" color="black" /> </Box> :
                    <Box height="90vh" sx={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                        <Box pl="1rem" >
                            <Link to="/dashboard" >
                                <ArrowBackIcon fontSize="2rem" />
                            </Link>
                        </Box>
                        <Heading textAlign="center" fontFamily="Poppins" >{data?.name}</Heading>
                        <Flex>
                            <PersonalDetails data={data ? data : {}} homeWorld={homeWorld?.name} />
                            <MoviesDetails data={data ? data : {}} />
                            <Species data={data ? data.species : {}} />
                            <Vehicles data={data ? data.vehicles : {}} />
                            <Starships data={data ? data.starships : {}} />
                        </Flex>
                    </Box>
            }

        </React.Fragment>
    )
}

export default CharacterDetails