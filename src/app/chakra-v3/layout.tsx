import type { Metadata } from "next";
import { Provider } from "../../components/ui/provider";

export const metadata: Metadata = {
  title: "Chakra V3",
  description: "Chakra V3 x AppRouter",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Provider>{children}</Provider>;
}
