<!-- src/lib/components/Header.svelte -->
<script lang="ts">
	import LanguageSwitcher from '$lib/components/language-switcher/LanguageSwitcher.svelte';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	const navItems = $state([
		{ title: 'Services', path: `/` },
		{ title: 'Projects', path: `/projects` },
		{ title: 'About Company', path: `/` },
		{ title: 'Partners', path: `/` },
		{ title: 'Contacts', path: `/` }
	]);

	// Mobile menu state
	let isMenuOpen = $state(false);

	// Scroll state
	let isScrolled = $state(false);

	// Toggle mobile menu
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	// Close menu when clicking outside or on window resize
	onMount(() => {
		// Initialize scroll state immediately
		isScrolled = window.scrollY > 20;

		const handleResize = () => {
			if (window.innerWidth >= 1024 && isMenuOpen) {
				isMenuOpen = false;
			}
		};

		// Handle scroll events
		const handleScroll = () => {
			isScrolled = window.scrollY > 20;
		};

		window.addEventListener('resize', handleResize);
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header
	class="fixed w-full z-50 transition-all duration-300 ease-in-out"
	class:bg-[#89c2d9]={isScrolled}
	class:bg-gradient-to-l={!isScrolled}
	class:from-[#f6d365]={!isScrolled}
	class:to-[#fda085]={!isScrolled}
	class:shadow-lg={isScrolled}
>
	<div class="container mx-auto px-4">
		<div class="flex justify-between items-center h-20">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a href="/" class={`text-2xl font-bold transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-700'}`}>
					<img
						src="../logo/sra.png"
						alt="Company Logo"
						class="h-20 md:h-25 w-auto object-contain"
					>
				</a>
			</div>

			<!-- Desktop Navigation -->
			<nav class="hidden lg:flex space-x-8 align-middle content-center items-center">
				{#each navItems as item}
					<a
						href={item.path}
						class={`transition-colors hover:text-amber-600 ${isScrolled ? 'text-gray-700' : 'text-gray-800'}`}
					>
						{item.title}
					</a>
				{/each}
				<a
					href="/client"
					class="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-md transition-colors"
				>
					Become a client
				</a>
			</nav>

			<!-- Language Switcher (Desktop) -->
			<div class="hidden lg:block">
				<LanguageSwitcher />
			</div>

			<!-- Mobile menu button -->
			<button
				class={`lg:hidden p-2 focus:outline-none transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-700'}`}
				on:click={toggleMenu}
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
			>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					{#if isMenuOpen}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					{:else}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					{/if}
				</svg>
			</button>
		</div>

		<!-- Mobile menu -->
		{#if isMenuOpen}
			<div class={`lg:hidden py-4 pb-6 border-t ${isScrolled ? 'border-gray-200' : 'border-gray-100'}`}>
				<nav class="flex flex-col space-y-4">
					{#each navItems as item}
						<a
							href={item.path}
							class={`hover:text-amber-600 py-2 transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-800'}`}
							on:click={() => isMenuOpen = false}
						>
							{item.title}
						</a>
					{/each}
					<a
						href="/client"
						class="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md transition-colors w-full text-center mt-4"
						on:click={() => isMenuOpen = false}
					>
						Become a client
					</a>

					<!-- Language Switcher (Mobile) -->
					<div class="pt-2">
						<LanguageSwitcher />
					</div>
				</nav>
			</div>
		{/if}
	</div>
</header>

<!-- Spacer to prevent content from going under the fixed header -->
<div class="h-20"></div>