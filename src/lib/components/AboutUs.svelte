<script lang="ts">
	// SRA Engineering About Us Page in Svelte 5
</script>

<div class="w-full">
	<!-- Header Banner with Diagonal Split -->
	<div class="w-full h-auto md:h-screen relative overflow-hidden">
		<!-- Diagonal background split -->
		<div class="absolute inset-0">
			<!-- Orange section (left) -->
			<div class="absolute inset-0 advantage-card bg-gradient-to-r from-red-500 to-yellow-500"></div>
			<!-- Blue section (right diagonal) -->
			<div class="absolute top-0 right-0 bottom-0 w-2/3 bg-blue-600 transform origin-top-right" style="clip-path: polygon(100% 0, 0 0, 100% 100%);"></div>
		</div>

		<div class="container relative z-10 h-full mx-auto px-4 md:px-8 py-16 md:py-0">
			<div class="flex flex-col md:flex-row md:items-center h-full">
				<!-- Left Side Content (Orange) -->
				<div class="text-white w-full md:w-1/2 pr-0 md:pr-8 mb-12 md:mb-0">
					<h2 class="text-6xl md:text-8xl font-bold mb-4 font-sans">6 Years</h2>
					<h1 class="text-3xl md:text-4xl font-bold mb-2 font-sans">On The Market</h1>
					<p class="text-xl ">Many years of experience and flawless reputation
					</p>
					<div class="mt-8">
						<h2 class="text-6xl md:text-8xl font-bold">B2B</h2>
						<p class="text-lg mt-2">We build reliable partnerships with commercial facilities</p>
					</div>
				</div>

				<!-- Right Side Content (Blue) -->
				<div class="text-white w-full md:w-1/2 pl-0 md:pl-8 mt-8 md:mt-0">
					<h2 class="text-4xl font-bold mb-6">Company SRA Engineering</h2>
					<div class="text-lg space-y-4">
						<p>
							Our company was founded in 2019 in Ankara by our General Manager, Doğu Çamur. Since our establishment, we have been committed to providing reliable and high-quality services in the mechanical installation sector.
						</p>
						<p>
							With our expert team, we specialize in the installation of sanitary systems, heating systems, VRF systems, fire protection systems, ventilation systems, siphonic rainwater drainage systems, and passive fire protection systems.
						</p>
						<p>
							In every project, we prioritize customer satisfaction by closely following modern technologies and international standards.
						</p>
						<p>
							In all our operations, we continue our work without compromising on occupational safety, quality, and sustainability, and we strive to remain a trusted solution partner in the industry.
						</p>
					</div>
					<div class="mt-8 flex justify-center md:justify-end">
						<img src="/logo/srapng.png" alt="SRA Engineering Logo" class="h-20"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
    /* Additional Svelte-specific styles can go here if needed */
</style>