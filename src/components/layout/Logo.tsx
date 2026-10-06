import Image from "next/image";
import Link from "next/link";

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={64}
      height={64}
      className={`${className} rounded-lg shadow-card`}
      aria-hidden
      priority
    />
  );
}

export function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 font-bold tracking-tight" aria-label="ZapBuzzer home">
      <LogoMark />
      <span className={`text-lg ${invert ? "text-white" : "text-fg"}`}>ZapBuzzer</span>
    </Link>
  );
}
