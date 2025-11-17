"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function LoginDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="mmax-w-md bg-white shadow-2xl border-0 rounded-2xl">
        <DialogHeader>
          <DialogTitle>Masuk</DialogTitle>
          <DialogDescription>
            Silakan login dengan email dan password Anda.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4 mt-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded p-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded p-2"
          />
          <button type="submit" className="w-full bg-black text-white p-2 rounded">
            Login
          </button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

