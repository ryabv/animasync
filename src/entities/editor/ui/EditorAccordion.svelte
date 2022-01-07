<script lang="ts">
    import { Accordion } from 'shared/ui/index.ts';

    export let title: string;
</script>

<Accordion title={title} class="accordion">
    <div>
        <slot/>
    </div>
</Accordion>

<style>
    :global(.accordion) {
        padding: 16px 24px;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
</style>
