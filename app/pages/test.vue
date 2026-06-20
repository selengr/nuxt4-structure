<script setup>
// اگر خواستی می‌تونی برای این صفحه layout خاصی ست کنی:
// definePageMeta({ layout: 'default' })
const stats = [
  { label: 'Users', value: '1,248', trend: '+12%' },
  { label: 'Revenue', value: '$9,320', trend: '+8%' },
  { label: 'Conversion', value: '3.4%', trend: '+0.4%' }
]

const activities = [
  { title: 'New signup', time: '2 min ago', desc: 'John Doe joined the platform.' },
  { title: 'Payment received', time: '10 min ago', desc: 'Invoice #1024 was paid.' },
  { title: 'Server update', time: '1h ago', desc: 'Deployed v1.3.2 to production.' }
]
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
    <div
      class="w-full max-w-5xl bg-slate-900/80 border border-slate-800 rounded-3xl shadow-2xl shadow-slate-950/60 overflow-hidden"
    >
      <!-- Top bar -->
      <div
        class="flex items-center justify-between px-8 py-5 border-b border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950"
      >
        <div>
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">Test Route</p>
          <h1 class="mt-1 text-2xl font-semibold text-slate-50">
            Beautiful Nuxt Test Page
          </h1>
        </div>
        <button
          class="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-2 text-xs font-medium text-slate-100 hover:bg-slate-700 hover:border-indigo-500 hover:text-indigo-100 transition-colors"
        >
          <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
          <span>Live Preview</span>
        </button>
      </div>

      <!-- Content -->
      <div class="grid gap-6 px-8 py-6 lg:grid-cols-[2fr,1.4fr]">
        <!-- Left column -->
        <div class="space-y-6">
          <!-- Hero card -->
          <div
            class="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950"
          >
            <div class="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_#4f46e5_0,_transparent_55%)]" />
            <div class="relative p-6">
              <p class="text-xs font-medium uppercase tracking-[0.18em] text-indigo-400">
                Nuxt 4 • Demo Route
              </p>
              <h2 class="mt-2 text-xl font-semibold text-slate-50">
                This is a sample test route with a clean UI
              </h2>
              <p class="mt-3 text-sm text-slate-300">
                Use this page as a starting point for your layouts, dashboards or any test views.
                It includes cards, stats and a simple activity feed.
              </p>

              <div class="mt-4 flex flex-wrap gap-3">
                <span
                  class="inline-flex items-center rounded-full border border-indigo-500/60 bg-indigo-500/10 px-3 py-1 text-[11px] font-medium text-indigo-200"
                >
                  Nuxt
                </span>
                <span
                  class="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-[11px] font-medium text-slate-200"
                >
                  Tailwind-like styling
                </span>
              </div>
            </div>
          </div>

          <!-- Stats -->
          <div class="grid gap-4 md:grid-cols-3">
            <div
              v-for="item in stats"
              :key="item.label"
              class="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <p class="text-xs text-slate-400">{{ item.label }}</p>
              <p class="mt-1 text-xl font-semibold text-slate-50">
                {{ item.value }}
              </p>
              <p class="mt-1 text-xs font-medium text-emerald-400">
                {{ item.trend }}
              </p>
            </div>
          </div>

          <!-- CTA -->
          <div
            class="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
          >
            <div>
              <p class="text-sm font-medium text-slate-100">
                Ready to customize this route?
              </p>
              <p class="text-xs text-slate-400">
                Edit <code class="text-indigo-300">pages/test.vue</code> and start building your UI.
              </p>
            </div>
            <button
              class="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-400 transition-colors"
            >
              <span>Open in VS Code</span>
              <span class="text-[10px] uppercase tracking-[0.18em] opacity-90">
                code .
              </span>
            </button>
          </div>
        </div>

        <!-- Right column -->
        <div class="space-y-4">
          <!-- Activity -->
          <div class="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-semibold text-slate-100">Recent Activity</h3>
              <span class="text-[11px] text-slate-500">Demo feed</span>
            </div>

            <div class="mt-3 space-y-3">
              <div
                v-for="(item, index) in activities"
                :key="index"
                class="flex gap-3 rounded-xl border border-slate-800/60 bg-slate-900/80 p-3"
              >
                <div class="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
                <div>
                  <div class="flex items-center justify-between gap-2">
                    <p class="text-xs font-medium text-slate-100">
                      {{ item.title }}
                    </p>
                    <p class="text-[11px] text-slate-500">
                      {{ item.time }}
                    </p>
                  </div>
                  <p class="mt-1 text-xs text-slate-400">
                    {{ item.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Info card -->
          <div class="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-xs">
            <p class="mb-1 text-[11px] uppercase tracking-[0.2em] text-slate-500">
              About this page
            </p>
            <p class="text-slate-300">
              This is a <span class="text-indigo-300 font-medium">test route</span> created
              specifically to experiment with layouts and UI components in Nuxt. You can safely
              modify or delete it.
            </p>
            <ul class="mt-3 list-disc space-y-1 pl-4 text-slate-400">
              <li>Uses <code class="text-indigo-300">script setup</code></li>
              <li>Tailwind-like utility classes for styling</li>
              <li>Responsive layout with cards & stats</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
