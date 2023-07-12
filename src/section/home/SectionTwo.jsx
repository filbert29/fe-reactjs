import { Box, Container, Grid, Typography } from "@mui/material";
import IconOne from "../../assets/image/icon1.png"
import IconTwo from "../../assets/image/icon2.png"
import IconThree from "../../assets/image/icon3.png"
import IconFour from "../../assets/image/icon4.png"
import IconFive from "../../assets/image/icon5.png"
import IconSix from "../../assets/image/icon6.png"
import "../../assets/styles/home.css"

const SectionTwo = () => {

    // eslint-disable-next-line react/prop-types
    const ProductCard = ({ children }) => (
        <>
            <Grid item lg={4} xs={6}>
                <Box className="box"
                    sx={{
                        display: "grid",
                        gap: 1,
                        border: "1px solid #C4C4C4",
                        borderRadius: "15px",
                        padding: "30px",
                        height: "150px"
                    }}>
                    {children}
                </Box>
            </Grid>
        </>
    )

    return (
        <>
            <Container>
                <Box display={'grid'} gap={2}>
                    <Box
                        sx={{
                            display: "grid",
                            justifyContent: "center",
                            textAlign: "center"
                        }}>
                        <Typography color={"#CECECE"}>Complete Package</Typography>
                        <Typography variant="h4" sx={{ fontWeight: "700", textShadow: "0px 2px 4px rgba(0,0,0,0.5)" }}>From Product Design to Software Continuous Delivery</Typography>
                    </Box>
                    <Grid container spacing={2}>
                        <ProductCard>
                            <img className="icon" style={{ width: "80px", maxHeight: "66px" }} src={IconOne} alt="" />
                            <Typography className="title" sx={{ fontSize: "18px" }}>Website Development</Typography>
                            <Typography sx={{ fontSize: "13px" }}>High-performance website to reach out more tour potential customers</Typography>
                        </ProductCard>
                        <ProductCard>
                            <img className="icon" style={{ width: "60px", maxHeight: "66px" }} src={IconTwo} alt="" />
                            <Typography className="title" sx={{ fontSize: "18px" }}>Mobile Apps Development</Typography>
                            <Typography sx={{ fontSize: "13px" }}>To accelerate your business process</Typography>
                        </ProductCard>
                        <ProductCard>
                            <img className="icon" style={{ width: "70px", maxHeight: "66px" }} src={IconThree} alt="" />
                            <Typography className="title" sx={{ fontSize: "18px" }}>Digital Product Design</Typography>
                            <Typography sx={{ fontSize: "13px" }}>Complete digital product creations from UX prototyping to final designs</Typography>
                        </ProductCard>
                        <ProductCard>
                            <img className="icon" style={{ width: "70px", maxHeight: "66px" }} src={IconFour} alt="" />
                            <Typography className="title" sx={{ fontSize: "18px" }}>Maintenance</Typography>
                            <Typography sx={{ fontSize: "13px" }}>Make sure your digital environment keep online and updated</Typography>
                        </ProductCard>
                        <ProductCard>
                            <img className="icon" style={{ width: "65px", maxHeight: "66px" }} src={IconFive} alt="" />
                            <Typography className="title" sx={{ fontSize: "18px" }}>CMS Development</Typography>
                            <Typography sx={{ fontSize: "13px" }}>You can update your website content yourself</Typography>
                        </ProductCard>
                        <ProductCard>
                            <img className="icon" style={{ width: "70px", maxHeight: "66px" }} src={IconSix} alt="" />
                            <Typography className="title" sx={{ fontSize: "18px" }}>Integrated Payment Gateway</Typography>
                            <Typography sx={{ fontSize: "13px" }}>Simplify the payment system with just one step</Typography>
                        </ProductCard>
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

export default SectionTwo;