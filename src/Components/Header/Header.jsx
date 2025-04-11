import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Header({ isAuthenticated = false }) {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1, fontWeight: 700 }}
        >
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            BlogIt
          </Link>
        </Typography>
        
        {isAuthenticated ? (
          <Box>
            <Button color="inherit" component={Link} to="/write">
              Write
            </Button>
            <Button color="inherit" component={Link} to="/my-blogs">
              My Blogs
            </Button>
            <Button color="inherit" component={Link} to="/profile">
              Profile
            </Button>
          </Box>
        ) : (
          <Box>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button 
              variant="contained" 
              color="secondary" 
              component={Link} 
              to="/signup"
              sx={{ ml: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;