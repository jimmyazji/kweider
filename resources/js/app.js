import {
    createApp,
    h
} from 'vue';
import {
    createInertiaApp
} from '@inertiajs/inertia-vue3';
import {
    InertiaProgress
} from '@inertiajs/progress';
import {
    Link
} from "@inertiajs/inertia-vue3";
import Layout from "./Layouts/App";

import AR from "./../lang/ar.json"
import EN from "./../lang/en.json"

import { createI18n } from 'vue-i18n'


const messages = {
    ar: AR,
    en: EN
};
if (!localStorage.getItem('locale')){
    localStorage.setItem('locale','en')
}
const i18n = createI18n({
    locale: localStorage.getItem('locale'),
    fallbackLocale: 'en',
    register: global,
    messages,
});

const appName = 'Kweider';


createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: name => {
        require(`./Pages/${name}.vue`);
        const page = require(`./Pages/${name}`).default;

        if (page.layout === undefined) {
            page.layout = Layout
        }
        return page;
    },
    setup({
        el,
        app,
        props,
        plugin,
    }) {
        createApp({
                render: () => h(app, props)
            })
            .use(plugin)
            .use(i18n)
            .component('Link', Link)
            .mixin({
                methods: {
                    route
                }
            })
            .mount(el);
    },
});

InertiaProgress.init({
    color: '#edd6d6',
    includeCSS: true,
    showSpinner: true,
});
