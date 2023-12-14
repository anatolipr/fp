<template>
    <div style="height: 47px" class="layout">
        <div class="title">
            Cache advance offer of up to $1,300 has been pre-approved.
        </div>
        <div class="accept" v-on:click="accept">Accept Offer</div>
        <div
            style="width: 19px; height: 17px"
            class="closebtn"
            v-on:click="close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z" />
            </svg>
        </div>
    </div>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Mulish:400,600,700');

    .layout {
      padding: 10px;
      font-size: 14px;
      border: 1px solid;
      border-radius: 10px;
      border-color: #42d2ff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      font-family: 'Mulish', sans-serif;
    }

    .title {
      flex: 1
    }

    .accept {
      color: #42d2ff;
      cursor: pointer
    }

    .closebtn {
      margin-left: 10px;
      cursor: pointer
    }

    * {box-sizing: border-box}
</style>

<script setup>
    function close() {
        alert('closed')
    }
    function accept() {
        alert('accept')
    }
</script>
