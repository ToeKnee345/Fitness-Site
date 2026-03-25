export default function CustomFitnessPlanLandingPage() {
  const plans = [
    {
      name: "1 Month Reset",
      price: "$29.99",
      subtitle: "A customized 30-day plan built around your schedule.",
      features: [
        "Personalized home workout schedule",
        "Simple meal structure + easy swaps",
        "Weekly habit checklist",
        "Built for busy women with limited time",
      ],
    },
    {
      name: "3 Month Transformation",
      price: "$54.99",
      subtitle: "The best-value option for building real consistency.",
      features: [
        "Everything in the 1 Month Reset",
        "Longer progression plan",
        "More detailed meal and routine guidance",
        "Best for steady, realistic progress",
      ],
      featured: true,
    },
    {
      name: "1 Year Lifestyle Plan",
      price: "$109.99",
      subtitle: "A longer-term plan focused on sustainable habits.",
      features: [
        "Everything in the 3 Month plan",
        "Long-range structure and milestones",
        "Lifestyle-focused guidance",
        "Made for long-term consistency",
      ],
    },
  ];

  const questions = [
    "Age",
    "Height and current weight",
    "Main goal (fat loss, tone up, build consistency)",
    "How many days per week you can realistically work out",
    "Any injuries or physical limitations",
    "Foods you avoid or dislike",
    "What your daily schedule looks like",
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Personalized fitness planning
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Custom weight loss plans for busy women.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              Every plan is built around your schedule, your goals, and your lifestyle.
              No gym required. No one-size-fits-all template.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#plans"
                className="rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
              >
                View Plans
              </a>
              <a
                href="#start"
                className="rounded-2xl border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:-translate-y-0.5"
              >
                Start Here
              </a>
            </div>
            <p className="mt-5 text-sm text-zinc-500">
              Designed for realistic progress through consistency, structure, and simple habits.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Fully personalized", "Built from your goals, schedule, and preferences."],
            ["Home-friendly", "Simple workout structure without needing a gym."],
            ["Realistic approach", "Focused on sustainable habits, not extreme dieting."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-zinc-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="plans" className="bg-zinc-50 border-y border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-18 md:py-20">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">Plans</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Choose the plan that fits your goals.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border p-7 shadow-sm ${
                  plan.featured
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-200 bg-white text-zinc-900"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{plan.name}</h3>
                    <p className={`mt-2 text-sm leading-7 ${plan.featured ? "text-zinc-300" : "text-zinc-600"}`}>
                      {plan.subtitle}
                    </p>
                  </div>
                  {plan.featured && (
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide">
                      Most Popular
                    </span>
                  )}
                </div>
                <div className="mt-6 text-4xl font-semibold">{plan.price}</div>
                <ul className="mt-6 space-y-3 text-sm leading-7">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#start"
                  className={`mt-8 inline-flex rounded-2xl px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5 ${
                    plan.featured
                      ? "bg-white text-zinc-900"
                      : "bg-zinc-900 text-white"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-18 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">How it works</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Simple process. Personalized result.</h2>
            <div className="mt-8 space-y-5">
              {[
                ["1. Choose your plan", "Pick the timeline that fits your goals and budget."],
                ["2. Send your details", "Answer a few quick questions so your plan is built around your life."],
                ["3. Receive your custom plan", "Your plan includes workouts, food guidance, and structure you can actually follow."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-zinc-200 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="start" className="rounded-3xl border border-zinc-200 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">Start here</p>
            <h3 className="mt-3 text-2xl font-semibold">What I’ll need from you</h3>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-zinc-700">
              {questions.map((q) => (
                <li key={q} className="flex gap-3">
                  <span className="mt-1">•</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl bg-zinc-50 p-5 text-sm leading-7 text-zinc-700">
              <p className="font-semibold text-zinc-900">Payment and delivery</p>
              <p className="mt-2">
                After you message me and choose your plan, I’ll send payment instructions and start building your personalized plan.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="mailto:youremail@example.com?subject=Custom%20Fitness%20Plan"
                className="rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
              >
                Email to Start
              </a>
              <a
                href="https://instagram.com/yourhandle"
                className="rounded-2xl border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:-translate-y-0.5"
              >
                Message on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-12 text-sm leading-7 text-zinc-500">
          <p>
            This service provides general fitness and meal-structure guidance for informational purposes and is not medical advice or a substitute for care from a licensed professional.
          </p>
        </div>
      </section>
    </div>
  );
}
