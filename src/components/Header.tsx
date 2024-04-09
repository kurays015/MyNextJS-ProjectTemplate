import { getServerSession } from "next-auth";
import { DarkModeToggle } from "./DarkModeToggle";
import ProfileAvatar from "./ProfileAvatar";
import Login from "./Login";
import AccountDropdown from "./AccountDropdown";

export default async function Header() {
  const session = await getServerSession();
  return (
    <header className="p-5 flex items-center justify-between ">
      <h1 className="text-2xl font-semibold">MyTemplate</h1>
      <div className="flex items-center gap-5">
        {session ? (
          <>
            <ProfileAvatar />
            <AccountDropdown />
          </>
        ) : (
          <Login />
        )}
        <DarkModeToggle />
      </div>
    </header>
  );
}
