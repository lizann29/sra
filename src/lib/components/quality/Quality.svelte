<script lang="ts">
	// Banner logic (none needed yet)
</script>

<div class="w-full h-60 relative overflow-hidden">
	<!-- Diagonal background split -->
	<div class="absolute inset-0">
		<!-- Pastel blue section (left) -->
		<div class="absolute inset-0 bg-[#89c2d9]"></div>

		<!-- Soft pastel section (right diagonal) -->
		<div
			class="absolute top-0 right-0 bottom-0 w-2/3 bg-[#fdf0d5] transform origin-top-right"
			style="clip-path: polygon(100% 0, 0 0, 100% 100%);"
		></div>
	</div>

	<div class="container relative z-10 h-full mx-auto px-8">
		<div class="flex items-center h-full">
			<!-- Text Content (left side - pastel blue background) -->
			<div class="w-1/2 text-[#fff9f4]">
				<h1 class="text-5xl font-bold mb-2 tracking-wide drop-shadow-sm">SRA ENGINEERING</h1>
				<p class="text-xl text-[#fef6ec] font-light italic">Delivering excellence with every solution</p>
			</div>

			<!-- Logo Space (right side - pastel background) -->
			<div class="w-1/2 flex items-center justify-center">
				<img src="logo/sra.png" alt="SRA Engineering Logo" class="max-h-36 object-contain" />
			</div>
		</div>
	</div>
</div>
