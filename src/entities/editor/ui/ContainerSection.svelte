<script>
    import { Label, Input, ColorInput } from 'shared/ui/index.ts';
    import { editorValues } from '../model/index.ts';
    import EditorAccordion from './EditorAccordion.svelte';
</script>

<EditorAccordion title="Container">
    <Label id="container-bg" text="background">
        <ColorInput
            id="container-bg"
            name="containerBackground"
            on:change={editorValues.updateByName}
            bind:value={$editorValues.containerBackground}
        />
    </Label>

    <Label id="container-padding" text="padding">
        <Input
            id="container-padding"
            type="number"
            name="containerPadding"
            on:change={editorValues.updateByName}
            bind:value={$editorValues.containerPadding}
        />
    </Label>

    <Label id="container-br" text="border-radius">
        <Input
            id="container-br"
            type="number"
            name="containerBorderRadius"
            on:change={editorValues.updateByName}
            bind:value={$editorValues.containerBorderRadius}
        />
    </Label>

    <Label id="container-shadow-x" text="box-shadow" direction="column">
        <div class="row">
            <Label id="container-shadow-x" text="x">
                <Input
                    id="container-shadow-x"
                    type="number"
                    name="containerBoxShadowX"
                    on:change={editorValues.updateByName}
                    bind:value={$editorValues.containerBoxShadowX}
                />
            </Label>

            <Label id="container-shadow-spread" text="spread">
                <Input
                    id="container-shadow-spread"
                    type="number"
                    name="containerBoxShadowSpread"
                    on:change={editorValues.updateByName}
                    bind:value={$editorValues.containerBoxShadowSpread}
                />
            </Label>
        </div>

        <div class="row">
            <Label id="container-shadow-y" text="y">
                <Input
                    id="container-shadow-y"
                    type="number"
                    name="containerBoxShadowY"
                    on:change={editorValues.updateByName}
                    bind:value={$editorValues.containerBoxShadowY}
                />
            </Label>

            <Label id="container-shadow-blur" text="blur">
                <Input
                    id="container-shadow-blur"
                    type="number"
                    name="containerBoxShadowBlur"
                    on:change={editorValues.updateByName}
                    bind:value={$editorValues.containerBoxShadowBlur}
                />
            </Label>
        </div>

        <div class="row">
            <ColorInput
                    name="containerBoxShadowColor"
                    on:change={editorValues.updateByName}
                    bind:value={$editorValues.containerBoxShadowColor}
            />

            <Label id="container-shadow-opacity" text="opacity">
                <Input
                    id="container-shadow-opacity"
                    type="number"
                    placeholder="50"
                    name="containerBoxShadowOpacity"
                    on:change={editorValues.updateByName}
                    bind:value={$editorValues.containerBoxShadowOpacity}
                    step={1}
                    max={100}
                    meta="%"
                />
            </Label>
        </div>
    </Label>
</EditorAccordion>

<style>
    .row {
        display: flex;
        gap: 12px;
    }
</style>
