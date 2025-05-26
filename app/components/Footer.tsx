import React from "react";

export default function Footer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="absolute top-470.5 right-0  pr-11.5 z-30 flex flex-row gap-4 -translate-y-13">
      {children}
    </div>
  );
}
