<template>
  <div class="loading-bg">
    <span class="loading loading-dots loading-lg z-[999] text-[#f7c906]"></span>
  </div>
</template>

<style>
.loading-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .loader-circle {
  border: 6px solid #f3f3f3;
  border-top: 6px solid #f7c906;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 700ms linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} */
</style>
