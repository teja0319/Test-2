/** Illustrative WhatsApp chat showing WAMA CRM's AI assistant selling and taking payment. */
export function WhatsAppMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-[20rem] ${className}`} aria-hidden="true">
      <div className="overflow-hidden rounded-[2.2rem] border-[7px] border-navy-950 bg-[#0b141a] shadow-2xl ring-1 ring-white/10">
        <div className="flex items-center gap-3 bg-[#1f2c34] px-4 py-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-green text-xs font-bold text-navy-950">
            YS
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white">Your Store</p>
            <p className="text-[0.65rem] text-[#8696a0]">AI assistant · online</p>
          </div>
        </div>

        <div className="space-y-2.5 bg-[#0b141a] px-3 py-4 text-[0.78rem] leading-snug">
          <Bubble side="in">Hi, blue kurta medium size undha?</Bubble>
          <Bubble side="out">
            Undhi! 😊 Medium size lo 2 colours available. Choose cheyyandi 👇
          </Bubble>
          <div className="ml-auto w-[78%] overflow-hidden rounded-xl bg-[#005c4b]">
            <div className="h-20 bg-gradient-to-br from-teal/70 to-navy-700" />
            <div className="p-2.5 text-white">
              <p className="font-semibold">Cotton Kurta, Blue</p>
              <p className="text-[0.7rem] text-white/70">Size M · ₹899</p>
              <p className="mt-2 rounded-md bg-white/15 py-1.5 text-center text-[0.72rem] font-semibold">
                View & Buy
              </p>
            </div>
          </div>
          <Bubble side="in">Order chesta. UPI tho pay cheyyocha?</Bubble>
          <div className="ml-auto w-[78%] rounded-xl bg-[#005c4b] p-2.5 text-white">
            <p className="font-semibold">Order #4821 · ₹899</p>
            <p className="mt-2 rounded-md bg-green py-1.5 text-center text-[0.72rem] font-bold text-navy-950">
              Pay with WhatsApp Pay
            </p>
          </div>
          <Bubble side="out">✅ Payment received! Delivery tomorrow. Tracking link pampistha.</Bubble>
        </div>
      </div>
    </div>
  );
}

function Bubble({ side, children }: { side: "in" | "out"; children: React.ReactNode }) {
  return side === "in" ? (
    <p className="mr-auto w-fit max-w-[80%] rounded-xl rounded-tl-sm bg-[#1f2c34] px-3 py-2 text-[#e9edef]">
      {children}
    </p>
  ) : (
    <p className="ml-auto w-fit max-w-[80%] rounded-xl rounded-tr-sm bg-[#005c4b] px-3 py-2 text-[#e9edef]">
      {children}
    </p>
  );
}
