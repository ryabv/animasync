<script>
    import { Arrow, Trash } from 'shared/assets/index.ts';
    import { IconButton } from 'shared/ui/index.ts';
    import { editorValues as ev, objToCssString, elements } from '../model/index.ts';

    export let id;
    export let width;
    export let height;
    export let active;

    $: elementStyles = objToCssString({
        cursor: 'pointer',
        transition: 'background 0.2s',
        height: height + 'px',
        width: width + '%',
        background: active ? 'var(--blue)' : $ev.skeletonBackground,
        "border-radius": $ev.skeletonBorderRadius + 'px',
    });

    $:controlsStyles = objToCssString({
        position: 'absolute',
        top: 0,
        display: 'flex',
        opacity: active ? 1 : 0,
        visibility: active ? 'visible' : 'hidden',
        transition: '0.2s',
        left: `calc(100% + ${$ev.containerPadding}px + 20px)`,
        gap: 4 + 'px',
    });

    $:percentsStyles = objToCssString({
        position: 'absolute',
        top: 0,
        padding: '6px 8px',
        opacity: active ? 1 : 0,
        visibility: active ? 'visible' : 'visible',
        transition: '0.2s',
        right: `calc(100% + ${$ev.containerPadding}px + 20px)`,
        color: 'var(--gray-150)',
        "font-weight": 'bold',
        "font-size": 12 + 'px',
    });
</script>

<div class="container">
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
