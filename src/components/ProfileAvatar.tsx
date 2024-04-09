import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getServerSession } from "next-auth";

export default async function ProfileAvatar() {
  const session = await getServerSession();
  return (
    <div>
      <Avatar>
        <AvatarImage src={session?.user?.image || ""} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
