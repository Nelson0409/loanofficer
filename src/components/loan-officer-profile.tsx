import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Separator } from './ui/separator';

const LoanOfficerProfile = () => {
  const officerImage = PlaceHolderImages.find(p => p.id === 'loan-officer-photo');

  return (
    <Card className="overflow-hidden shadow-lg sticky top-8">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
            {officerImage && (
                <Image
                src={officerImage.imageUrl}
                alt="Office building"
                data-ai-hint="office building"
                fill
                className="object-cover"
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="relative -mt-16 flex justify-center">
            <Avatar className="h-32 w-32 border-4 border-background shadow-md">
            {officerImage && <AvatarImage src={officerImage.imageUrl} alt="Jane Doe" data-ai-hint={officerImage.imageHint} />}
            <AvatarFallback>JD</AvatarFallback>
            </Avatar>
        </div>
      </CardHeader>
      <CardContent className="text-center pt-6">
        <h2 className="text-3xl font-bold font-headline">Jane Doe</h2>
        <p className="text-primary font-semibold">Senior Loan Officer</p>
        <Badge variant="secondary" className="mt-2">NMLS #654321</Badge>

        <p className="text-muted-foreground mt-4 text-sm px-4">
          With over 15 years of experience, Jane is dedicated to finding the perfect loan product for your unique needs, ensuring a smooth and transparent process from start to finish.
        </p>

        <Separator className="my-6" />

        <div className="text-left space-y-4 text-sm">
            <a href="tel:123-456-7890" className="flex items-center gap-3 transition-colors hover:text-primary">
                <Phone className="h-5 w-5 text-accent" />
                <span>(123) 456-7890</span>
            </a>
            <a href="mailto:jane.doe@example.com" className="flex items-center gap-3 transition-colors hover:text-primary">
                <Mail className="h-5 w-5 text-accent" />
                <span>jane.doe@example.com</span>
            </a>
            <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span>123 Finance St, Moneysville, USA</span>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoanOfficerProfile;
