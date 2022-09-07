<template>
  <div>
    <pre>
      {{ $store.state.user.firstName }}
    </pre>

    <pre>
      {{ user.lastName }}
    </pre>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "IndexPage",

  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
};
</script>
