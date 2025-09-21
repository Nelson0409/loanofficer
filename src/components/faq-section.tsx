import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqData = [
  {
    id: "down-payment",
    question: "What is a down payment?",
    answer: "A down payment is the initial, upfront portion of the total cost of a property that you pay out of your own pocket. It is typically a percentage of the purchase price, and the amount can vary based on the loan type and your financial situation. A larger down payment can lower your monthly mortgage payments and may help you secure a better interest rate."
  },
  {
    id: "pmi",
    question: "What is Private Mortgage Insurance (PMI)?",
    answer: "Private Mortgage Insurance (PMI) is a type of insurance required by lenders when a borrower makes a down payment of less than 20% on a conventional loan. It protects the lender in case you default on the loan. PMI is usually paid monthly as part of your mortgage payment, but can sometimes be paid as a lump sum. Once you have 20% equity in your home, you can typically request to have PMI removed."
  },
  {
    id: "pre-approval",
    question: "What's the difference between pre-qualification and pre-approval?",
    answer: "Pre-qualification is a quick, informal estimate of how much you might be able to borrow based on self-reported financial information. Pre-approval is a more formal process where the lender verifies your income, assets, and credit score to determine a specific loan amount you are approved for. A pre-approval letter makes your offer on a home stronger because it shows you are a serious and financially capable buyer."
  },
  {
    id: "escrow",
    question: "What is an escrow account?",
    answer: "An escrow account is an account managed by your mortgage lender to pay for your property taxes and homeowners' insurance. A portion of your monthly mortgage payment is deposited into this account. When your tax and insurance bills are due, the lender pays them on your behalf from the escrow account. This ensures these important bills are paid on time and protects both you and the lender."
  }
];

const FaqSection = () => {
  return (
    <section id="faq">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold font-headline">Frequently Asked Questions</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Understanding the mortgage process is key. Here are answers to some common questions.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
        {faqData.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id} className="bg-card border-none mb-4 rounded-lg shadow-md transition-shadow hover:shadow-xl">
            <AccordionTrigger className="p-6 text-lg font-semibold hover:no-underline text-left">
              <div className="flex items-center gap-4">
                <HelpCircle className="h-6 w-6 text-primary shrink-0" />
                <span>{faq.question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0 text-muted-foreground">
              <p>{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqSection;
