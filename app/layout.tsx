import { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <Suspense fallback={<Loading />}>
          <div style={{ background: "#F8F8F8" }}>{children}</div>
        </Suspense>
      </body>
    </html>
  );
}
