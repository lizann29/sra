<script lang="ts">
	// SRA Engineering Banner in Svelte 5
	// You can add any reactive variables or imports here if needed
</script>

<div class="w-full h-60 relative overflow-hidden">
	<!-- Diagonal background split -->
	<div class="absolute inset-0">
		<!-- Blue section (left) -->
		<div class="absolute inset-0 bg-blue-600"></div>
		<!-- White section (right diagonal) -->
		<div class="absolute top-0 right-0 bottom-0 w-2/3 bg-white transform origin-top-right" style="clip-path: polygon(100% 0, 0 0, 100% 100%);"></div>
	</div>

	<div class="container relative z-10 h-full mx-auto px-8">
		<div class="flex items-center h-full">
			<!-- Text Content (left side - blue background) -->
			<div class="text-white w-1/2">
				<h1 class="text-5xl font-bold mb-4"> SRA ENGINEERING</h1>
				<p class="text-2xl text-gray-100">Highest Quality Service</p>
			</div>

			<!-- Logo Space (right side - white background) -->
			<div class="w-1/2 flex items-center justify-center w-200 h-200">
				<img src="/logo/srapng.png" alt="SRA Engineering Logo"/>
			</div>
		</div>
	</div>
</div>

<style>
    /* Additional Svelte-specific styles can go here if needed */
</style>