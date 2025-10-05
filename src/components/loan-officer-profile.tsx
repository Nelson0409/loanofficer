import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Separator } from './ui/separator';

const LoanOfficerProfile = () => {

  return (
    <Card className="overflow-hidden shadow-lg sticky top-8">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
            <Image
            src="https://picsum.photos/seed/building/600/400"
            alt="Office building"
            data-ai-hint="office building"
            fill
            className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="relative -mt-16 flex justify-center">
            <Avatar className="h-32 w-32 border-4 border-background shadow-md">
            <AvatarImage src="/nelson-liu.jpg" alt="A professional headshot of Nelson Liu, a loan officer." />
            <AvatarFallback>NL</AvatarFallback>
            </Avatar>
        </div>
      </CardHeader>
      <CardContent className="text-center pt-6">
        <h2 className="text-3xl font-bold font-headline">Nelson Liu</h2>
        <p className="text-primary font-semibold">Loan Officer - Xpro Mortgage</p>
        <Badge variant="secondary" className="mt-2">NMLS #2571046</Badge>

        <p className="text-muted-foreground mt-4 text-sm px-4">
        More than a loan officer, I am a partner in your financial journey. With every client, I provide personalized service, clear communication, and the expert guidance needed to make smart, confident financial decisions.
        </p>

        <Separator className="my-6" />

        <div className="text-left space-y-4 text-sm">
            <a href="tel:425-728-4969" className="flex items-center gap-3 transition-colors hover:text-primary">
                <Phone className="h-5 w-5 text-accent" />
                <span>(425) 728-4969</span>
            </a>
            <a href="mailto:Ziheng.Liu@xpromortgage.com" className="flex items-center gap-3 transition-colors hover:text-primary">
                <Mail className="h-5 w-5 text-accent" />
                <span>Ziheng.Liu@xpromortgage.com</span>
            </a>
            <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span>11900 NE 1st St,  #300 Bellevue, WA 98005</span>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoanOfficerProfile;
