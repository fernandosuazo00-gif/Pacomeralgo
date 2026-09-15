import { OrderTrigger } from "@/components/ui/order-trigger";
import { SparkleIcon } from "@/components/ui/icons";

export function InlineOrderCta({ text }: { text: string }) {
  return (
    <div className="my-4 flex flex-col items-center justify-between gap-4 rounded-3xl border-2 border-ink bg-ink px-6 py-6 text-center text-cream sm:flex-row sm:text-left">
      <p className="flex items-center gap-2 font-display text-xl uppercase leading-tight sm:text-2xl">
        <SparkleIcon className="h-5 w-5 shrink-0 text-pink-light" />
        {text}
      </p>
      <OrderTrigger variant="pink" />
    </div>
  );
}
