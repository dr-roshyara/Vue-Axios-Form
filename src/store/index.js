import { createStore } from "vuex";
// import axios from "axios";
import Form from "@/components/form.js";

export default createStore({
  state: {
    form: new Form({
      name: "",
      street: "",
      housenumber: "",
      postalcode: "",
      city: "",
      email: "",
      telephone: ""
    })
  },
  getters: {
    getForm: state => state.form
  },
  mutations: {
    SET_NAME(state, name) {
      state.form.name = name;
    },
    SET_STREET(state, street) {
      state.form.street = street;
    },
    SET_HOUSENR(state, housenumber) {
      state.form.housenumber = housenumber;
    },
    SET_POSTAL_CODE(state, plz) {
      state.form.postalcode = plz;
    },
    SET_CITY(state, city) {
      state.form.city = city;
    },
    SET_TELEPHONE(state, telephone) {
      state.form.telephone = telephone;
    },
    SET_EMAIL(state, email) {
      state.form.email = email;
    }
  },
  actions: {
    onSubmit({ state }) {
      console.log(state.form.name);
      console.log("email:" + state.form.email);
      // console.log("Form has been submitted!");
      state.form.post("./submitted.php").then(response => {
        console.log(response);
        alert(response);
      });
    }
  },
  modules: {}
});
