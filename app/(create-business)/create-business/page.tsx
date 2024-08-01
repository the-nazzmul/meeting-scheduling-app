"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { app } from "@/config/FirebaseConfig";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const CreateBusiness = () => {
  const [businessName, setBusinessName] = useState("");

  const db = getFirestore(app);
  const router = useRouter();
  const { user } = useKindeBrowserClient();

  const handleCreateBusiness = async () => {
    if (user?.email) {
      const docRef = doc(db, "Business", user?.email);
      await setDoc(docRef, {
        businessName: businessName,
        email: user.email,
        userName: user.family_name,
      }).then((res) => {
        toast("New Business Created");
        router.replace("/dashboard/meeting-type");
      });
    }
  };

  return (
    <div className="p-12 flex flex-col items-center gap-20 dotted h-screen">
      <Image
        src="/nazzly-logo-for-white.png"
        height={300}
        width={300}
        alt="logo"
      />
      <div className="flex flex-col items-center gap-4 max-w-3xl">
        <h2 className="text-4xl font-bold">
          What should we call your business?
        </h2>
        <p className="text-slate-600">
          You can always change this from settings
        </p>
        <div className="w-full">
          <label className="text-slate-600 mt-2">Team Name</label>
          <Input
            type="text"
            placeholder="Your team name"
            className="mt-2"
            onChange={(e) => setBusinessName(e.target.value)}
          />
        </div>
        <Button
          className="w-full text-lg"
          disabled={!businessName}
          onClick={handleCreateBusiness}
        >
          Create Business
        </Button>
      </div>
    </div>
  );
};

export default CreateBusiness;
