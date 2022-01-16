<script>
    import { Label, Input } from 'shared/ui/index.ts';

    import { elements } from '../model/index.ts';
    import EditorAccordion from './EditorAccordion.svelte';

    $: currentElem = $elements?.find((el) => el.active);
    $: handleChange = (e) => elements.edit(currentElem?.id)({ [e.target.name]: (parseFloat(e.target.value) || 0) });
</script>

{#if currentElem}
    <EditorAccordion title={`# Element ${currentElem.id}`}>
        <Label id="el-width" text="width">
            <Input
                    id="el-width"
                    type="number"
                    name="width"
                    min="1"
                    max="100"
                    meta="%"
                    on:change={handleChange}
                    value={currentElem.width}
            />
        </Label>

        <Label id="el-height" text="height">
            <Input
                    id="el-height"
                    type="number"
                    name="height"
                    on:change={handleChange}
                    value={currentElem.height}
            />
        </Label>

        <Label id="el-br" text="border-radius">
            <Input
                    id="el-br"
                    type="number"
                    name="borderRadius"
                    on:change={handleChange}
                    value={currentElem.borderRadius}
            />
        </Label>
    </EditorAccordion>
{/if}
