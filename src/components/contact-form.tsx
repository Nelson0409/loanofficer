"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, FileText } from "lucide-react";

const LoanInquiryGuide = () => {
  const loanOfficerEmail = "Ziheng.Liu@xpromortgage.com";
  const emailSubject = "Loan Inquiry";

  const emailTemplate = `
Hello Nelson,

I'm interested in learning more about my home financing options. Please see my details below.

**Loan & Property Details**
*   **Loan Purpose:** (e.g., Home purchase, Refinancing)
*   **Zip Code:** (e.g., 98005)
*   **Estimated Property Value:** (e.g., $500,000)
*   **Loan Amount:** (e.g., $400,000)
*   **Preferred Term:** (e.g., 30-year fixed)

**Personal Information**
*   **Credit Score:** (e.g., Excellent, Good, Fair)
*   **Residency Status:** (e.g., Citizen, Permanent Resident)

**Additional Details**
*   (e.g., I'm a first-time homebuyer, I have questions about VA loans, etc.)

**Availability**
*   I am available to talk on ________ at ________.

Thank you,
[Your Name]
  `.trim();

  const [scenario, setScenario] = useState(emailTemplate);

  const handleEmailClick = () => {
    window.location.href = `mailto:${loanOfficerEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(scenario)}`;
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl flex items-center gap-2">
          <FileText className="h-8 w-8 text-primary" />
          Loan Inquiry Guide
        </CardTitle>
        <CardDescription>
          Use the template below to structure your email. This will help me understand your needs and provide the best possible advice.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Textarea 
          value={scenario}
          onChange={(e) => setScenario(e.target.value)}
          className="min-h-[300px] text-sm bg-secondary/50"
        />
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row items-center gap-4">
         <p className="text-xs text-muted-foreground flex-1 text-center sm:text-left">
            Click the button to open this template in your default email client.
        </p>
        <Button onClick={handleEmailClick} className="w-full sm:w-auto bg-accent hover:bg-accent/90">
            <Mail className="mr-2 h-4 w-4" /> Open in Email
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LoanInquiryGuide;
