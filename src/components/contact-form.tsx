"use client";

import { useFormStatus } from "react-dom";
import { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type FormState } from "@/app/actions";
import { Send } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-accent hover:bg-accent/90">
      {pending ? (
        <>
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
          Sending...
        </>
      ) : (
        <>
          <Send className="mr-2" />
          Send Message
        </>
      )}
    </Button>
  );
}

const ContactForm = () => {
  const { toast } = useToast();
  const initialState: FormState = { message: "", status: "idle" };
  const [state, formAction] = useActionState(submitContactForm, initialState);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Success!",
        description: state.message,
      });
      form.reset();
    } else if (state.status === "error") {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast, form]);

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl">Get in Touch</CardTitle>
        <CardDescription>
          Have questions or ready to start your application? Send me a message!
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form
          action={formAction}
          className="space-y-6"
        >
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="I'd like to inquire about..." className="min-h-[120px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-end">
            <SubmitButton />
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default ContactForm;
