<!-- src/lib/components/language-switcher/LanguageSwitcher.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';

	const flagBaseUrl = 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/1x1';

	const languages = $state([
		{ code: 'EN', flagCode: 'gb', name: 'English' },
		{ code: 'GE', flagCode: 'ge', name: 'ქართული' },
		{ code: 'RU', flagCode: 'ru', name: 'Русский' },
		{ code: 'TR', flagCode: 'tr', name: 'Türkçe' }
	]);

	// Changed default language to English
	let currentLanguage = $state('EN');
	let isDropdownOpen = $state(false);

	// Browser translation service detection
	let browserLanguage = $state('');
	let translationSupported = $state(false);

	function toggleDropdown() {
		isDropdownOpen = !isDropdownOpen;
	}

	function handleClickOutside(event: MouseEvent) {
		const dropdown = document.querySelector('.language-dropdown');
		if (dropdown && !dropdown.contains(event.target as Node)) {
			isDropdownOpen = false;
		}
	}

	function switchLanguage(code: string) {
		currentLanguage = code;
		isDropdownOpen = false;

		// Apply browser translation if available
		if (translationSupported && code !== browserLanguage) {
			const targetLang = languages.find(lang => lang.code === code)?.name || '';
			translatePage(targetLang);
		}

		// Store preference in local storage
		localStorage.setItem('preferredLanguage', code);
	}

	function getFlagUrl(flagCode: string) {
		return `${flagBaseUrl}/${flagCode}.svg`;
	}

	// Function to attempt browser translation
	function translatePage(targetLanguage: string) {
		try {
			// Check if Google Translate API is available
			if (window.google && window.google.translate) {
				window.google.translate.TranslateElement({
					pageLanguage: 'auto',
					includedLanguages: targetLanguage,
					autoDisplay: false
				}, 'google_translate_element');
			} else {
				console.log('Google Translate not available, using native browser translation');
				// Fallback to native browser translation API if available
				if (document.documentElement.translate !== undefined) {
					document.documentElement.translate = true;
				}
			}
		} catch (error) {
			console.error('Translation error:', error);
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);

		// Detect browser language
		try {
			browserLanguage = (navigator.language || navigator.languages[0]).split('-')[0].toUpperCase();

			// Check if browser translation is supported
			translationSupported = typeof window.google !== 'undefined' ||
				document.documentElement.translate !== undefined;

			// Load preferred language from localStorage or default to English
			const savedLanguage = localStorage.getItem('preferredLanguage');
			if (savedLanguage && languages.some(lang => lang.code === savedLanguage)) {
				currentLanguage = savedLanguage;
			}
		} catch (error) {
			console.error('Error detecting browser language:', error);
		}

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<!-- Google Translate element placeholder -->
<div id="google_translate_element" class="hidden"></div>

<div class="language-dropdown relative">
	<!-- Desktop view -->
	<button
		class="hidden sm:flex items-center space-x-2 text-white hover:text-indigo-200 focus:outline-none"
		on:click|stopPropagation={toggleDropdown}
	>
		<img
			src={getFlagUrl(languages.find(lang => lang.code === currentLanguage)?.flagCode ?? 'gb')}
			alt={currentLanguage}
			class="w-5 h-5 rounded-full object-cover"
		/>
		<span>{currentLanguage}</span>
		<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
		</svg>
	</button>

	<!-- Mobile view - just the icon -->
	<button
		class="sm:hidden flex items-center justify-center p-2 text-white hover:text-indigo-200 focus:outline-none"
		on:click|stopPropagation={toggleDropdown}
	>
		<img
			src={getFlagUrl(languages.find(lang => lang.code === currentLanguage)?.flagCode ?? 'gb')}
			alt={currentLanguage}
			class="w-5 h-5 rounded-full object-cover"
		/>
	</button>

	{#if isDropdownOpen}
		<div class="absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-50 w-36 sm:w-40">
			{#each languages as { code, flagCode, name }}
				<button
					class="flex items-center w-full px-4 py-2 text-left text-gray-800 hover:bg-indigo-100 transition-colors {currentLanguage === code ? 'bg-indigo-50' : ''}"
					on:click={() => switchLanguage(code)}
				>
					<img src={getFlagUrl(flagCode)} alt={code} class="w-5 h-5 mr-2 rounded-full object-cover" />
					<span class="text-sm sm:text-base">{name}</span>
				</button>
			{/each}
		</div>
	{/if}
</div>

<!-- Script for Google Translate API -->
<svelte:head>
	{#if translationSupported}
		<script type="text/javascript">
			function googleTranslateElementInit() {
				new google.translate.TranslateElement({
					pageLanguage: 'auto',
					autoDisplay: false
				}, 'google_translate_element');
			}
		</script>
		<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
	{/if}
</svelte:head>