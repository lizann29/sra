<!-- ContactForm.svelte -->
<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-400 to-blue-600 p-4">
	<div class="max-w-md w-full bg-white/20 backdrop-blur-sm rounded-lg shadow-lg p-8 relative">
		<!-- Close button in the top-right corner -->
		<button class="absolute top-4 right-4 text-white hover:text-gray-200">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>

		<!-- Logo -->
		<div class="flex justify-center mb-8 ">
			<img src="logo/sra.png" alt="SRA Engineering Logo" class="h-20" />
		</div>

		<!-- Form -->
		<form class="space-y-6">
			<!-- Name field -->
			<div>
				<label for="name" class="block text-white mb-2">Name</label>
				<input
					type="text"
					id="name"
					class="w-full px-4 py-3 bg-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-white/70 text-white"
					placeholder="John Doe"
					required
				/>
			</div>

			<!-- Phone field -->
			<div>
				<label for="phone" class="block text-white mb-2">Phone</label>
				<input
					type="tel"
					id="phone"
					class="w-full px-4 py-3 bg-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-white/70 text-white"
					placeholder="(+995) 123 45-67-89"
					required
				/>
			</div>

			<!-- Comment field -->
			<div>
				<label for="comment" class="block text-white mb-2">Comment</label>
				<textarea
					id="comment"
					class="w-full px-4 py-3 bg-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-white/70 text-white h-20 resize-none"
					placeholder="Your message..."
				></textarea>
			</div>

			<!-- Submit button -->
			<button
				type="submit"
				class="w-full py-3 px-4 bg-gradient-to-r from-red-500 to-yellow-500 text-white font-medium rounded-md hover:from-red-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
			>
				Send
			</button>
		</form>
	</div>
</div>