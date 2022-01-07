<script lang="ts">
    import { IconButton } from 'shared/ui/index.ts';
    import { AlignLeft, AlignRight } from 'shared/assets/index.ts';
    import { Alignment, editorValues } from 'entities/editor/model/index.ts';
</script>

<div>
    <IconButton
        class="btn"
        variant="outlined"
        name="settingsAlignment"
        value={Alignment.LEFT}
        active={$editorValues.settingsAlignment === Alignment.LEFT}
        on:click={editorValues.updateByName}
    >
        <AlignLeft />
    </IconButton>

    <IconButton
        class="btn"
        variant="outlined"
        name="settingsAlignment"
        value={Alignment.RIGHT}
        active={$editorValues.settingsAlignment === Alignment.RIGHT}
        on:click={editorValues.updateByName}
    >
        <AlignRight />
    </IconButton>
</div>

<style>
    div {
        display: flex;
    }

    div :global(.btn:first-child) {
        border-radius: 4px 0 0 4px;
    }

    div :global(.btn:last-child) {
        border-radius: 0 4px 4px 0;
        margin-left: -1px;
    }
</style>
