import { reactive, ref } from 'vue';
import { useToast } from 'vue-toastification';
import useApi from '@/composable/api';
import muliComboBox from './components/muliComboBox.vue';
import subscriberPage from './components/subscriberPage.vue';
import dataTable from './components/dataTable.vue';
import loadingPage from './components/loadingPage.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { getUsers, userList, loading, totalCount } = useApi();
const toast = useToast();
const selectStatus = ref([]);
function handleStatus(data) {
    selectStatus.value = data;
}
const selectOffer = ref([]);
function handleOffer(data) {
    selectOffer.value = data;
}
const sendData = () => {
    if (selectOffer.value.length === 0 || selectStatus.value.length === 0) {
        toast.error('Please select at least one filter', { timeout: 3000 });
    }
    else {
        const formData = reactive({
            o_id: selectOffer.value,
            status: selectStatus.value
        });
        getUsers(formData);
    }
};
const __VLS_fnComponent = (await import('vue')).defineComponent({});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ id: ("header"), ...{ class: ("space-y-3 py-3 px-6 rounded-md") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-2xl font-bold uppercase text-[#F7C906] tracking-[.25rem] mb-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-black capitalize") }, });
    // @ts-ignore
    [muliComboBox,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(muliComboBox, new muliComboBox({ ...{ 'onDataSelected': {} }, }));
    const __VLS_1 = __VLS_0({ ...{ 'onDataSelected': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ ...{ 'onDataSelected': {} }, }));
    let __VLS_5;
    const __VLS_6 = {
        onDataSelected: (__VLS_ctx.handleOffer)
    };
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(muliComboBox, __VLS_1));
    let __VLS_2;
    let __VLS_3;
    // @ts-ignore
    [handleOffer,];
    // @ts-ignore
    [subscriberPage,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(subscriberPage, new subscriberPage({ ...{ 'onDataSelected': {} }, }));
    const __VLS_8 = __VLS_7({ ...{ 'onDataSelected': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ 'onDataSelected': {} }, }));
    let __VLS_12;
    const __VLS_13 = {
        onDataSelected: (__VLS_ctx.handleStatus)
    };
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(subscriberPage, __VLS_8));
    let __VLS_9;
    let __VLS_10;
    // @ts-ignore
    [handleStatus,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.sendData) }, type: ("submit"), ...{ class: ("w-full bg-[#F7C906] py-2 rounded-md font-semibold hover:transition hover:bg-[#f7cb06c3] text-white hover:duration-300 hover:ease-in-out hover:bg-white hover:text-[#F7C906] hover:outline hover:outline-[1px] hover:outline-[#F7C906]") }, });
    // @ts-ignore
    [sendData,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ("py-3 px-6 space-y-5 bg-white rounded-md mt-2 min-h-80 h-screen overflow-hidden") }, });
    if (__VLS_ctx.loading) {
        // @ts-ignore
        [loadingPage,];
        // @ts-ignore
        const __VLS_14 = __VLS_asFunctionalComponent(loadingPage, new loadingPage({}));
        const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
        ({}({}));
        const __VLS_18 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(loadingPage, __VLS_15));
        // @ts-ignore
        [loading,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.article, __VLS_intrinsicElements.article)({ ...{ class: ("h-full") }, });
    // @ts-ignore
    [dataTable,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(dataTable, new dataTable({ dataValue: ((__VLS_ctx.userList)), totalPages: ((__VLS_ctx.totalCount)), }));
    const __VLS_20 = __VLS_19({ dataValue: ((__VLS_ctx.userList)), totalPages: ((__VLS_ctx.totalCount)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ dataValue: ((__VLS_ctx.userList)), totalPages: ((__VLS_ctx.totalCount)), }));
    const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(dataTable, __VLS_20));
    // @ts-ignore
    [userList, totalCount,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['space-y-3'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['rounded-md'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['text-[#F7C906]'];
        __VLS_styleScopedClasses['tracking-[.25rem]'];
        __VLS_styleScopedClasses['mb-6'];
        __VLS_styleScopedClasses['text-black'];
        __VLS_styleScopedClasses['capitalize'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['bg-[#F7C906]'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['rounded-md'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['hover:transition'];
        __VLS_styleScopedClasses['hover:bg-[#f7cb06c3]'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['hover:duration-300'];
        __VLS_styleScopedClasses['hover:ease-in-out'];
        __VLS_styleScopedClasses['hover:bg-white'];
        __VLS_styleScopedClasses['hover:text-[#F7C906]'];
        __VLS_styleScopedClasses['hover:outline'];
        __VLS_styleScopedClasses['hover:outline-[1px]'];
        __VLS_styleScopedClasses['hover:outline-[#F7C906]'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['space-y-5'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['rounded-md'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['min-h-80'];
        __VLS_styleScopedClasses['h-screen'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['h-full'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                muliComboBox: muliComboBox,
                subscriberPage: subscriberPage,
                dataTable: dataTable,
                loadingPage: loadingPage,
                userList: userList,
                loading: loading,
                totalCount: totalCount,
                handleStatus: handleStatus,
                handleOffer: handleOffer,
                sendData: sendData,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
