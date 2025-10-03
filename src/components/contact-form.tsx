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

I'm interested in learning more about my home financing options. Here is my situation:

- **Loan Purpose:** (e.g., Home purchase, Refinancing, Investment property)
- **Zip Code:** (e.g., 98005)
- **Estimated Property Price/Value:** (e.g., Approx. $500,000)
- **Down Payment:** (e.g., 10%, or a specific dollar amount)
- **Credit Score:** (e.g., Excellent, Good, Fair, or a specific score if known)
- **Residency Status:** (e.g., Citizen, Permanent Resident Alien)
- **Employment Status:** (e.g., Employed, Self-employed)
- **Additional Details:** (e.g., I'm a veteran, I have some questions about closing costs, etc.)


I am available to talk on ________ at ________.

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
