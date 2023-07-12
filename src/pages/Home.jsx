import ResponsiveAppBar from "../component/Navbar";
import SectionOne from "../section/home/SectionOne";
import SectionTwo from "../section/home/SectionTwo";
import SectionFour from "../section/home/SectionFour";
import { Box } from "@mui/material";
import SectionFive from "../section/home/SectionFive";
import Footer from "../component/Footer";
import SectionEight from "../section/home/SectionEight";
import SectionSeven from "../section/home/SectionSeven";
import SectionThree from "../section/home/SectionThree";
import SectionSix from "../section/home/SectionSix";

const Home = () => {
    return (
        <>
            <Box sx={{ display: "grid", gap: 9, paddingTop: "100px", paddingBottom: "20px" }}>
                <ResponsiveAppBar />
                <SectionOne />
                <SectionTwo />
                <SectionThree/>
                <SectionFour />
                <SectionFive/>
                <SectionSix/>
                <SectionSeven/>
                <SectionEight/>
                <Footer/>
            </Box>
        </>
    );
}

export default Home;