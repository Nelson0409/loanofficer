import LoanOfficerProfile from '@/components/loan-officer-profile';
import ContactForm from '@/components/contact-form';
import LoanProducts from '@/components/loan-products';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-headline tracking-tight text-primary-foreground bg-primary py-4 px-8 rounded-lg shadow-md inline-block">
            Your Trusted Partner in Home Financing
          </h1>
        </div>
      </header>
      <main className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-1">
            <LoanOfficerProfile />
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
        <Separator className="my-12 lg:my-16" />
        <LoanProducts />
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
