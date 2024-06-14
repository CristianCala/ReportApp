<template>
    <div class="w-full relative">
        <div class="relative">
            <label
                :for="inputId"
                class="flex items-center mb-2 text-gray-600 text-xs font-medium"
                >{{ label }}</label
            >
            <input
                :id="inputId"
                :value="modelValue"
                :placeholder="placeholder"
                :required="required"
                :type="typeInput"
                class="block w-full max-w-xl px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed hover:border-emerald-500 focus:border-emerald-500"
                @input="$emit('update:modelValue', $event.target.value)"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "InputField",
    props: {
        modelValue: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            default: "",
        },
        required: {
            type: Boolean,
            default: false,
        },
        typeInput: {
            type: String,
            default: "text",
        },
        inputId: {
            type: String,
            required: false,
            default: () => `input-${Math.random().toString(36).substr(2, 9)}`,
        },
    },
    emits: ["update:modelValue"],
};
</script>
