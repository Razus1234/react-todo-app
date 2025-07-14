# 📝 React To-do List App

A simple and clean To-do List app built with **React + TypeScript**.  
This project demonstrates how to manage complex state using arrays, component communication, and model abstraction with best practices.

---

## 🚀 Live Demo

👉 [Click here to view the deployed app](https://react-todo-app-rose.vercel.app/)

---

## 📦 Tech Stack

- ⚛️ React
- ⛓️ TypeScript
- ⚡ Vite
- 🗃️ Custom Model (`Todo` interface)
- ☁️ Vercel (for deployment)

---

## 🎯 Features

- ✅ Add new tasks
- ✅ Mark tasks as completed
- ✅ Delete tasks
- ✅ List rendering with reusable components
- ✅ Todo model abstraction (`/models/Todo.ts`)

---

## 📂 Project Structure

<pre>
react-todo-app/
├── public/
├── src/
│   ├── components/
│   │   ├── TodoItem.tsx       # Component for individual todo item
│   │   └── TodoList.tsx       # Component for list of todos
│   ├── models/
│   │   └── Todo.ts            # Interface for Todo model
│   ├── App.tsx                # Main app logic
│   └── main.tsx               # Entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
</pre>

---
## 📸 Screenshot


---

## 📚 Learnings
This project helped me understand and practice:
- Using useState() with arrays and objects
- Lifting state up and passing props
- Component decomposition
- Defining and using TypeScript interfaces (models)
- Deploying to Vercel