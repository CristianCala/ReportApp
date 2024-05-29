<template v-if="isOpen">
    <div class="fixed inset-0 z-50 flex items-center justify-center">
        <div class="bg-black opacity-25 absolute inset-0"></div>
        <div class="bg-white rounded-lg p-6 z-50 relative w-full max-w-md mx-auto">
            <div class="text-center md:text-left">
                <p class="font-bold">Crear nuevo reporte</p>
                <p class="text-sm text-gray-700 mt-1">Crea un nuevo reporte para el sistema</p>
            </div>
            <form @submit.prevent="isEdit ? updateForm() : submitForm()" class="mt-4">
                <div class="mt-2 grid grid-cols-2 gap-4">
                    <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                        <input
                            v-model="form.name"
                            type="text"
                            placeholder="Nombre"
                            required
                            class="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                        />
                    </div>
                    <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                        <input
                            v-model="form.lastName"
                            type="text"
                            placeholder="Apellido"
                            required
                            class="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                        />
                    </div>
                </div>
                <div class="mt-2 grid grid-cols-2 gap-4">
                    <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                        <input
                            v-model="form.identifier"
                            type="text"
                            placeholder="Cédula"
                            required
                            class="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                        />
                    </div>
                    <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                        <input
                            v-model="form.phone"
                            type="text"
                            placeholder="Teléfono"
                            required
                            class="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                        />
                    </div>
                </div>
                <div class="mt-2">
                    <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                        <input
                            v-model="form.members"
                            type="number"
                            placeholder="No. Integrantes"
                            required
                            class="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                        />
                    </div>
                </div>
                <div class="mt-2">
                    <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                        <input
                            v-model="form.childrens"
                            type="number"
                            placeholder="No. Menores"
                            required
                            class="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                        />
                    </div>
                </div>
                <div class="mt-2">
                    <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                        <input
                            v-model="form.olderAdults"
                            type="number"
                            placeholder="No. Mayores"
                            required
                            class="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                        />
                    </div>
                </div>
                <div class="mt-2">
                    <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                        <input
                            v-model="form.disability"
                            type="number"
                            placeholder="No. Incapacitados"
                            required
                            class="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                        />
                    </div>
                </div>
                <div class="mt-2">
                    <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                        <input
                            v-model="form.cardId"
                            type="text"
                            placeholder="C. de la patria"
                            required
                            class="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                        />
                    </div>
                </div>
                <div class="mt-2">
                    <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                        <select
                            v-model="form.isVoter"
                            required
                            placeholder="¿Es votante?"
                            class="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                        >
                            <option :value="true">Sí</option>
                            <option :value="false">No</option>
                        </select>
                    </div>
                </div>
                <div class="text-center md:text-right mt-4 md:flex md:justify-end">
                    <button 
                        type="submit"
                        class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-emerald-500 active:bg-emerald-600 text-white rounded-lg font-semibold text-sm md:ml-2 md:order-2"
                    >
                        {{ isEdit ? 'Actualizar Reporte' : 'Crear Reporte' }}
                    </button>
                    <button @click="closeModal" type="button" class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1">Cancelar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { ref, push, set } from 'firebase/database'
import { useToast } from 'vue-toastification'
import db from '@/firebase/init.js'
import "vue-toastification/dist/index.css"

export default {
	name: 'ModalCreateReport',
    props: {
        dataEdit: {
            type: Object,
            default: () => ({})
        },
    },
	data() {
		return {
            loading: false,
			form: {
				email: '',
				name: '',
				lastName: '',
				identifier: '',
				phone: '',
				members: '',
				childrens: '',
				olderAdults: '',
				disability: '',
				cardId: '',
				isVoter: '',
			}
		}
	},

    computed: {
        isEdit() {
            return this.dataEdit && this.dataEdit.id
        }
    },

	methods: {
		closeModal() {
            Object.keys(this.form).forEach(key => {
                this.form[key] = ''
            })
			this.$emit('close')
		},
        async submitForm() {
            const toast = useToast()

            try {
                const newReportRef = push(ref(db, 'reports'))
                const reportId = newReportRef.key
                const reportData = {
                    ...this.form,
                    id: reportId
                };
                await set(newReportRef, reportData)
                toast.success('Reporte creado exitosamente')
                this.closeModal()
                this.$emit('getReports')
            } catch (error) {
                toast.error('Hubo un error al crear el reporte')
            }
        },
        async updateForm() {
            const toast = useToast()

            try {
                const reportRef = ref(db, `reports/${this.dataEdit.id}`)
                await set(reportRef, this.form)
                toast.success('Reporte actualizado exitosamente')
                this.closeModal()
                this.$emit('getReports')
            } catch (error) {
                toast.error('Hubo un error al actualizar el reporte')
            }
        }
	},
    watch: {
        dataEdit: {
            handler(newVal) {
                this.form = { ...newVal }
            },
            deep: true,
            immediate: true
        }
    },
}
</script>
