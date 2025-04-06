# 🗳️ Voting Verification – MVP

**A Minimum Viable Product (MVP)** for secure and reliable face verification in voting systems using Aadhaar card image and live webcam input.

---

## ✅ Features Implemented

- Upload **Aadhaar Card image** (JPEG/PNG)
- Capture **real-time webcam photo** of the user
- **Verify face** using DeepFace (live photo vs Aadhaar photo)
- Show result as: ✅ **Matched** / ❌ **Mismatched**

---

## 🛠️ Technologies Used

- **Frontend:** HTML, CSS  
- **Backend:** Python (Flask)  
- **Face Recognition:** DeepFace  
- **Image Handling:** OpenCV, Pillow  
- **Others:** `requests`, `tqdm`

---

## 📁 Project Structure

Voting_Verification/ 
├── static/ 
│ └── style.css 
├── templates/ 
  ├── index.html 
  └── result.html 
├── uploads/ # stores uploaded Aadhaar image 
├── app.py # Flask server 
├── requirements.txt 
└── README.md


---

## 🚀 How to Run Locally ##

1. **Clone the repository:**

```bash
git clone https://github.com/CookieDevLab/Voting_Verification.git
cd Voting_Verification
```

2.(Optional) Create a virtual environment:

```bash
python -m venv venv
# For Linux/macOS
source venv/bin/activate
# For Windows
venv\Scripts\activate
```

3.Install dependencies:

```bash
pip install -r requirements.txt
```

4.Run the app:

```bash
python app.py
```

Open your browser:
```bash
http://localhost:5000
```

## ⚠️ Known Limitations

- **No user authentication** (MVP only)
- **Requires clear face visibility** in both images
- **No OCR or Aadhaar detail extraction yet**

