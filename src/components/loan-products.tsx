import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Home, Building, Banknote, Landmark, CheckCircle, Star, ShieldCheck } from "lucide-react";
import type { LoanProduct } from "@/lib/types";

const loanProductsData: LoanProduct[] = [
  {
    id: "conventional",
    title: "Conventional Loans",
    icon: Home,
    summary: "Ideal for borrowers with strong credit, offering competitive interest rates and flexible terms.",
    features: ["Fixed or adjustable rates", "Various term lengths (15, 20, 30 years)", "Lower private mortgage insurance (PMI) possible"],
    benefits: ["Often the lowest cost option over the life of the loan", "Can be used for primary homes, second homes, or investment properties"],
    eligibility: "Typically requires a credit score of 620+ and a down payment of at least 3-5%.",
  },
  {
    id: "fha",
    title: "FHA Loans",
    icon: ShieldCheck,
    summary: "Backed by the government, these loans are great for first-time homebuyers with lower credit scores or smaller down payments.",
    features: ["Low down payment options (as low as 3.5%)", "Flexible credit score requirements", "Assumable loans"],
    benefits: ["Easier to qualify for than conventional loans", "Competitive interest rates", "Allows sellers to contribute to closing costs"],
    eligibility: "Minimum credit score of 580 for 3.5% down, or 500-579 for 10% down. Requires mortgage insurance.",
  },
  {
    id: "va",
    title: "VA Loans",
    icon: Star,
    summary: "An exclusive benefit for veterans, service members, and eligible spouses, often with no down payment required.",
    features: ["No down payment required for most borrowers", "No private mortgage insurance (PMI)", "Limits on closing costs"],
    benefits: ["Outstanding value with significant savings", "Reusable benefit for future home purchases", "Favorable interest rates"],
    eligibility: "Must meet military service requirements. Certificate of Eligibility (COE) required.",
  },
  {
    id: "jumbo",
    title: "Jumbo Loans",
    icon: Landmark,
    summary: "For loan amounts that exceed the conforming loan limits, ideal for purchasing high-value properties.",
    features: ["Finance luxury or high-cost area homes", "Fixed and adjustable-rate options", "Competitive interest rates"],
    benefits: ["Access to larger loan amounts than conventional loans", "Flexibility for unique, high-end properties"],
    eligibility: "Requires excellent credit, significant assets, and a larger down payment (typically 10-20%).",
  },
];

const LoanProducts = () => {
  return (
    <section id="loan-products">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold font-headline">Loan Products Offered</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Explore a variety of loan options tailored to fit your financial situation and homeownership goals.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
        {loanProductsData.map((product) => (
          <AccordionItem key={product.id} value={product.id} className="bg-card border-none mb-4 rounded-lg shadow-md transition-shadow hover:shadow-xl">
            <AccordionTrigger className="p-6 text-lg font-semibold hover:no-underline">
              <div className="flex items-center gap-4">
                <product.icon className="h-8 w-8 text-primary" />
                <div className="text-left">
                  <span>{product.title}</span>
                  <p className="text-sm font-normal text-muted-foreground">{product.summary}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2"><Star className="h-5 w-5 text-accent" /> Key Features</h4>
                  <ul className="list-none space-y-2 text-muted-foreground">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-1 text-primary/80 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2"><Banknote className="h-5 w-5 text-accent" /> Main Benefits</h4>
                  <ul className="list-none space-y-2 text-muted-foreground">
                    {product.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 mt-1 text-primary/80 shrink-0" />
                            <span>{benefit}</span>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold mb-2 flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-accent" /> Basic Eligibility</h4>
                <p className="text-muted-foreground">{product.eligibility}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default LoanProducts;
