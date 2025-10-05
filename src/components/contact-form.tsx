"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LoanInquiryGuide = () => {
  const loanOfficerEmail = "Ziheng.Liu@xpromortgage.com";
  
  const emailTemplateEnglish = `
Hello Nelson,

I'm interested in learning more about my home financing options. Please see my details below.

Loan & Property Details
-   Loan Purpose: (e.g., Home purchase, Refinancing)
-   Zip Code:  (e.g., 98005)
-   Estimated Property Value: (e.g., $500,000)
-   Property Structure: (e.g., Single Family, Condo)
-   Occupancy: (e.g., Primary Residence, Second Home, Investment Property)
-   Loan Amount: (e.g., $400,000)
-   Preferred Term: (e.g., 30-year fixed, 15-year fixed, ARM)

Personal Information
-   Credit Score: (e.g., Excellent, Good, Fair)
-   Residency Status: (e.g., Citizen, Permanent Resident, Visa)

Additional Details
-   (e.g., I'm a first-time homebuyer, I have questions about VA loans, etc.)

Availability
-   I am available to talk on ________ at ________.

Thank you,
[Your Name]
  `.trim();

  const emailTemplateChinese = `
你好, Nelson,

我想了解更多关于房屋贷款的信息，以下是我的基本情况。

贷款和房产信息
-   贷款目的: (例如, 购房, 重新贷款)
-   邮政编码: (例如, 98005)
-   预估房价: (例如, $500,000)
-   房产类型: (例如, 独栋, 公寓)
-   房产用途: (例如, 自住, 度假屋, 投资)
-   贷款金额: (例如, $400,000)
-   期望贷款年限: (例如, 30年固定, 15年固定, ARM)

个人信息
-   信用分数: (例如, 优秀, 良好, 一般)
-   身份状态: (例如, 公民, 永久居民, 签证)

其他补充
-   (例如, 我是首次购房者, 我对VA贷款有疑问, 等等)

方便联系的时间
-   我方便在 ________ 的 ________ 与你联系。

谢谢,
[您的名字]
  `.trim();

  const [activeTab, setActiveTab] = useState("english");
  const [englishScenario, setEnglishScenario] = useState(emailTemplateEnglish);
  const [chineseScenario, setChineseScenario] = useState(emailTemplateChinese);

  const handleEmailClick = () => {
    const isChineseTab = activeTab === "chinese";
    const subject = isChineseTab ? "贷款咨询 (Loan Inquiry)" : "Loan Inquiry (贷款咨询)";
    const body = isChineseTab ? chineseScenario : englishScenario;
    window.location.href = `mailto:${loanOfficerEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Card className="shadow-lg">
      <Tabs defaultValue="english" onValueChange={setActiveTab} className="w-full">
        <CardHeader>
            <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="english">English</TabsTrigger>
                <TabsTrigger value="chinese">中文 (Chinese)</TabsTrigger>
            </TabsList>
            {activeTab === 'english' ? (
                <>
                    <CardTitle className="font-headline text-3xl flex items-center gap-2">
                        <FileText className="h-8 w-8 text-primary" />
                        Same Day Loan Quote
                    </CardTitle>
                    <CardDescription>
                        Use the template below to structure your email. This will help me understand your needs and provide the best possible advice.
                    </CardDescription>
                </>
            ) : (
                <>
                    <CardTitle className="font-headline text-3xl flex items-center gap-2">
                        <FileText className="h-8 w-8 text-primary" />
                        贷款咨询，当天回复
                    </CardTitle>
                    <CardDescription>
                        您可以用下面的邮件模板描述您的贷款需求，以便我更好地为您服务。
                    </CardDescription>
                </>
            )}
        </CardHeader>
        <CardContent>
            <TabsContent value="english" className="mt-0">
                <Textarea
                value={englishScenario}
                onChange={(e) => setEnglishScenario(e.target.value)}
                className="min-h-[600px] text-sm bg-secondary/50"
                aria-label="English loan inquiry email template"
                />
            </TabsContent>
            <TabsContent value="chinese" className="mt-0">
                <Textarea
                value={chineseScenario}
                onChange={(e) => setChineseScenario(e.target.value)}
                className="min-h-[600px] text-sm bg-secondary/50"
                aria-label="Chinese loan inquiry email template"
                />
            </TabsContent>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-xs text-muted-foreground flex-1 text-center sm:text-left">
                Click the button to open the template for the selected language in your email client.
            </p>
            <Button onClick={handleEmailClick} className="w-full sm:w-auto bg-accent hover:bg-accent/90">
                <Mail className="mr-2 h-4 w-4" /> Open in Email
            </Button>
        </CardFooter>
      </Tabs>
    </Card>
  );
};

export default LoanInquiryGuide;
