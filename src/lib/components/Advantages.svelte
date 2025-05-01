<script lang="ts">
	import { onMount } from 'svelte';

	// Animation states for each card
	let visible = [false, false, false];

	onMount(() => {
		// Trigger animations with slight delay between each card
		setTimeout(() => { visible[0] = true; }, 300);
		setTimeout(() => { visible[1] = true; }, 600);
		setTimeout(() => { visible[2] = true; }, 900);
	});
</script>

<div class="advantages-container w-full py-16 px-4">
	<h1 class="text-5xl font-bold text-blue-700 text-center mb-16">Advantages</h1>

	<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
		<!-- Guarantee Card -->
		<div class="advantage-card bg-gradient-to-r from-blue-800 to-blue-400 text-white rounded-lg p-8 text-center transform transition-all duration-700 ease-out"
				 class:opacity-100={visible[0]} class:opacity-0={!visible[0]}
				 class:translate-y-0={visible[0]} class:translate-y-10={!visible[0]}>
			<div class="flex justify-center mb-6">
				<!-- Certificate/Guarantee Icon -->
				<svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
				</svg>
			</div>
			<h2 class="text-3xl font-bold mb-4">Guarantee</h2>
			<p class="text-lg">
				We faultlessly fulfill responsibilities taken, guaranteeing a careful attention to the customer's needs.
			</p>
		</div>

		<!-- Expertise Card -->
		<div class="advantage-card bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-lg p-8 text-center transform transition-all duration-700 ease-out"
				 class:opacity-100={visible[1]} class:opacity-0={!visible[1]}
				 class:translate-y-0={visible[1]} class:translate-y-10={!visible[1]}>
			<div class="flex justify-center mb-6">
				<!-- Building/Expertise Icon -->
				<svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
				</svg>
			</div>
			<h2 class="text-3xl font-bold mb-4">Expertise</h2>
			<p class="text-lg">
				We are proud to move on customer's infrastructure to a higher level of efficiency thanks to the implementation of our solutions.
			</p>
		</div>

		<!-- Support Card -->
		<div class="advantage-card bg-gradient-to-r from-blue-800 to-blue-400 text-white rounded-lg p-8 text-center transform transition-all duration-700 ease-out"
				 class:opacity-100={visible[2]} class:opacity-0={!visible[2]}
				 class:translate-y-0={visible[2]} class:translate-y-10={!visible[2]}>
			<div class="flex justify-center mb-6">
				<!-- Support/Customer Icon -->
				<svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
				</svg>
			</div>
			<h2 class="text-3xl font-bold mb-4">Support</h2>
			<p class="text-lg">
				We accompany our customers at all stages of cooperation, providing a free visit of an engineer and an audit performance, following strict deadlines.
			</p>
		</div>
	</div>
</div>

<style>
    .advantages-container {
        background-color: #f9fafb;
    }

    .advantage-card {
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        transition: all 0.5s ease;
    }

    .advantage-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 35px -10px rgba(0, 0, 0, 0.2);
    }
</style>