import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TopSchool AI - Task Management",
  description: "Stay organized and boost your productivity with our powerful task management system",
  keywords: ["task management", "productivity", "todo", "organization", "TopSchool AI"],
  authors: [{ name: "TopSchool AI" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        style={{ fontFamily: 'Segoe UI, Roboto, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, system-ui, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
