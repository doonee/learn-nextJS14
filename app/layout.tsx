import Navigation from "../components/navigation";

export const metadata = {
  title: { template: "%s | Title 변경 테스트", default: "Title 변경 테스트" },
  description: "설명 변경 테스트...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
