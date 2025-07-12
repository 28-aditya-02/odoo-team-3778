# Login Credentials

## User Account
- **Username:** user
- **Password:** user123
- **Role:** User
- **Profile Page:** /user-profile

## Admin Account
- **Username:** admin
- **Password:** admin123
- **Role:** Administrator
- **Profile Page:** /admin-profile

## Features Implemented

### Authentication System
- ✅ User and Admin login with role-based authentication
- ✅ Persistent login state using localStorage
- ✅ Automatic redirect to appropriate profile page based on role
- ✅ Logout functionality

### UI Components
- ✅ Circular profile picture in header when logged in
- ✅ Dropdown menu with profile link and logout option
- ✅ Role-based profile pages (UserProfile.tsx and AdminProfile.tsx)
- ✅ Beautiful, modern UI with Tailwind CSS and shadcn/ui

### Profile Pages
- ✅ **UserProfile:** Personal stats, account settings, recent activity
- ✅ **AdminProfile:** Admin dashboard with system overview, user management, analytics

### Navigation
- ✅ Login/Signup buttons when not authenticated
- ✅ Profile avatar and dropdown when authenticated
- ✅ Automatic routing to correct profile page based on user role

## How to Test

1. Start the development server: `npm run dev`
2. Navigate to the homepage
3. Click "Login" in the header
4. Use either the user or admin credentials above
5. After successful login, you'll see a circular profile picture in place of the login/signup buttons
6. Click on the profile picture to access the dropdown menu
7. Click "Profile" to go to your role-specific profile page
8. Use "Logout" to sign out

## Technical Details

- **Authentication Context:** Manages user state across the application
- **Mock Database:** Simple in-memory user database for demonstration
- **Role-based Routing:** Different profile pages for users and admins
- **Responsive Design:** Works on desktop and mobile devices
- **TypeScript:** Fully typed for better development experience 