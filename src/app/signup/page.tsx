import AuthCard from "@/components/auth/auth-card";
import SignUpForm from "@/components/auth/signup-form";

export default function SignUpPage() {
  return (
    <div className="container flex min-h-[calc(100vh-4rem)] items-center justify-center py-12">
      <AuthCard
        title="Create an Account"
        description="Get started by creating your new StoreFront account."
        footerText="Already have an account?"
        footerLink="/login"
        footerLinkText="Sign In"
      >
        <SignUpForm />
      </AuthCard>
    </div>
  );
}
