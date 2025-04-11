import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container,
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Link,
  Alert,
  Paper
} from '@mui/material';
import Header from "../../Components/Header/Header";

function Login() {
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.usernameOrEmail.trim()) {
      newErrors.usernameOrEmail = 'Username or email is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual API call in your implementation
      const response = await mockApiCall(formData);
      
      if (response.success) {
        setSubmitSuccess(true);
        setTimeout(() => {
          // In a real app, you would store the auth token and user data
          navigate('/blogs'); // Redirect to blog listing page
        }, 1500);
      } else {
        setErrors({
          ...errors,
          api: response.message || 'Invalid credentials. Please try again.'
        });
      }
    } catch (error) {
      setErrors({
        ...errors,
        api: 'An error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Mock API call function - replace with actual API call
  const mockApiCall = async (data) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate checking credentials
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if user exists with either username or email
    const user = existingUsers.find(user => 
      user.username === data.usernameOrEmail || 
      user.email === data.usernameOrEmail
    );
    
    if (!user) {
      return { success: false, message: 'User not found' };
    }
    
    // In a real app, you would verify the hashed password
    if (user.password !== data.password) {
      return { success: false, message: 'Incorrect password' };
    }
    
    return { success: true, user };
  };

  return (
    <Container maxWidth="lg">
      <Header />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8,
          mb: 4
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            width: '100%',
            maxWidth: 500,
            borderRadius: 2
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome back to BlogIt
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Sign in to continue your journey
            </Typography>
          </Box>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            {errors.api && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {errors.api}
              </Alert>
            )}

            <TextField
              margin="normal"
              required
              fullWidth
              id="usernameOrEmail"
              label="Username or Email"
              name="usernameOrEmail"
              autoComplete="username"
              value={formData.usernameOrEmail}
              onChange={handleChange}
              error={!!errors.usernameOrEmail}
              helperText={errors.usernameOrEmail}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isSubmitting}
              sx={{
                mt: 3,
                mb: 2,
                py: 1.5,
                fontSize: '1rem'
              }}
            >
              {isSubmitting ? (
                <>
                  <CircularProgress size={24} sx={{ mr: 1 }} />
                  Signing In...
                </>
              ) : (
                'Sign In'
              )}
            </Button>

            {submitSuccess && (
              <Alert severity="success" sx={{ mt: 2 }}>
                Login successful! Redirecting to your blogs...
              </Alert>
            )}

            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Don't have an account?{' '}
                <Link href="/signup" underline="hover">
                  Create One
                </Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login;