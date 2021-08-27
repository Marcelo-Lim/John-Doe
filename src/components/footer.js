import React from 'react'
import { Container, Grid, Box, Link,} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import "./footer.css";


const footer = () => {
    return (
        <footer>
            <Box
            px={{ xs: 3, sm: 5 }}
            py={{ xd: 5, sm: 5 }}
            borderTop= {0}    
            bgcolor="lightgray" 
            color="black"
            >
                <Container maxwidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1}>Help</Box>
                                <Box>
                                    <Link href="../pages/ContactUs.js" color="inherit">
                                        Contact
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Support
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Privacy
                                    </Link>
                                </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1}>Design Services</Box>
                                <Box>
                                    <h7 color="inherit">
                                        2200 Western Ave, Suite 302, Seattle, WA 98121
                                    </h7>
                                </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1}>Why John Doe</Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Partners
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Customers
                                    </Link>
                                </Box>
                                
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1}>About</Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        About JohnDoe
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Careers
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Terms of Use
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Privacy Policies
                                    </Link>
                                </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center">
                    <Link rel="noopener noreferrer" href="http://www.facebook.com" target="_blank" className="facebook social"> <FacebookIcon fontSize="large" /> </Link>
                    <Link rel="noopener noreferrer" href="http://www.instagram.com" target="_blank" className="instagram social"> <InstagramIcon fontSize="large" /> </Link>
                    <Link rel="noopener noreferrer" href="http://www.twitter.com" target="_blank" className="twitter social"> <TwitterIcon fontSize="large" /> </Link>
                    </Box>
                    <Box textAlign="center" pt={{xs: 5, sm: 5 }} pb={{xs:5, sm: 0}}>
                        JohnDoe &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </footer>
    )
}

export default footer
