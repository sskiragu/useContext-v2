import { AppBar, Link, Stack, Toolbar } from "@mui/material";
import { Link as RouterLink} from "react-router-dom";

function Header(){

    

    return(
        <AppBar>
            <Toolbar>
                <Stack 
                    direction="row" 
                    spacing={4} >
                    <Link component={RouterLink} to="/" sx={{color: "white", spacing: 2}}>Home</Link>
                    <Link component={RouterLink} to="/about" sx={{color: "white"}}>About</Link>
                    <Link component={RouterLink} to="/services" sx={{color: "white"}}>Services</Link>
                    <Link component={RouterLink} to="/contacts" sx={{color: "white"}}>Contact us</Link>
                </Stack>
                <Stack>
                    
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Header;