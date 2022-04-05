<script lang="ts">
    import { onMount } from 'svelte';
    import cn from 'classnames';

    export let placeholder: string = '#ffffff';
    export let value: string;
    export let id: string = '';
    export let name: string = '';
    let className: string = '';
    export {className as class};

    let focused = false;
    let input;
    let metaElem;

    onMount(() => (input.style.width = `${input.style.width - metaElem.style.width}px`));

    const handleFocus = () => (focused = true);
    const handleBlur = () => (focused = false);
    const focusOnInput = () => input.focus();
</script>

<div class={cn("input-container", [className])} class:focused on:click={focusOnInput}>
    <input
        type="color"
        bind:this={metaElem}
        name={name}
        value={value}
        style={`background: ${value};`}
        on:change
    >

    <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        bind:this={input}
        on:focus={handleFocus}
        on:blur={handleBlur}
        on:change
    >
</div>

<style>
    .input-container {
        width: 82px;
        display: flex;
        align-items: center;
        border-radius: 4px;
        border: 1px solid var(--gray-150);
        padding: 6px 8px;
        background: var(--white);
        font-family: 'Fira Mono', monospace;
        transition: 0.2s;
        cursor: text;
    }

    input[type="color"] {
        flex: 0 0 12px;
        width: 12px;
        height: 12px;
        padding: 0;
        margin: 0 2px 0 0;
        border-radius: 2px;
        border: 1px solid var(--black);
        cursor: pointer;
    }

    .focused, input[type="color"]:focus-visible {
        border-color: var(--blue);
    }

    input::-webkit-color-swatch {
        appearance: none;
        display: none;
    }

    input[type="text"] {
        flex: 1;
        font-size: 12px;
        line-height: 16px;
        font-weight: bold;
        padding: 0;
        margin: 0;
        border: 0;
        max-width: 100%;
    }

    input:focus {
        outline: 0;
    }

    span {
        flex: 0;
        padding-left: 2px;
        font-size: 12px;
        line-height: 16px;
        user-select: none;
        color: var(--gray-600);
        transition: 0.2s;
    }
</style>
