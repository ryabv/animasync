<script lang="ts">
    import { onMount } from 'svelte';

    export let placeholder: string = '10';
    export let meta: string = 'px';
    export let type: 'text' | 'number' = 'number';
    export let value: string | number;
    export let id: string = '';
    export let name: string = '';
    export let min: number = 0;
    export let step: number = 1;
    export let max: number | 'auto' = 'auto';

    let focused = false;
    let input;
    let metaElem;

    onMount(() => (input.style.width = `${input.style.width - metaElem.style.width}px`));

    const handleFocus = () => (focused = true);
    const handleBlur = () => (focused = false);
    const focusOnInput = () => input.focus();
</script>

<div class="input-container" class:focused on:click={focusOnInput}>
    <input
        lang="en-US"
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        min={min}
        max={max}
        step={step}
        value={value}
        bind:this={input}
        on:focus={handleFocus}
        on:blur={handleBlur}
        on:change
        on:input
    >
    <span bind:this={metaElem}>{meta}</span>
</div>

<style>
    .input-container {
        width: 64px;
        display: flex;
        border-radius: 4px;
        border: 1px solid var(--gray-150);
        padding: 6px 8px;
        background: var(--white);
        font-family: 'Fira Mono', monospace;
        transition: 0.2s;
        cursor: text;
    }

    .focused {
        border-color: var(--blue);
    }

    input {
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

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
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

    input:focus + span {
        color: var(--black);
    }
</style>
