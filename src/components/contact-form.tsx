
"use client";

import { useActionState, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Sparkles, Wand2 } from "lucide-react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { analyzeLoanScenario, type FormState } from "@/app/actions";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { LoanScenarioAnalysis } from "@/ai/flows/analyze-loan-scenario-flow";

const loanScenarioSchema = z.object({
  scenario: z.string().min(20, "Please describe your scenario in at least 20 characters."),
});

type LoanScenarioFormValues = z.infer<typeof loanScenarioSchema>;

const LoanScenarioForm = () => {
  const { toast } = useToast();
  const [analysis, setAnalysis] = useState<LoanScenarioAnalysis | null>(null);
  const [pending, setPending] = useState(false);
  
  const form = useForm<LoanScenarioFormValues>({
    resolver: zodResolver(loanScenarioSchema),
    defaultValues: {
      scenario: "",
    },
  });

  const onSubmit = async (data: LoanScenarioFormValues) => {
    setPending(true);
    setAnalysis(null);
    const result = await analyzeLoanScenario(data.scenario);
    setPending(false);

    if (result.status === "success") {
      setAnalysis(result.analysis);
      form.reset();
    } else {
      toast({
        title: "Error",
        description: result.message,
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl flex items-center gap-2">
          <Wand2 className="h-8 w-8 text-primary" />
          Loan Scenario Analyzer
        </CardTitle>
        <CardDescription>
          Describe your financial situation and what you're looking for in a loan. Our AI will provide instant feedback and suggestions.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="scenario"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Scenario</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="e.g., I'm a first-time homebuyer with a good credit score, looking for a low down payment option on a house around $500,000. I have a stable job and some savings..." 
                      className="min-h-[150px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             {pending && (
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Analyzing your scenario...</span>
              </div>
            )}
            {analysis && (
              <Alert>
                <Sparkles className="h-4 w-4" />
                <AlertTitle className="font-semibold">AI Analysis Complete!</AlertTitle>
                <AlertDescription className="mt-2 space-y-3">
                  <p>
                    <span className="font-semibold">Suggested Loan Type: </span> {analysis.suggestion.loanType}
                  </p>
                  <p>
                    <span className="font-semibold">Reasoning: </span>{analysis.suggestion.reasoning}
                  </p>
                  <div>
                    <p className="font-semibold mb-1">Next Steps:</p>
                    <ul className="list-disc pl-5 space-y-1 text-xs">
                      {analysis.nextSteps.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ul>
                  </div>
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-accent hover:bg-accent/90">
              {pending ? 'Analyzing...' : 'Analyze My Scenario'}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default LoanScenarioForm;
