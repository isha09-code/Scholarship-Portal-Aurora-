document.getElementById("adminLoginForm").addEventListener("submit", async function(e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const inputCaptcha = parseInt(document.getElementById("captchaInput").value);
  
    // Client-side validation
    if (inputCaptcha !== expectedCaptcha) {
      document.getElementById("loginMessage").textContent = "❌ Incorrect captcha. Please try again.";
      expectedCaptcha = generateCaptcha();
      return;
    }
  
    // Server-side validation
    try {
      const response = await fetch('/admin-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
  
      const data = await response.json();
  
      if (data.success) {
        document.getElementById("loginMessage").textContent = "✅ Login successful!";
        setTimeout(() => {
          window.location.href = data.redirect;
        }, 1000);
      } else {
        document.getElementById("loginMessage").textContent = "❌ Invalid credentials.";
      }
    } catch (error) {
      document.getElementById("loginMessage").textContent = "⚠️ Server error. Please try later.";
    }
  });