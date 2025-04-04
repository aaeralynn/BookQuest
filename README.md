# BookQuest  

## Description  
BookQuest is a full-stack book search engine built using the MERN stack. The application was originally built with a RESTful API and has been refactored to use GraphQL with Apollo Server. Users can search for books using the Google Books API and save their favorite books to their accounts for future reference.  

## Features  

### Book Search  
- Users can search for books using the Google Books API and view details such as title, author, description, and a link to the book on the Google Books website.  

### User Authentication  
- Users can sign up and log in using a secure authentication system powered by JSON Web Tokens (JWT).  

### Book Saving  
- Authenticated users can save books to their personal collection for future reference.  

### Book Management  
- Users can view and remove books from their saved collection.  

### GraphQL API  
- The original RESTful API has been replaced with GraphQL using Apollo Server, improving efficiency in fetching and modifying data.  

### Deployment  
- The application is connected to a MongoDB database hosted on MongoDB Atlas.  

## User Story  
**AS AN** avid reader  
**I WANT** to search for new books to read  
**SO THAT** I can keep a list of books to purchase  

## Acceptance Criteria  

### Search Engine  
#### When the search engine loads  
- Users see a navigation menu with options to search for books, log in, or sign up.  

#### When users enter a search term  
- They receive a list of books with titles, authors, descriptions, images, and links to purchase them.  

### Authentication  
#### When users click on the login/signup option  
- They see a modal with a toggle between login and signup.  

#### When users sign up  
- They create an account with a username, email, and password and are automatically logged in.  

#### When users log in with valid credentials  
- They are authenticated and redirected to their account.  

### Saved Books  
#### When logged in  
- Users see additional menu options to view their saved books and log out.  

#### When logged-in users search for books  
- They can save them to their account.  

#### When users view their saved books  
- They see all previously saved books with the option to remove them.  

#### When users remove a book  
- It is deleted from their collection.  

### Logout Functionality  
#### When users log out  
- They are redirected to the main search page with only the search and login/signup options available.  

## Installation  

### Clone the repository  
```bash
git clone <your-repository-url>  
cd BookQuest/Develop  
Install dependencies for both client and server
bash
Copy
Edit
cd server  
npm install  
cd ../client  
npm install  
Create a .env file in the server directory and add your environment variables
plaintext
Copy
Edit
MONGODB_URI=<your-mongodb-atlas-connection-string>  
JWT_SECRET=<your-secret-key>  
Build and start the application
bash
Copy
Edit
npm run build  
npm run start  
Usage
Navigate to the search engine
Enter a search term to find books.

Sign up or log in to save books to your account.

View and manage your saved books in your account.

Technologies Used
Frontend
React (TypeScript)

Backend
Node.js, Express.js

Database
MongoDB (hosted on MongoDB Atlas)

API
GraphQL with Apollo Server

Authentication
JSON Web Tokens (JWT)

External API
Google Books API

Link to Deployed Application
Was unable to deploy the application, but it is connected to MongoDB Atlas for database functionality.

Sources Utilized
Xpert Live Assistant
Peer Collaboration

License
This project is licensed under the MIT License - see the LICENSE file for details.
