<script lang="ts">
	// SRA Engineering About Us Page in Svelte 5
	import { onMount } from 'svelte';

	// Animation trigger for elements
	let isVisible = false;

	onMount(() => {
		// Trigger animations after component loads
		setTimeout(() => {
			isVisible = true;
		}, 300);
	});
</script>

<div class="w-full font-sans">
	<!-- Header Banner with Enhanced Diagonal Split -->
	<div class="w-full min-h-[70vh] relative overflow-hidden shadow-2xl">
		<!-- Enhanced diagonal background split with improved gradients -->
		<div class="absolute inset-0">
			<!-- Improved gradient background (left) -->
			<div
				class="absolute inset-0 bg-gradient-to-br from-amber-200 via-orange-200 to-amber-100 transition-all duration-1000"></div>

			<!-- Enhanced right diagonal with better gradient and subtle pattern -->
			<div
				class="absolute top-0 right-0 bottom-0 w-2/3 bg-gradient-to-br from-blue-300 to-sky-200 transform origin-top-right transition-all duration-1000"
				style="clip-path: polygon(100% 0, 0 0, 100% 100%);">
				<div class="absolute inset-0 opacity-10"
						 style="background-image: url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E');"></div>
			</div>
		</div>

		<!-- Decorative elements -->
		<div
			class="absolute left-0 top-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-amber-500/10 to-amber-300/10 blur-3xl"></div>
		<div
			class="absolute right-0 bottom-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/10 to-blue-300/10 blur-3xl"></div>

		<div class="container relative z-10 h-full mx-auto px-6 md:px-12 py-20 md:py-28">
			<div class="flex flex-col md:flex-row md:items-center h-full gap-16">
				<!-- Left Side Content (Vision) with improved typography and animation -->
				<div class="text-gray-800 w-full md:w-1/2 pr-0 md:pr-8 mb-12 md:mb-0 transform transition-all duration-1000"
						 class:translate-y-0={isVisible} class:opacity-100={isVisible} class:translate-y-10={!isVisible}
						 class:opacity-0={!isVisible}>
					<div class="relative mb-2">
						<span class="inline-block h-1 w-12 bg-amber-400 mb-2"></span>
						<h2 class="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">Our <span
							class="text-amber-500">Vision</span></h2>
					</div>
					<p class="text-xl leading-relaxed tracking-wide text-gray-700 font-light">
						To become a leading and preferred company in mechanical and electrical installations for buildings by
						delivering <span class="font-semibold">innovative, sustainable, and reliable </span> solutions.
					</p>

					<!-- Added visual element -->
					<div class="mt-8 bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg shadow-sm">
						<p class="text-amber-800 italic">
							"Building tomorrow's infrastructure with today's innovation"
						</p>
					</div>
				</div>

				<!-- Right Side Content (Mission) with improved typography and animation -->
				<div
					class="text-gray-900 w-full md:w-1/2 pl-0 md:pl-8 mt-8 md:mt-0 transform transition-all duration-1000 delay-300"
					class:translate-y-0={isVisible} class:opacity-100={isVisible} class:translate-y-10={!isVisible}
					class:opacity-0={!isVisible}>
					<div class="relative mb-2">
						<span class="inline-block h-1 w-12 bg-blue-400 mb-2"></span>
						<h2 class="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">Our <span class="text-blue-500">Mission</span>
						</h2>
					</div>
					<p class="text-xl leading-relaxed tracking-wide text-gray-700 font-light">
						To design and implement high-quality, safe, and environmentally responsible <span class="font-semibold">mechanical and electrical</span>
						in line with engineering principles, while always prioritizing customer satisfaction.
					</p>

					<!-- Added visual elements -->
					<div class="mt-8 flex flex-wrap gap-3">
						<span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Sustainability</span>
						<span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Innovation</span>
						<span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Excellence</span>
					</div>

					<div class="mt-10 flex justify-center md:justify-end transform transition-all duration-1000 delay-500"
							 class:translate-y-0={isVisible} class:opacity-100={isVisible} class:translate-y-5={!isVisible}
							 class:opacity-0={!isVisible}>
						<div class="relative">
							<div
								class="absolute -inset-1 bg-gradient-to-r from-amber-400 to-blue-400 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
							<div class="relative p-1 bg-white rounded-lg">
								<img src="logo/sra.png" alt="SRA Engineering Logo"
										 class="h-16 md:h-20 transform transition-all duration-500 hover:scale-105" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
    /* Smooth animations */
    :global(body) {
        overflow-x: hidden;
    }

    /* Custom hover effects */
    .text-amber-500, .text-blue-500 {
        transition: all 0.3s ease;
    }

    /* Font enhancements */
    :global(html) {
        font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>