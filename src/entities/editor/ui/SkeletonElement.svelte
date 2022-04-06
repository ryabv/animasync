<script>
    import { Arrow, Trash } from 'shared/assets/index.ts';
    import { IconButton } from 'shared/ui/index.ts';
    import {
        editorValues as ev,
        objToCssString,
        elements,
        generateStylesForAnimation
    } from '../model/index.ts';

    export let id;
    export let width;
    export let height;
    export let active;
    export let borderRadius;

    const animationName = `animate${performance.now()}`.replace('.', '');
    const multiplier = 4;

    $: containerStyles = objToCssString({
        display: 'flex',
        "justify-content": $ev.settingsAlignment,
    });

    $: elementStyles = objToCssString({
        cursor: 'pointer',
        height: height + 'px',
        width: width + '%',
        background: active ? 'var(--blue)' : `linear-gradient(
          to right,
          ${$ev.skeletonBackground} calc(50% - ${$ev.llWidth / 2}px),
          ${$ev.llBackground} 50%,
          ${$ev.skeletonBackground} calc(50% + ${$ev.llWidth / 2}px)
        );`,
        'background-size': `${multiplier * 100}% auto`,
        "border-radius": borderRadius + 'px',
        animation: `${animationName} linear ${$ev.settingsAnimationSpeed}s infinite`,
    });

    $: controlsStyles = objToCssString({
        position: 'absolute',
        top: 0,
        display: 'flex',
        opacity: active ? 1 : 0,
        visibility: active ? 'visible' : 'hidden',
        left: `calc(100% + ${$ev.containerPadding}px + 20px)`,
        gap: 4 + 'px',
    });

    $: percentsStyles = objToCssString({
        position: 'absolute',
        top: 0,
        padding: '6px 8px',
        opacity: active ? 1 : 0,
        visibility: active ? 'visible' : 'visible',
        right: `calc(100% + ${$ev.containerPadding}px + 20px)`,
        color: 'var(--gray-150)',
        "font-weight": 'bold',
        "font-size": 12 + 'px',
    });

    $: generateStylesForAnimation({
        id,
        containerWidth: $ev.settingsContainerMinWidth,
        lineWidth: $ev.settingsContainerMinWidth * width / 100,
        multiplier,
        animationName,
    });
</script>

<div class="container" style={containerStyles}>
    <div style={percentsStyles}>
        {width}%
    </div>

    <div id={id} style={elementStyles} on:click></div>

    <div style={controlsStyles}>
        <IconButton class="btn" size="small" on:click={(e) => {
            e.stopPropagation();
            elements.makePrev(id);
        }}>
            <Arrow />
        </IconButton>

        <IconButton class="btn" size="small" on:click={(e) => {
            e.stopPropagation();
            elements.makeNext(id);
        }}>
            <Arrow class="down" />
        </IconButton>

        <IconButton class="btn" size="small" on:click={(e) => {
            e.stopPropagation();
            elements.delete(id)
        }}>
            <Trash />
        </IconButton>
    </div>
</div>

<style>
    .container {
        position: relative;
        width: 100%;
    }

    .container :global(.down) {
        transform: rotate(180deg);
    }

    .container :global(.btn) {
        color: var(--gray-600);
        transition: 0.2s;
        background: var(--white);
    }

    .container :global(.btn:hover) {
        background: var(--gray-100);
    }

    .container :global(.btn:active) {
        color: var(--blue);
    }
</style>
