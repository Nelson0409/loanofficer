import LoanOfficerProfile from '@/components/loan-officer-profile';
import ContactForm from '@/components/contact-form';
import FaqSection from '@/components/faq-section';
import { Separator } from '@/components/ui/separator';
import MortgageCalculator from '@/components/mortgage-calculator';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-1">
            <LoanOfficerProfile />
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
        <Separator className="my-12 lg:my-16" />
        <MortgageCalculator />
        <Separator className="my-12 lg:my-16" />
        <FaqSection />
      </main>
      <footer className="bg-secondary py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Xpro Mortgage Inc. All Rights Reserved.</p>
          <p>NMLS #1033790 | Equal Housing Lender</p>
        </div>
      </footer>
    </div>
  );
}
