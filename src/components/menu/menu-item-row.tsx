import type { MenuItem } from "@/lib/menu-data";
import { FlameIcon, StarBurstIcon } from "@/components/ui/icons";

function ItemTag({ tag, spicy }: { tag?: string; spicy?: boolean }) {
  if (!tag && !spicy) return null;
  return (
    <div className="mt-1.5 flex flex-wrap gap-1.5">
      {tag && (
        <span className="inline-flex items-center gap-1 rounded-full bg-pink px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-cream">
          <StarBurstIcon className="h-2.5 w-2.5" />
          {tag}
        </span>
      )}
      {spicy && (
        <span className="inline-flex items-center gap-1 rounded-full bg-ink px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-cream">
          <FlameIcon className="h-2.5 w-2.5 text-pink-light" />
          Picante
        </span>
      )}
    </div>
  );
}

export function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <li className="group flex items-start justify-between gap-4 border-b border-ink/10 py-4 first:pt-0 last:border-b-0">
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <h3 className="font-display text-lg uppercase leading-tight tracking-tight sm:text-xl">
            {item.name}
          </h3>
        </div>
        {item.description && (
          <p className="mt-1 max-w-md text-sm leading-snug text-ink-soft">
            {item.description}
          </p>
        )}
        <ItemTag tag={item.tag} spicy={item.spicy} />
        {item.availability && (
          <p className="mt-1.5 text-xs font-bold uppercase tracking-wide text-olive-deep">
            {item.availability}
          </p>
        )}
      </div>
      <div className="shrink-0 pt-0.5 text-right">
        <span className="font-display text-lg text-pink sm:text-xl">
          L{item.price}
        </span>
      </div>
    </li>
  );
}
