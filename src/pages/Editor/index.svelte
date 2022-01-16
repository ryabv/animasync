<script lang="ts">
    import { Header } from 'shared/ui/index.ts';
    import {
        SettingsSection,
        ContainerSection,
        SkeletonSection,
        LoadingLineSection,
        ConfigurableBackground,
        Skeleton,
        EditElementSection,
    } from 'entities/editor/index.ts';
</script>

<div class="layout">
    <Header class="header" />

    <main>
        <aside class="sidebar">
            <SettingsSection />

            <ContainerSection />

            <SkeletonSection />

            <LoadingLineSection />
        </aside>
        <div class="playground">
            <ConfigurableBackground>
                <Skeleton />
            </ConfigurableBackground>
        </div>
        <aside class="sidebar">
            <EditElementSection />
        </aside>
    </main>
</div>

<style>
    .layout {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .layout :global(.header) {
        flex: 0;
    }

    main {
        display: flex;
        flex: 1;
        max-height: 100%;
        overflow: hidden;
    }

    .sidebar {
        flex: 0 0 272px;
        background: var(--gray-100);
        overflow: auto;
    }

    .playground {
        width: 300px;
        flex: 1 1 auto;
    }

    .layout :global(.accordion) + :global(.accordion) {
        border-top: 1px solid var(--gray-200);
    }
</style>
