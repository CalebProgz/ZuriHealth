document.getElementById("signupForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent page reload

    // Get form data
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Send data to backend
    const response = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
    });

    // Get response message
    const message = await response.text();
    document.getElementById("message").innerText = message;
});
