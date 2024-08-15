import axios from 'axios';
import { ref, onMounted, watch, computed, defineEmits } from 'vue';
import { XMarkIcon } from '@heroicons/vue/24/solid';
const { defineProps, defineSlots, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const searchOffer = ref('');
const selectData = ref([]);
const selectedOfferId = ref('');
const historySelectedOfferId = ref([]);
const showSelected = ref(true);
const emit = defineEmits('data-selected');
onMounted(async () => {
    selectData.value = await getSelectData();
});
const getSelectData = async () => {
    try {
        const response = await axios.get('http://localhost/select-offering-frontend-vue/public/getOffering.php');
        return response.data;
    }
    catch (error) {
        return error;
    }
};
watch(selectedOfferId, (newValue) => {
    if (newValue && !historySelectedOfferId.value.includes(newValue)) {
        historySelectedOfferId.value.push(newValue);
        emit('data-selected', historySelectedOfferId.value);
        searchOffer.value = '';
        selectedOfferId.value = '';
    }
});
const filterOffer = computed(() => {
    return selectData.value.filter((item) => {
        let string_id = item.offering_id.toString();
        return (string_id.toLowerCase().includes(searchOffer.value.toLowerCase()) ||
            item.offering_name.toLowerCase().includes(searchOffer.value.toLowerCase()));
    });
});
const removeItem = (index) => {
    historySelectedOfferId.value.splice(index, 1);
};
const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'text/plain') {
        const reader = new FileReader();
        reader.onload = (e) => {
            const text = e.target.result;
            historySelectedOfferId.value = text.split('\r\n').filter((item) => item !== '');
            emit('data-selected', historySelectedOfferId.value);
            event.target.value = '';
        };
        reader.readAsText(file);
    }
};
const clearAll = () => {
    historySelectedOfferId.value = [];
    emit('data-selected', historySelectedOfferId.value);
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    emits: {},
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-2 gap-x-4 relative") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("inline-flex w-full relative overflow-hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.showSelected = !__VLS_ctx.showSelected;
                // @ts-ignore
                [showSelected, showSelected,];
            } }, ...{ class: ("bg-black w-full h-full opacity-15 cursor-pointer rounded-md absolute z-10") }, ...{ class: ((__VLS_ctx.showSelected === false
                ? 'transition-transform  translate-x-0 duration-500 ease-in-out'
                : 'transition-transform translate-x-full duration-500 ease-in-out')) }, });
    __VLS_styleScopedClasses = (showSelected === false
        ? 'transition-transform  translate-x-0 duration-500 ease-in-out'
        : 'transition-transform translate-x-full duration-500 ease-in-out');
    // @ts-ignore
    [showSelected,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ class: ("border p-2 rounded-s-md") }, type: ("text"), placeholder: ("Search"), value: ((__VLS_ctx.searchOffer)), });
    // @ts-ignore
    [searchOffer,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ class: ("border p-2 w-full truncate rounded-e-md") }, value: ((__VLS_ctx.selectedOfferId)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: (""), disabled: (true), selected: (true), });
    // @ts-ignore
    [selectedOfferId,];
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.filterOffer))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((item.offering_id)), value: ((item.offering_id)), });
        (item.offering_id + ' - ' + item.offering_name);
        // @ts-ignore
        [filterOffer,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("inline-flex w-full relative overflow-hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.showSelected = !__VLS_ctx.showSelected;
                // @ts-ignore
                [showSelected, showSelected,];
            } }, ...{ class: ("bg-black w-full h-full absolute opacity-15 cursor-pointer rounded-md") }, ...{ class: ((__VLS_ctx.showSelected === true
                ? 'transition-transform  translate-x-0 duration-500 ease-in-out'
                : 'transition-transform -translate-x-full duration-500 ease-in-out')) }, });
    __VLS_styleScopedClasses = (showSelected === true
        ? 'transition-transform  translate-x-0 duration-500 ease-in-out'
        : 'transition-transform -translate-x-full duration-500 ease-in-out');
    // @ts-ignore
    [showSelected,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ class: ("w-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("file-input"), ...{ class: ("sr-only") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onChange: (__VLS_ctx.handleFileUpload) }, accept: (".txt"), type: ("file"), name: ("file-input"), id: ("file-input"), ...{ class: ("block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4 dark:file:bg-neutral-700 dark:file:text-neutral-400") }, });
    // @ts-ignore
    [handleFileUpload,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
    if (__VLS_ctx.historySelectedOfferId.length > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.clearAll) }, });
        // @ts-ignore
        [historySelectedOfferId, clearAll,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-x-5 py-1") }, });
        for (const [item, i] of __VLS_getVForSourceType((__VLS_ctx.historySelectedOfferId))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ key: ((i)), ...{ class: ("px-2 py-1 rounded-full flex items-center gap-x-2 text-xs border") }, });
            (item);
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("inline-flex items-center") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.historySelectedOfferId.length > 0)))
                            return;
                        __VLS_ctx.removeItem(i);
                        // @ts-ignore
                        [historySelectedOfferId, removeItem,];
                    } }, });
            // @ts-ignore
            const __VLS_0 = {}
                .XMarkIcon;
            ({}.XMarkIcon);
            __VLS_components.XMarkIcon;
            // @ts-ignore
            [XMarkIcon,];
            // @ts-ignore
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("h-5 w-5 fill-red-600 hover:fill-red-400") }, }));
            const __VLS_2 = __VLS_1({ ...{ class: ("h-5 w-5 fill-red-600 hover:fill-red-400") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            ({}({ ...{ class: ("h-5 w-5 fill-red-600 hover:fill-red-400") }, }));
            const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['grid-cols-2'];
        __VLS_styleScopedClasses['gap-x-4'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['inline-flex'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['bg-black'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['opacity-15'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['rounded-md'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['z-10'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['rounded-s-md'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['truncate'];
        __VLS_styleScopedClasses['rounded-e-md'];
        __VLS_styleScopedClasses['inline-flex'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['bg-black'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['opacity-15'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['rounded-md'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['sr-only'];
        __VLS_styleScopedClasses['block'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-200'];
        __VLS_styleScopedClasses['shadow-sm'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['focus:z-10'];
        __VLS_styleScopedClasses['focus:border-blue-500'];
        __VLS_styleScopedClasses['focus:ring-blue-500'];
        __VLS_styleScopedClasses['disabled:opacity-50'];
        __VLS_styleScopedClasses['disabled:pointer-events-none'];
        __VLS_styleScopedClasses['dark:bg-neutral-900'];
        __VLS_styleScopedClasses['dark:border-neutral-700'];
        __VLS_styleScopedClasses['dark:text-neutral-400'];
        __VLS_styleScopedClasses['file:bg-gray-50'];
        __VLS_styleScopedClasses['file:border-0'];
        __VLS_styleScopedClasses['file:me-4'];
        __VLS_styleScopedClasses['file:py-3'];
        __VLS_styleScopedClasses['file:px-4'];
        __VLS_styleScopedClasses['dark:file:bg-neutral-700'];
        __VLS_styleScopedClasses['dark:file:text-neutral-400'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['gap-x-5'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['px-2'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-x-2'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['inline-flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['h-5'];
        __VLS_styleScopedClasses['w-5'];
        __VLS_styleScopedClasses['fill-red-600'];
        __VLS_styleScopedClasses['hover:fill-red-400'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                $emit: emit,
                XMarkIcon: XMarkIcon,
                searchOffer: searchOffer,
                selectedOfferId: selectedOfferId,
                historySelectedOfferId: historySelectedOfferId,
                showSelected: showSelected,
                filterOffer: filterOffer,
                removeItem: removeItem,
                handleFileUpload: handleFileUpload,
                clearAll: clearAll,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $emit: emit,
        };
    },
});
;
