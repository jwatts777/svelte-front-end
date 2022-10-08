<script>
   let count = 0;
   let buttonExampleClick = () => {
        count += 1
    }
    
</script>

<div class='mx-auto'>
<h1 class='text-2xl'>This is the About Page</h1>
<div class="btn mx-auto" on:click={buttonExampleClick} >Clicked {count} {count === 1 ? 'time' : 'times'}</div>
<a href="/"><button class="btn">Click to Return To Home</button></a>
</div>
