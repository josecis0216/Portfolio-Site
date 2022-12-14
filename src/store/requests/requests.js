export default {
    namespaced: true,
    state() {
      return {
        requests: [],
      };
    },
    mutations: {
      addRequest(state, payload) {
        state.requests.push(payload);
      },
      setRequests(state, payload) {
          state.requests = payload;
      }
    },
    actions: {
      async contactMe(context, payload) {
        const requestData = {
          userEmail: payload.email,
          message: payload.message,
        };
        const response = await fetch(`https://vue-portfolio-d7dea-default-rtdb.firebaseio.com/requests.json`, { //fetch(`https://vue-practice-88f8e-default-rtdb.firebaseio.com/requests/requests.json`
              method: 'POST',
              body: JSON.stringify(requestData)
            })
  
            const responseData = await response.json();
  
            if (!response.ok) {
              const error = new Error(responseData.message || 'failed to send request.');
              throw error;
            }
  
            requestData.id = responseData.name;
            requestData.coachId = payload.coachId;
  
            context.commit('addRequest', requestData);
      },
      async loadRequests(context) {
        const response = await fetch(`https://vue-portfolio-d7dea-default-rtdb.firebaseio.com/requests.json`);  //fetch(`https://vue-practice-88f8e-default-rtdb.firebaseio.com/requests/requests.json`)
  
        const responseData = await response.json();
  
        if (!response.ok) {
          const error = new Error(responseData.message || 'Failed to fetch data.');
          throw error;
        }
  
        const requests = [];
        for (const key in responseData) {
          const requestData = {
            id: key,
            userEmail: responseData[key].userEmail,
            message: responseData[key].message,
          };
          requests.push(requestData);
        }
        context.commit('setRequests', requests);
      },
    },
    getters: {
      requests(state) {  //_, _2, rootGetters
        // const coachId = rootGetters.userId;
        return state.requests; //return state.requests.filter((req) => req.coachId === coachId);
      },
      hasRequests(_, getters) {
        return getters.requests && getters.requests.length > 0;
      },
    },
  };
  