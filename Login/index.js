function showLogin() {
        document.getElementById("loginPopup").style.display = "block";
        document.getElementById("overlay").style.display = "block"; // Show overlay
    }

    window.onload = function() {
        var username = localStorage.getItem("username");
        if (!username) {
            showLogin(); // Automatically open login popup if user is not logged in
        } else {
            // Display user info if logged in
            document.getElementById("userInfo").innerText = "Welcome, " + username;
            document.getElementById("userInfo").style.display = "block";
            document.getElementById("logoutBtn").style.display = "block"; // Show logout button
            document.getElementById("loginBtn").style.display = "none"; // Hide login button
        }
    };

    document.getElementById("loginBtn").addEventListener("click", function() {
        showLogin();
    });

    document.getElementById("loginForm").addEventListener("submit", function(event){
        event.preventDefault(); // Prevent form submission
        var username = document.getElementById("username").value;

        // Save username to local storage
        localStorage.setItem("username", username);

        // Hide login form and show username in header
        document.getElementById("loginPopup").style.display = "none";
        document.getElementById("userInfo").style.display = "block";
        document.getElementById("userInfo").innerText = "Welcome, " + username;
        document.getElementById("logoutBtn").style.display = "block"; // Show logout button
        document.getElementById("loginBtn").style.display = "none"; // Hide login button

        document.getElementById("overlay").style.display = "none"; // Hide overlay after successful login
    });

    // Logout functionality
    document.getElementById("logoutBtn").addEventListener("click", function() {
        // Remove username from local storage
        localStorage.removeItem("username");

        // Hide user info and logout button, show login button
        document.getElementById("userInfo").style.display = "none";
        document.getElementById("logoutBtn").style.display = "none";
        document.getElementById("loginBtn").style.display = "block";

        document.getElementById("overlay").style.display = "none"; // Hide overlay after logout
    });
