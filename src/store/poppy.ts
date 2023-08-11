import { defineStore } from "pinia";

export const useStorePoppy = defineStore('poppy', {
    state: () => ({
        text: '',
        count: 1
    }),
    actions: {
        DoubleCount() {
            this.count = this.count * 2;
        },
    }
})

// export const storePoppy = useStorePoppy();