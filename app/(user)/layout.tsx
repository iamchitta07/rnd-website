import type { Metadata } from "next";
import Footer from "../_components/footer/Footer";
import Header from "../_components/header/Header";
import { userHeaderLinks } from "@/utils";

export const metadata: Metadata = {
  title: "CCA RnD | Home",
  description:
    "Write from the begining of the dark age alot of ground breaking discoveries were made by man. There is no field in which research is not done. Research and Development (R&D) flourishes where young minds and experienced faculties work synergistically. R&D Cell has been established to promote and monitor the research Programs of the institute. The cell administers all the research Programs of the university by monitoring and coordinating the research Programs.The Research and Development Cell aims to nurture research culture in the College by promoting research in newly emerging and challenging areas of Engineering, Technology, Science and Humanities. Faculty and students have been encouraged to be creative, since it is the creative aspect that induces newer thinking. Lectures and demonstration are made for students to kindle their spirit of creativity by our own faculty and other experts along with paper presentation and workshop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header LINKS={userHeaderLinks} />
      <div className="flex-1 flex flex-col">{children}</div>
      <Footer />
    </>
  );
}
