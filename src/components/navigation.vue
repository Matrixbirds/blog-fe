<template>
    <nav>
        <h2>XXX PANEL</h2>
        <ul>
            <li>菜单A</li>
            <li>菜单B</li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: 'navigation'
}
</script>
<style scoped>
    ul {
        flex: auto;
        list-style: none;
        padding: 0;
    }
    nav {
        display: flex;
        border-right: 1px solid;
        flex-direction: column;
    }
</style>