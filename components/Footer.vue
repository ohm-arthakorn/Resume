<template>
    <footer class="mt-auto border-t border-white/5 py-8 relative z-10">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="flex items-center gap-2">
                <span
                    class="w-6 h-6 rounded bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white text-xs font-bold">O</span>
                <p class="text-zinc-500 text-sm">
                    © {{ new Date().getFullYear() }} Portfolio. All rights reserved.
                </p>
            </div>

            <div class="flex gap-6">
                <!-- ลิงค์ไปยังหน้า Github ของตัวเอง -->
                <a href="https://github.com/ohm-arthakorn" target="_blank" rel="noopener noreferrer"
                    class="text-sm text-zinc-500 hover:text-brand-400 transition-colors">Github</a>
            </div>
        </div>
    </footer>
</template>
