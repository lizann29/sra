<!-- ServicesEnglish.svelte -->
<script>
	import { onMount, onDestroy } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	// Services data with icons
	const services = [
		{
			id: 'plumbing',
			title: 'Plumbing System Installations',
			shortTitle: 'Plumbing Systems',
			description: 'We design and install reliable plumbing systems for residential, commercial, and industrial buildings, ensuring optimal water distribution and waste management.',
			image: 'plumbing.jpg',
			icon: '🔧'
		},
		{
			id: 'heatingcooling',
			title: 'Heating and Cooling System Installations',
			shortTitle: 'Heating & Cooling',
			description: 'Our team provides efficient heating and cooling solutions tailored to your building\'s needs, using modern and energy-saving technologies.',
			image: 'heating.png',
			icon: '❄️'
		},
		{
			id: 'ventilation',
			title: 'Ventilation System Installations',
			shortTitle: 'Ventilation',
			description: 'We implement ventilation systems that ensure clean air circulation, maintaining indoor air quality and comfort in all environments.',
			image: 'vintilation.png',
			icon: '💨'
		},
		{
			id: 'fireextinguishing',
			title: 'Fire Extinguishing System Installations',
			shortTitle: 'Fire Extinguishing',
			description: 'We install certified fire suppression systems, including sprinklers and extinguishing networks, in compliance with safety regulations and standards.',
			image: 'firesystem.png',
			icon: '🧯'
		},
		{
			id: 'vrfac',
			title: 'VRF and Air Conditioning System Installations',
			shortTitle: 'VRF & AC Systems',
			description: 'Our VRF and air conditioning systems offer flexible, energy-efficient climate control for buildings of any size or complexity.',
			image: 'vrfsystem.png',
			icon: '🌡️'
		},
		{
			id: 'siphonic',
			title: 'Siphonic Rainwater Drainage System Installations',
			shortTitle: 'Rainwater Drainage',
			description: 'We design and install siphonic systems for rapid and efficient rainwater drainage from roofs, minimizing pipework and maximizing flow.',
			image: 'rainwater.png',
			icon: '💧'
		},
		{
			id: 'passivefire',
			title: 'Passive Fire Protection System Installations',
			shortTitle: 'Passive Fire Protection',
			description: 'We apply passive fire stopping solutions to contain fire and smoke, ensuring the integrity of building compartments and compliance with fire codes.',
			image: 'passiveFireProtectionSystem.png',
			icon: '🛡️'
		},
		{
			id: 'electrical',
			title: 'Electrical System Installations',
			shortTitle: 'Electrical Systems',
			description: 'We provide comprehensive electrical installations, from lighting and power distribution to smart building integrations, all adhering to international safety standards.',
			image: 'electricalInstallation.png',
			icon: '⚡'
		}
	];

	// Use a reactive variable to store the active service ID
	let activeServiceId = 'plumbing';
	let isTransitioning = false;
	let activeIndex = 0;

	// Derive active service from the ID
	$: activeService = services.find(s => s.id === activeServiceId) || services[0];

	// Set active service function with transition handling
	function setActiveService(service, index) {
		if (service.id === activeServiceId) return;

		isTransitioning = true;
		setTimeout(() => {
			activeServiceId = service.id;
			activeIndex = index;
			isTransitioning = false;
		}, 300);
	}

	// Animation controls
	let zoomProgress = tweened(0, {
		duration: 10000,
		easing: cubicOut
	});

	let sliderInterval;
	let autoRotateInterval;

	function startZoomCycle() {
		zoomProgress.set(0);
		zoomProgress.set(1);
	}

	onMount(() => {
		// Start the zoom animation cycle
		sliderInterval = setInterval(() => {
			startZoomCycle();
		}, 10000);

		// Auto-rotate services
		autoRotateInterval = setInterval(() => {
			const nextIndex = (activeIndex + 1) % services.length;
			setActiveService(services[nextIndex], nextIndex);
		}, 12000);

		// Initial zoom animation
		startZoomCycle();

		return () => {
			clearInterval(sliderInterval);
			clearInterval(autoRotateInterval);
		};
	});

	onDestroy(() => {
		clearInterval(sliderInterval);
		clearInterval(autoRotateInterval);
	});

	// Calculate dynamic scale based on zoom progress
	$: zoomScale = 1 + ($zoomProgress * 0.15);
</script>

<div class="w-full bg-gradient-to-b from-blue-50 to-blue-100 py-16">
	<div class="container mx-auto px-4 md:px-6 lg:px-8">
		<h2 class="text-5xl font-bold text-blue-900 mb-4 text-center">Our Services</h2>
		<p class="text-blue-800 text-center text-xl mb-12 max-w-3xl mx-auto">
			Professional installations tailored to your needs with the highest industry standards
		</p>

		<div class="flex flex-col lg:flex-row gap-8">
			<!-- Services Menu -->
			<div class="lg:w-1/3">
				<div class="space-y-2 bg-white p-4 rounded-xl shadow-lg lg:sticky lg:top-10">
					{#each services as service, index}
						<button
							class="w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center gap-3 {
								service.id === activeServiceId
									? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-md transform scale-105'
									: 'bg-white hover:bg-blue-50 text-gray-700 hover:shadow'
							}"
							on:click={() => setActiveService(service, index)}
						>
							<div class="flex items-center justify-center w-10 h-10 rounded-full {
								service.id === activeServiceId ? 'bg-blue-300 text-blue-800' : 'bg-blue-100 text-blue-600'
							}">
								<span class="text-xl">{service.icon}</span>
							</div>
							<span class="font-medium text-lg">{service.shortTitle}</span>
						</button>
					{/each}
				</div>
			</div>

			<!-- Image & Description -->
			<div class="lg:w-2/3">
				<div
					class="bg-white rounded-2xl shadow-xl overflow-hidden transition-opacity duration-300 {
						isTransitioning ? 'opacity-50' : 'opacity-100'
					}"
				>
					<!-- Image Area with improved proportions -->
					<div class="relative h-[500px] overflow-hidden">
						<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
						{#key activeServiceId}
							<div
								in:fade={{ duration: 500 }}
								class="absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out"
								style="transform: scale({zoomScale}); transform-origin: center center;"
							>
								<img
									src={activeService.image}
									alt={activeService.title}
									class="w-full h-full object-cover"
								/>
							</div>
						{/key}
						<div class="absolute bottom-0 left-0 right-0 p-6 z-20">
							{#key activeServiceId}
								<h3
									in:fly={{ y: 20, duration: 500 }}
									class="text-3xl font-bold text-white mb-2"
								>
									{activeService.title}
								</h3>
							{/key}
						</div>
					</div>

					<!-- Description Box with improved styling -->
					<div class="p-8">
						{#key activeServiceId}
							<div
								in:fly={{ y: 20, duration: 500 }}
								class="flex items-center gap-4 mb-6"
							>
								<div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl">
									{activeService.icon}
								</div>
								<h3 class="text-2xl font-bold text-blue-800">{activeService.title}</h3>
							</div>

							<div class="text-gray-700 text-lg leading-relaxed">
								<p>{activeService.description}</p>
							</div>
						{/key}

						<div class="mt-8 flex justify-between items-center">
							<button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
								Learn More
							</button>

							<div class="flex gap-2">
								{#each services as _, idx}
									<div
										class="w-3 h-3 rounded-full {idx === activeIndex ? 'bg-blue-600' : 'bg-gray-300'}"
									></div>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>