# Full-Stack Application with Vue.js, Laravel, and Auth0

This project is a full-stack application using Vue.js as the frontend framework, Laravel as the backend API, and Auth0 for authentication. The application is containerized using Docker to ensure easy setup and deployment.

## Technologies Used

- **Frontend**: Vue.js
- **Backend**: Laravel
- **Authentication**: Auth0
- **Containerization**: Docker

## Setup

### Prerequisites

- Docker
- Docker Compose
- Node.js (for local development)

### Local Development

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
2. cd <project-directory>
3. 3 chmod +x install.sh
./install.sh

The Vue.js frontend shoule  be available at http://localhost:8080, and the Laravel backend will be accessible at http://localhost:8000.
# Architecture

Frontend
The Vue.js frontend integrates Auth0 for user authentication. Configuration issues were noted with Auth0, specifically the need for clientId instead of client_id which is standard in many OAuth implementations but differs in Vue 3 integration.

# Backend
The Laravel backend is set up to accept JWTs for secure API access. 
# Dockerization
The application is dockerized with separate containers for the frontend, backend, and a MySQL database. Each part of the application is encapsulated, making it scalable and easier to manage.
# Future Enhancements
If i had more time on the project i would consider:

- **Database Integration:**
Further integrate and optimize database usage with Laravel Eloquent for more efficient data handling.
- **Project Organization:**
Improve key management using environment variables and secure vaults to enhance security.
- **Security Enhancements:**
Implement additional checks and balances for JWTs, including more robust error handling and validation mechanisms.
.
# Challenges Faced
- **Auth0 Configuration**: Issues with the Auth0 client setup in Vue.js due to documentation discrepancies regarding parameter names.
- **JWT Validation:** Initial challenges in configuring the backend to properly validate JWTs due to package dependencies and middleware setup.



