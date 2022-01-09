<script>
    import { ColorInput } from 'shared/ui/index.ts';
    import { elements } from '../model/index.ts';

    let bgColor = '#ffffff';

    const handleChange = (e) => (bgColor = e.currentTarget.value);
</script>

<div class="background" style="background: {bgColor};" on:click={elements.deactivateAll}>
    <ColorInput class="bg-input" value={bgColor} on:change={handleChange} />

    <div class="align">
        <div class="content">
            <slot />
        </div>
    </div>
</div>

<style>
    .background {
        position: relative;

        height: 100%;
        padding: 16px;
    }

    .background::after {
        display: inline-block;
        height: 100%;
        vertical-align: middle;
        content: "";
    }

    .align {
        display: inline-block;
        width: 100%;
        max-height: 100%;
        vertical-align: middle;
        overflow: auto;
    }

    div :global(.bg-input) {
        position: absolute;
        top: 16px;
        right: 16px;
        z-index: 1;
    }

    .content {
        position: relative;
        height: 100%;
        padding: 50px 60px;
        overflow: auto;
    }
</style>
