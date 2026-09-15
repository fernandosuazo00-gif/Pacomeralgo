import type { MenuCategory } from "@/lib/menu-data";
import { MenuItemRow } from "./menu-item-row";
import { Reveal } from "@/components/ui/reveal";

export function MenuSection({ category }: { category: MenuCategory }) {
  return (
    <section id={category.id} className="scroll-mt-[140px] py-10 sm:py-12">
      <Reveal>
        <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-pink px-4 py-1.5">
          <h2 className="font-display text-lg uppercase tracking-wide text-cream sm:text-xl">
            {category.title}
          </h2>
        </div>
        <ul className="mt-4 rounded-3xl border-2 border-ink bg-paper px-5 sm:px-7">
          {category.items.map((item) => (
            <MenuItemRow key={item.name} item={item} />
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
