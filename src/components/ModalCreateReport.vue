<template v-if="isOpen">
    <div class="fixed inset-0 z-50 flex items-center justify-center">
        <div class="bg-black opacity-25 absolute inset-0"></div>
        <div
            class="bg-white rounded-lg p-6 relative w-full max-w-xl mx-auto max-h-screen overflow-y-auto"
        >
            <ol
                class="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center bg-white border border-emerald-500 rounded-lg sm:text-base sm:p-4 sm:space-x-4 rtl:space-x-reverse"
            >
                <li
                    class="flex items-center cursor-pointer hover:scale-105 duration-500"
                    :class="{ 'text-emerald-500': step === 1 }"
                    @click="step = 1"
                >
                    <span
                        class="flex items-center justify-center w-8 h-8 text-sm border rounded-full shrink-0 border-emerald-500"
                        :class="{
                            'text-white bg-emerald-500': step === 1,
                            'border-gray-500': step !== 1,
                        }"
                    >
                        1
                    </span>
                    <span
                        class="text-gray-500 text-sm"
                        :class="{ 'text-emerald-500': step === 1 }"
                        >Jefe de Familia</span
                    >
                    <svg
                        class="w-3 h-3 ms-2 sm:ms-2 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 12 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m7 9 4-4-4-4M1 9l4-4-4-4"
                        />
                    </svg>
                </li>
                <li
                    class="flex items-center cursor-pointer hover:scale-105 duration-500"
                    :class="{ 'text-emerald-500': step === 2 }"
                    @click="step = 2"
                >
                    <span
                        class="flex items-center justify-center w-8 h-8 text-sm border border-emerald-500 rounded-full shrink-0"
                        :class="{
                            'text-white bg-emerald-500': step === 2,
                            'border-gray-500': step !== 2,
                        }"
                    >
                        2
                    </span>
                    <span
                        class="text-sm"
                        :class="{ 'text-emerald-500': step === 2 }"
                        >Ingreso Familiar</span
                    >
                    <svg
                        class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 12 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m7 9 4-4-4-4M1 9l4-4-4-4"
                        />
                    </svg>
                </li>
                <li
                    class="flex items-center cursor-pointer hover:scale-105 duration-500"
                    :class="{ 'text-emerald-500': step === 3 }"
                    @click="step = 3"
                >
                    <span
                        class="flex items-center justify-center w-8 h-8 text-sm border border-emerald-500 rounded-full shrink-0"
                        :class="{
                            'text-white bg-emerald-500': step === 3,
                            'border-gray-500': step !== 3,
                        }"
                    >
                        3
                    </span>
                    <span
                        class="text-sm"
                        :class="{ 'text-emerald-500': step === 3 }"
                        >Características del Grupo Familiar</span
                    >
                </li>
            </ol>
            <form class="mt-4">
                <div v-show="step === 1">
                    <h2 class="text-lg font-semibold text-gray-600">
                        Jefe de Familia
                    </h2>
                    <div class="mt-2 grid grid-cols-2 gap-4">
                        <InputField
                            v-model="formJefeFamilia.names"
                            label="Nombres"
                            typeInput="text"
                            placeholder="Introduce tus nombres"
                            required
                        />
                        <InputField
                            v-model="formJefeFamilia.lastNames"
                            label="Apellidos"
                            typeInput="text"
                            placeholder="Introduce tus apellidos"
                            required
                        />
                    </div>
                    <div class="mt-2 grid grid-cols-2 gap-4">
                        <div class="grid grid-cols-4 gap-4 relative">
                            <div class="col-span-1">
                                <label
                                    class="flex items-center mb-2 text-gray-600 text-xs font-medium"
                                    >Cedula</label
                                >
                                <select
                                    v-model="formJefeFamilia.identifier.type"
                                    required
                                    placeholder="Tipo de cédula"
                                    class="block w-full max-w-xl px-1 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed hover:border-emerald-500 focus:border-emerald-500"
                                >
                                    <option
                                        v-for="option in identifierOptions"
                                        :key="option.value"
                                        :value="option.value"
                                    >
                                        {{ option.label }}
                                    </option>
                                </select>
                            </div>
                            <InputField
                                v-model="formJefeFamilia.identifier.number"
                                typeInput="number"
                                placeholder="Introduce tu cédula"
                                required
                                class="mt-3 col-span-3"
                            />
                        </div>
                        <div>
                            <label
                                class="flex items-center mb-2 text-gray-600 text-xs font-medium"
                                >Fecha de Nacimiento</label
                            >
                            <VueDatePicker
                                v-model="formJefeFamilia.dateOfBirth"
                                label="Fecha de Nacimiento"
                                typeInput="date"
                                placeholder="Introduce tu fecha de nacimiento"
                                required
                            />
                        </div>
                    </div>
                    <div class="mt-2 grid grid-cols-2 gap-4">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="mt-7">
                                <input
                                    v-model="formJefeFamilia.isCne"
                                    label="CNE"
                                    type="checkbox"
                                    class="accent-emerald-500 focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300 rounded"
                                />
                                <label
                                    class="text-gray-600 text-sm ml-1 font-medium"
                                    >Inscrito en CNE</label
                                >
                            </div>
                            <div>
                                <label
                                    class="flex items-center mb-2 text-gray-600 text-xs font-medium"
                                    >Género</label
                                >
                                <select
                                    v-model="formJefeFamilia.gender"
                                    placeholder="Género"
                                    class="block w-full max-w-xl px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed hover:border-emerald-500 focus:border-emerald-500"
                                >
                                    <option
                                        v-for="option in genderOptions"
                                        :key="option.value"
                                        :value="option.value"
                                    >
                                        {{ option.label }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <InputField
                                v-model="formJefeFamilia.yearsOld"
                                label="Edad"
                                typeInput="number"
                                placeholder="Introduce tu edad"
                            />
                            <InputField
                                v-model="formJefeFamilia.comunityTime"
                                label="T. en la comunidad"
                                typeInput="number"
                                placeholder="Introduce el tiempo en la comunidad"
                            />
                        </div>
                    </div>
                    <div class="mt-2 grid grid-cols-2 gap-4">
                        <div class="flex">
                            <input
                                v-model="formJefeFamilia.isDisability"
                                label="Discapacidad"
                                type="checkbox"
                                class="accent-emerald-500 w-5 mt-5 mr-2 focus:ring-emerald-500 text-emerald-600 border-gray-300 rounded cursor-pointer"
                            />
                            <label v-if="!formJefeFamilia.isDisability" class="text-gray-600 text-sm ml-1 font-medium mt-6">Discapacidad</label>
                            <InputField
                                v-if="formJefeFamilia.isDisability"
                                v-model="formJefeFamilia.disabilityType"
                                label="Tipo de Discapacidad"
                                typeInput="text"
                                placeholder="Introduce el tipo de discapacidad"
                            />
                        </div>
                        <div class="flex">
                            <input
                                v-model="formJefeFamilia.isPensioner"
                                label="Pensionado"
                                type="checkbox"
                                class="accent-emerald-500 w-5 mt-5 mr-2 focus:ring-emerald-500 text-emerald-600 border-gray-300 rounded cursor-pointer"
                            />
                            <label v-if="!formJefeFamilia.isPensioner" class="text-gray-600 text-sm ml-1 font-medium mt-6">Pensionado</label>
                            <InputField
                                v-if="formJefeFamilia.isPensioner"
                                v-model="formJefeFamilia.institute"
                                label="Institución"
                                typeInput="text"
                                placeholder="Introduce la institución"
                            />
                        </div>
                    </div>
                    <div class="mt-2 grid grid-cols-2 gap-4">
                        <InputField
                            v-model="formJefeFamilia.phoneNumbers"
                            label="Teléfonos"
                            typeInput="tel"
                            placeholder="Introduce número"
                        />
                        <InputField
                            v-model="formJefeFamilia.email"
                            label="Correo Electrónico"
                            typeInput="email"
                            placeholder="Introduce tu correo electrónico"
                        />
                    </div>
                    <div class="mt-2 grid grid-cols-2 gap-4">
                        <div>
                            <label
                                class="flex items-center mb-2 text-gray-600 text-xs font-medium"
                                >Estado Civil</label
                            >
                            <select
                                v-model="formJefeFamilia.civilStatus"
                                placeholder="Estado Civil"
                                class="block w-full max-w-xl px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed hover:border-emerald-500 focus:border-emerald-500"
                            >
                                <option
                                    v-for="option in civilStatusOptions"
                                    :key="option.value"
                                    :value="option.value"
                                >
                                    {{ option.label }}
                                </option>
                            </select>
                        </div>
                        <div>
                            <label
                                class="flex items-center mb-2 text-gray-600 text-xs font-medium"
                                >Nivel de Instrucción</label
                            >
                            <select
                                v-model="formJefeFamilia.instructionLevel"
                                placeholder="Nivel de Instrucción"
                                class="block w-full max-w-xl px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed hover:border-emerald-500 focus:border-emerald-500"
                            >
                                <option
                                    v-for="option in instructionLevelOptions"
                                    :key="option.value"
                                    :value="option.value"
                                >
                                    {{ option.label }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="mt-6">
                        <div class="text-center">
                            <input
                                v-model="formJefeFamilia.isWorking"
                                label="Trabaja"
                                type="checkbox"
                                class="accent-emerald-500 focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300 rounded"
                            />
                            <label class="text-gray-600 text-sm ml-1 font-medium">Trabaja?</label>
                        </div>
                        <InputField
                            v-if="formJefeFamilia.isWorking"
                            v-model="formJefeFamilia.profession"
                            label="Profesión"
                            typeInput="text"
                            placeholder="Introduce tu profesión"
                        />
                    </div>
                </div>

                <div v-show="step === 2">
                    <h2 class="text-lg font-semibold text-gray-600">
                        Ingreso Familiar
                    </h2>
                    <p class="text-sm text-gray-600">
                        Clasificación del ingreso familiar
                    </p>
                    <div class="mt-2 grid md:grid-cols-3 xs:grid-cols-1 gap-4">
                        <template v-for="option in incomeOptions.slice(0, 3)">
                            <div
                                class="rounded-xl text-gray-700 bg-gray-200 hover:scale-105 duration-200 cursor-pointer"
                                :class="{
                                    'border-2 border-emerald-500 bg-emerald-500': formJefeFamilia.incomeType === option.label,
                                }"
                                @click="formJefeFamilia.incomeType = option.label"
                            >
                                <div class="p-4 text-center">
                                    <div
                                        class="flex items-center justify-center w-12 h-12 mb-2 rounded-full mx-auto"
                                        :class="{'bg-emerald-500 text-white': formJefeFamilia.incomeType === option.label, 'bg-white': formJefeFamilia.incomeType !== option.label}"
                                    >
                                        <font-awesome-icon
                                            :icon="['fas', option.icon]"
                                            :class="{'text-white': formJefeFamilia.incomeType === option.label, 'text-emerald-500': formJefeFamilia.incomeType !== option.label}"
                                        />
                                    </div>
                                    <h6 class="mb-2 block font-sans text-md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                        {{ option.label }}
                                    </h6>
                                </div>
                            </div>
                        </template>
                    </div>
                    <div class="mt-2 grid md:grid-cols-2 xs:grid-cols-1 gap-4">
                        <template v-for="option in incomeOptions.slice(3, 5)">
                            <div
                                class="rounded-xl text-gray-700 bg-gray-200 hover:scale-105 duration-200 cursor-pointer"
                                :class="{
                                    'border-2 border-emerald-500 bg-emerald-500': formJefeFamilia.incomeType === option.label,
                                }"
                                @click="formJefeFamilia.incomeType = option.label"
                            >
                                <div class="p-4 text-center">
                                    <div
                                        class="flex items-center justify-center w-12 h-12 mb-2 rounded-full mx-auto"
                                        :class="{'bg-emerald-500 text-white': formJefeFamilia.incomeType === option.label, 'bg-white': formJefeFamilia.incomeType !== option.label}"
                                    >
                                        <font-awesome-icon
                                            :icon="['fas', option.icon]"
                                            :class="{'text-white': formJefeFamilia.incomeType === option.label, 'text-emerald-500': formJefeFamilia.incomeType !== option.label}"
                                        />
                                    </div>
                                    <h6 class="mb-2 block font-sans text-md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                        {{ option.label }}
                                    </h6>
                                </div>
                            </div>
                        </template>
                    </div>
                    <div class="mt-2">
                        <InputField
                            v-model="formJefeFamilia.incomeAmount"
                            label="Monto"
                            typeInput="number"
                            placeholder="Introduce el monto"
                        />
                    </div>
                </div>

                <div v-show="step === 3">
                    <h2 class="text-lg font-semibold text-gray-600">
                        Características del Grupo Familiar
                    </h2>
                    <p class="text-sm text-gray-600">
                        Agregue uno o más miembros del grupo familiar
                    </p>
                    <div v-if="familiarUserArray.length > 0" class="flex gap-2 mt-2">
                        <div
                            v-for="(familiarUser, index) in familiarUserArray"
                            :key="index"
                            class="relative grid select-none items-center whitespace-nowrap rounded-lg border border-emerald-500 py-1.5 px-3 font-sans text-xs font-bold uppercase text-emerald-500 cursor-pointer"
                        >
                            <span>{{ familiarUser.name }}</span>
                            <span
                                @click="familiarUserArray.splice(index, 1)"
                                class="absolute top-0 right-0 bottom-0 flex items-center justify-center w-6 h-6 text-emerald-500 cursor-pointer"
                            >
                                <font-awesome-icon
                                    :icon="['fas', 'times']"
                                    class="text-sm"
                                />
                            </span>
                        </div>
                    </div>
                    <div class="mt-2 grid grid-cols-2 gap-4">
                        <InputField
                            v-model="form.name"
                            label="Nombre"
                            typeInput="text"
                            placeholder="Introduce tu nombre"
                            required
                        />
                        <InputField
                            v-model="form.lastName"
                            label="Apellido"
                            typeInput="text"
                            placeholder="Introduce tu apellido"
                            required
                        />
                    </div>
                    <div class="mt-2 grid grid-cols-2 gap-4">
                        <InputField
                            v-model="form.identifier"
                            label="Cédula"
                            typeInput="number"
                            placeholder="Introduce tu cédula"
                            required
                        />
                        <InputField
                            v-model="form.phone"
                            label="Teléfono"
                            typeInput="tel"
                            placeholder="Introduce tu teléfono"
                            required
                        />
                    </div>
                    <div class="mt-2">
                        <InputField
                            v-model="form.members"
                            label="No. Integrantes"
                            typeInput="number"
                            placeholder="Introduce el número de integrantes"
                            required
                        />
                    </div>
                    <div class="mt-2">
                        <InputField
                            v-model="form.childrens"
                            label="No. Menores"
                            typeInput="number"
                            placeholder="Introduce el número de menores"
                            required
                        />
                    </div>
                    <div class="mt-2">
                        <InputField
                            v-model="form.olderAdults"
                            label="No. Mayores"
                            typeInput="number"
                            placeholder="Introduce el número de mayores"
                            required
                        />
                    </div>
                    <div class="mt-2">
                        <InputField
                            v-model="form.disability"
                            label="No. Incapacitados"
                            typeInput="number"
                            placeholder="Introduce el número de incapacitados"
                            required
                        />
                    </div>
                    <div class="mt-2">
                        <InputField
                            v-model="form.cardId"
                            label="C. de la patria"
                            typeInput="number"
                            placeholder="Introduce tu cédula de la patria"
                            required
                        />
                    </div>
                    <div class="mt-2">
                        <label
                            class="flex items center mb-2 text-gray-600 text-xs font-medium"
                            >¿Es votante?</label
                        >
                        <select
                            v-model="form.isVoter"
                            required
                            placeholder="¿Es votante?"
                            class="block w-full max-w-xl px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed hover:border-emerald-500 focus:border-emerald-500"
                        >
                            <option :value="true">Sí</option>
                            <option :value="false">No</option>
                        </select>
                    </div>
                    <!-- button for add familiar user -->
                    <div class="mt-3">
                        <button
                            type="button"
                            class="block w-full px-4 py-2 bg-emerald-500 text-white rounded-lg font-semibold text-sm"
                            @click="familiarUserArray.push(form)"
                        >
                            Agregar Miembro
                        </button>
                    </div>
                </div>
                <div
                    class="text-center md:text-right mt-4 md:flex md:justify-end"
                >
                    <button
                        type="submit"
                        class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-emerald-500 active:bg-emerald-600 text-white rounded-lg font-semibold text-sm md:ml-2 md:order-2"
                        @click="step === 3 ? submitForm() : stepIncrement()"
                    >
                        <!-- {{ isEdit ? 'Actualizar Reporte' : 'Crear Reporte' }} -->
                        {{ step === 3 ? "Crear Reporte" : "Siguiente" }}
                    </button>
                    <button
                        @click="closeModal"
                        type="button"
                        class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1"
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { ref, push, set } from "firebase/database";
import { useToast } from "vue-toastification";
import db from "@/firebase/init.js";
import InputField from "./InputField.vue";
import "vue-toastification/dist/index.css";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
    name: "ModalCreateReport",
    components: {
        InputField,
        VueDatePicker,
    },
    props: {
        dataEdit: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            loading: false,
            step: 1,
            showDropdown: false,
            identifierOptions: [
                { value: 1, label: "V" },
                { value: 2, label: "E" },
            ],
            civilStatusOptions: [
                { value: 1, label: "Soltero(a)" },
                { value: 2, label: "Casado(a)" },
                { value: 3, label: "Divorciado(a)" },
                { value: 4, label: "Viudo(a)" },
            ],
            instructionLevelOptions: [
                { value: 1, label: "Ninguno" },
                { value: 2, label: "Basica" },
                { value: 3, label: "Bachiller" },
                { value: 4, label: "Tecnico medio" },
                { value: 5, label: "Tecnico superior" },
                { value: 6, label: "Universitario" },
                { value: 7, label: "Postgrado" },
            ],
            incomeOptions: [
                { value: 1, label: "Diario" },
                { value: 2, label: "Semanal" },
                { value: 3, label: "Quincenal" },
                { value: 4, label: "Mensual" },
                { value: 5, label: "Por trabajo" },
            ],
            genderOptions: [
                { value: "M", label: "Masculino" },
                { value: "F", label: "Femenino" },
                { value: "O", label: "Otro" },
            ],
            incomeOptions: [
                { label: "Diario", icon: "money-bill-wave" },
                { label: "Semanal", icon: "calendar-week" },
                { label: "Quincenal", icon: "calendar-alt" },
                { label: "Mensual", icon: "calendar" },
                { label: "Por trabajo", icon: "briefcase" },
            ],
            formJefeFamilia: {
                names: "",
                lastNames: "",
                identifier: {
                    type: "",
                    number: "",
                },
                dateOfBirth: "",
                yearsOld: "",
                comunityTime: "",
                isCne: false,
                gender: "",
                isDisability: false,
                disabilityType: "",
                isPensioner: false,
                institute: "",
                phoneNumbers: [],
                email: "",
                civilStatus: "",
                instructionLevel: "",
                profession: "",
                isWorking: false,
            },
            formIngresoFamiliar: {
                incomeType: "",
                incomeAmount: "",
            },
            familiarUserArray: [],
            form: {
                name: "",
                lastName: "",
                gender: "",
                cardId: "",
                dateOfBirth: "",
                yearsOld: "",
                disabilityType: "",
                earlyEmbracing: "",
                relationship: "",
                studyGrade: "",
                isCne: false,
                profession: "",
                isPensioner: false,
                monthlyIncome: "",
                /* 				email: '',
				name: '',
				lastName: '',
				identifier: '',
				phone: '',
				members: '',
				childrens: '',
				olderAdults: '',
				disability: '',
				cardId: '',
				isVoter: '', */
            },
        };
    },

    computed: {
        isEdit() {
            return this.dataEdit && this.dataEdit.id;
        },
    },

    methods: {
        closeModal() {
            Object.keys(this.form).forEach((key) => {
                this.form[key] = "";
            });
            this.$emit("close");
        },
        async submitForm() {
            const toast = useToast();

            try {
                const newReportRef = push(ref(db, "reports"));
                const reportId = newReportRef.key;
                const reportData = {
                    ...this.form,
                    id: reportId,
                };
                await set(newReportRef, reportData);
                toast.success("Reporte creado exitosamente");
                this.closeModal();
                this.$emit("getReports");
            } catch (error) {
                toast.error("Hubo un error al crear el reporte");
            }
        },
        async updateForm() {
            const toast = useToast();

            try {
                const reportRef = ref(db, `reports/${this.dataEdit.id}`);
                await set(reportRef, this.form);
                toast.success("Reporte actualizado exitosamente");
                this.closeModal();
                this.$emit("getReports");
            } catch (error) {
                toast.error("Hubo un error al actualizar el reporte");
            }
        },
        stepIncrement() {
            this.step++;
        },
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        },
    },
    watch: {
        dataEdit: {
            handler(newVal) {
                this.form = { ...newVal };
            },
            deep: true,
            immediate: true,
        },
    },
};
</script>
