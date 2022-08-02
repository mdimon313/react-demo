// class Context {
//   constructor(value) {
//     this.value = value;
//   }

//   // provider
//   Provider = ({ children, value }) => {
//     this.value = value;
//     return children;
//   };
//   // consumer
//   Consumer = ({ childern }) => childern(this.value);
// }

class Context {
  constructor(value) {
    this.value = value;
  }

  // provider
  Provider = ({ children, value }) => {
    this.value = value;
    return children;
  };

  // Cosumer
  Consumer = ({ children }) => {
    return children(this.value);
  };
}

const createContext = (value = null) => {
  const context = new Context(value);
  return {
    Provider: context.Provider,
    Consumer: context.Consumer,
  };
};

export default createContext;
