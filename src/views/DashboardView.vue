<template>
    <div class="relative overflow-x-auto-20 px-5 py-5">
        <div class="flex items-center justify-between mb-4">
            <div>
                <h2 class="text-2xl font-black leading-9 tracking-tight text-gray-900 dark:text-white">Menú Reporte</h2>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 max-w">
                    Sección principal de reportes
                </p>
            </div>
            <button
                type="button"
                class="flex rounded-md bg-emerald-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                @click="showModal = true"
            >
                <span>Crear Reporte</span>
            </button>
        </div>
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
                    <template v-for="report in reports">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ report.name }}
                        </th>
                        <td class="px-6 py-4">
                            {{ report.last_name }}
                        </td>
                        <td class="px-6 py-4">
                            {{ report.identifier }}
                        </td>
                        <td class="px-6 py-4">
                            {{ report.phone }}
                        </td>
                        <td class="px-6 py-4">
                            {{ report.members }}
                        </td>
                        <td class="px-6 py-4">
                            {{ report.childrens }}
                        </td>
                        <td class="px-6 py-4">
                            {{ report.older_adults }}
                        </td>
                        <td class="px-6 py-4">
                            {{ report.disability }}
                        </td>
                        <td class="px-6 py-4">
                            {{ report.card_id }}
                        </td>
                        <td class="px-6 py-4">
                            <span :class="'px-2 py-1 px-3 font-semibold leading-5 text-white bg-' + (isVote(report.is_voter).color) + '-500 rounded-full'">
                                {{ isVote(report.is_voter).text }}
                            </span>
                        </td>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>
    <template v-if="showModal">
        <div class="fixed inset-0 flex items-center justify-center z-50 overflow-auto bg-gray-800 bg-opacity-50">
            <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <div class="flex justify-end">
                    <button @click="showModal = false" class="text-gray-600 hover:text-gray-800">
                    <svg
                        class="w-6 h-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                        fill-rule="evenodd"
                        d="M12.707 12.707a1 1 0 0 1-1.414 0L10 11.414l-1.293 1.293a1 1 0 1 1-1.414-1.414L8.586 10 7.293 8.707a1 1 0 0 1 1.414-1.414L10 8.586l1.293-1.293a1 1 0 0 1 1.414 1.414L11.414 10l1.293 1.293a1 1 0 0 1 0 1.414z"
                        clip-rule="evenodd"
                        />
                    </svg>
                    </button>
                </div>
                <div class="mt-4">
                    <h3 class="text-lg font-semibold mb-2">Modal de Ejemplo</h3>
                    <p class="text-gray-700">Este es un modal simple creado con Tailwind CSS.</p>
                </div>
            </div>
        </div>
    </template>
</template>

<script>
import { ref, get } from 'firebase/database'
import db from '@/firebase/init.js'
import { useToast } from 'vue-toastification'
import "vue-toastification/dist/index.css"

export default {
    name: 'DashboardView',
    data() {
        return {
            loadingTable: false,
            reports: [],
            showModal: false,
        }
    },

    methods: {
        async getReports() {
            const toast = useToast()
            this.loadingTable = true
            
            try {
                const response = await get(ref(db, 'reports'))
                this.reports = response.val()
            } catch (error) {
                toast.error('Error al obtener los reportes')
            } finally {
                this.loadingTable = false
            }
        },
        isVote(value) {
            const voteMap = {
                1: { color: 'green', text: 'Si' },
                0: { color: 'red', text: 'No' }
            }

            return voteMap[value]
        }
    },

    mounted() {
        this.getReports()
    }
}

</script>
