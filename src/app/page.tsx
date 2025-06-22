"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = () => {
    authClient.signUp.email(
      {
        email,
        password,
        name,
      },
      {
        onError: (error) => {
          window.alert(`Error: ${error}`);
        },
        onSuccess: () => {
          window.alert("Sign up successful!");
        },
      }
    );
  };

  const onSignIn = () => {
    authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onError: (error) => {
          window.alert(`Error: ${error}`);
        },
        onSuccess: () => {
          window.alert("Sign in successful!");
        },
      }
    );
  };

  const { data: session } = authClient.useSession();

  if (session) {
    return (
      <div className="flex flex-col p-4 gap-y-4">
        <p>
          Logged in as: <strong>{session.user.name}</strong>
        </p>
        <Button onClick={() => authClient.signOut()}>Sign out</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-10">
      <div className="p-4 space-y-4 flex flex-col">
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={onSignUp}>Sign up</Button>
      </div>
      <div className="p-4 space-y-4 flex flex-col">
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={onSignIn}>Sign in</Button>
      </div>
    </div>
  );
}
