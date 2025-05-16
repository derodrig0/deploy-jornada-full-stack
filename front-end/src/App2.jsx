import React from "react";

const App2 = () => {
  return <div>App2</div>;
};

export default App2;

// rafce - React Arrow Function Component Export

// Arrow Function
// const App2 = () => <h1>Olá Mundo!</h1>;

// Nomeação de Componente
// PascalCase

// Nomeação de Variável, Função e Classe
// camelCase

// Nomeação de Classes
// kebab-case

// export default, posso importar com qualqeur nome e sem chaves
// export sem default, preciso importar com o mesmo nome e entre chaves

// self closing tag
// <Header></Header>
// <Header />

// Nomeação de Classes em CSS
// Metodologia BEM
// Blocks - bloco
// Elements - bloco__elemento
// Modifier - bloco__elemento--modificador
// Exemplo: header__link--small

// tag vazia em React se chama Fragment ou Fragmento - <> </>

// Componentes recebem 'props'

// {items === 5 ? (
//   <>
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//   </>
// ) : (
//   <>
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//   </>
// )}

// {Array(items)
//   .fill()
//   .map((currentValue, index) => (
//     <SingleItem key={`${title}-${index}`} />
//   ))}

// Spread Operator - ...

// Quando componentes se re-renderizam?
// Uma das ocasiões é quando uma variavel de estado usada por esse componente é atualizada.

// Hook - useState
// useState - hook que permite adicionar estado a um componente funcional