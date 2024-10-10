import { useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { SignInFlow } from "../types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface SignInCardProps {
  setState: (state: SignInFlow) => void;
}
export const SignInCard = ({ setState }: SignInCardProps) => {
  const { signIn } = useAuthActions();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onProviderSignIn = (value: "github" | "google") => {
    signIn(value);
  };

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Login to continue </CardTitle>
        <CardDescription>
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input
            disabled={false}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required
          ></Input>
          <Input
            disabled={false}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            required
          ></Input>

          <Button type="submit" className="w-full" size={"lg"} disabled={false}>
            Continue
          </Button>

          <Separator />
          <div>
            <Button
              type="button"
              disabled={false}
              onClick={() => onProviderSignIn("google")}
              variant={"outline"}
              size={"lg"}
              className="w-full relative mb-2"
            >
              <FcGoogle className="size-5 absolute top-3 left-2.5" />
              Continue with Google
            </Button>
            <Button
              type="button"
              disabled={false}
              onClick={() => onProviderSignIn("github")}
              variant="outline"
              size="lg"
              className="w-full relative"
            >
              <FaGithub className="size-5 absolute top-3 left-2.5" />
              Continue with Github
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            {"Don't"} have an account?{" "}
            <span
              onClick={() => setState("signUp")}
              className="text-sky-700 hover:underline cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </form>
      </CardContent>
    </Card>
  );
};
