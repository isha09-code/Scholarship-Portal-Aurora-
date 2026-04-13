<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Admin Login</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <style>
    body {
      background-image: url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      animation: fadeIn 1s ease-in-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .fade-in {
      animation: fadeIn 1.2s ease-in-out forwards;
    }
  </style>
</head>
<body class="flex items-center justify-center min-h-screen text-gray-900">

  <div class="bg-white bg-opacity-90 p-8 rounded-2xl shadow-2xl w-full max-w-md fade-in">
    <div class="text-center mb-6">
      <h1 class="text-3xl font-extrabold text-blue-800 tracking-wide mb-1 animate-pulse">ARORA SCHOLARSHIP PORTAL</h1>
      <p class="text-sm text-blue-600 italic">Empowering education through opportunity</p>
      <h2 class="text-2xl font-bold text-blue-700 mt-4">🔐 Administrative Login</h2>
    </div>

    <form id="adminLoginForm" class="space-y-4">
      <div>
        <label class="block mb-1 text-gray-700" for="username">Username</label>
        <input type="text" id="username" class="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-blue-300" required>
      </div>

      <div>
        <label class="block mb-1 text-gray-700" for="password">Password</label>
        <input type="password" id="password" class="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-blue-300" required>
      </div>

      <div>
        <label class="block mb-1 text-gray-700" for="captchaInput">Enter Captcha: <span id="captcha" class="font-bold"></span></label>
        <input type="text" id="captchaInput" class="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-blue-300" required>
      </div>

      <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300 transform hover:scale-105">
        Login
      </button>
    </form>

    <p id="loginMessage" class="mt-4 text-center text-red-500"></p>
  </div>

  <script>
    function generateCaptcha() {
      const num1 = Math.floor(Math.random() * 10);
      const num2 = Math.floor(Math.random() * 10);
      document.getElementById("captcha").textContent = `${num1} + ${num2}`;
      return num1 + num2;
    }

    let expectedCaptcha = generateCaptcha();

    document.getElementById("adminLoginForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const password = document.getElementById("password").value;
      const inputCaptcha = parseInt(document.getElementById("captchaInput").value);

      if (inputCaptcha !== expectedCaptcha) {
        document.getElementById("loginMessage").textContent = "❌ Incorrect captcha. Please try again.";
        expectedCaptcha = generateCaptcha();
        return;
      }

      if (password !== "1221") {
        document.getElementById("loginMessage").textContent = "❌ Invalid password.";
        return;
      }

      document.getElementById("loginMessage").textContent = "✅ Login successful!";
      setTimeout(() => {
        window.location.href = "adm.html";
      }, 1000);
    });
  </script>

</body>
</html>
