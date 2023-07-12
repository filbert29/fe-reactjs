import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import ImgCardOne from "../../assets/image/img_card1.png"
import ImgCardTwo from "../../assets/image/img_card2.png"
import ImgCardThree from "../../assets/image/img_card3.png"

const SectionFive = () => {
    return (
        <>
            <Container>
                <Box>
                    <Box sx={{
                        display: "grid",
                        textAlign: "center",
                        justifyContent: "center"
                    }}>
                        <Typography color={"#C4C4C4"}>Portofolio</Typography>
                        <Typography variant="h4" fontWeight={"600"}>The software that we build <br /> takes our clients to the next level</Typography>
                    </Box>
                    <Grid container spacing={5} mt={1}>
                        <Grid item xs={6} md={4}>
                            <Card sx={{ ":hover": { border: "1px solid #FFCE07" }, borderRadius: "10px", border: "1px solid white", transition: "all 0.3s ease" }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image={ImgCardOne}
                                    />
                                    <CardContent sx={{ minHeight: {lg: "150px", md: "190px", xs: "150px"} }}>
                                        <Typography fontSize={"12px"} color={"#C4C4C4"}>Mobile apps</Typography>
                                        <Typography gutterBottom component="div" fontWeight={"600"} fontSize={"18px"} color={"#FFCE07"}>
                                            ILIOS app (B2B E-commerce)
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Has a unique selling point where not all companies offer applications for sales, data collection and management.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Card sx={{ ":hover": { border: "1px solid #FFCE07" }, borderRadius: "10px", border: "1px solid white", transition: "all 0.3s ease" }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image={ImgCardTwo}
                                    />
                                    <CardContent sx={{ minHeight: {lg: "150px", md: "190px", xs: "150px"} }}>
                                        <Typography fontSize={"12px"} color={"#C4C4C4"}>Website development</Typography>
                                        <Typography gutterBottom component="div" fontWeight={"600"} fontSize={"18px"} color={"#FFCE07"}>
                                            Home and Living
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Albetech helps in creating a website catalog to show brand identity and information in accordance with vision and mission of Home and Living.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Card sx={{ ":hover": { border: "1px solid #FFCE07" }, borderRadius: "10px", border: "1px solid white", transition: "all 0.3s ease" }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image={ImgCardThree}
                                    />
                                    <CardContent sx={{ minHeight: {lg: "150px", md: "190px", xs: "150px"}}}>
                                        <Typography fontSize={"12px"} color={"#C4C4C4"}>Website development</Typography>
                                        <Typography gutterBottom component="div" fontWeight={"600"} fontSize={"18px"} color={"#FFCE07"}>
                                            HIPPO
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Albatech help to create e-commerce and company profile for Hippo Website with realtime transaction and integration with Payment Gatewat to accept multi payment.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

export default SectionFive;