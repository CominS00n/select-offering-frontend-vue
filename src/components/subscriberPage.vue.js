import { ref, defineEmits, watch } from 'vue';
import { TransitionRoot } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/24/solid';
const { defineProps, defineSlots, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
//chevron-down
const emit = defineEmits('data-selected');
const selectList = ref([
    { name: 'Idle', value: 1 },
    { name: 'Active', value: 2 },
    { name: 'Call Barring', value: 3 },
    { name: 'Suspend', value: 4 },
    { name: 'Pool', value: 8 }
]);
const checkItems = ref([]);
const checkAll = ref(false);
const hidden = ref(true);
const toggleCheckAll = () => {
    if (checkAll.value) {
        checkItems.value = selectList.value.map((item) => item.value);
    }
    else {
        checkItems.value = [];
    }
};
watch(checkItems, (newValue) => {
    emit('data-selected', newValue);
});
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-x-3 items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.hidden = !__VLS_ctx.hidden;
                // @ts-ignore
                [hidden, hidden,];
            } }, ...{ class: ("text-lg font-semibold cursor-pointer") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.hidden = !__VLS_ctx.hidden;
                // @ts-ignore
                [hidden, hidden,];
            } }, ...{ class: ((__VLS_ctx.hidden === true
                ? 'transition-transform rotate-180 duration-300 ease-in-out'
                : 'transition-transform rotate-0 duration-300 ease-in-out')) }, });
    __VLS_styleScopedClasses = (hidden === true
        ? 'transition-transform rotate-180 duration-300 ease-in-out'
        : 'transition-transform rotate-0 duration-300 ease-in-out');
    // @ts-ignore
    const __VLS_0 = {}
        .ChevronDownIcon;
    ({}.ChevronDownIcon);
    __VLS_components.ChevronDownIcon;
    // @ts-ignore
    [ChevronDownIcon,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("w-5 h-5") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("w-5 h-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ class: ("w-5 h-5") }, }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    [hidden,];
    // @ts-ignore
    const __VLS_6 = {}
        .TransitionRoot;
    ({}.TransitionRoot);
    ({}.TransitionRoot);
    __VLS_components.TransitionRoot;
    __VLS_components.TransitionRoot;
    // @ts-ignore
    [TransitionRoot, TransitionRoot,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ appear: (true), show: ((__VLS_ctx.hidden)), as: ("template"), enter: ("transform transition duration-[400ms]"), enterFrom: ("opacity-0 -translate-y-2"), enterTo: ("opacity-100 translate-y-0"), leave: ("transform duration-200 transition ease-in-out"), leaveFrom: ("opacity-100 translate-y-0"), leaveTo: ("opacity-0 -translate-y-2 "), }));
    const __VLS_8 = __VLS_7({ appear: (true), show: ((__VLS_ctx.hidden)), as: ("template"), enter: ("transform transition duration-[400ms]"), enterFrom: ("opacity-0 -translate-y-2"), enterTo: ("opacity-100 translate-y-0"), leave: ("transform duration-200 transition ease-in-out"), leaveFrom: ("opacity-100 translate-y-0"), leaveTo: ("opacity-0 -translate-y-2 "), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ appear: (true), show: ((__VLS_ctx.hidden)), as: ("template"), enter: ("transform transition duration-[400ms]"), enterFrom: ("opacity-0 -translate-y-2"), enterTo: ("opacity-100 translate-y-0"), leave: ("transform duration-200 transition ease-in-out"), leaveFrom: ("opacity-100 translate-y-0"), leaveTo: ("opacity-0 -translate-y-2 "), }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("space-x-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("gap-x-3 cursor-pointer flex items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onChange: (__VLS_ctx.toggleCheckAll) }, type: ("checkbox"), checked: ("checked"), ...{ class: ("checkbox checkbox-sm [--chkbg:#f7c906]") }, });
    (__VLS_ctx.checkAll);
    // @ts-ignore
    [hidden, toggleCheckAll, checkAll,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("label-text text-md") }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.selectList))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ key: ((item.name)), ...{ class: ("grid mt-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("gap-x-3 cursor-pointer flex items-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("checkbox"), checked: ("checked"), ...{ class: ("checkbox checkbox-sm [--chkbg:#f7c906] ") }, value: ((item.value)), });
        (__VLS_ctx.checkItems);
        // @ts-ignore
        [selectList, checkItems,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("label-text text-md") }, });
        (item.name);
    }
    __VLS_nonNullable(__VLS_11.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['gap-x-3'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['w-5'];
        __VLS_styleScopedClasses['h-5'];
        __VLS_styleScopedClasses['space-x-2'];
        __VLS_styleScopedClasses['gap-x-3'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['checkbox'];
        __VLS_styleScopedClasses['checkbox-sm'];
        __VLS_styleScopedClasses['[--chkbg:#f7c906]'];
        __VLS_styleScopedClasses['label-text'];
        __VLS_styleScopedClasses['text-md'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['gap-x-3'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['checkbox'];
        __VLS_styleScopedClasses['checkbox-sm'];
        __VLS_styleScopedClasses['[--chkbg:#f7c906]'];
        __VLS_styleScopedClasses['label-text'];
        __VLS_styleScopedClasses['text-md'];
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
                TransitionRoot: TransitionRoot,
                ChevronDownIcon: ChevronDownIcon,
                selectList: selectList,
                checkItems: checkItems,
                checkAll: checkAll,
                hidden: hidden,
                toggleCheckAll: toggleCheckAll,
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
