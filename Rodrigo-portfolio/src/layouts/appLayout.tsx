import type { ReactNode } from "react";
import Navbar from "../components/layout/navbar";
import GridBackground from "../components/layout/gridBackground";
import Container from "../components/layout/container";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      <GridBackground />
      <Navbar />

      <main className="pt-20 relative z-10">
        <Container>
          {children}
        </Container>
      </main>

    </div>
  );
}