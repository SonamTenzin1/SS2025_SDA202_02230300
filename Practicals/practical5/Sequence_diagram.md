# Sequence Diagram reports a Pinterest Application

![alt text](<Pinterest Sequence Diagram.png>)

## Overview

This sequence diagram, models the primary workflows in a Pinterest-like application, user login and auth, browsing and pinning, creating boards, and uploading new images. This diagram represents the relationships between the main components of the system: Frontend, Backend, Pin service, User service, Board service, and the Database.

## Flow Breakdown

### 1. User Authentication

* A login request from the user through the frontend.

* User data is fetched by the backend from the User Service.

* The User Service queries the database to check the credentials.

* After successful authentication, the backend responds to the frontend.

### 2. Fetching and Displaying Pins

* The user requests pins after being authenticated.

* ackend requests for pin data are made from the Pin Service.

* Querying a database, using the Pin Service to return data of image to the frontend.

### 3. Pinning an Image
* When a user pins an image, the frontend sends a request to fetch the specific pin.

* The Pin Service retrieves the image data by ID through the database and returns it for pinning.

### 4. Creating a Board
* The user sends a request to create a board.

* The backend processes this by combining selected pinned images from the saved pins .

* The Board Service receives the request and saves the new board to the database.

### 5. Uploading a New Image
* Users can upload their own images as pins.

* The frontend sends the upload request to the backend.

* The Pin Service handles the storage, while the User Service and Board Service update their records accordingly in the database.

System Components
Frontend: User interface (web or mobile).

Backend: Handles logic, authentication, and routing.

Pin Service: Manages pin data and image retrieval.

User Service: Manages user information and login verification.

Board Service: Manages board creation and associations.

Database: Central data store for pins, users, and boards.

## System Components
* **Frontend:** User interface (web or mobile).

* **Backend:** Handles logic, authentication, and routing.

* **Pin Service:** Manages pin data and image retrieval.

* **User Service:** Manages user information and login verification.

* **Board Service:** Manages board creation and associations.

* **Database:** Central data store for pins, users, and boards.

