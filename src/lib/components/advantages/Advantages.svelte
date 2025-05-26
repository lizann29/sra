<!-- src/lib/components/Advantages.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';

	// Animation states for each card
	let visible = $state([false, false, false]);

	onMount(() => {
		// Trigger animations with slight delay between each card
		setTimeout(() => { visible[0] = true; }, 300);
		setTimeout(() => { visible[1] = true; }, 600);
		setTimeout(() => { visible[2] = true; }, 900);
	});

	const advantages = [
		{
			title: "Guarantee",
			description: "We faultlessly fulfill responsibilities taken, guaranteeing a careful attention to the customer's needs.",
			gradient: "from-[#f6d365] to-[#fda085]",
			icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
		},
		{
			title: "Support",
			description: "We accompany our customers at all stages of cooperation, providing a free visit of an engineer and an audit performance, following strict deadlines.",
			gradient: "from-[#89c2d9] to-[#5ba8c4]",
			icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
		},
		{
			title: "Expertise",
			description: "We are proud to move on customer's infrastructure to a higher level of efficiency thanks to the implementation of our solutions.",
			gradient: "from-[#fda085] to-[#f6d365]",
			icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
		},
	];
</script>

<div class="advantages-container w-full py-16 px-4 bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
	<!-- Floating background elements -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div class="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-[#f6d365] to-[#fda085] rounded-full opacity-20 blur-3xl animate-pulse"></div>
		<div class="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-r from-[#89c2d9] to-[#5ba8c4] rounded-full opacity-25 blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
		<div class="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-[#89c2d9] to-[#a8dadc] rounded-full opacity-20 blur-2xl animate-pulse" style="animation-delay: 4s;"></div>
	</div>

	<div class="relative z-10">
		<h1 class="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#89c2d9] via-[#5ba8c4] to-[#457b9d] text-center mb-20 tracking-tight drop-shadow-lg">
			Advantages
		</h1>

		<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each advantages as advantage, index}
				<div class="relative group cursor-pointer transform transition-all duration-700 ease-out hover:scale-105 hover:-translate-y-3"
						 class:opacity-100={visible[index]}
						 class:opacity-0={!visible[index]}
						 class:translate-y-0={visible[index]}
						 class:translate-y-10={!visible[index]}>

					<!-- Card glow effect -->
					<div class="absolute -inset-1 bg-gradient-to-r {advantage.gradient} rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>

					<!-- Main card -->
					<div class="relative bg-gradient-to-br {advantage.gradient} backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center text-white shadow-2xl group-hover:shadow-orange-500/25 transition-all duration-500">

						<!-- Icon container -->
						<div class="flex justify-center mb-6 relative">
							<div class="relative group-hover:scale-110 transition-transform duration-300">
								<svg class="w-16 h-16 text-white drop-shadow-xl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="{advantage.icon}"></path>
								</svg>
								<div class="absolute inset-0 bg-white/30 rounded-full blur-xl scale-75 group-hover:scale-100 transition-all duration-300"></div>
							</div>
						</div>

						<h2 class="text-3xl font-bold mb-6 text-white drop-shadow-lg tracking-wide">
							{advantage.title}
						</h2>

						<p class="text-lg text-white/95 leading-relaxed font-medium">
							{advantage.description}
						</p>

						<!-- Animated bottom border -->
						<div class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>

						<!-- Corner accents -->
						<div class="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
						<div class="absolute bottom-4 left-4 w-1 h-1 bg-white/30 rounded-full group-hover:scale-200 transition-transform duration-300" style="animation-delay: 0.1s;"></div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Animated particles -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		{#each Array(15) as _, i}
			<div class="absolute w-1 h-1 bg-gradient-to-r from-[#f6d365] to-[#fda085] rounded-full animate-pulse opacity-40"
					 style="left: {Math.random() * 100}%; top: {Math.random() * 100}%; animation-delay: {Math.random() * 5}s; animation-duration: {3 + Math.random() * 4}s;">
			</div>
		{/each}
	</div>
</div>

<style>
    .advantages-container {
        min-height: 100vh;
    }

    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }

    .group:hover .animate-float {
        animation: float 2s ease-in-out infinite;
    }

    /* Enhanced hover effects */
    .group:hover {
        transform: translateY(-12px) scale(1.02);
    }

    /* Smooth gradient animation */
    @keyframes gradient-shift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
    }

    .bg-gradient-to-r {
        background-size: 200% 200%;
        animation: gradient-shift 6s ease infinite;
    }
</style>