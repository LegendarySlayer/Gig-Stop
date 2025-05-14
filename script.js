// Toggle filter options visibility
function toggleFilterOptions() {
    const filterOptions = document.getElementById('filter-options');
    filterOptions.classList.toggle('show');
}

// Estimate project cost based on input
function estimateProject() {
    const projectDetails = document.getElementById('project-details').value;
    const estimateResult = document.getElementById('estimate-result');

    // Mock estimate result
    if (projectDetails) {
        estimateResult.textContent = 'Estimated Cost: ₹50,000 - ₹70,000';
    } else {
        estimateResult.textContent = 'Please enter project details.';
    }
}

// Match freelancers based on input
function matchFreelancers() {
    const projectInput = document.getElementById('project-input').value;
    const matchResult = document.getElementById('match-result');

    // Mock matching result
    if (projectInput) {
        matchResult.textContent = 'Top freelancers for your project are John Doe and Jane Smith.';
    } else {
        matchResult.textContent = 'Please describe your project.';
    }
}

// Start wellness program
function startWellness() {
    alert('Wellness program started! Stay healthy and productive.');
}

// JavaScript to handle KYC button click
document.getElementById('kyc-button').addEventListener('click', function () {
    alert('Redirecting to KYC completion page...');
});

// JavaScript to enhance the sidebar
document.querySelectorAll('.sidebar ul li a').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        alert(`You clicked on ${link.textContent}`);
    });
});

// JavaScript to handle search bar functionality
document.querySelector('.search-bar button').addEventListener('click', function () {
    const searchTerm = document.querySelector('.search-bar input').value;
    if (searchTerm) {
        alert(`Searching for: ${searchTerm}`);
    } else {
        alert('Please enter a search term.');
    }
});
// 

// JavaScript for upvoting and downvoting functionality
document.querySelectorAll('.upvote-button').forEach(button => {
    button.addEventListener('click', function () {
        const voteCount = this.nextElementSibling;
        voteCount.textContent = parseInt(voteCount.textContent) + 1;
    });
});

document.querySelectorAll('.downvote-button').forEach(button => {
    button.addEventListener('click', function () {
        const voteCount = this.previousElementSibling;
        voteCount.textContent = Math.max(0, parseInt(voteCount.textContent) - 1);
    });
});

// JavaScript for applying to a job
document.querySelectorAll('.apply-button').forEach(button => {
    button.addEventListener('click', function () {
        alert('Redirecting to the job application page...');
    });
});

// JavaScript for sharing a post
document.querySelectorAll('.share-button').forEach(button => {
    button.addEventListener('click', function () {
        alert('Sharing post...');
    });
});
// 
// 
// JavaScript for upvoting and downvoting functionality
document.querySelectorAll('.upvote-button').forEach(button => {
    button.addEventListener('click', function () {
        const voteCount = this.nextElementSibling;
        voteCount.textContent = parseInt(voteCount.textContent) + 1;
    });
});

document.querySelectorAll('.downvote-button').forEach(button => {
    button.addEventListener('click', function () {
        const voteCount = this.previousElementSibling;
        voteCount.textContent = Math.max(0, parseInt(voteCount.textContent) - 1);
    });
});

// JavaScript for applying to a job
document.querySelectorAll('.apply-button').forEach(button => {
    button.addEventListener('click', function () {
        alert('Redirecting to the job application page...');
    });
});

// JavaScript for sharing a post
document.querySelectorAll('.share-button').forEach(button => {
    button.addEventListener('click', function () {
        alert('Sharing post...');
    });
});

// JavaScript for posting comments
document.querySelectorAll('.comment-submit-button').forEach(button => {
    button.addEventListener('click', function () {
        const commentInput = this.previousElementSibling;
        const commentText = commentInput.value;
        if (commentText.trim() !== "") {
            const commentList = this.parentElement.querySelector('.comment-list');
            const newComment = document.createElement('p');
            newComment.innerHTML = `<strong>You:</strong> ${commentText}`;
            commentList.appendChild(newComment);
            commentInput.value = '';  // Clear input field
        } else {
            alert('Comment cannot be empty.');
        }
    });
});

// 
// 
// 
// Sample data for skill progression over time
// Existing JS Code

// JavaScript to handle KYC button click
document.getElementById('kyc-button').addEventListener('click', function () {
    alert('Redirecting to KYC completion page...');
});

// JavaScript to enhance the sidebar
document.querySelectorAll('.sidebar ul li a').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        alert(`You clicked on ${link.textContent}`);
    });
});

// JavaScript to handle search
function search() {
    const query = document.getElementById('search-input').value;
    alert(`Searching for: ${query}`);
}

// JavaScript for AI Project Cost Estimator
function estimateProject() {
    const details = document.getElementById('project-details').value;
    if (details) {
        document.getElementById('estimate-result').innerText = `Estimated cost for ${details}: ₹50,000 - ₹1,00,000`;
    } else {
        document.getElementById('estimate-result').innerText = "Please provide project details.";
    }
}

// JavaScript for AI Freelancer Matching
function matchFreelancers() {
    const projectDetails = document.getElementById('project-input').value;
    if (projectDetails) {
        document.getElementById('match-result').innerText = `Freelancers found for ${projectDetails}`;
    } else {
        document.getElementById('match-result').innerText = "Please describe your project.";
    }
}

// New JS Code for Skill Evolution Tracker


// Render chart
window.onload = function () {
    var ctx = document.getElementById('skillChart').getContext('2d');

    var skillChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // X-axis labels
            datasets: [
                {
                    label: 'JavaScript',
                    data: [60, 65, 70, 75, 80, 90, 95], // Data for JavaScript
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    fill: true
                },
                {
                    label: 'React',
                    data: [50, 55, 60, 65, 75, 85, 90], // Data for React
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    fill: true
                },
                {
                    label: 'Python',
                    data: [40, 45, 50, 60, 70, 80, 85], // Data for Python
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Helps with chart size on responsive layouts
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Months'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Skill Level'
                    },
                    min: 0,
                    max: 100
                }
            }
        }
    });
};

// 
function startMeditation() {
    alert("Start your 5-minute meditation session.");
    setTimeout(function () {
        alert("Meditation session complete. Great job!");
    }, 300000); // 5 minutes in milliseconds
}

// 

// Open modal
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function openSignupModal() {
    document.getElementById('signupModal').style.display = 'block';
}

// Close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Example form submission handling (you can customize this)
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Logging in...');
});

document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const userType = document.getElementById('userType').value;
    alert(`Signing up as ${userType}`);
});

// 
// JavaScript functions for profile management
function editProfile() {
    alert('Redirecting to the profile editing page...');
}

function addPortfolioItem() {
    alert('Redirecting to the portfolio item addition page...');
}

// chat bot script
function toggleChatbox() {
    const chatbox = document.getElementById('chatbox');
    chatbox.classList.toggle('show');
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value;
    if (message) {
        const messages = document.getElementById('messages');
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        messages.appendChild(messageElement);
        input.value = ''; // Clear the input field
    }
}



