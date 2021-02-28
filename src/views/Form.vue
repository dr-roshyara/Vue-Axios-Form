<template>
  <div class="mx-auto">
    <form
      class="p-2 text-gray-800 flex flex-col "
      method="post"
      action="/submitted.php"
      @submit.prevent="onSubmit"
    >
      <div class="flex flex-row mb-4 w-full max-w-sm border-b border-gray-50">
        <label class="w-1/2 font-semibold px-2 m-auto" for="name">Name </label>
        <input
          class="w-1/2 border border-gray-200 bg-gray-100 px-2 py-3 w-full max-w-md m-auto"
          type="text"
          id="name"
          v-model="name"
        />
      </div>
      <div>
        <span
          class="text-red"
          v-if="form.errors.has('name')"
          v-text="form.errors.get('name')"
        ></span>
      </div>
      <!-- next   -->
      <div class="flex flex-row mb-4 w-full max-w-sm border-b border-gray-50">
        <label class="w-1/2 font-semibold px-2" for="street">Street </label>
        <input
          class="w-1/2 border border-gray-200 bg-gray-100 px-2 py-3 w-full max-w-md m-auto"
          type="text"
          id="street"
          v-model="street"
        />
      </div>
      <!-- next   -->
      <div class="flex flex-row mb-4 w-full max-w-sm border-b border-gray-50">
        <label class="w-1/2 font-semibold px-2" for="street"
          >Housenumber
        </label>
        <input
          class="w-1/2 border border-gray-200 bg-gray-100 px-2 py-3 w-full max-w-md m-auto"
          type="text"
          id="housenumber"
          v-model="housenumber"
        />
      </div>
      <!-- next   -->
      <!-- next   -->
      <div class="flex flex-row mb-4 w-full max-w-sm border-b border-gray-50">
        <label class="w-1/2 font-semibold px-2" for="postalcode"
          >Postal code
        </label>
        <input
          class="w-1/2 border border-gray-200 bg-gray-100 px-2 py-3 w-full max-w-md m-auto"
          type="text"
          id="postalcode"
          v-model="postalcode"
        />
      </div>
      <!-- next   -->
      <!-- next   -->
      <div class="flex flex-row mb-4 w-full max-w-sm border-b border-gray-50">
        <label class="w-1/2 font-semibold px-2" for="city">City </label>
        <input
          class="w-1/2 border border-gray-200 bg-gray-100 px-2 py-3 w-full max-w-md m-auto"
          type="text"
          id="city"
          v-model="city"
        />
      </div>
      <!-- next   -->
      <!-- next   -->
      <div class="flex flex-row mb-4 w-full max-w-sm border-b border-gray-50">
        <label class="w-1/2 font-semibold px-2" for="street">Email </label>
        <input
          class="w-1/2 border border-gray-200 bg-gray-100 px-2 py-3 w-full max-w-md m-auto"
          type="text"
          id="email"
          v-model="email"
        />
      </div>
      <!-- next   -->
      <!-- next   -->
      <div class="flex flex-row mb-4 w-full max-w-sm border-b border-gray-50">
        <label class="w-1/2 font-semibold px-2" for="telephone"
          >Telephone
        </label>
        <input
          class="w-1/2 border border-gray-200 bg-gray-100 px-2 py-3 w-full max-w-md m-auto"
          type="text"
          id="telephone"
          v-model="telephone"
        />
      </div>
      <!-- end of form submit button  -->
      <button
        class="py-2 px-6 mt-2  rounded-sm max-w-sm  text-white text-xl bg-blue-500"
        type="submit"
      >
        Submit
      </button>
    </form>
  </div>
</template>
<script>
import store, { mapGetters } from "vuex";
export default {
  data() {
    return {
      store,
      url: "submitted.php"
    };
  },
  computed: {
    ...mapGetters({
      form: "getForm"
    }),

    name: {
      get() {
        return this.$store.state.form.name;
      },
      set(name) {
        this.$store.commit("SET_NAME", name);
      }
    },
    street: {
      get() {
        return this.$store.state.form.street;
      },
      set(street) {
        this.$store.commit("SET_STREET", street);
      }
    },
    housenumber: {
      get() {
        return this.$store.state.form.housenumber;
      },
      set(housenumber) {
        this.$store.commit("SET_HOUSENR", housenumber);
      }
    },
    postalcode: {
      get() {
        return this.$store.state.form.postalcode;
      },
      set(postalcode) {
        this.$store.commit("SET_POSTAL_CODE", postalcode);
      }
    },
    city: {
      get() {
        return this.$store.state.form.city;
      },
      set(city) {
        this.$store.commit("SET_CITY", city);
      }
    },
    telephone: {
      get() {
        return this.$store.state.form.telephone;
      },
      set(telephone) {
        this.$store.commit("SET_TELEPHONE", telephone);
      }
    },
    email: {
      get() {
        return this.$store.state.form.email;
      },
      set(email) {
        this.$store.commit("SET_EMAIL", email);
      }
    }
  },
  methods: {
    onSubmit() {
      this.form.post(this.url);
    }
  }
}
</script>
