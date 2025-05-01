<!-- ServicesEnglish.svelte -->
<script>
	import { onMount, onDestroy } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	// Services data with English text
	const services = [
		{
			id: 'hvac',
			title: 'HVAC (Heating, Ventilation, Air Conditioning)',
			shortTitle: 'HVAC Systems',
			description: 'HVAC is a vital system that ensures a comfortable indoor environment and regulates the necessary conditions in the building. A crucial aspect of integrating HVAC systems is selecting the right equipment and accurately calculating airflows. Our service provides complete "turnkey" services, allowing clients to monitor the integration process.',
			active: true
		},
		{
			id: 'smoke',
			title: 'Smoke Extraction Systems',
			shortTitle: 'Smoke Extraction',
			description: 'Smoke extraction systems provide a critically important level of safety during fires. Our professional team designs, installs, and services these systems in accordance with the highest international standards.',
			active: false
		},
		{
			id: 'firefighting',
			title: 'Fire Safety Systems',
			shortTitle: 'Fire Safety',
			description: 'We offer fire safety systems equipped with modern technologies that comply with international safety standards and provide maximum protection for your facility.',
			active: false
		},
		{
			id: 'bms',
			title: 'Building Management System (BMS)',
			shortTitle: 'BMS',
			description: 'Building management systems allow you to control and optimize all technical systems in your building from a centralized platform, significantly increasing energy efficiency and reducing operating costs.',
			active: false
		},
		{
			id: 'security',
			title: 'Security Systems',
			shortTitle: 'Security',
			description: 'Our company offers security systems equipped with the latest technologies, including video surveillance, access control, and intrusion detectors, ensuring maximum protection for your facility and personnel.',
			active: false
		},
		{
			id: 'it',
			title: 'IT and Telecommunications',
			shortTitle: 'IT & Telecom',
			description: 'Reliable IT infrastructure is essential for modern businesses. Our specialists provide installation of network systems, server infrastructure, and communication platforms that fully meet the requirements of your organization.',
			active: false
		}
	];

	// Use a reactive variable to store the active service ID
	let activeServiceId = 'hvac';

	// Derive active service from the ID
	$: activeService = services.find(s => s.id === activeServiceId) || services[0];

	// Set active service function
	function setActiveService(service) {
		activeServiceId = service.id;
	}

	// Image carousel state
	let currentImageIndex = 0;
	const placeholderImages = [
		{ name: 'img', color: '#2d5d94' },
		{ name: 'img', color: '#2980b9' },
		{ name: 'img', color: '#3498db' }
	];

	// Animation controls
	let zoomProgress = tweened(0, {
		duration: 8000,
		easing: cubicOut
	});

	let sliderInterval;

	// Image slider functions
	function nextImage() {
		currentImageIndex = (currentImageIndex + 1) % placeholderImages.length;
	}

	function startZoomCycle() {
		zoomProgress.set(0);
		zoomProgress.set(1);
	}

	onMount(() => {
		// Start the image slider
		sliderInterval = setInterval(() => {
			nextImage();
			startZoomCycle();
		}, 8000);

		// Initial zoom animation
		startZoomCycle();

		return () => {
			clearInterval(sliderInterval);
		};
	});

	onDestroy(() => {
		clearInterval(sliderInterval);
	});

	// Calculate dynamic scale based on zoom progress
	$: zoomScale = 1 + ($zoomProgress * 0.1);
</script>

<div class="w-full bg-[#F2F7FB] py-12">
	<div class="container mx-auto px-4 md:px-6 lg:px-8">
		<h2 class="text-4xl font-bold text-[#2d5d94] mb-12">Services</h2>

		<div class="flex flex-col lg:flex-row gap-8">
			<!-- Services Menu -->
			<div class="lg:w-1/3">
				<div class="space-y-2">
					{#each services as service}
						<button
							class="w-full text-left p-4 rounded-md transition-all duration-300 flex items-center {service.id === activeServiceId ? 'bg-gradient-to-r from-[#2d5d94] to-[#4481c3] text-white shadow-md' : 'bg-white hover:bg-blue-50 text-gray-700'}"
							on:click={() => setActiveService(service)}
						>
							<div class="w-1 h-12 {service.id === activeServiceId ? 'bg-blue-300' : 'bg-blue-200'} mr-3"></div>
							<span class="font-medium">{service.shortTitle}</span>
						</button>
					{/each}
				</div>
			</div>

			<!-- Image Carousel & Description -->
			<div class="lg:w-2/3">
				<div class="bg-white rounded-lg shadow-lg overflow-hidden">
					<!-- Image Carousel -->
					<div class="relative h-[400px] overflow-hidden">
						{#each placeholderImages as image, i}
							<div
								class="absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out {currentImageIndex === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}"
								style="transform: scale({currentImageIndex === i ? zoomScale : 1}); transform-origin: center center;"
							>
								<!-- Placeholder for actual images -->
								<div class="w-full h-full flex items-center justify-center" style="background-color: {image.color};">
									<div class="text-white text-2xl font-light">
										<span>{activeService.title}</span>
										<div class="text-sm mt-2">Image will be replaced with {image.name}</div>
									</div>
								</div>
							</div>
						{/each}

						<!-- Image slider controls -->
						<div class="absolute bottom-4 right-4 flex space-x-2">
							{#each placeholderImages as _, i}
								<button
									class="w-3 h-3 rounded-full transition-colors duration-300 {currentImageIndex === i ? 'bg-white' : 'bg-white/50'}"
									on:click={() => {
                    currentImageIndex = i;
                    startZoomCycle();
                  }}
									aria-label="Go to image {i+1}"
								></button>
							{/each}
						</div>
					</div>

					<!-- Description Box -->
					<div class="p-6">
						<!-- Title -->
						<h3 class="text-xl font-bold text-[#2d5d94] mb-3">{activeService.title}</h3>

						<!-- Description Text -->
						<div class="text-gray-700">
							<p>{activeService.description}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>