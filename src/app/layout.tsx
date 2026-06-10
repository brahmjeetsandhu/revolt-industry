import "./globals.css";

export const metadata = {
  title: "Revolt Industry",
  description: "A new era for comic creators",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}