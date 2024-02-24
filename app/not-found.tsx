import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
  description: "This page could not be found.",
};

export default function NotFound() {
  return <h1>Not Found</h1>;
}