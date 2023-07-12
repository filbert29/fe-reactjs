import { Box, Container, Typography } from "@mui/material";

const SectionEight = () => {
    return ( 
        <>
            <Container>
                <Box sx={{
                    border: "1px solid black",
                    backgroundColor: "#FFCE07",
                    borderRadius: "20px",
                    display: 'grid',
                    justifyContent: "center",
                    padding: "30px",
                    textAlign: "center",
                    gap: 3
                }}>
                    <Typography>Is software important for your business?</Typography>
                    <Typography variant="h4">Build it with Albatech</Typography>
                    <button className="btn-consul">
                        Consultation Now
                    </button>
                </Box>
            </Container>
        </>
     );
}
 
export default SectionEight;