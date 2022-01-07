<script>
    import { Label, Input, ColorInput } from 'shared/ui/index.ts';

    import { editorValues } from '../model/index.ts';
    import EditorAccordion from './EditorAccordion.svelte';
</script>

<EditorAccordion title="LoadingLine">
    <Label id="ll-width" text="width">
        <Input
            id="ll-width"
            type="number"
            name="llWidth"
            on:change={editorValues.updateByName}
            bind:value={$editorValues.llWidth}
        />
    </Label>

    <Label id="ll-bg" text="background">
        <ColorInput
            id="ll-bg"
            name="llBackground"
            on:change={editorValues.updateByName}
            bind:value={$editorValues.llBackground}
        />
    </Label>
</EditorAccordion>
