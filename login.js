
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const mainContent = document.getElementById('mainContent');

    const users = [
        { username: "user1", password: "password1" },
        { username: "user2", password: "password2" },
        { username: "user3", password: "password3" }
    ];

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        // Check if the provided credentials match any user in the users array
        const isAuthenticated = users.some(user => user.username === usernameInput && user.password === passwordInput);

        if (isAuthenticated) {
            // Login is successful
            mainContent.style.display = 'block'; // Show the main content
            alert('Login successful!');
        } else {
            // Login failed
            alert('Login failed!');
            mainContent.style.display = 'none'; // Ensure main content remains hidden
        }
    });
});

function logout() {
    document.getElementById('mainContent').style.display = 'none'; // Hide main content on logout
    // Additional logout handling
}