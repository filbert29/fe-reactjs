import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/userSlice";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

import '../assets/styles/profile.css'
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [userData, setUserData] = useState([]);

    const user = useSelector((state) => state.user.user)

    const goHome = useNavigate()

    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const temp = response.data.data;
                const foundUser = temp.find(temp => temp.email === user.email)
                setUserData(foundUser);
            })
            .catch(error => {
                console.error(error);
            });
    });

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <>
            <Box
                sx={{
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    textAlign: 'center',
                    backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>

                <Typography variant="h4">Hover the Card</Typography>
                <Box className="flip-card">
                    <Box className="flip-card-inner">
                        <Box className="flip-card-front">
                            <img src={userData.avatar} alt="Avatar" style={{ width: "300px", height: "300px" }} />
                        </Box>
                        <Box className="flip-card-back"
                            sx={{
                                padding: "20px"
                            }}>
                            <Typography variant="h4" mt={1}>{userData.first_name} {userData.last_name}</Typography>
                            <Typography mt={1} mb={3}>Token: {user.token}</Typography>
                            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                                <Button variant="contained" color="success" onClick={() => goHome('/')}>
                                    Go HOME
                                </Button>
                                <Button variant="contained" color="error" onClick={() => handleLogout()}>
                                    Log Out
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box >
        </>
    );
}

export default Profile;