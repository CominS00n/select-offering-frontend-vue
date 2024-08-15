import { ref, watch, defineProps, computed } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid';
import { DocumentArrowUpIcon } from '@heroicons/vue/24/outline';
import Export from '@/script/export-csv';
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { exportToCsv } = Export();
const download = () => {
    const date = new Date();
    const padZero = (num) => num.toString().padStart(2, '0');
    const timeString = `${padZero(date.getHours())}${padZero(date.getMinutes())}${padZero(date.getSeconds())}`;
    const dateString = date.toISOString().slice(0, 10);
    exportToCsv(props.dataValue, `${dateString}-${timeString}.csv`);
};
const props = defineProps({
    dataValue: {
        type: Array,
        required: true,
        default: null
    },
    totalPages: {
        type: Number,
        required: true,
        default: null
    }
});
const limit = ref(100);
watch(limit, (value) => {
    currentPage.value = 1;
    if (value !== 0) {
        pageSize.value = value;
    }
});
const limitList = ref([
    {
        name: '100',
        value: 100
    },
    {
        name: '300',
        value: 300
    },
    {
        name: '500',
        value: 500
    },
    {
        name: '1000',
        value: 1000
    },
    {
        name: '5000',
        value: 5000
    }
]);
const currentPage = ref(1);
const pageSize = ref(100);
const totalPages = computed(() => Math.ceil(props.dataValue.length / pageSize.value));
const paginatedUser = computed(() => {
    const startIndex = (currentPage.value - 1) * pageSize.value;
    const endIndex = startIndex + pageSize.value;
    return props.dataValue.slice(startIndex, endIndex);
});
function goToPage(page) {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
}
function goToPreviousPage() {
    goToPage(currentPage.value - 1);
}
function goToNextPage() {
    goToPage(currentPage.value + 1);
}
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        dataValue: {
            type: Array,
            required: true,
            default: null
        },
        totalPages: {
            type: Number,
            required: true,
            default: null
        }
    },
});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("w-full space-y-3 bg-white") }, });
    if (__VLS_ctx.loading) {
        // @ts-ignore
        const __VLS_0 = {}
            .loadingPage;
        ({}.loadingPage);
        __VLS_components.LoadingPage;
        __VLS_components.loadingPage;
        // @ts-ignore
        [LoadingPage,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
        const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({}));
        const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
        // @ts-ignore
        [loading,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center h-9") }, ...{ class: ((__VLS_ctx.totalPages === 0 ? 'justify-end' : 'justify-between')) }, });
    __VLS_styleScopedClasses = (totalPages === 0 ? 'justify-end' : 'justify-between');
    if (__VLS_ctx.totalPages > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.download) }, ...{ class: ("export inline-flex justify-center items-center") }, });
        // @ts-ignore
        const __VLS_6 = {}
            .DocumentArrowUpIcon;
        ({}.DocumentArrowUpIcon);
        __VLS_components.DocumentArrowUpIcon;
        // @ts-ignore
        [DocumentArrowUpIcon,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("icon h-5 w-5") }, }));
        const __VLS_8 = __VLS_7({ ...{ class: ("icon h-5 w-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ ...{ class: ("icon h-5 w-5") }, }));
        const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
        // @ts-ignore
        [totalPages, totalPages, download,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("inline-flex gap-x-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ class: ("border rounded-md cursor-pointer") }, name: ("limit"), id: ("limit"), value: ((__VLS_ctx.limit)), });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.limitList))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ ...{ onChange: (item.value) }, key: ((item.name)), value: ((item.value)), });
        (item.name);
        // @ts-ignore
        [limit, limitList,];
    }
    if (__VLS_ctx.totalPages > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center h-7") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.goToPreviousPage) }, ...{ class: ("border-slate-300 border-l border-y rounded-s-full w-8 h-full flex justify-center items-center cursor-pointer") }, ...{ class: ((__VLS_ctx.currentPage === 1 ? 'bg-gray-100' : '')) }, disabled: ((__VLS_ctx.currentPage === 1)), });
        __VLS_styleScopedClasses = (currentPage === 1 ? 'bg-gray-100' : '');
        // @ts-ignore
        const __VLS_12 = {}
            .ChevronLeftIcon;
        ({}.ChevronLeftIcon);
        __VLS_components.ChevronLeftIcon;
        // @ts-ignore
        [ChevronLeftIcon,];
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("h-5 w-5") }, }));
        const __VLS_14 = __VLS_13({ ...{ class: ("h-5 w-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ ...{ class: ("h-5 w-5") }, }));
        const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
        // @ts-ignore
        [totalPages, goToPreviousPage, currentPage, currentPage,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("flex justify-center items-center border border-slate-300 min-w-14 h-full w-auto px-2 cursor-default") }, });
        (__VLS_ctx.currentPage);
        (__VLS_ctx.totalPages);
        // @ts-ignore
        [totalPages, currentPage,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.goToNextPage) }, ...{ class: ("border-slate-300 border-r border-y rounded-e-full w-8 h-full flex justify-center items-center cursor-pointer") }, ...{ class: ((__VLS_ctx.currentPage === __VLS_ctx.totalPages ? 'bg-gray-100' : '')) }, disabled: ((__VLS_ctx.currentPage === __VLS_ctx.totalPages)), });
        __VLS_styleScopedClasses = (currentPage === totalPages ? 'bg-gray-100' : '');
        // @ts-ignore
        const __VLS_18 = {}
            .ChevronRightIcon;
        ({}.ChevronRightIcon);
        __VLS_components.ChevronRightIcon;
        // @ts-ignore
        [ChevronRightIcon,];
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: ("h-5 w-5") }, }));
        const __VLS_20 = __VLS_19({ ...{ class: ("h-5 w-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({ ...{ class: ("h-5 w-5") }, }));
        const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
        // @ts-ignore
        [totalPages, totalPages, currentPage, currentPage, goToNextPage,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("cursor-default") }, });
    (props.totalPages);
    __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({ ...{ class: ("w-full border") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({ ...{ class: ("sticky top-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ ...{ class: ("bg-white font-semibold capitalize") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    if (__VLS_ctx.totalPages > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.paginatedUser))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ key: ((item.MSISDN)), ...{ class: ("text-center overflow-y-auto truncate") }, ...{ class: ((item.RNUM % 2 === 0 ? 'bg-[#f7cb0660]' : '')) }, });
            __VLS_styleScopedClasses = (item.RNUM % 2 === 0 ? 'bg-[#f7cb0660]' : '');
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            (item.MSISDN);
            // @ts-ignore
            [totalPages, paginatedUser,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            (item.PAYMENT_MODE);
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            (item.SUBSCRIBER_STATUS);
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            (item.OFFER_ID);
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            (item.PRIMARY_FLAG);
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            (item.OFFER_STATUS);
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            (item.OFFER_EFFECT_DATE);
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            (item.OFFER_EXP_DATE);
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ colspan: ("8"), ...{ class: ("text-center py-10") }, });
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['space-y-3'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['h-9'];
        __VLS_styleScopedClasses['export'];
        __VLS_styleScopedClasses['inline-flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['icon'];
        __VLS_styleScopedClasses['h-5'];
        __VLS_styleScopedClasses['w-5'];
        __VLS_styleScopedClasses['inline-flex'];
        __VLS_styleScopedClasses['gap-x-3'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['rounded-md'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['h-7'];
        __VLS_styleScopedClasses['border-slate-300'];
        __VLS_styleScopedClasses['border-l'];
        __VLS_styleScopedClasses['border-y'];
        __VLS_styleScopedClasses['rounded-s-full'];
        __VLS_styleScopedClasses['w-8'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['h-5'];
        __VLS_styleScopedClasses['w-5'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-slate-300'];
        __VLS_styleScopedClasses['min-w-14'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['w-auto'];
        __VLS_styleScopedClasses['px-2'];
        __VLS_styleScopedClasses['cursor-default'];
        __VLS_styleScopedClasses['border-slate-300'];
        __VLS_styleScopedClasses['border-r'];
        __VLS_styleScopedClasses['border-y'];
        __VLS_styleScopedClasses['rounded-e-full'];
        __VLS_styleScopedClasses['w-8'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['h-5'];
        __VLS_styleScopedClasses['w-5'];
        __VLS_styleScopedClasses['cursor-default'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['sticky'];
        __VLS_styleScopedClasses['top-0'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['capitalize'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['overflow-y-auto'];
        __VLS_styleScopedClasses['truncate'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['py-10'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                $props: __VLS_makeOptional(props),
                ...props,
                ChevronLeftIcon: ChevronLeftIcon,
                ChevronRightIcon: ChevronRightIcon,
                DocumentArrowUpIcon: DocumentArrowUpIcon,
                download: download,
                limit: limit,
                limitList: limitList,
                currentPage: currentPage,
                totalPages: totalPages,
                paginatedUser: paginatedUser,
                goToPreviousPage: goToPreviousPage,
                goToNextPage: goToNextPage,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
        };
    },
});
;
