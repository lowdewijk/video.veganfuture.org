import { redirect } from "next/navigation";
import "./globals.css";
import { BASE_METADATA } from "@/lib/metadata";

export const metadata = BASE_METADATA;

export default function RootLayout() {
  redirect("https://kindfuturenow.org");
}
