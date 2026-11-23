import { AuthStub } from "@/components/auth/auth-stub";

export default function SignUp() {
  return (
    <AuthStub
      title="Create your Account"
      switchLabel="Already have an account? Sign in"
      switchHref="/sign-in"
    />
  );
}
