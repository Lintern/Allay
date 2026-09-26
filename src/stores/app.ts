import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("app", () => {
  const title = ref("Allay");

  function setTitle(val: string) {
    title.value = val;
  }

  return { title, setTitle };
});
