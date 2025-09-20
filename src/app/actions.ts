
"use server";

import { analyzeLoanScenarioFlow, LoanScenarioAnalysis } from "@/ai/flows/analyze-loan-scenario-flow";
import { z } from "zod";

export type FormState = {
  message: string;
  status: "success" | "error" | "idle";
  analysis?: LoanScenarioAnalysis | null;
};

const loanScenarioSchema = z.string().min(20);

export async function analyzeLoanScenario(
  scenario: string,
): Promise<FormState> {
  const validatedField = loanScenarioSchema.safeParse(scenario);

  if (!validatedField.success) {
    return {
      message: "Please describe your scenario in at least 20 characters.",
      status: "error",
    };
  }

  try {
    const analysis = await analyzeLoanScenarioFlow({ scenario: validatedField.data });
    return {
      message: "Analysis complete.",
      status: "success",
      analysis,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "An error occurred during analysis. Please try again.",
      status: "error",
    };
  }
}
