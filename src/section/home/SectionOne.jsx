import { Box, Container, Typography } from "@mui/material";
import BgSec1 from '../../assets/image/bg_sec1.png'
import WhiteBox from '../../assets/image/white_box_sec1.png'
import YellowLine from '../../assets/image/yellow_line.png'

const SectionOne = () => {

    return (
        <>
            <Box sx={{ height: { md: "85vh", xs: "70vh" }, position: "relative", display: "flex", alignItems: "center", paddingLeft: { xs: "40px", md: "0px" } }}>
                <Container>
                    <Box>
                        <img style={{ position: "absolute", zIndex: "-1" }} src={WhiteBox} alt="" />
                        <Typography ml={1} mb={3} variant="h1" sx={{ fontSize: "64px", fontWeight: "bold", textShadow: "0px 2px 4px rgba(0,0,0,0.5)" }}>Build or Scale up</Typography>
                    </Box>
                    <Typography mb={4} variant="h2">your development team</Typography>
                    <Box mb={6} sx={{ display: "flex", alignItems: "center", paddingLeft: "10px" }}>
                        <img src={YellowLine} alt="" />
                        <Typography ml={2} variant="p" sx={{ fontSize: "24px" }}>in weeks, not months</Typography>
                    </Box>
                    <Typography sx={{
                        backgroundColor: "#FFCE07",
                        padding: "20px 60px",
                        borderRadius: "40px",
                        fontWeight: "600",
                        cursor: "pointer",
                        ":hover": { backgroundColor: "#FAC800" }
                    }} component={'a'}>Book now</Typography>
                </Container>
                <img className="bg-sec1" src={BgSec1} alt="" />
            </Box>
        </>
    );
}

export default SectionOne;