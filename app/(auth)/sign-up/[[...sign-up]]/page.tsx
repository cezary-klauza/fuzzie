import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center w-full !min-h-screen">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
