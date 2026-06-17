import "./globals.css";

export const metadata = {
  title: "Anant Pradnya School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
