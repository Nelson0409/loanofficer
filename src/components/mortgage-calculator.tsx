"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator } from "lucide-react";

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState<string | null>(null);

  useEffect(() => {
    const calculateMonthlyPayment = () => {
      const principal = loanAmount;
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;

      if (principal > 0 && monthlyInterestRate > 0 && numberOfPayments > 0) {
        const x = Math.pow(1 + monthlyInterestRate, numberOfPayments);
        const monthly = (principal * x * monthlyInterestRate) / (x - 1);
        setMonthlyPayment(monthly.toFixed(2));
      } else {
        setMonthlyPayment("0.00");
      }
    };

    calculateMonthlyPayment();
  }, [loanAmount, interestRate, loanTerm]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
  }

  return (
    <section id="mortgage-calculator">
        <div className="text-center mb-8">
            <h2 className="text-4xl font-bold font-headline">Mortgage Calculator</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Estimate your monthly mortgage payment with our simple calculator.
            </p>
        </div>
        <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-3xl">
                    <Calculator className="h-8 w-8 text-primary" />
                    Payment Estimator
                </CardTitle>
                <CardDescription>
                    Adjust the sliders to see how loan amount, interest rate, and term affect your payment.
                </CardDescription>
            </CardHeader>
            <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                <div>
                    <div className="flex justify-between items-center mb-2">
                    <Label htmlFor="loan-amount" className="text-lg">Loan Amount</Label>
                    <span className="font-bold text-lg text-primary">{formatCurrency(loanAmount)}</span>
                    </div>
                    <Slider
                    id="loan-amount"
                    min={50000}
                    max={2000000}
                    step={10000}
                    value={[loanAmount]}
                    onValueChange={(value) => setLoanAmount(value[0])}
                    />
                </div>
                <div>
                    <div className="flex justify-between items-center mb-2">
                    <Label htmlFor="interest-rate" className="text-lg">Interest Rate</Label>
                    <span className="font-bold text-lg text-primary">{interestRate.toFixed(2)}%</span>
                    </div>
                    <Slider
                    id="interest-rate"
                    min={2}
                    max={15}
                    step={0.01}
                    value={[interestRate]}
                    onValueChange={(value) => setInterestRate(value[0])}
                    />
                </div>
                <div>
                    <div className="flex justify-between items-center mb-2">
                    <Label htmlFor="loan-term" className="text-lg">Loan Term</Label>
                    <span className="font-bold text-lg text-primary">{loanTerm} Years</span>
                    </div>
                    <Slider
                    id="loan-term"
                    min={5}
                    max={30}
                    step={1}
                    value={[loanTerm]}
                    onValueChange={(value) => setLoanTerm(value[0])}
                    />
                </div>
                </div>
                <div className="bg-secondary/50 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                    <p className="text-muted-foreground text-lg">Estimated Monthly Payment</p>
                    <p className="text-5xl font-bold text-primary mt-2">
                        {monthlyPayment !== null ? formatCurrency(parseFloat(monthlyPayment)) : "$0"}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        This is an estimate and does not include taxes, insurance, or PMI.
                    </p>
                </div>
            </div>
            </CardContent>
        </Card>
    </section>
  );
};

export default MortgageCalculator;
