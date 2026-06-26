// src/components/debug/ColorPalettePreview.jsx

const colorGroups = [
  {
    title: "Primary Colors",
    colors: [
      ["Primary Navy", "bg-primary-navy", "#1A365D"],
      ["Primary Blue", "bg-primary-blue", "#01488B"],
      ["Primary Green", "bg-primary-green", "#00C950"],
    ],
  },

  {
    title: "Accent Colors",
    colors: [
      ["Accent Teal", "bg-accent-teal", "#38B2AC"],
      ["Accent Teal Dark", "bg-accent-teal-dark", "#2C7A7B"],
      ["Accent Gold", "bg-accent-gold", "#FDC700"],
      ["Accent Yellow", "bg-accent-yellow", "#FDD029"],
      ["Accent Orange", "bg-accent-orange", "#FF6900"],
      ["Accent Orange Light", "bg-accent-orange-light", "#FFB900"],
    ],
  },

  {
    title: "Surface / Background",
    colors: [
      ["Surface White", "bg-surface-white", "#FFFFFF"],
      ["Surface Offwhite", "bg-surface-offwhite", "#F8FAFC"],
      ["Surface Muted", "bg-surface-muted", "#F2F4F6"],
      ["Surface Subtle", "bg-surface-subtle", "#F1F5F9"],
    ],
  },

  {
    title: "Text Colors",
    colors: [
      ["Text Secondary", "bg-secondary", "#CBD5E1"],
      ["Text Dark", "bg-dark", "#38485D"],
    ],
  },

  {
    title: "Borders & Neutral",
    colors: [
      ["Border Card", "bg-border-card", "#E5E9EB"],
      ["Border Detail", "bg-border-detail", "#C4C6CF"],
      ["Neutral Gray", "bg-neutral-gray", "#D9D9D9"],
      ["Decorative Neutral", "bg-decorative-neutral", "#B8B8B8"],
      ["Dot Inactive", "bg-dot-inactive", "#B7BFBE"],
    ],
  },

  {
    title: "Carousel / Pagination",
    colors: [["Dot Active", "bg-dot-active", "#38B2AC"]],
  },

  {
    title: "Classification Safe",
    colors: [
      [
        "Safe Border",
        "bg-classification-safe-border",
        "#2C7A7B",
      ],
      [
        "Safe Icon BG",
        "bg-classification-safe-icon-bg",
        "#E6FFFA",
      ],
    ],
  },

  {
    title: "Classification Danger",
    colors: [
      [
        "Danger Border",
        "bg-classification-danger-border",
        "#BA1A1A",
      ],
      [
        "Danger Icon BG",
        "bg-classification-danger-icon-bg",
        "#FFDAD6",
      ],
    ],
  },

  {
    title: "Blue Shades",
    colors: [
      ["Blue Darker", "bg-blue-darker", "#015486"],
      ["Blue Dark", "bg-blue-dark", "#234C87"],
      ["Blue Mid", "bg-blue-mid", "#244D8A"],
      ["Blue Light", "bg-blue-light", "#0093CB"],
      ["Blue Pale", "bg-blue-pale", "#91E0FF"],
      ["Blue Palest", "bg-blue-palest", "#D5F3FF"],
    ],
  },

  {
    title: "Green Shades",
    colors: [
      ["Green Dark", "bg-green-dark", "#3C9646"],
      ["Green Light", "bg-green-light", "#86D992"],
      ["Green Pale", "bg-green-pale", "#ADEDC7"],
      ["Green Palest", "bg-green-palest", "#DFFFE4"],
    ],
  },

  {
    title: "Red / Coral Shades",
    colors: [
      ["Red Dark", "bg-red-dark", "#A5120D"],
      ["Red Mid", "bg-red-mid", "#ED261C"],
      ["Coral Light", "bg-coral-light", "#FF8C86"],
    ],
  },

  {
    title: "Purple / Glassmorphism",
    colors: [
      ["Purple", "bg-purple", "#4F39F6"],
      ["Purple Mid", "bg-purple-mid", "#9810FA"],
      ["Magenta", "bg-magenta", "#E60076"],
    ],
  },
];

const gradients = [
  ["Heading Gradient", "var(--gradient-heading)"],
  ["Heading Highlight", "var(--gradient-heading-highlight)"],
  ["Accent Gradient", "var(--gradient-accent)"],
  ["Wave Gradient", "var(--gradient-wave)"],
  ["Glass Background", "var(--gradient-glass-bg)"],
  ["Fade Overlay", "var(--gradient-fade)"],
  ["Nav CTA", "var(--gradient-nav-cta)"],
];

