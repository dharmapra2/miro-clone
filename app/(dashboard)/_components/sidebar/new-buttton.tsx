"use client";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { DialogContent } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";

function NewButtton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <section className="aspect-square">
          <div className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
            <Plus className="text-white"></Plus>
          </div>
        </section>
      </DialogTrigger>
      <DialogContent
        className="p-0 bg-transparent border-none max-w-[480px]"
        aria-describedby="For creating Organization"
      >
        <CreateOrganization routing="hash" />
      </DialogContent>
    </Dialog>
  );
}

export default NewButtton;
