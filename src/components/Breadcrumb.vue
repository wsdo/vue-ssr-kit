<template>
    <!-- breadcrumb start -->
    <div class="breadcrumb-container">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home pr-2"></i><router-link to="/">Home</router-link></li>
          <li class="breadcrumb-item active">
              <slot></slot>
          </li>
        </ol>
      </div>
    </div>
    <!-- breadcrumb end -->
</template>
<script>
export default {};
</script>
<style>
.breadcrumb {
  padding: 0.75rem 0rem;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  border-radius: 0.25rem;
  margin-bottom: 0;
  list-style: none;
  background-color: #f8f8f8;
  font-size: 12px;
}
.breadcrumb-container {
    background-color: #f8f8f8;
    border-bottom: 1px solid #f4f4f4;
}
</style>

