<script lang="ts">
    import { Arrow } from 'shared/assets/index.ts';

    export let title: string;

    let className: string;
    export { className as class };
</script>


<details class={className} open>
    <summary>
        {title}

        <Arrow class="arrow" />
    </summary>

    <slot />
</details>

<style>
    summary {
        position: relative;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
    }

    summary::marker {
        content: '';
    }

    summary :global(.arrow) {
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        width: 20px;
        height: 20px;
        transform: rotate(180deg);
        cursor: pointer;
        transition: 0.2s;
    }

    summary:focus-visible {
        color: var(--blue);
        outline: 0;
    }

    summary:focus-visible :global(.arrow) {
        color: var(--blue);
    }

    details[open] summary {
        margin-bottom: 12px;
    }

    details[open] :global(.arrow) {
        transform: rotate(360deg);
    }
</style>
