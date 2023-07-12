import { Box, Container, Grid, Typography } from "@mui/material";
import AlbaLogo from '../assets/image/alba-logo.png'

const websites =['About', 'Service', 'Portofolio', 'Blog', 'Career']

const Footer = () => {
    return (
        <>
            <Container>
                <Box sx={{
                    padding: "50px 0px",
                    borderTop: "2px solid #C4C4C4",
                    borderBottom: "2px solid #C4C4C4",
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <img src={AlbaLogo} alt="Alba Logo" />
                            <Typography fontSize={'13px'} mt={3}>Albatech acts as a corporate partner to help digitize their business to accelerate trends in remote work</Typography>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={2}>
                            <Box sx={{
                                display: "grid",
                                gap: 4
                            }}>
                                <Typography component={'a'} sx={{ fontWeight: "600", fontSize: "18px" }}>Website</Typography>
                                {websites.map((website) => (
                                    <Typography key={website} component={'a'} sx={{ cursor: "pointer" }}>{website}</Typography>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={3}>
                            <Box sx={{
                                display: "grid",
                                gap: 4
                            }}>
                                <Typography component={'a'} sx={{ fontWeight: "600", fontSize: "18px" }}>Contact</Typography>
                                <Typography component={'a'} sx={{ cursor: "pointer" }}>The Prominence Blok 38D No.25 Jl. Jalur Sutera Barat, Alam Sutera, Kota Tangerang, Banten, 15143</Typography>
                                <Typography component={'a'} sx={{ cursor: "pointer" }}> <span style={{fontWeight: "600"}}>P :</span> +62 81 1889 3383</Typography>
                                <Typography component={'a'} sx={{ cursor: "pointer" }}><span style={{fontWeight: "600"}}>E :</span> info@albatech.id</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={3} display={'flex'}>
                    <Typography color={"#C4C4C4"}>©PT. Albe Digital Teknologi 2021 | All Rights Reserved</Typography>
                    <Typography ml={'auto'} color={"#C4C4C4"}>Privacy policy | Terms of service</Typography>
                </Box>
            </Container>
        </>
    );
}

export default Footer;