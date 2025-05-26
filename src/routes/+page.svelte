<script lang="ts">
	import Quality from '$lib/components/quality/Quality.svelte';
	import AboutUs from '$lib/components/about-us/AboutUs.svelte';
	import Advantages from '$lib/components/advantages/Advantages.svelte';
	import Services from '$lib/components/services/Services.svelte';
</script>

<div class="container">
		<Quality />

	<div id="services-section">
		<Services/>
	</div>

	<div id="about-section">
		<AboutUs />
	</div>

	<div>
		<Advantages/>
	</div>

<!--	<div id="partners-section">-->
<!--		<Partners />-->
<!--	</div>-->
</div>

<style>
    .container {
        width: 100%;
        min-width: 100%;
        max-width: 100vw;
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
    }

    /* Add scroll-margin-top to offset the fixed header */
    #services-section,
    #about-section,
    #partners-section {
        scroll-margin-top: 80px;
    }
</style>