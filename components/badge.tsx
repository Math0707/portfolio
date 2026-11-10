import Image from "next/image";
import { cn } from "@/lib/utils";

export function SkillBadge({ name, icon, className }: { name: string; icon: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 py-1.5 pl-1.5 pr-3 transition hover:border-white/25",
        className,
      )}
    >
      {/* Ícone decorativo: o nome já está no texto ao lado. */}
      <Image src={icon} alt="" width={24} height={24} className="h-6 w-6 rounded-md" />
      <span className="font-mono text-xs md:text-sm">{name}</span>
    </span>
  );
}
