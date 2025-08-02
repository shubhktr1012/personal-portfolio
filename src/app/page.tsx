import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-muted-foreground">
          This is where your portfolio content will go.
        </p>
      </main>
    </div>
  );
}
