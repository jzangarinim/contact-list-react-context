const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      urlBase: "https://assets.breatheco.de/apis/fake/contact",
      demo: {
        name: "Thomas Cruise Mapother IV",
        location: "USA",
        phoneNumber: "1-800-notarealnumber.com",
        email: "tomcruise@gmail.com",
        imgUrl:
          "https://media.revistavanityfair.es/photos/60e82bd2af2c957f3efefd50/master/w_1600%2Cc_limit/246523.jpg",
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
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      createUser: async () => {
        try {
          let response = await fetch(`${getStore().urlBase}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              full_name: "Test name",
              email: "testjz@gmail.com",
              agenda_slug: "jz_agenda",
              address: "address",
              phone: "0000000000",
            }),
          });
        } catch (err) {
          console.log(err);
        }
      },
    },
  };
};

export default getState;
