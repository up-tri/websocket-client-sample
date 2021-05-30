<template>
  <div class="w-full h-full bg-gray-100 p-2">
    <h1 class="text-3xl font-bold text-gray-800">受信内容</h1>
    <div class="my-4 border-2 border-blue-900 rounded p-4">
      <p v-for="(message, idx) in messages" :key="idx">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import io from "socket.io-client";

@Options({
  components: {},
})
export default class About extends Vue {
  io = io("http://localhost:3000/");
  socket = this.io.connect();

  mounted(): void {
    console.log("mounted.");
    this.socket.on("ev", (data) => {
      console.log("receive", data);
      this.$store.dispatch("receiveMessage", data);
    });
  }

  get messages(): { timestamp: string; message: string }[] {
    return this.$store.getters.messages;
  }

  beforeUnmount() {
    this.socket.disconnect();
  }
}
</script>
