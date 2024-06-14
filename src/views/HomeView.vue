<template>
    <div
        class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 mt-32"
    >
        <div
            class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-4 rounded-lg shadow-lg"
        >
            <div class="sm:mx-auto sm:w-full sm:max-w-sm bg-white">
                <h2
                    class="mt-5 text-center text-2xl font-black leading-9 tracking-tight text-gray-900"
                >
                    Inicia Sesión
                </h2>
                <p class="mt-2 text-center text-sm text-gray-600 max-w">
                    App para gestión de reportes
                </p>
            </div>
            <div class="space-y-6">
                <div>
                    <div class="mt-2">
                        <input
                            v-model="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                            class="block w-full rounded-md px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <div class="mt-2">
                        <input
                            v-model="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            placeholder="Contraseña"
                            required
                            class="block w-full rounded-md px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <button
                        class="flex w-full justify-center rounded-md mb-4 bg-emerald-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        @click="sessionCheck"
                    >
                        <l-bouncy
                            v-if="loadingUser"
                            size="45"
                            speed="2"
                            color="#41B883"
                        />
                        <span v-else>Iniciar</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { bouncy } from "ldrs";
import { ref, get } from "firebase/database";
import db from "@/firebase/init.js";
import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";

bouncy.register();

export default {
    name: "HomeView",
    data() {
        return {
            loadingUser: false,
            email: "",
            password: "",
        };
    },

    methods: {
        async sessionCheck() {
            const toast = useToast();

            this.loadingUser = true;
            if (!this.email || !this.password) {
                toast.warning("Por favor, llena todos los campos");
                this.loadingUser = false;
                return;
            }
            try {
                const usersRef = ref(db, "users");
                const snapshot = await get(usersRef);
                if (snapshot.exists()) {
                    const userExists = Object.values(snapshot.val()).some(
                        (user) =>
                            user.email === this.email &&
                            user.password === this.password,
                    );
                    if (userExists) {
                        toast.success("Inicio de sesión exitoso");
                        this.$router.push({ name: "Dashboard" });
                    } else {
                        toast.error("Usuario o contraseña incorrectos");
                    }
                } else {
                    toast.error("No se pudo conectar con la base de datos");
                }
            } catch (error) {
                console.error(error);
            } finally {
                this.loadingUser = false;
            }
        },
    },
};
</script>
