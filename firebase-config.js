import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAItlJdapvEIe6BH2ehpk-SrWZzFv01qCs",
  authDomain: "dachia-collections.firebaseapp.com",
  projectId: "dachia-collections",
  storageBucket: "dachia-collections.firebasestorage.app",
  messagingSenderId: "55692626578",
  appId: "1:55692626578:web:8f17bcae2b06edd10fb44b",
  measurementId: "G-DZ16EVTE6V"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const money = n => "₦" + Number(n || 0).toLocaleString();
export const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
