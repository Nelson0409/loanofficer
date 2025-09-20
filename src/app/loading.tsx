import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <header className="py-10">
        <div className="container mx-auto px-4 text-center">
            <Skeleton className="h-16 w-3/4 mx-auto" />
        </div>
      </header>
      <main className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-1">
            <Skeleton className="h-[500px] w-full rounded-lg" />
          </div>
          <div className="lg:col-span-2">
            <Skeleton className="h-[500px] w-full rounded-lg" />
          </div>
        </div>
        <Skeleton className="h-px w-full my-12 lg:my-16" />
        <div className="text-center mb-8">
            <Skeleton className="h-10 w-1/2 mx-auto" />
            <Skeleton className="h-4 w-3/4 mx-auto mt-4" />
        </div>
        <div className="space-y-4 max-w-4xl mx-auto">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
        </div>
      </main>
      <footer className="bg-secondary py-6">
        <div className="container mx-auto px-4 text-center space-y-2">
            <Skeleton className="h-4 w-1/3 mx-auto" />
            <Skeleton className="h-4 w-1/4 mx-auto" />
        </div>
      </footer>
    </div>
  );
}
