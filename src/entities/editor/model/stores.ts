import { writable } from 'svelte/store';
import { Alignment } from './types';

const createEditorValues = () => {
    const { subscribe, update } = writable({
        settingsAlignment: Alignment.LEFT,
        settingsContainerMinWidth: 300,
        settingsAnimationSpeed: 1.5,
        settingsLlAppearanceDelay: 1.5,
        settingsElementsGap: 15,
        settingsElementsBg: '#c4c4c4',
        containerBackground: '#ffffff',
        containerPadding: 20,
        containerBorderRadius: 10,
        containerBoxShadowX: 10,
        containerBoxShadowY: 10,
        containerBoxShadowBlur: 10,
        containerBoxShadowSpread: 10,
        containerBoxShadowColor: '#000000',
        containerBoxShadowOpacity: 0.15,
        skeletonBackground: '#c4c4c4',
        skeletonBorderRadius: 10,
        llWidth: 10,
        llBackground: '#c4c4c4',
    });

    return {
        subscribe,
        updateByName: ({ currentTarget }) => update((values) => ({
            ...values,
            [currentTarget.name]: parseFloat(currentTarget.value) || currentTarget.value,
        }))
    };
}

export const editorValues = createEditorValues();
