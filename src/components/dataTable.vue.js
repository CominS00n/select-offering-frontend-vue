import { ref, watch, defineProps, computed } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid';
import { DocumentArrowUpIcon, InboxIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import Export from '@/script/export-csv';
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { exportToCsv } = Export();
const searchNumber = ref('');
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
watch(() => props.dataValue, () => {
    currentPage.value = 1;
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
        name: '3000',
        value: 3000
    }
]);
const currentPage = ref(1);
const pageSize = ref(100);
const totalPages = computed(() => Math.ceil(props.dataValue.length / pageSize.value));
const filteredData = computed(() => {
    if (!searchNumber.value) {
        return props.dataValue;
    }
    return props.dataValue.filter((item) => item.MSISDN.toString().includes(searchNumber.value));
});
const paginatedUser = computed(() => {
    const startIndex = (currentPage.value - 1) * pageSize.value;
    const endIndex = startIndex + pageSize.value;
    return filteredData.value.slice(startIndex, endIndex);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("flex flex-col w-full h-full space-y-3 bg-white overflow-hidden") }, });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("sm:flex sm:items-center sm:h-10 space-y-2 bg-white p-1") }, ...{ class: ((__VLS_ctx.totalPages > 0 ? 'sm:justify-between' : 'sm:justify-end')) }, });
    __VLS_styleScopedClasses = (totalPages > 0 ? 'sm:justify-between' : 'sm:justify-end');
    if (__VLS_ctx.totalPages > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("inline-flex items-center gap-x-3") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative h-fit flex items-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ class: ("border rounded-md pl-10 text-sm h-9 w-48 focus:border-none focus:outline-[#f7c906] focus:ring-0") }, placeholder: ("Search msisdn..."), });
        (__VLS_ctx.searchNumber);
        // @ts-ignore
        [totalPages, totalPages, searchNumber,];
        // @ts-ignore
        const __VLS_6 = {}
            .MagnifyingGlassIcon;
        ({}.MagnifyingGlassIcon);
        __VLS_components.MagnifyingGlassIcon;
        // @ts-ignore
        [MagnifyingGlassIcon,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("absolute h-5 w-5 text-gray-400 left-3") }, }));
        const __VLS_8 = __VLS_7({ ...{ class: ("absolute h-5 w-5 text-gray-400 left-3") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ ...{ class: ("absolute h-5 w-5 text-gray-400 left-3") }, }));
        const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.download) }, ...{ class: ("export inline-flex justify-center items-center") }, });
        // @ts-ignore
        const __VLS_12 = {}
            .DocumentArrowUpIcon;
        ({}.DocumentArrowUpIcon);
        __VLS_components.DocumentArrowUpIcon;
        // @ts-ignore
        [DocumentArrowUpIcon,];
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("icon h-5 w-5") }, }));
        const __VLS_14 = __VLS_13({ ...{ class: ("icon h-5 w-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ ...{ class: ("icon h-5 w-5") }, }));
        const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
        // @ts-ignore
        [download,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-end items-center gap-x-3") }, });
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
        const __VLS_18 = {}
            .ChevronLeftIcon;
        ({}.ChevronLeftIcon);
        __VLS_components.ChevronLeftIcon;
        // @ts-ignore
        [ChevronLeftIcon,];
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: ("h-5 w-5") }, }));
        const __VLS_20 = __VLS_19({ ...{ class: ("h-5 w-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({ ...{ class: ("h-5 w-5") }, }));
        const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
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
        const __VLS_24 = {}
            .ChevronRightIcon;
        ({}.ChevronRightIcon);
        __VLS_components.ChevronRightIcon;
        // @ts-ignore
        [ChevronRightIcon,];
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: ("h-5 w-5") }, }));
        const __VLS_26 = __VLS_25({ ...{ class: ("h-5 w-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        ({}({ ...{ class: ("h-5 w-5") }, }));
        const __VLS_29 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26));
        // @ts-ignore
        [totalPages, totalPages, currentPage, currentPage, goToNextPage,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("cursor-default") }, });
    (props.totalPages);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content-table w-full h-full overflow-y-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({ ...{ class: ("border") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ ...{ class: ("bg-white font-semibold capitalize") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    if (__VLS_ctx.filteredData.length > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({ ...{ class: ("tbody") }, });
        for (const [item, i] of __VLS_getVForSourceType((__VLS_ctx.paginatedUser))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ key: ((item.MSISDN)), ...{ class: ("text-center") }, ...{ class: ((i.valueOf % 2 == 0 ? 'bg-[#F7C906] bg-opacity-60' : '')) }, });
            __VLS_styleScopedClasses = (i.valueOf % 2 == 0 ? 'bg-[#F7C906] bg-opacity-60' : '');
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            (item.MSISDN);
            // @ts-ignore
            [filteredData, paginatedUser,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            (item.PAYMENT_MODE);
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            (item.SUBSCRIBER_STATUS);
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            (item.OFFER_ID);
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("tooltip max-w-72") }, "data-tip": ((item.OFFER_NAME)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("w-full truncate") }, });
            (item.OFFER_NAME);
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
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ colspan: ("9"), ...{ class: ("text-center py-16") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("inline-flex flex-col items-center") }, });
        // @ts-ignore
        const __VLS_30 = {}
            .InboxIcon;
        ({}.InboxIcon);
        __VLS_components.InboxIcon;
        // @ts-ignore
        [InboxIcon,];
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ class: ("h-10 w-10 text-gray-300") }, }));
        const __VLS_32 = __VLS_31({ ...{ class: ("h-10 w-10 text-gray-300") }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        ({}({ ...{ class: ("h-10 w-10 text-gray-300") }, }));
        const __VLS_35 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32));
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['space-y-3'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['sm:flex'];
        __VLS_styleScopedClasses['sm:items-center'];
        __VLS_styleScopedClasses['sm:h-10'];
        __VLS_styleScopedClasses['space-y-2'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['p-1'];
        __VLS_styleScopedClasses['inline-flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-x-3'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['h-fit'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['rounded-md'];
        __VLS_styleScopedClasses['pl-10'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['h-9'];
        __VLS_styleScopedClasses['w-48'];
        __VLS_styleScopedClasses['focus:border-none'];
        __VLS_styleScopedClasses['focus:outline-[#f7c906]'];
        __VLS_styleScopedClasses['focus:ring-0'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['h-5'];
        __VLS_styleScopedClasses['w-5'];
        __VLS_styleScopedClasses['text-gray-400'];
        __VLS_styleScopedClasses['left-3'];
        __VLS_styleScopedClasses['export'];
        __VLS_styleScopedClasses['inline-flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['icon'];
        __VLS_styleScopedClasses['h-5'];
        __VLS_styleScopedClasses['w-5'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-end'];
        __VLS_styleScopedClasses['items-center'];
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
        __VLS_styleScopedClasses['content-table'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['overflow-y-auto'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['capitalize'];
        __VLS_styleScopedClasses['tbody'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['tooltip'];
        __VLS_styleScopedClasses['max-w-72'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['truncate'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['py-16'];
        __VLS_styleScopedClasses['inline-flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['h-10'];
        __VLS_styleScopedClasses['w-10'];
        __VLS_styleScopedClasses['text-gray-300'];
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
                InboxIcon: InboxIcon,
                MagnifyingGlassIcon: MagnifyingGlassIcon,
                searchNumber: searchNumber,
                download: download,
                limit: limit,
                limitList: limitList,
                currentPage: currentPage,
                totalPages: totalPages,
                filteredData: filteredData,
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
