<template>
    <div class="relative overflow-x-auto-20 px-5 py-5">
        <h2 class="mt-5 text-2xl font-black leading-9 tracking-tight text-gray-900 dark:text-white">Menú Reporte</h2>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 max-w">
            Sección principal de reportes
        </p>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-10">
            <thead class="text-xs text-white uppercase bg-emerald-500 dark:bg-gray-800">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Nombre
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Apellido
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Cedula
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Teléfono
                    </th>
                    <th scope="col" class="px-6 py-3">
                        No. Integrantes
                    </th>
                    <th scope="col" class="px-6 py-3">
                        No. Menores
                    </th>
                    <th scope="col" class="px-6 py-3">
                        No. Mayores
                    </th>
                    <th scope="col" class="px-6 py-3">
                        No. Incapacitados
                    </th>
                    <th scope="col" class="px-6 py-3">
                        C. de la patria
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Vota
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">
                        Silver
                    </td>
                    <td class="px-6 py-4">
                        Laptop
                    </td>
                    <td class="px-6 py-4">
                        $2999
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Microsoft Surface Pro
                    </th>
                    <td class="px-6 py-4">
                        White
                    </td>
                    <td class="px-6 py-4">
                        Laptop PC
                    </td>
                    <td class="px-6 py-4">
                        $1999
                    </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">
                        Black
                    </td>
                    <td class="px-6 py-4">
                        Accessories
                    </td>
                    <td class="px-6 py-4">
                        $99
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'DashboardView',
    data() {
        return {
            loading: false
        }
    }
}

</script>
