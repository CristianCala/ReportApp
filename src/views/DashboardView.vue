<template>
    <div class="relative overflow-x-auto-20 px-5 py-5">
        <div class="flex items-center justify-between mb-4">
            <div>
                <h2 class="text-2xl font-black leading-9 tracking-tight text-gray-900">Menú Reporte</h2>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 max-w">
                    Sección principal de reportes
                </p>
            </div>
        </div>
    </div>
    <section class="py-1 bg-blueGray-50">
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                <div class="rounded-t mb-0 px-4 py-3 border-0">
                    <div class="flex flex-wrap items-center">
                        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 class="font-semibold text-base text-blueGray-700">Tabla de Usuarios</h3>
                        </div>
                        <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                            <button
                                @click="showModal = true"
                                class="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1" type="button"
                            >
                                Crear Reporte
                            </button>
                        </div>
                    </div>
                </div>

                <div class="block w-full overflow-x-auto">
                    <table class="items-center bg-transparent w-full border-collapse ">
                        <thead>
                        <tr>
                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Nombre
                            </th>
                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Apellido
                            </th>
                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Cedula
                            </th>
                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Teléfono
                            </th>
                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                No. Integrantes
                            </th>
                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                No. Menores
                            </th>
                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                No. Mayores
                            </th>
                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                No. Incapacitados
                            </th>
                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                C. de la patria
                            </th>
                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Vota
                            </th>
                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Acciones
                            </th>
                        </tr>
                        </thead>

                        <tbody>
                            <tr class="bg-white border-b" v-for="report in reports" :key="report.identifier">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {{ report.name }}
                                </th>
                                <td class="px-6 py-4">
                                    {{ report.lastName }}
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
                                    {{ report.olderAdults }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ report.disability }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ report.cardId }}
                                </td>
                                <td class="px-6 py-4">
                                    <span
                                        class="px-2 py-1 px-3 font-semibold leading-5 text-white rounded-full"
                                        :class="(isVote(report.isVoter).color)"
                                    >
                                        {{ isVote(report.isVoter).text }}
                                    </span>
                                </td>
                                <td class="px-6 py-4 text-center">
                                    <div class="relative">
                                        <div>
                                            <ion-icon
                                                @click="toggleDropdown(report.id)"
                                                name="ellipsis-vertical-outline"
                                                class="cursor-pointer p-2 bg-gray-200 rounded-full hover:bg-green-200"
                                            />
                                        </div>
                                        <div v-if="showDropdown(report.id)" class="absolute z-10 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                            <div class="py-1" role="none">
                                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0" @click="editReport(report)">Editar</a>
                                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1" @click="deleteReport(report.id)">Eliminar</a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </section>
    <modal-create-report
        v-if="showModal"
        :data-edit="selectedReport"
        @getReports="getReports"
        @close="closeModal"
    />
</template>

<script>
import { ref, get, remove } from 'firebase/database'
import db from '@/firebase/init.js'
import { useToast } from 'vue-toastification'
import ModalCreateReport from '../components/ModalCreateReport.vue'
import "vue-toastification/dist/index.css"

export default {
    name: 'DashboardView',
    components: {
        ModalCreateReport
    },
    data() {
        return {
            selectedReport: null,
            dropdowns: {},
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
        async deleteReport(id) {
            const toast = useToast()

            try {
                await remove(ref(db, `reports/${id}`))
                toast.success('Reporte eliminado con éxito')
                this.getReports()
            } catch (error) {
                toast.error('Error al eliminar el reporte')
            }
        },
        isVote(value) {
            const voteMap = {
                true: { color: 'bg-green-500', text: 'Si' },
                false: { color: 'bg-red-500', text: 'No' }
            }

            return voteMap[value]
        },
        toggleDropdown(id) {
            this.dropdowns[id] = !this.dropdowns[id]
        },
        showDropdown(id) {
            return this.dropdowns[id] || false
        },
        editReport(report) {
            this.selectedReport = report
            this.showModal = true
        },
        closeModal() {
            this.showModal = false
            this.selectedReport = null
        }
    },

    mounted() {
        this.getReports()
    }
}

</script>
