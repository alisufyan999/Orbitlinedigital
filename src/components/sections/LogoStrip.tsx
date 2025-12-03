import Image from "next/image";

export const LogoStrip = () => {
  return (
    <section className="bg-background py-12 md:py-16 border-b border-border">
      <div className="container-wide">
        <p className="text-center text-muted-foreground mb-8 font-medium">
          Trusted by teams at growth-focused brands
        </p>

        {/* Logos grid */}
        <div className="grid grid-cols-2 lg:grid-cols-8 gap-8 md:gap-10 lg:gap-8 items-center justify-items-center">
          <div className="flex items-center justify-center h-12 w-full">
            <Image
              src="/assets/images/client/sp1.png"
              alt="Client Logo 1"
              width={120}
              height={48}
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-12 w-full">
            <Image
              src="/assets/images/client/sp2.png"
              alt="Client Logo 2"
              width={120}
              height={48}
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-12 w-full">
            <Image
              src="/assets/images/client/sp3.png"
              alt="Client Logo 3"
              width={120}
              height={48}
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-12 w-full">
            <Image
              src="/assets/images/client/sp4.png"
              alt="Client Logo 4"
              width={120}
              height={48}
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-12 w-full">
            <Image
              src="/assets/images/client/sp5.png"
              alt="Client Logo 5"
              width={120}
              height={48}
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-12 w-full">
            <Image
              src="/assets/images/client/sp6.png"
              alt="Client Logo 6"
              width={120}
              height={48}
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-12 w-full">
            <Image
              src="/assets/images/client/sp7.png"
              alt="Client Logo 7"
              width={120}
              height={48}
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-12 w-full">
            <Image
              src="/assets/images/client/sp8.png"
              alt="Client Logo 8"
              width={120}
              height={48}
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>

        <p className="text-center text-muted-foreground/60 text-sm mt-8">
          1,000+ pages designed, written and developed across dozens of industries
        </p>
      </div>
    </section>
  );
};
