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
  },
  {
    id: "appraisal",
    question: "What is an Appraisal?",
    answer: "An appraisal is a professional, unbiased estimate of a property's market value. Lenders require an appraisal before approving a mortgage to ensure that the loan amount is not more than what the property is worth. An independent appraiser assesses the home's condition, size, features, and compares it to similar properties that have recently sold in the area."
  },
  {
    id: "title",
    question: "What is Title?",
    answer: "Title is a legal concept that represents ownership of a property. When you buy a home, the title is transferred to you, giving you the legal right to use and possess the property. Title insurance is purchased to protect the owner and lender from any future claims or disputes over ownership."
  },
  {
    id: "rate-lock",
    question: "What does it mean to lock the interest rate?",
    answer: "Locking your interest rate means securing a specific rate with your lender for a set period, typically 30 to 60 days. This protects you from potential increases in interest rates while your loan is being processed. If market rates go up during this period, your locked rate remains the same."
  },
  {
    id: "apr",
    question: "What is an APR?",
    answer: "The Annual Percentage Rate (APR) is the total cost of borrowing money expressed as a yearly rate. It includes not only the interest rate but also other fees associated with the loan, such as lender fees, closing costs, and mortgage insurance. The APR gives you a more complete picture of the loan's cost than the interest rate alone."
  },
  {
    id: "points",
    question: "What are points?",
    answer: "Mortgage points, also known as discount points, are fees paid directly to the lender at closing in exchange for a lower interest rate. One point costs 1% of your mortgage amount. Paying for points can be a good option if you plan to stay in your home for a long time, as the long-term interest savings can outweigh the upfront cost."
  },
  {
    id: "refinance",
    question: "When should I refinance?",
    answer: "Refinancing might be a good idea if you can get a lower interest rate than your current one, which could reduce your monthly payments and total interest paid. Other reasons to refinance include switching from an adjustable-rate to a fixed-rate mortgage, shortening your loan term, or tapping into your home equity for large expenses."
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
