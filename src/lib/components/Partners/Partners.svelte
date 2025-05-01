<!-- PartnersCarousel.svelte -->
<script>
	import { onMount, onDestroy } from 'svelte';

	// Define real partners with their names and websites
	const partners = [
		{ name: 'BEST İNŞAAT TAAHHÜT A.Ş.', website: 'https://bestinsaatas.com/en' },
		{ name: 'GES ELEKTRİK TAAHHÜT A.Ş.', website: 'https://www.geselektrik.com.tr/en' },
		{ name: 'KARASİ ELEKTRİK TAAHHÜT A.Ş.', website: null },
		{ name: 'TENDE ELEKTRONİK LTD. ŞTİ', website: 'https://tende.com.tr/en/home/' },
		{ name: 'ÜLKER A.Ş.', website: 'https://www.ulker.com.tr/' },
		{ name: 'SABKAR İNŞAAT LTD. ŞTİ.', website: null },
		{ name: 'AHMET AK GIDA LTD. ŞTİ', website: 'https://www.gaffaro.com.tr/iletisim/' },
		{ name: 'TELLİ OĞULLARI ELEKTRİK TAAHHÜT A.Ş.', website: null },
		{ name: 'ODAK ARGE A.Ş.', website: 'https://www.odakarge.com/en/' },
		{ name: 'KLV İNŞAAT LTD. ŞTİ', website: 'https://www.devex.com/organizations/klv-insaat-a-s-61755' },
		{ name: 'CİHAN İNŞAAT LTD. ŞTİ', website: 'https://cihaninsaat.com/' },
		{ name: 'GAMA-TÜRKERLER İŞ ORTAKLIĞI', website: 'https://www.turkerler.com/' },
		{ name: 'ÖNDER SAVUNMA A.Ş.', website: 'https://ondersavunma.com/' },
		{ name: 'BRG-MİRZAN İNŞAAT LTD. ŞTİ', website: 'https://mirzan.com.tr/' },
		{ name: 'BİLAL USTABAŞ İNŞAAT LTD. ŞTİ.', website: null },
		{ name: 'ASİL İNŞAAT A.Ş.', website: null },
		{ name: 'PRODA MÜHENDİSLİK LTD. ŞTİ', website: null },
		{ name: 'NKY MİMARLIK LTD. ŞTİ', website: null }
	];

	let scrollPosition = 0;
	let containerWidth = 0;
	let carouselContainer;
	let carouselTrack;
	let trackWidth = 0;
	let itemWidth = 0;
	let autoplayInterval;
	let isMouseOver = false;

	// Calculate dimensions on mount
	onMount(() => {
		calculateDimensions();

		// Add resize listener
		window.addEventListener('resize', calculateDimensions);

		// Start autoplay
		startAutoplay();

		return () => {
			window.removeEventListener('resize', calculateDimensions);
			stopAutoplay();
		};
	});

	// Calculate carousel dimensions
	function calculateDimensions() {
		if (carouselContainer && carouselTrack) {
			containerWidth = carouselContainer.offsetWidth;
			trackWidth = carouselTrack.scrollWidth;

			// Calculate item width based on container size
			if (containerWidth >= 768) {
				itemWidth = containerWidth / 3;
			} else if (containerWidth >= 640) {
				itemWidth = containerWidth / 2;
			} else {
				itemWidth = containerWidth;
			}
		}
	}

	// Scroll functions
	function scrollLeft() {
		if (scrollPosition > 0) {
			scrollPosition -= itemWidth;
		} else {
			// Loop to the end
			scrollPosition = trackWidth - containerWidth;
		}
	}

	function scrollRight() {
		if (scrollPosition < trackWidth - containerWidth) {
			scrollPosition += itemWidth;
		} else {
			// Loop to the beginning
			scrollPosition = 0;
		}
	}

	// Autoplay functions
	function startAutoplay() {
		stopAutoplay();
		autoplayInterval = setInterval(() => {
			if (!isMouseOver) {
				scrollRight();
			}
		}, 3000);
	}

	function stopAutoplay() {
		if (autoplayInterval) {
			clearInterval(autoplayInterval);
		}
	}

	function handleMouseEnter() {
		isMouseOver = true;
	}

	function handleMouseLeave() {
		isMouseOver = false;
	}

	// Clean up on destroy
	onDestroy(() => {
		stopAutoplay();
	});
</script>

<div class="w-full bg-[#F2F7FB] py-12">
	<div class="container mx-auto px-4 md:px-6 lg:px-8">
		<div class="flex flex-col lg:flex-row lg:items-start">
			<!-- Text content section -->
			<div class="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
				<h2 class="text-4xl font-bold text-[#2d5d94] mb-6">Partners</h2>
				<p class="text-gray-600 mb-4">
					SRA Group has established itself as a comprehensive company with complete
					information transparency and with an integrated approach to the assigned tasks,
					aimed at mutual long-term cooperation.
				</p>
				<p class="text-gray-600">
					We value each customer and thank our partners for their trust in us.
				</p>
			</div>

			<!-- Carousel section -->
			<div class="lg:w-1/2 relative">
				<div class="bg-white rounded-lg shadow-lg p-4 md:p-6">
					<!-- Carousel container -->
					<div
						class="relative overflow-hidden"
						bind:this={carouselContainer}
						on:mouseenter={handleMouseEnter}
						on:mouseleave={handleMouseLeave}
					>
						<!-- Carousel track -->
						<div
							class="flex transition-transform duration-500 ease-in-out"
							bind:this={carouselTrack}
							style="transform: translateX(-{scrollPosition}px);"
						>
							{#each partners as partner}
								<div class="min-w-full md:min-w-[50%] lg:min-w-[33.33%] p-3">
									<div class="h-full p-4 border border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow flex flex-col">
										<h3 class="font-medium text-[#2d5d94] mb-2 text-center">{partner.name}</h3>
										{#if partner.website}
											<a
												href={partner.website}
												target="_blank"
												rel="noopener noreferrer"
												class="mt-auto text-sm text-center text-blue-600 hover:underline flex justify-center items-center pt-2"
											>
												<span>Visit Website</span>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 ml-1">
													<path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd" />
												</svg>
											</a>
										{:else}
											<div class="mt-auto text-sm text-gray-500 text-center pt-2">Website not available</div>
										{/if}
									</div>
								</div>
							{/each}
						</div>
					</div>

					<!-- Navigation controls -->
					<div class="flex items-center justify-between mt-6">
						<button
							class="w-10 h-10 rounded-full bg-[#2d5d94] text-white flex items-center justify-center hover:bg-[#1e4270] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
							on:click={scrollLeft}
							aria-label="Previous slide"
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
								<polyline points="15 18 9 12 15 6"></polyline>
							</svg>
						</button>

						<div class="text-sm text-gray-500">
							Swipe to see more partners
						</div>

						<button
							class="w-10 h-10 rounded-full bg-[#2d5d94] text-white flex items-center justify-center hover:bg-[#1e4270] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
							on:click={scrollRight}
							aria-label="Next slide"
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
								<polyline points="9 18 15 12 9 6"></polyline>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>