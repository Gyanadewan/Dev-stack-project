# 🚀 Dev Stack

**Dev Stack** is a modern and responsive technology stack management website. Users can explore different technologies and add their favorite technologies to their personal stack.

**Developed by:** Gyana Ratan Dewan

## 🌐 Live Site

https://dev-stack-project-two.vercel.app/

## 📂 GitHub Repository
https://github.com/Gyanadewan/Dev-stack-project

## 🛠️ Technologies Used

* React.js
* TypeScript
* Tailwind CSS
* React Toastify
* React Icons
* JSON
* Vite

## ✨ Features

* Explore technologies with category, rating, difficulty, and description.
* Add and remove technologies from **Your Stack**.
* Prevent duplicate selections with toast notifications.
* responsive for mobile and desktop devices.
* Dynamic technology data loaded from a JSON file.

## ⚛️ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX allows us to write HTML-like code inside JavaScript. It makes React UI code easier to read and write.

### 2. What is the difference between props and state?

Props are used to pass data from a parent to a child component. State is used to manage changing data inside a component.

### 3. What does the `useState` hook do, and where did you use it?

`useState` is used to create and manage component state. I used it to manage the selected technologies in the **Your Stack** section.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to handle side effects such as data fetching. I did not use `useEffect` in this project. I used an **async function** to fetch the JSON data and used `use()` with `Suspense` to handle the Promise and loading state.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item and efficiently update the list when it changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. I used it in **Your Stack** to show an empty message when no technology is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data through props. A child can send data back by calling a function passed from the parent as a prop.
