<script>
    import { Label, Input, ColorInput } from 'shared/ui/index.ts';

    import { editorValues } from '../model/index.ts';
    import EditorAccordion from './EditorAccordion.svelte';
</script>

<EditorAccordion title="Skeleton">
    <Label id="skeleton-background" text="background">
        <ColorInput
            id="skeleton-background"
            name="skeletonBackground"
            on:change={editorValues.updateByName}
            bind:value={$editorValues.skeletonBackground}
        />
    </Label>

    <Label id="skeleton-br" text="border-radius">
        <Input
            id="skeleton-br"
            type="number"
            name="skeletonBorderRadius"
            on:change={editorValues.updateByName}
            bind:value={$editorValues.skeletonBorderRadius}
        />
    </Label>
</EditorAccordion>