export default function ColorPalettePreview() {
  return (
    <div className="min-h-screen bg-surface-offwhite">
      <div className="mx-auto max-w-7xl p-8 space-y-14">
        {/* Header */}
        <section className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-widest text-primary-blue">
            Design System
          </p>

          <h1 className="gradient-text text-5xl font-black">
            IGRS Color Palette Preview
          </h1>

          <p className="max-w-3xl text-text-dark text-lg leading-relaxed">
            Preview seluruh color palette, gradients, shadows, glassmorphism,
            dan utility class yang tersedia di design system IGRS.
          </p>
        </section>

        {/* Color Sections */}
        {colorGroups.map((group) => (
          <section key={group.title} className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-primary-green" />

              <h2 className="text-2xl font-bold text-primary-navy">
                {group.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {group.colors.map(([label, className, hex]) => (
                <div
                  key={label}
                  className="overflow-hidden rounded-3xl border border-border-card bg-white shadow-sm transition hover:-translate-y-1"
                  style={{
                    boxShadow: "var(--shadow-card-sm)",
                  }}
                >
                  <div
                    className={`h-36 w-full ${className}`}
                  />

                  <div className="space-y-2 p-5">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-text-dark">
                        {label}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {className}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <code className="rounded-lg bg-surface-muted px-3 py-1 text-sm text-primary-blue">
                        {hex}
                      </code>

                      <div
                        className={`h-6 w-6 rounded-full border border-white shadow ${className}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Gradients */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-accent-orange" />

            <h2 className="text-2xl font-bold text-primary-navy">
              Gradient Preview
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {gradients.map(([label, gradient]) => (
              <div
                key={label}
                className="overflow-hidden rounded-3xl border border-border-card bg-white"
                style={{
                  boxShadow: "var(--shadow-card-sm)",
                }}
              >
                <div
                  className="h-44 w-full"
                  style={{
                    background: gradient,
                  }}
                />

                <div className="space-y-2 p-5">
                  <h3 className="text-lg font-semibold text-text-dark">
                    {label}
                  </h3>

                  <code className="block rounded-xl bg-surface-muted p-3 text-xs text-primary-blue overflow-x-auto">
                    {gradient}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gradient Text */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-purple-mid" />

            <h2 className="text-2xl font-bold text-primary-navy">
              Gradient Text Utilities
            </h2>
          </div>

          <div
            className="rounded-4xl border border-border-card bg-white p-10 space-y-8"
            style={{
              boxShadow: "var(--shadow-card-md)",
            }}
          >
            <div className="space-y-2">
              <p className="text-sm text-gray-500">.gradient-text</p>

              <h1 className="gradient-text text-6xl font-black">
                Tentang Kami
              </h1>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-500">
                .gradient-text-highlight
              </p>

              <div className="inline-block rounded-2xl bg-primary-navy px-6 py-4">
                <h1 className="gradient-text-highlight text-5xl font-black">
                  Paling Banyak Dicari
                </h1>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-500">
                .gradient-accent
              </p>

              <h1 className="gradient-accent text-5xl font-black">
                Kenali Kawasan Tak Aman
              </h1>
            </div>
          </div>
        </section>

        {/* Shadows */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-primary-blue" />

            <h2 className="text-2xl font-bold text-primary-navy">
              Shadow System
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              ["Small Shadow", "var(--shadow-card-sm)"],
              ["Medium Shadow", "var(--shadow-card-md)"],
              ["Large Shadow", "var(--shadow-card-lg)"],
            ].map(([label, shadow]) => (
              <div
                key={label}
                className="rounded-3xl bg-white p-10"
                style={{
                  boxShadow: shadow,
                }}
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primary-navy">
                    {label}
                  </h3>

                  <code className="text-xs text-gray-500">
                    {shadow}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Glassmorphism */}
        <section className="space-y-5 pb-20">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-magenta" />

            <h2 className="text-2xl font-bold text-primary-navy">
              Glassmorphism
            </h2>
          </div>

          <div
            className="relative overflow-hidden rounded-[40px] p-16"
            style={{
              background: "var(--gradient-glass-bg)",
            }}
          >
            <div className="absolute inset-0 opacity-20 bg-white blur-3xl" />

            <div
              className="relative max-w-lg rounded-4xl border p-10 backdrop-blur-xl"
              style={{
                background: "var(--glass-surface)",
                borderColor: "var(--glass-card-border)",
                boxShadow: "var(--shadow-card-lg)",
              }}
            >
              <div className="space-y-4">
                <span className="inline-flex rounded-full bg-white/60 px-4 py-2 text-sm font-medium text-primary-blue">
                  Glass Card
                </span>

                <h3 className="text-4xl font-black text-primary-navy">
                  IGRS UI System
                </h3>

                <p className="leading-relaxed text-text-dark">
                  Preview penggunaan glassmorphism yang digunakan
                  pada section CTA, blog, dan beberapa decorative
                  container pada redesign IGRS.
                </p>

                <button
                  className="rounded-2xl px-6 py-3 text-white font-semibold"
                  style={{
                    background: "var(--gradient-nav-cta)",
                  }}
                >
                  Preview Button
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}