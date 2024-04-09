"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export default function Login() {
  return (
    <div>
      <Button onClick={() => signIn("google")}>Login</Button>
    </div>
  );
}
