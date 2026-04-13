document.getElementById('studentLoginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
      username: e.target.username.value,
      password: e.target.password.value // Always include all form fields
    };
  
    try {
      const response = await fetch('http://localhost:3000/student-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      console.log('Server response:', result); // Debug log
      
      if (result.success) {
        window.location.href = 'student-dashboard.html'; 
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Check console for details.');
    }
  });