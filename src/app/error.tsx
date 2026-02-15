"use client";

import MainContainer from "@/components/layout/MainContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error",
};

export default function ErrorPage() {
  return (
    <MainContainer>
      <div>Server error. Site will be available soon</div>
    </MainContainer>
  );
}
