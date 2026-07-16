<div align="center">

# 🤖 EmptyGPT

A modern AI chat application built with **Next.js**, **Clerk Authentication**, **Prisma ORM**, **PostgreSQL**, and the **Vercel AI SDK**.

Fast, secure, and built with production-ready technologies.

</div>

---

## ✨ Features

- 🔐 Authentication with Clerk
- 🤖 AI powered conversations using AI SDK
- 💬 Streaming AI responses
- 🗄️ PostgreSQL database with Prisma ORM
- 👤 User management
- 📱 Responsive UI
- ⚡ Built with Next.js App Router
- 🎨 Modern UI with Tailwind CSS
- 🔒 Secure server-side API routes
- 🚀 Ready for deployment on Vercel

---

## 🛠 Tech Stack

| Technology   | Purpose                          |
| ------------ | -------------------------------- |
| Next.js      | Full-stack React Framework       |
| TypeScript   | Type Safety                      |
| Clerk        | Authentication & User Management |
| Prisma       | ORM                              |
| Neon         | Database                         |
| Tailwind CSS | Styling                          |

---

## 📂 Project Structure

```
app/
components/
lib/
prisma/
public/
hooks/
types/
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Mahi-Teja/empty-gpt.git

cd empty-gpt
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file.

```env
# Database
DATABASE_URL=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# AI Provider
OPENAI_API_KEY=
```

### 4. Generate Prisma Client

```bash
npx prisma generate
```

### 5. Run Database Migrations

```bash
npx prisma migrate dev
```

### 6. Start Development Server

```bash
npm run dev
```

Visit

```
http://localhost:3000
```

---

## 🗃 Database

Prisma is used for type-safe database access.

Useful commands:

```bash
npx prisma studio
```

```bash
npx prisma migrate dev
```

```bash
npx prisma generate
```

---

## 🔐 Authentication

Authentication is handled by **Clerk**.

Features include:

- Email Login
- Google Login
- GitHub Login
- Session Management
- Protected Routes

---

## 🤖 AI

The project uses the **Vercel AI SDK** to:

- Stream responses
- Connect to AI models
- Build conversational interfaces
- Support future AI providers with minimal changes

---

## 📦 Scripts

```bash
npm run dev        # Development

npm run build      # Production build

npm run start      # Start production server

npm run lint       # Lint

npm run prisma:generate

npm run prisma:migrate
```

## 📈 Future Improvements

- Chat history
- Multiple conversations
- Markdown rendering
- Code syntax highlighting
- Image generation
- File uploads
- Voice chat
- Conversation sharing
- AI model selection
- Rate limiting
- Usage analytics

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">

Made with ❤️ by Mahi

</div>
