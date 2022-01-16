<script>
    import { Plus } from 'shared/assets/index.ts';
    import { editorValues as ev, elements, objToCssString, hexToRgba, getBoxShadow } from '../model/index.ts';
    import SkeletonElement from './SkeletonElement.svelte';

    $: containerStyles = objToCssString({
        width: $ev.settingsContainerMinWidth + 'px',
        background: $ev.containerBackground,
        padding: $ev.containerPadding + 'px',
        "border-radius": $ev.containerBorderRadius + 'px',
        "box-shadow": getBoxShadow({
            x: $ev.containerBoxShadowX,
            y: $ev.containerBoxShadowY,
            blur: $ev.containerBoxShadowBlur,
            spread: $ev.containerBoxShadowSpread,
            color: hexToRgba($ev.containerBoxShadowColor, $ev.containerBoxShadowOpacity / 100)
        }),
    });

    $: innerStyles = objToCssString({
        display: 'flex',
        "flex-direction": 'column',
        "align-items": $ev.settingsAlignment,
        gap: $ev.settingsElementsGap + 'px',
        width: '100%',
    });
</script>

<div class="container" style={containerStyles} on:click={elements.deactivateAll}>
    <div style={innerStyles}>
        {#each $elements as { id, width, height, active, borderRadius }}
            <SkeletonElement
                id={id}
                width={width}
                height={height}
                active={active}
                borderRadius={borderRadius || $ev.skeletonBorderRadius}
                on:click={elements.activate}
            />
        {/each}
    </div>

    <div class="add-element">
        <button on:click={elements.add}>
            <Plus />
        </button>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 auto;
    }

    .add-element {
        position: relative;
        width: 100%;
    }

    button {
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        margin: 0;
        padding: 0;
        border: 1px solid var(--white);
        border-radius: 50%;
        background: var(--blue);
        color: var(--white);
        cursor: pointer;
        transition: 0.2s;
    }

    .container:hover button {
        opacity: 1;
    }
</style>
