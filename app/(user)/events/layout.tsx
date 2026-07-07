import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | CCA RnD",
  description: "Check out our upcoming events and activities.",
};

export default function Event({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
