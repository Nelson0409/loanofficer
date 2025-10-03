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
(你好，Nelson。我想了解更多关于房屋贷款的信息，以下是我的基本情况。)

Loan & Property Details (贷款和房产信息)
-   Loan Purpose (贷款目的): (e.g., Home purchase/购房, Refinancing/重新贷款)
-   Zip Code (邮政编码):  (e.g., 98005)
-   Estimated Property Value (预估房价): (e.g., $500,000)
-   Property Structure（房产类型）：（e.g., Single Family、独栋, Condo/公寓）
-   Occupancy (房产用途)： （e.g, Primary Residence/自住， Second Home/度假屋， Investment Property/投资）
-   Loan Amount (贷款金额): (e.g., $400,000)
-   Preferred Term (期望贷款年限): (e.g., 30-year fixed/30年固定， 15-year fixed/15年固定， ARM)

Personal Information (个人信息)
-   Credit Score (信用分数): (e.g., Excellent/优秀, Good/良好, Fair/一般)
-   Residency Status (身份状态): (e.g., Citizen/公民, Permanent Resident/永久居民, Visa/签证)

Additional Details (其他补充)
-   (e.g., I'm a first-time homebuyer/我是首次购房者, I have questions about VA loans/我对VA贷款有疑问, etc.)

Availability (方便联系的时间)
-   I am available to talk on ________ at ________. (我方便在 __ 时间与你联系)

Thank you,
[Your Name] (您的名字)
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
