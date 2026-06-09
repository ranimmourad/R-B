import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "default" | "compact";
}

export default function Logo({ className = "", variant = "default" }: LogoProps) {
  const size = variant === "compact" ? 36 : 44;
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`} aria-label="R&B Clothing Store">
      <Image
        src="/logo/logo.png"
        alt="R&B Clothing Store"
        width={size}
        height={size}
        priority
        className="rounded-sm"
      />
      <span className="hidden sm:flex flex-col leading-none">
        <span className="font-serif text-xl text-brand-700 tracking-wider2">R&B</span>
        <span className="text-[10px] tracking-widest text-neutral-500 uppercase">
          Clothing Store
        </span>
      </span>
    </Link>
  );
}
