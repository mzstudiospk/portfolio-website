"use client";

import { useState } from "react";
import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";

export default function ProfileImage({ className = "" }: { className?: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <PlaceholderImage
        width={288}
        height={288}
        text="Muhammad Zeeshan"
        bgColor="#3B82F6"
        textColor="#FFFFFF"
        className={className}
      />
    );
  }

  return (
    <Image
      src="/profile.png"
      alt="Muhammad Zeeshan"
      width={288}
      height={288}
      className={className}
      onError={() => setHasError(true)}
      priority
    />
  );
}
