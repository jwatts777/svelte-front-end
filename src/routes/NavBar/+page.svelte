<script>
    let exampleTitle = "Example Title"

    let exampleLinkButtonValue = "About"
</script>


<div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
    <div class="flex-1 px-2 mx-2">
        <span class="text-lg font-bold">
            <label for="my-drawer" class="btn btn-primary drawer-checkbox">
                <div class="flex-none" />
                Example
            </label>
        </span>
        <div class="mx-auto center text-align-center flex-none">{exampleTitle}</div>
    </div>

    <div class="flex-none px-2 mx-2 lg:flex">
        <div class="flex items-stretch">
            <a href="./About" class="btn btn-primary">{exampleLinkButtonValue}</a>
        </div>
    </div>
</div>