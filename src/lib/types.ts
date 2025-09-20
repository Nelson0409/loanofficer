import type { LucideIcon } from "lucide-react";

export type LoanProduct = {
  id: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  features: string[];
  benefits: string[];
  eligibility: string;
};
