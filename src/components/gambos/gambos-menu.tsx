import {
  gambosCombos,
  gambosExtras,
  gambosFooterNote,
} from "@/lib/gambos-data";
import { Reveal } from "@/components/ui/reveal";

export function GambosMenu() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {gambosCombos.map((combo, i) => (
          <Reveal key={`${combo.name}-${combo.size ?? ""}`} delay={0.05 * i}>
            <article className="flex h-full flex-col rounded-3xl border-2 border-gambos-ink bg-gambos-cream p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl uppercase leading-tight text-gambos-ink">
                  {combo.name}
                  {combo.size && (
                    <span className="ml-2 text-gambos-orange">{combo.size}</span>
                  )}
                </h3>
                <span className="shrink-0 font-display text-2xl text-gambos-orange">
                  L{combo.price.toLocaleString("es-HN")}
                </span>
              </div>
              <p className="mt-2 text-sm leading-snug text-gambos-ink/75">
                {combo.description}
              </p>
              {combo.lobsterAddOn && (
                <p className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-gambos-orange px-3 py-1 text-xs font-bold uppercase tracking-wide text-gambos-cream">
                  + L{combo.lobsterAddOn} con langosta
                </p>
              )}
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-8">
        <div className="rounded-3xl border-2 border-dashed border-gambos-ink/40 p-6">
          <h4 className="font-display text-lg uppercase tracking-wide text-gambos-ink">
            Adicionales
          </h4>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gambos-ink/80 sm:grid-cols-3">
            {gambosExtras.map((extra) => (
              <li key={extra.name} className="flex items-baseline justify-between gap-2">
                <span>{extra.name}</span>
                <span className="font-bold text-gambos-orange-deep">
                  L{extra.price}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-scribble text-xl text-gambos-orange-deep">
            {gambosFooterNote}.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
