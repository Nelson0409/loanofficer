
'use server';
/**
 * @fileOverview A Genkit flow for analyzing a user's loan application scenario.
 *
 * - analyzeLoanScenarioFlow - A function that analyzes the user's described financial situation.
 * - LoanScenarioInput - The input type for the flow.
 * - LoanScenarioAnalysis - The return type for the flow.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const LoanScenarioInputSchema = z.object({
  scenario: z.string().describe('A description of the user\'s financial situation and loan requirements.'),
});
export type LoanScenarioInput = z.infer<typeof LoanScenarioInputSchema>;

const LoanScenarioAnalysisSchema = z.object({
    suggestion: z.object({
        loanType: z.string().describe('The suggested loan type from the following options: Conventional, FHA, VA, Jumbo.'),
        reasoning: z.string().describe('A brief explanation for why this loan type is recommended.'),
    }),
    nextSteps: z.array(z.string()).describe('A list of recommended next steps for the user to take.'),
});
export type LoanScenarioAnalysis = z.infer<typeof LoanScenarioAnalysisSchema>;


const prompt = ai.definePrompt({
    name: 'loanScenarioPrompt',
    input: { schema: LoanScenarioInputSchema },
    output: { schema: LoanScenarioAnalysisSchema },
    prompt: `You are an expert loan officer assistant. Analyze the user's scenario and suggest the most suitable loan type.

    The available loan types are:
    - Conventional Loans: Ideal for borrowers with strong credit.
    - FHA Loans: Great for first-time homebuyers with lower credit scores or smaller down payments.
    - VA Loans: An exclusive benefit for veterans, service members, and eligible spouses.
    - Jumbo Loans: For loan amounts that exceed conforming loan limits.

    Based on the user's description, determine the best fit and provide a brief reasoning. Also, provide 2-3 clear, actionable next steps for the user.

    User Scenario: {{{scenario}}}`,
});

export const analyzeLoanScenarioFlow = ai.defineFlow(
  {
    name: 'analyzeLoanScenarioFlow',
    inputSchema: LoanScenarioInputSchema,
    outputSchema: LoanScenarioAnalysisSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to get analysis from the model.');
    }
    return output;
  }
);
