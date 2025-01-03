"use client";

import { Hint } from "@/components/hint";
import { Dialog, DialogClose, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import {
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@radix-ui/react-dialog";
import { Plus, X } from "lucide-react";

function NewButtton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <section className="aspect-square relative">
          <Hint
            label="Create organization"
            side="right"
            align="start"
            sideOffset={18}
          >
            <div className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
              <Plus className="text-white"></Plus>
            </div>
          </Hint>
        </section>
      </DialogTrigger>
      <DialogContent className="fixed inset-0 flex items-center justify-center bg-transparent border-none p-0">
        <div className="bg-transparent max-w-[480px] relative">
          <DialogClose
            asChild
            className="z-20 absolute top-4 right-3 p-1 bg-transparent hover:bg-gray-200 rounded-sm focus:outline-none"
          >
            <button aria-label="Close">
              <X className="w-4 h-4 text-gray-600 transition-transform duration-200 hover:rotate-90" />
            </button>
          </DialogClose>
          <DialogTitle className="sr-only">Create Organization</DialogTitle>
          <DialogDescription className="sr-only">
            This dialog allows you to create a new organization.
          </DialogDescription>
          <CreateOrganization routing="hash" skipInvitationScreen />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default NewButtton;
