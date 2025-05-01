<script lang="ts">
	export const prerender = true;
	import '../app.css';
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';

	let { children } = $props();
</script>

<div class="root-container">
	<Header />
	<div class="main">
		{@render children()}
	</div>
	<Footer />
</div>

<style>
    :global(body, html) {
        margin: 0;
        padding: 0;
        width: 100%;
        overflow-x: hidden;
    }

    .root-container {
        width: 100vw;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
    }

    .main {
        display: flex;
        flex-direction: column;
        width: 100%;
        overflow: hidden;
        position: relative;

        @media screen and (max-width: 768px) {
            overflow-x: auto;

            &::after {
                content: '';
                position: absolute;
                right: 0;
                top: 0;
                bottom: 0;
                width: 3rem;
                pointer-events: none;
                background: linear-gradient(90deg, rgba(255, 255, 255, 0.01) 0%, rgba(115, 115, 115, 0.12) 100%);
            }
        }
    }
</style>