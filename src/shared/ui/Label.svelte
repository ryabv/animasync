<script lang="ts">
    export let id: string;
    export let text: string;
    export let direction: 'row' | 'column' = 'row';
</script>

<div class="input-label-container" class:column={direction === 'column'}>
    <label for={id}>{text}</label>

    <slot />
</div>

<style>
    .input-label-container {
        display: flex;
        gap: 12px;
        align-items: center;
    }

    .column {
        flex-direction: column;
        align-items: flex-start;
    }

    label {
        color: var(--gray-600);
        font-size: 12px;
        cursor: pointer;
    }
</style>
