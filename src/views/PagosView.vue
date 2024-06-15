<template>
    <div class="relative overflow-x-auto-20 px-5 py-5">
        <div class="flex items-center justify-between mb-4">
            <div>
                <h2
                    class="text-2xl font-black leading-9 tracking-tight text-gray-900"
                >
                    Menú de Pagos
                </h2>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 max-w">
                    Aquí podrás ver los pagos realizados por los clientes.
                </p>
            </div>
        </div>
    </div>
    <tab-bar-menu />
</template>

<script>
import TabBarMenu from '../components/TabBarMenu.vue';

export default {
    components: {
        TabBarMenu,
    },
};

</script>
