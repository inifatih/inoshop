// app/authentication/logout/page.tsx
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import { logoutAction } from "../logout/action";

export default function LogoutForm() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await logoutAction();
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-4">
        <CardHeader>
          <h2 className="text-xl font-semibold text-center">Logout Confirmation</h2>
        </CardHeader>

        <CardContent className="space-y-4 text-center">
          <p>Are you sure you want to logout?</p>

          <Button onClick={handleLogout} disabled={loading} className="w-full">
            {loading ? "Logging out..." : "Logout"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}