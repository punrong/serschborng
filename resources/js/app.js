import Router from "@/router";
import store from "@/store";
import "tw-elements";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleArrowLeft, faSearch, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import PrimeVue from 'primevue/config';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Toolbar from 'primevue/toolbar';
import Dialog from 'primevue/dialog';
import MultiSelect from 'primevue/multiselect';
import { Head } from "@inertiajs/inertia-vue3";
import BreezeAuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/fluent-light/theme.css';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Sers Chborng';

library.add(faCircleArrowLeft);
library.add(faSearch);
library.add(faSignOut);

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(PrimeVue)
            .component("Column", Column)
            .component("ColumnGroup", ColumnGroup)
            .component("BreezeAuthenticatedLayout", BreezeAuthenticatedLayout)
            .component("Row", Row)
            .component("Button", Button)
            .component("InputText", InputText)
            .component("Dropdown", Dropdown)
            .component("Toolbar", Toolbar)
            .component("Dialog", Dialog)
            .component("MultiSelect", MultiSelect)
            .component("FontAwesomeIcon", FontAwesomeIcon)
            .component("Head", Head)
            .use(Router)
            .use(store)
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
