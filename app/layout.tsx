import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { metadataBase:new URL("https://russiastudentbd.com"), title:{ default:"Russia Student Connect BD", template:"%s | Russia Student Connect BD" }, description:"Your trusted information hub for studying and living in Russia.", alternates:{ canonical:"/" } };
export default function Layout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
