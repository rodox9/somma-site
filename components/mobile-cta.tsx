import Link from "next/link";

/* CTA fixo no rodapé — só mobile (briefing §8, §26). */
export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-paper/10 bg-ink/90 p-3 backdrop-blur-md md:hidden">
      <Link
        href="/#diagnostico"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white shadow-[0_8px_30px_-8px_rgba(1,152,255,0.6)]"
      >
        Diagnosticar operação
        <span>→</span>
      </Link>
    </div>
  );
}
