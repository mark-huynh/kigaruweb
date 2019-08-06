class StateLoader {

    loadState() {
        try {
            let serializedState = localStorage.getItem("itemState");

            if (serializedState === null) {
                return this.initializeState();
            }

            return JSON.parse(serializedState);
        }
        catch (err) {
            return this.initializeState();
        }
    }

    saveState(state) {
        try {
            let serializedState = JSON.stringify(state);
            localStorage.setItem("itemState", serializedState);

        }
        catch (err) {
        }
    }

    initializeState() {
        return {
              items: []
            }
        };
    }

export default StateLoader;