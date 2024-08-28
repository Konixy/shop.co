"use client";

import { X } from "lucide-react";
import Link from "@/components/ui/link";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function TopBanner() {
  const [showBanner, setShowBanner] = useLocalStorage<boolean>(
    "showDiscountBanner",
    true
  );

  return (
    showBanner && (
      <div className="text-white w-screen bg-black py-2 z-50">
        <div className="text-center text-sm sm:text-base">
          Sign up and get 20% off to your first order.{" "}
          <Link href="/signup">Sign Up Now</Link>
        </div>
        <button
          className="absolute right-20 top-[11.5px] hidden sm:block"
          onClick={() => setShowBanner(false)}
        >
          <X size={18} />
        </button>
      </div>
    )
  );
}
