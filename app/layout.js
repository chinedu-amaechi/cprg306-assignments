import "./globals.css";

export const metadata = {
  title: "Shopping List",
  description: "DEMOs for CPRG306 Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}