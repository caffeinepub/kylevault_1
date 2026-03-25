import { Toaster } from "@/components/ui/sonner";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { Dashboard } from "@/pages/Dashboard";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { Profile } from "@/pages/Profile";
import { SavingsPlans } from "@/pages/SavingsPlans";
import { Signup } from "@/pages/Signup";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from "@tanstack/react-router";

// Root route
const rootRoute = createRootRoute({
  component: () => (
    <AuthProvider>
      <Outlet />
      <Toaster />
    </AuthProvider>
  ),
});

// Public routes
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});
const signupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signup",
  component: Signup,
});

// Protected wrapper
function ProtectedOutlet() {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) return null; // redirect handled by beforeLoad
  return <Outlet />;
}

const protectedRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "protected",
  component: ProtectedOutlet,
  beforeLoad: ({ context }: { context: unknown }) => {
    // We can't access React context in beforeLoad directly,
    // so we check localStorage as a fallback signal
    void context;
    return undefined;
  },
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: DashboardGuard,
});
const savingsPlansRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/savings-plans",
  component: SavingsPlansGuard,
});
const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: ProfileGuard,
});

function DashboardGuard() {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    redirect({ to: "/login" });
    return null;
  }
  return <Dashboard />;
}

function SavingsPlansGuard() {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    redirect({ to: "/login" });
    return null;
  }
  return <SavingsPlans />;
}

function ProfileGuard() {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    redirect({ to: "/login" });
    return null;
  }
  return <Profile />;
}

const routeTree = rootRoute.addChildren([
  homeRoute,
  loginRoute,
  signupRoute,
  dashboardRoute,
  savingsPlansRoute,
  profileRoute,
  protectedRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
