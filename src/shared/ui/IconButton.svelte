<script lang="ts">
    export let size: 'small' | 'medium' = 'medium';
    export let active: boolean;
    export let variant: 'outlined' | 'transparent' = 'transparent';
    export let value: string | number;
    export let disabled: boolean = false;
    export let name: string;

    let className: string;
    export { className as class };
</script>

<button
    type="button"
    class:variant-outlined={variant === 'outlined'}
    class:size-small={size === 'small'}
    class:active
    class={className}
    value={value}
    name={name}
    disabled={disabled}
    on:click
>
    <slot />
</button>

<style>
    button {
        border-radius: 4px;
        border: 0;
        background: transparent;
        width: 28px;
        height: 28px;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--black);
        transition: 0.2s;
        cursor: pointer;
    }

    button:focus-visible {
        border-color: var(--blue);
    }

    button:disabled {
        opacity: 0.7;
    }

    .size-small {
        width: 16px;
        height: 16px;
    }

    .variant-outlined {
        background: var(--white);
        border: 1px solid var(--gray-150);
    }

    .variant-outlined:hover:not(.active):not(:disabled) {
        background: var(--gray-100);
    }

    .variant-outlined.active {
        background: var(--blue);
        color: var(--white);
    }
</style>
