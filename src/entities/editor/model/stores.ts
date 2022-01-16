import {writable} from 'svelte/store';
import { Alignment } from './types';

const createEditorValues = () => {
    const { subscribe, update } = writable({
        settingsAlignment: Alignment.LEFT,
        settingsContainerMinWidth: 340,
        settingsAnimationSpeed: 1.5,
        settingsLlAppearanceDelay: 1.5,
        settingsElementsGap: 10,
        settingsElementsBg: '#c4c4c4',
        containerBackground: '#ffffff',
        containerPadding: 20,
        containerBorderRadius: 10,
        containerBoxShadowX: 0,
        containerBoxShadowY: 0,
        containerBoxShadowBlur: 15,
        containerBoxShadowSpread: 0,
        containerBoxShadowColor: '#000000',
        containerBoxShadowOpacity: 10,
        skeletonBackground: '#f5f5f5',
        skeletonBorderRadius: 5,
        llWidth: 10,
        llBackground: '#c4c4c4',
    });

    return {
        subscribe,
        updateByName: ({ currentTarget }) => update((values) => ({
            ...values,
            [currentTarget.name]: parseFloat(currentTarget.value) || currentTarget.value,
        })),
    };
};

export const editorValues = createEditorValues();


const createElements = () => {
    let uid = 1;
    const { subscribe, update } = writable([
        { id: uid++, width: 13.5, height: 40, borderRadius: 40, active: false },
        { id: uid++, width: 70, height: 25, active: false },
        { id: uid++, width: 30, height: 25, active: false },
        { id: uid++, width: 100, height: 200, active: false },
    ]);

    const deactivateEls = (els => els.map(el => ({ ...el, active: false })));
    const addNewEl = els => els.concat({ id: uid++, width: 100, height: 40, active: true });
    const activateElById = (id: number) => els => els.map(el => ({ ...el, active: el.id === id }));
    const deleteEl = (id: number) => els => els.filter(el => el.id !== id);
    const changeElOrder = (id: number, dir: 'greater' | 'less') => els => {
        const copied = [...els];
        const currentIndex = copied.findIndex(el => el.id === id);
        const changeElIndex = dir === 'greater' ? currentIndex + 1 : currentIndex - 1;
        const changeEl = copied[changeElIndex];

        if (changeEl) {
            copied[changeElIndex] = copied[currentIndex];
            copied[currentIndex] = changeEl;
        }

        return copied;
    };

    return {
        subscribe,
        add: (e) => {
            e.stopPropagation();
            update(els => addNewEl(deactivateEls(els)));
        },
        delete: (id: number) => {
            update(els => {
                const index = els.findIndex(el => el.id === id);
                const filtered = deleteEl(id)(els);

                if (!filtered.length) {
                    return [];
                }

                return activateElById((filtered[index] || filtered[filtered.length - 1]).id)(filtered);
            });
        },
        edit: (id: number) => (props: Record<string, unknown>) => update(els => els.map(el =>
            (el.id === id ? {...el, ...props} : el))),
        activate: (e) => {
            e.stopPropagation();
            update(activateElById(Number(e.currentTarget.id)))
        },
        deactivateAll: () => update(deactivateEls),
        makePrev: (id: number) => update(changeElOrder(id, 'less')),
        makeNext: (id: number) => update(changeElOrder(id, 'greater'))
    };
};

export const elements = createElements();
