import { Box, Container, Grid, Typography } from "@mui/material";

const SectionFour = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#272727"
            }}>
            <Container>
                <Box sx={{
                    color: "white",
                    textAlign: "center",
                    display: "grid",
                    gap: 4,
                    padding: "30px 0px"
                }}>
                    <Box sx={{display: "grid", justifyContent: "center"}}>
                        <Typography color={"#FFCE07"} fontWeight={"600"} variant="h5" width={"700px"}>Our Progress Comes with a Collaboration Between Creativity, Ideas, and Technology</Typography>
                    </Box>
                    <Grid container>
                        <Grid item xs={4}>
                            <Box>
                                <Typography fontSize={"50px"}>1000+</Typography>
                                <Typography>Designs</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box>
                                <Typography fontSize={"50px"}>30+</Typography>
                                <Typography>Products</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box>
                                <Typography fontSize={"50px"}>58+</Typography>
                                <Typography>Website Development</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default SectionFour;