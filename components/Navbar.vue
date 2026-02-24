<template>
  <nav class="fixed top-0 w-full z-50 transition-all duration-300" :class="{ 'glass py-4': scrolled, 'py-6': !scrolled }">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center">
      <NuxtLink to="/" class="text-xl font-bold tracking-tighter flex items-center gap-2">
        <span class="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/30">O</span>
        <span class="hidden sm:block text-zinc-100">Portfolio</span>
      </NuxtLink>
      
      <div class="hidden md:flex items-center gap-8 glass-card px-6 py-2">
        <NuxtLink v-for="link in links" :key="link.path" :to="link.path" class="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200" exact-active-class="!text-brand-400" >
          {{ link.name }}
        </NuxtLink>
      </div>

      <NuxtLink to="/projects" class="hidden md:block px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium text-zinc-200 hover:text-white transition-all duration-300">
        View Work
      </NuxtLink>
      
      <!-- Mobile menu button -->
      <button class="md:hidden text-zinc-300 hover:text-white p-2" @click="mobileMenuOpen = !mobileMenuOpen">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
           <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    
    <!-- Mobile Menu Overlay -->
    <div v-if="mobileMenuOpen" class="md:hidden absolute top-full left-0 w-full glass border-t-0 p-4 flex flex-col gap-4 shadow-2xl animate-slide-up">
      <NuxtLink v-for="link in links" :key="link.path" :to="link.path" class="px-4 py-3 rounded-lg text-zinc-300 hover:bg-white/5 hover:text-brand-400 font-medium transition-colors" exact-active-class="text-brand-400 bg-brand-500/10" @click="mobileMenuOpen = false">
        {{ link.name }}
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const links = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
