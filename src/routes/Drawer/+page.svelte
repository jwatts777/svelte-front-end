<script>
	import NavBar from '../NavBar/+page.svelte';
	import MainPage from '../MainPage/page.svelte';

	let exampleButtonOne = 'Your Website'
	let exampleButtonTwo = 'Your Svelte Project'
	let exampleButtonThree = 'Your Personal Project'
</script>

<div class="drawer drawer-end">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<!-- Page content here -->
		<NavBar />
		<MainPage></MainPage>
		
		
		
	</div>
	<div class="drawer-side">
		<label for="my-drawer" class="drawer-overlay" />
		<ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
			<!-- Sidebar content here -->
			<li><button class="btn" on:click={() => console.log("exampleButtonOne button clicked")}><a href='/'>{exampleButtonOne}</a></button></li>
			
			<li><button class="btn" on:click={() => console.log("exampleButtonTwo button clicked")}><a href='/'>{exampleButtonTwo}</a></button></li>
			<li><button class="btn" on:click={() => console.log("exampleButtonThree button clicked")}><a href='/'>{exampleButtonThree}</a></button></li>
			<!-- These are loading buttons -->
			<progress class="progress w-288 h-12"> In Progress</progress> 
			<progress class="progress w-288 h-12">In Progress</progress>
			<progress class="progress w-288 h-12">In Progress</progress>
			<!-- // -->
		</ul>
	</div>
</div>