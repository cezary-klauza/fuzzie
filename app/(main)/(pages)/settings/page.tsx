import ProfileForm from "@/components/forms/profile-form";
import ProfilePicture from "./_components/profile-picture";

const SettingsPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4-xl sticky top-0 z-10 p-6 bg-background/50 backdrop-blur-lg items-center border-b">
        Settings
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-foreground/50">
            Add or update your information.
          </p>
        </div>
        <ProfilePicture></ProfilePicture>
        <ProfileForm />
      </div>
    </div>
  );
};

export default SettingsPage;
