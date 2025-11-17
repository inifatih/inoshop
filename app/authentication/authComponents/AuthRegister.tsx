"use client";

import { registerAction } from "@/app/authentication/register/action";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export default function RegisterForm({ onSuccess }: { onSuccess: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const result = await registerAction({
      email,
      password,
      fullName,
      is_admin: false,
    });

    if (result.error) setMessage(result.error);
    else {
        onSuccess?.();
        window.location.reload();
        setMessage("Registration successful. Check your email.")
    };

    setLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-xl">
          Register
        </Button>
      </DialogTrigger>

      <DialogContent className="p-0 border-0 bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="w-full max-w-md mx-auto"
        >
          <Card className="shadow-xl border rounded-2xl p-2 backdrop-blur bg-white/90">
            <CardHeader className="text-center">
              <DialogHeader>
                <DialogTitle className="text-3xl font-extrabold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Create Account
                </DialogTitle>
              </DialogHeader>
              <p className="text-sm text-muted-foreground">
                Register to get started
              </p>
            </CardHeader>

            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your full name"
                    required
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Password</Label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="rounded-xl"
                  />
                </div>

                {message && (
                  <p className="text-center text-sm font-medium text-red-500">
                    {message}
                  </p>
                )}
              </CardContent>

              <CardFooter>
                <Button
                  type="submit"
                  className="w-full rounded-xl h-11 text-md font-semibold"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="animate-spin h-4 w-4" /> Registering...
                    </span>
                  ) : (
                    "Register"
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
