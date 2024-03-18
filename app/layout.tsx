import "../styles/globals.css";
export const metadata = {
  title: "GHL | Page doesnt exit",
  description: "Page is not found",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
