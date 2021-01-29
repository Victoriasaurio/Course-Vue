<template>
    <div class="header clearfix">
        <nav>
            <ul class="nav nav-pills pull-right">
                <router-link tag="li" to="/" class="nav-link active">
                    <a class="active">Inicio</a>
                </router-link>
                <router-link tag="li" to="/usuarios" class="nav-link">
                    <a>Usuarios</a>
                </router-link>
            </ul>
            <h3 class="text muted">Aplicación de Usuarios</h3>
        </nav>
    </div>
</template>

<style scope>
.active {
    color: white;
}
</style>