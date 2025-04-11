import { Box, Button, Container, Typography, Paper, Grid, Card, CardContent, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from "../../Components/Header/Header";

function LandingPage() {
  const navigate = useNavigate();

  // Sample featured blogs data
  const featuredBlogs = [
    {
      id: 1,
      title: 'Getting Started with React',
      excerpt: 'Learn the fundamentals of React and how to build your first application.',
      author: 'Jane Doe'
    },
    {
      id: 2,
      title: 'The Power of Material-UI',
      excerpt: 'Discover how Material-UI can help you build beautiful React applications faster.',
      author: 'John Smith'
    },
    {
      id: 3,
      title: 'Building a Blog Platform',
      excerpt: 'A step-by-step guide to creating your own blog platform with modern technologies.',
      author: 'Alex Johnson'
    }
  ];

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box
          sx={{
            my: 8,
            py: 10,
            textAlign: 'center',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            borderRadius: 2
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Welcome to BlogIt
          </Typography>
          <Typography variant="h5" component="p" color="text.secondary" sx={{ mb: 4 }}>
            Join our community of readers and writers. Share your thoughts with the world.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/signup')}
              sx={{ px: 4, py: 1.5 }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/login')}
              sx={{ px: 4, py: 1.5 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>

        {/* Features Section */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 6 }}>
            Why Choose BlogIt?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  Easy to Use
                </Typography>
                <Typography>
                  Our intuitive interface makes writing and publishing blogs a breeze, even for beginners.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  Engage with Community
                </Typography>
                <Typography>
                  Connect with like-minded individuals and grow your audience through meaningful interactions.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  Beautiful Design
                </Typography>
                <Typography>
                  Enjoy a clean, modern reading experience that highlights your content.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Featured Blogs Section */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 6 }}>
            Featured Blogs
          </Typography>
          <Grid container spacing={4}>
            {featuredBlogs.map((blog) => (
              <Grid item xs={12} md={4} key={blog.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      By {blog.author}
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                      {blog.excerpt}
                    </Typography>
                    <Button 
                      variant="outlined" 
                      onClick={() => navigate(`/blogs/${blog.id}`)}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box
          sx={{
            my: 8,
            py: 6,
            textAlign: 'center',
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            borderRadius: 2
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            Ready to start your blogging journey?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Join thousands of writers sharing their knowledge and stories.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate('/signup')}
            sx={{ px: 6, py: 1.5 }}
          >
            Sign Up Now
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default LandingPage;