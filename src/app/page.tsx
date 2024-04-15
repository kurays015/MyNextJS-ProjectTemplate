import { PrismaClient } from "@prisma/client";

export default async function Home() {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();
  console.log(users);
  return (
    <main className="max-w-7xl mx-auto">
      <h1 className="text-2xl text-center">
        My NextJS | TypeScript | Next-Auth | Shadcn-ui Template (with darkmode)!
      </h1>
      <div>
        Users from DB:{" "}
        {users.map((user, index) => (
          <h5 key={index}>{user.email}</h5>
        ))}
      </div>
    </main>
  );
}
