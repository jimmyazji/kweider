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
const appName = window.document.getElementsByTagName('title')[0] ?. innerText || 'Kweider';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: name => {
        require(`./Pages/${name}.vue`);
        const page = require(`./Pages/${name}`).default;

        if (page.layout === undefined ) {
            page.layout = Layout
        }
        

        return page;
    },
    setup({
        el,
        app,
        props,
        plugin
    }) {
        createApp({
                render: () => h(app, props)
            })
            .use(plugin)
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
