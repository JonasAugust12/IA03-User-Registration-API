# Frontend - User Registration UI

Next.js frontend with Tailwind CSS, shadcn/ui, and React Query.

## Quick Start

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

## Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Pages

### Home (`/`)

- Welcome page with feature overview
- Navigation to Sign Up and Login pages

### Sign Up (`/signup`)

- User registration form
- Real-time validation
- Password confirmation
- Success/error feedback
- Integration with backend API

### Login (`/login`)

- Login form UI
- Form validation
- Simulated login (no backend implementation yet)

## Features

- ✅ Next.js 14 App Router
- ✅ Tailwind CSS styling
- ✅ shadcn/ui components
- ✅ React Hook Form
- ✅ Zod validation
- ✅ React Query mutations
- ✅ Responsive design
- ✅ Loading states
- ✅ Error handling

## Components

### UI Components (shadcn/ui)

- `Button` - Styled button component
- `Card` - Card container with header, content, footer
- `Input` - Form input field
- `Label` - Form label

### Providers

- `QueryProvider` - React Query configuration

## Form Validation

### Sign Up Form

- Email: Valid email format required
- Password: Minimum 6 characters
- Confirm Password: Must match password

### Login Form

- Email: Valid email format required
- Password: Minimum 6 characters

## API Integration

```typescript
// lib/api.ts
export const authApi = {
  register: async (data: RegisterData) => {
    const response = await api.post("/user/register", data);
    return response.data;
  },
};
```

## Styling

### Tailwind Configuration

- Custom color palette
- shadcn/ui theming
- Dark mode support (configured)
- Responsive breakpoints

### Global Styles

- CSS variables for theming
- Base styles
- Component styles

## Development

### Adding a New Page

1. Create folder in `app/`
2. Add `page.tsx` file
3. Implement component
4. Add navigation link

### Adding a New Component

1. Create file in `components/ui/`
2. Import and use in pages
3. Style with Tailwind classes

## Build and Deploy

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Deploy to Vercel
vercel
```
