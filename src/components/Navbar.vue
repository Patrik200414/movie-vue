<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand">Movie-Vue</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
        </ul>
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Movie title" aria-label="Search" @input="onChangeInput" :value="titleValue" name="title" required>
            <input class="form-control me-2" type="number" placeholder="Year" aria-label="Search" name="year" :value="year" @input="onChangeInput" min="1600" required>
            <button class="btn btn-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    props: {
        onChangeInput: {
            type: Function,
            required: true
        },
        titleValue: {
            type: String,
            required: true
        },
        year: {
            required: true
        }
    }
}
</script>