<script>
    import { Label, Input } from 'shared/ui/index.ts';

    import { editorValues } from '../model/index.ts';
    import AlignButtons from './AlignButtons.svelte';
    import EditorAccordion from './EditorAccordion.svelte';
</script>



<EditorAccordion title="Settings">
    <AlignButtons />

    <Label id="container-min-width" text="Container min-width">
        <Input
            id="container-min-width"
            type="number"
            name="settingsContainerMinWidth"
            on:change={editorValues.updateByName}
            bind:value={$editorValues.settingsContainerMinWidth}
        />
    </Label>

    <Label id="animation-speed" text="Animation speed">
        <Input
            id="animation-speed"
            name="settingsAnimationSpeed"
            type="number"
            placeholder="1.2"
            on:change={editorValues.updateByName}
            bind:value={$editorValues.settingsAnimationSpeed}
            step={0.1}
            meta="s"
        />
    </Label>

    <Label id="ll-appearance-delay" text="Loading line appearance delay">
        <Input
            id="ll-appearance-delay"
            name="settingsLlAppearanceDelay"
            type="number"
            placeholder="1.2"
            on:change={editorValues.updateByName}
            bind:value={$editorValues.settingsLlAppearanceDelay}
            step={0.1}
            meta="s"
        />
    </Label>

    <Label id="elements-gap" text="Elements gap">
        <Input
            id="elements-gap"
            type="number"
            name="settingsElementsGap"
            on:change={editorValues.updateByName}
            bind:value={$editorValues.settingsElementsGap}
        />
    </Label>
</EditorAccordion>
