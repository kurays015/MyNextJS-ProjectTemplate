"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function SigninForm() {
  const router = useRouter();

  function handleCredentialsLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirect: false,
    });
    router.push("/dashboard");
  }
  return (
    <form onSubmit={handleCredentialsLogin}>
      <label htmlFor="username">username</label>
      <input type="text" name="username" id="username" placeholder="username" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <button type="submit">Sign in</button>
    </form>
  );
}
