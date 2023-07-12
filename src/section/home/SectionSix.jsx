import { Box, Typography } from "@mui/material";
import BgSection from "../../assets/image/bg_section6.png"
import ProfilePicture from "../../assets/image/ball_grey.png"

const SectionSix = () => {
    return (
        <>
            <Box
                sx={{
                    height: {lg: "100vh", md: "70vh", sm: "60vh", xs: "50vh"},
                    backgroundImage: `url(${BgSection})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                <Box sx={{textAlign: "center"}}>
                    <Typography color={"#C4C4C4"}>Portofolio</Typography>
                    <Typography variant="h4" fontWeight={"600"}>The software that we build <br /> takes our clients to the next level</Typography>
                </Box>
                <Box sx={{position: "relative", width: "100%", height: "100%"}}>
                    <Box sx={{ width: "370px", display: "grid", gap: 2, scale: {lg: "150%", md: "100%", sm: "80%", xs: "70%"}, position: "absolute", left: {lg: '18%', md: '12%', sm: '9%', xs: '3%'}, top: {lg: '25%', md: '18%', sm: '11%', xs: '4%'}}}>
                        <Typography variant="h5" sx={{fontWeight: "600", textShadow: "0px 2px 2px rgba(0,0,0,0.5)"}}>Amazing people</Typography>
                        <Typography>&quot;They are people whe are not only following the tasks, but can work as a team. Together.&quot;</Typography>
                        <Box sx={{display: "flex", alignItems: "center"}}>
                            <img src={ProfilePicture} alt="" />
                            <Box ml={3} sx={{display: "grid", gap: "5px"}}>
                                <Typography sx={{fontSize: '14px'}}>Matthijs Piëst</Typography>
                                <Typography sx={{fontSize: '12px', color: '#C4C4C4'}}>COO at WieBetaaltWat</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: "440px", display: "grid", gap: 2, scale: {lg: "100%", md: "80%", sm: "60%", xs: "50%"}, position: "absolute", right: {lg: '18%', md: '8%', sm: '4%', xs: '-40px'}, top: {lg: '17%', md: '12%', sm: '6%', xs: '0'}}}>
                        <Typography variant="h5" sx={{fontWeight: "600", textShadow: "0px 2px 2px rgba(0,0,0,0.5)"}}>Amazing people</Typography>
                        <Typography>&quot;They are people whe are not only following the tasks, but can work as a team. Together.&quot;</Typography>
                        <Box sx={{display: "flex"}}>
                            <Box sx={{display: "grid", gap: "5px"}}>
                                <Typography sx={{fontSize: '14px'}}>Matthijs Piëst</Typography>
                                <Typography sx={{fontSize: '12px', color: '#C4C4C4'}}>COO at WieBetaaltWat</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: "440px", display: "grid", gap: 2, scale: {lg: "100%", md: "80%", sm: "60%", xs: "50%"}, position: "absolute", left: {lg: '13%', md: '8%', sm: '3%', xs: '-40px'}, bottom: {lg: '20%', md: '17%', sm: '17%', xs: '14%'}}}>
                        <Typography variant="h5" sx={{fontWeight: "600", textShadow: "0px 2px 2px rgba(0,0,0,0.5)"}}>Amazing people</Typography>
                        <Typography>&quot;They are people whe are not only following the tasks, but can work as a team. Together.&quot;</Typography>
                        <Box sx={{display: "flex"}}>
                            <Box sx={{display: "grid", gap: "5px"}}>
                                <Typography sx={{fontSize: '14px'}}>Matthijs Piëst</Typography>
                                <Typography sx={{fontSize: '12px', color: '#C4C4C4'}}>COO at WieBetaaltWat</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: "440px", display: "grid", gap: 2, scale: {lg: "100%", md: "80%", sm: "60%", xs: "50%"}, position: "absolute", left: {lg: '33%', md: '29%', sm: '20%', xs: '10%'}, bottom: {lg: '0%', md: '-30px', sm: '-40px', xs: '-40px'}}}>
                        <Typography variant="h5" sx={{fontWeight: "600", textShadow: "0px 2px 2px rgba(0,0,0,0.5)"}}>Amazing people</Typography>
                        <Typography>&quot;They are people whe are not only following the tasks, but can work as a team. Together.&quot;</Typography>
                        <Box sx={{display: "flex"}}>
                            <Box sx={{display: "grid", gap: "5px"}}>
                                <Typography sx={{fontSize: '14px'}}>Matthijs Piëst</Typography>
                                <Typography sx={{fontSize: '12px', color: '#C4C4C4'}}>COO at WieBetaaltWat</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: "370px", display: "grid", gap: 2, scale: {lg: "150%", md: "100%", sm: "80%", xs: "70%"}, position: "absolute", right: {lg: '18%', md: '10%', sm: '9%', xs: '0'}, bottom: {lg: '25%', md: '21%', sm: '21%', xs: '13%'}}}>
                        <Typography variant="h5" sx={{fontWeight: "600", textShadow: "0px 2px 2px rgba(0,0,0,0.5)"}}>Partnership approach</Typography>
                        <Typography>&quot;We felt like we had a true partner throughout the process. They were clearly interested on out long-term success.&quot;</Typography>
                        <Box sx={{display: "flex", alignItems: "center"}}>
                            <img src={ProfilePicture} alt="" />
                            <Box ml={3} sx={{display: "grid", gap: "5px"}}>
                                <Typography sx={{fontSize: '14px'}}>Matthijs Piëst</Typography>
                                <Typography sx={{fontSize: '12px', color: '#C4C4C4'}}>COO at WieBetaaltWat</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default SectionSix;