Voting Verification – MVP
A Minimum Viable Product (MVP) for secure and reliable face verification in voting systems using Aadhaar card image and live webcam input.

✅ Features Implemented
Upload Aadhaar Card image (JPEG/PNG).

Capture real-time webcam photo of the user.

Verify face using DeepFace (live photo vs Aadhaar photo).

Show result as Matched / Mismatched.

🛠️ Technologies Used
Frontend: HTML, CSS

Backend: Python (Flask)

Face Recognition: DeepFace

Image Handling: OpenCV, Pillow

Others: requests, tqdm

🗂️ Project Structure
Voting_Verification/
├── static/ → style.css
├── templates/ → index.html, result.html
├── uploads/ → stores uploaded Aadhaar image
├── app.py → Flask server
├── requirements.txt
└── README.md

🚀 How to Run Locally
Clone the repository:

bash
Copy
Edit
git clone https://github.com/CookieDevLab/Voting_Verification.git
cd Voting_Verification
(Optional) Create a virtual environment:

bash
Copy
Edit
python -m venv venv
source venv/bin/activate  # or .\venv\Scripts\activate (Windows)
Install dependencies:

nginx
Copy
Edit
pip install -r requirements.txt
Run the app:

nginx
Copy
Edit
python app.py
Open your browser:

arduino
Copy
Edit
http://localhost:5000
⚠️ Known Limitations
No user authentication (MVP only).

Requires proper face visibility in both images.

No OCR or Aadhaar detail extraction yet.

🧠 What’s Next
Integrate OCR to read Aadhaar details.

Add secure authentication (e.g., OTP).

Deploy on cloud platform (Render/Replit).

Use Gemini API for smarter verification.

Save verified results into database.

📦 MVP Deployment Link
Add your hosted MVP link here (e.g., Render or Replit URL)

