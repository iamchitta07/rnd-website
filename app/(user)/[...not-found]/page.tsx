import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The resource you are looking for does not exist.",
};
function page() {
  notFound();
}

export default page;
