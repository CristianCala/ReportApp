<template>
    <footer class="fixed bottom-0 left-0 w-full bg-white shadow-md rounded-lg shadow-2xl">
        <div class="flex justify-around">
            <button class="flex flex-col items-center justify-center w-full p-2 hover:bg-gray-100" @click="goToDashboardSection()">
                <div class="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center">
                    <font-awesome-icon :icon="['fas', 'house']" class="text-white" />
                </div>
                <span class="text-sm text-gray-700">Dashboard</span>
            </button>
            <button class="flex flex-col items-center justify-center w-full p-2 hover:bg-gray-100" @click="goToPagosSection()">
                <div class="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center">
                    <font-awesome-icon :icon="['fas', 'money-bill-wave']" class="text-white" />
                </div>
                <span class="text-sm text-gray-700">Pagos</span>
            </button>
            <button class="flex flex-col items-center justify-center w-full p-2 hover:bg-gray-100" @click="sessionCheck">
                <div class="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center">
                    <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="text-white" />
                </div>
                <span class="text-sm text-gray-700">Cerrar Sesión</span>
            </button>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'TabBarMenu',
    methods: {
        goToPagosSection() {
            this.$router.push({ name: 'Pagos' });
        },
        goToDashboardSection() {
            this.$router.push({ name: 'Dashboard' });
        },
        sessionCheck() {
            this.$store.dispatch('sessionCheck');
        },
    },
};
</script>
