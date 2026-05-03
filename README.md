# 🐄 Qurbaniya – Livestock Booking Platform

A modern, responsive livestock marketplace built for Qurbani, where users can explore animals, view details, and place bookings after authentication.

🔗 **Live Site:** https://qurbaniya-phi.vercel.app/
📂 **Repository:** https://github.com/rohan-bhau/Qurbaniya

---

## 🚀 Project Overview

Qurbaniya is a single-page application designed to simplify the process of selecting and booking livestock (cows, goats, sheep) for Qurbani. The platform focuses on usability, clean UI, and smooth user experience with authentication and protected routes.

---

## 🎯 Core Features

* 🔐 **Authentication System**

  * Email & Password login/register
  * Google Sign-in integration
  * Protected routes (Details, Profile)

* 🐄 **Animal Marketplace**

  * Browse animals with detailed information
  * Featured animals on homepage
  * Category-based display (Cow, Goat, Sheep)

* 📄 **Animal Details Page**

  * Full animal information
  * Booking form (with validation)
  * Success toast (no DB storage as per requirement)

* 📊 **All Animals Page**

  * Sort animals by price
  * Clean card-based UI

* 👤 **User Profile System (Challenge Feature)**

  * View user info (name, email, photo)
  * Update profile (name & image)

* 🔔 **UX Enhancements**

  * Toast notifications
  * Loading states
  * Not-found (404) page
  * Smooth animation using React Spring

---

## 🧱 Tech Stack

**Frontend**

* Next.js
* JavaScript (ES6+)
* Hero UI
* React Icons
* Gravity Icons

**State & Forms**

* React Hook Form

**Authentication**

* Better Auth
* Google OAuth

**Backend & Database**

* MongoDB

**Animation**

* React Spring (used selectively)

---

## 📁 Project Structure (Simplified)

```
/src
 ├── components
 ├── pages / app
 ├── hooks
 ├── utils
 ├── services
 └── assets
```

---

## 🔑 Environment Variables

Make sure to configure the following:

```
NEXT_PUBLIC_API_URL=
MONGODB_URI=
AUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

---

## 📱 Responsiveness

Fully optimized for:

* Mobile 📱
* Tablet 📲
* Desktop 💻

---

## 🧪 How to Run Locally

```bash
# Clone repo
git clone https://github.com/rohan-bhau/Qurbaniya.git

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## ⚠️ Limitations (Intentional)

* Booking data is **not stored** (as per assignment requirement)
* No email verification or password reset implemented

---

## 🧠 Challenges Faced

* Integrating Better Auth with protected routes
* Managing authentication state across pages
* Ensuring smooth UX with minimal animation (React Spring)
* Keeping design clean without overcomplicating UI

---

## 📌 Future Improvements

* Real booking system with database persistence
* Payment integration
* Advanced filtering (weight, location, breed)
* Admin dashboard

---

## 👤 Author

**Rohan Mia**

* GitHub: https://github.com/rohan-bhau

---

## 📄 License

This project is for educational purposes only.

---
