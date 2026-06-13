import { whatsappUrl } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <aside className="fixed bottom-4 right-4 z-50 max-w-[calc(100vw-2rem)] rounded-md border border-gold/30 bg-ink/94 p-3 text-white shadow-business backdrop-blur">
      <a
        href={whatsappUrl}
        className="block rounded-md bg-gold px-4 py-3 text-center text-sm font-semibold text-ink transition hover:bg-[#d5b56d]"
      >
        WhatsApp咨询
      </a>
      <a
        href="/contact.html#lead-form"
        className="mt-2 block rounded-md border border-white/15 px-4 py-2 text-center text-xs font-medium text-white/82 transition hover:border-white/35 hover:text-white"
      >
        提交用车需求
      </a>
    </aside>
  );
}
