<template>
    <Head title="Categories" />
    <MenuSideBar>
        <div class="mx-auto flex container items-center justify-center mt-4">
            <div class="rounded w-full p-2 bg-white">
                <FormKit
                    type="button"
                    label="Go Back"
                    @click="goBack()"
                    :classes="{
                        outer: 'mb-2',
                        input: 'bg-blue-500 text-white font-bold px-3 mb-2 w-auto rounded-md py-2',
                    }"
                />
                <div class="px-4 bg-white shadow sm:rounded-lg">
                    <div
                        class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                        <header>
                            <h2 class="text-lg font-medium text-gray-900">
                                Create New Category
                            </h2>

                            <p class="mt-1 text-sm text-gray-600">
                                Add category's title, status and description
                            </p>
                        </header>
                    </div>
                    <FormKit
                        type="form"
                        v-model="formData"
                        @submit="onSubmit"
                        :actions="false"
                        :config="{
                            classes: {
                                label: 'block mb-1 font-bold text-base',
                                input: 'w-full rounded-md py-2',
                                help: 'text-xs text-gray-500',
                                message: 'text-red-500 text-sm font-bold',
                                messages: 'pt-2',
                            },
                        }"
                    >
                        <div class="grid grid-cols-3 gap-x-4">
                            <FormKit
                                type="text"
                                label="Name *"
                                name="name"
                                validation="required"
                                :classes="{
                                    outer: 'pb-4',
                                    input: 'border border-gray-400 px-2 mb-1',
                                }"
                            />
                            <div class="pb-4 px-2 mb-1">
                                <FormKit
                                    type="text"
                                    label="Code *"
                                    name="code"
                                    validation="required"
                                    :classes="{
                                        input: 'border border-gray-400',
                                    }"
                                />
                                <InputError
                                    class="text-red-500 text-sm font-bold"
                                    :message="errorMsg"
                                />
                            </div>
                            <FormKit
                                type="select"
                                label="Status *"
                                :options="statuses"
                                name="status"
                                validation="required"
                                :classes="{
                                    outer: 'pb-4',
                                    input: 'border border-gray-400 px-2 mb-1',
                                }"
                            />
                            <FormKit
                                type="number"
                                label="Sequence"
                                name="sequence"
                                validation="number|min:1"
                                :classes="{
                                    outer: 'pb-4',
                                    input: 'border border-gray-400 px-2 mb-1',
                                }"
                            />
                        </div>
                        <div>
                            <FormKit
                                type="textarea"
                                label="Description"
                                name="description"
                                :classes="{
                                    outer: 'pb-4',
                                    input: 'border border-gray-400 px-2 mb-1',
                                }"
                            />
                        </div>
                        <FormKit
                            type="submit"
                            label="Create"
                            :classes="{
                                outer: 'm-0 text-right',
                                input: '$reset rounded-md py-2 bg-blue-500 text-white font-bold px-3 w-auto mb-2',
                            }"
                        />
                    </FormKit>
                </div>
            </div>
        </div>
        <Toast />
    </MenuSideBar>
</template>

<script>
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";
import InputError from "@/components/InputError.vue";

export default {
    components: {
        InputError,
    },
    data() {
        return {
            formData: {
                name: null,
                code: null,
                status: "ACT",
                description: null,
                sequence: null
            },
            statuses: {
                ACT: "ACTIVE",
                DSBL: "DISABLED",
            },
            errorMsg: null,
        };
    },
    methods: {
        onSubmit() {
            axios
                .post(route("category.store"), this.formData)
                .then((res) => {
                    if (res.data.success)
                        Inertia.visit(route("category.index"));
                })
                .catch((err) => {
                    if (err.response.status === 422)
                        this.errorMsg = err.response.data.message;
                    this.$toast.add({
                        severity: "error",
                        summary: "Error Message",
                        detail: err.response.data.message,
                        life: 3000,
                    });
                });
        },
        goBack() {
            Inertia.visit(route("category.index"));
        },
    },
};
</script>

<style scoped>
.p-multiselect {
    width: 100%;
    border-width: 1px;
    border-radius: 0.375rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin-bottom: 0.25rem;
}
</style>
