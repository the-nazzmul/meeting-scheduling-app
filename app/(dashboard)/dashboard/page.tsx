/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Logout from "@/components/Logout";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "@/config/FirebaseConfig";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const db = getFirestore(app);
  const { user } = useKindeBrowserClient();
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    user && isBusinessRegistered();
  }, [user]);

  const isBusinessRegistered = async () => {
    if (user?.email) {
      const docRef = doc(db, "Business", user?.email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setLoading(false);
      } else {
        console.log("No such document!");
        setLoading(false);
        router.replace("/create-business");
      }
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h1>dashboard</h1>
      <Logout />
    </div>
  );
};

export default DashboardPage;
