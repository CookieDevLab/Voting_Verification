Voting Verification – Face and ID-Based Voter Authentication

Overview
A lightweight face & ID document-based verification system to enhance security and prevent voter impersonation during digital or on-ground elections.

Problem Statement
Many voting systems lack robust real-world identity verification, leading to vulnerabilities like voter impersonation and fraud. This project aims to solve this using AI-powered verification methods.

Solution
We built an MVP that:

Accepts a user’s live image and ID card image.

Uses face matching and OCR to verify identity.

Displays a success or failure result based on similarity.

Key Features

Upload live photo and ID card image

Face comparison using DeepFace (or OpenCV variant)

OCR text extraction from ID using Tesseract

Result-based authentication

Simple Flask backend for fast prototyping

Runs locally via browser

Tech Stack
Frontend:

HTML, CSS

Bootstrap

Backend:

Python (Flask)

DeepFace or OpenCV for face recognition

Tesseract OCR for ID text extraction

Tools & Deployment:

GitHub (version control)

Localhost testing

[Optional] IDX + Gemini API (integration planned for next phase)

How to Run (Local Setup)

Clone the repo: git clone https://github.com/CookieDevLab/Voting_Verification.git

Navigate to the folder: cd Voting_Verification

Install dependencies: pip install -r requirements.txt

Run the app: python app.py

Open your browser at: http://localhost:5000

Demo Screenshots
(Save your image in /screenshots and use links like below)



Demo Video
📽️ Watch Demo: 

What’s Pending or Planned

Mobile responsiveness (React UI planned)

Gemini API integration (smart verification)

Cloud hosting on Google Cloud / Firebase

AES encryption for voter data transmission

Admin panel for verifying election logs

Team

Vishwa R – Developer
Athmapriyan K - Developer
Sanjay Murali - Developer, Designer
Joel Sheno G - Designer, Documentation
College: SRM University of Science and Technology
