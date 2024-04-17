<template>
	<div class="fixed inset-0 flex items-center justify-center z-50 overflow-auto bg-gray-800 bg-opacity-50">
		<div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
			<div class="flex justify-end">
				<button @click="closeModal" class="text-gray-600 hover:text-gray-800">
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
				<!-- Contenido del modal -->
				<h3 class="text-lg font-semibold mb-2">Modal de Ejemplo</h3>
				<p class="text-gray-700">Este es un modal simple creado con Tailwind CSS.</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ModalCreateReport',
/* 	data() {
		return {
			showModal: false
		}
	}, */
	methods: {
		closeModal() {
			this.$emit('close')
		}
	}
}
</script>
