// JavaScript for handling user authentication and login functionality

// Simulated user data for login (usually handled securely on server side)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Simulated login validation
    validateLogin(username, password);
});

function validateLogin(username, password) {
    // Simulated check against user data
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert('Login successful!');
        // Redirect or perform additional actions after successful login
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
