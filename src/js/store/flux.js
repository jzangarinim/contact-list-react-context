const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      urlBase: "https://assets.breatheco.de/apis/fake/contact/",
      demo: {
        name: "Name",
        location: "USA",
        phoneNumber: "1-800-notarealnumber.com",
        email: "demoemail@gmail.com",
        imgUrl:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      },
      users: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      createUser: async (username, userEmail, userPhone, userAddress) => {
        const store = getStore();
        const actions = getActions();
        try {
          let response = await fetch(`${store.urlBase}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              full_name: `${username}`,
              email: `${userEmail}`,
              agenda_slug: "jz_agenda",
              address: `${userAddress}`,
              phone: `${userPhone}`,
            }),
          });
          if (response.ok) {
            actions.getUsers();
            let nameInput = document.getElementById("nameInput");
            let emailInput = document.getElementById("emailInput");
            let phoneInput = document.getElementById("phoneInput");
            let addressInput = document.getElementById("addressInput");
            nameInput.value = "";
            emailInput.value = "";
            phoneInput.value = "";
            addressInput.value = "";
          }
        } catch (err) {
          console.log(err);
        }
      },
      getUsers: async () => {
        const store = getStore();
        try {
          let response = await fetch(`${store.urlBase}agenda/jz_agenda`);
          let data = await response.json();
          if (response.ok) {
            setStore({
              users: data,
            });
          }
        } catch (error) {
          console.log(error);
        }
      },
      deleteUser: async (id) => {
        const actions = getActions();
        const store = getStore();
        try {
          let response = await fetch(`${store.urlBase}/${id}`, {
            method: "DELETE",
          });
          if (response.ok) {
            actions.getUsers();
          }
        } catch (error) {
          console.log(error);
        }
      },
      editUser: async (username, userEmail, userPhone, userAddress, id) => {
        const actions = getActions();
        const store = getStore();
        try {
          let response = await fetch(`${store.urlBase}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              full_name: `${username}`,
              email: `${userEmail}`,
              agenda_slug: "jz_agenda",
              address: `${userAddress}`,
              phone: `${userPhone}`,
            }),
          });
          if (response.ok) {
            actions.getUsers();
            let nameInput = document.getElementById("nameInput");
            let emailInput = document.getElementById("emailInput");
            let phoneInput = document.getElementById("phoneInput");
            let addressInput = document.getElementById("addressInput");
            nameInput.value = "";
            emailInput.value = "";
            phoneInput.value = "";
            addressInput.value = "";
          }
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
