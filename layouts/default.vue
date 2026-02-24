<template>
  <div class="min-h-screen flex flex-col relative overflow-hidden">
    <!-- Background Decorators -->
    <div class="fixed inset-0 z-[-1] bg-dark-900">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-[120px] pointer-events-none"></div>
    </div>
    
    <Navbar />
    
    <main class="flex-grow pt-28 pb-12 px-6 sm:px-8 max-w-7xl mx-auto w-full animate-fade-in relative z-10">
      <slot />
    </main>
    
    <Footer />
  </div>
</template>
