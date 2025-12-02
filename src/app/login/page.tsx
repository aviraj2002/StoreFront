import AuthCard from "@/components/auth/auth-card";
import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="container flex min-h-[calc(100vh-4rem)] items-center justify-center py-12">
      <AuthCard
        title="Welcome Back"
        description="Sign in to continue to your account."
        footerText="Don't have an account?"
        footerLink="/signup"
        footerLinkText="Sign Up"
      >
        <LoginForm />
      </AuthCard>
    </div>
  );
}
