import React, { Component } from 'react';
import './App.css';

import BooksApp from './google-books/BooksApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BooksApp/>
      </div>
    );
  }
}

export default App;







































































// import React from "react";
// import AddItemForm from './shopping-list/AddItemForm';
// import ShoppingList from './shopping-list/ShoppingList';

// export default class App extends React.Component {
//   state = {
//     shoppingItems: [
//       /* put stub items in here for testing */
//       { name: 'apples', checked: false },
//       { name: 'oranges', checked: true },
//       { name: 'bread', checked: false },
//     ]
//   };
//   handleDeleteItem = (item) => {
//     const newItems = this.state.shoppingItems.filter(itm => itm !== item)
//     this.setState({
//       shoppingItems: newItems
//     })
//   }
//   handleCheckItem = (item) => {
//     const newItems = this.state.shoppingItems.map(itm => {
//       if (itm === item) {
//         itm.checked = !itm.checked
//       }
//       return itm
//     })
//     this.setState({
//       shoppingItems: newItems
//     })
//   }

//   handleAddItem = (itemName) => {
//     const newItems = [
//       ...this.state.shoppingItems,
//       { name: itemName, checked: false }
//     ]
//     this.setState({
//       shoppingItems: newItems
//     })
//   }

//   render() {
//     return (
//       <>
//         <header>
//           <h1>Shopping List</h1>
//         </header>
//         <main>
//           <section>
//             <AddItemForm onAddItem={this.handleAddItem}/>
//           </section>
//           <section>
//             <ShoppingList
//               items={this.state.shoppingItems}
//               onDeleteItem={this.handleDeleteItem}
//               onCheckItem={this.handleCheckItem}
//             />
//           </section>
//         </main>
//       </>
//     )
//   }
// }


































































// import React, { Component } from 'react';
// import './App.css';
// import Tabs from './state/Tabs';
// import Accordion from './state-drills/Accordion';

// const sections = [
//   {
//     title: 'Section 1',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//   },
//   {
//     title: 'Section 2',
//     content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
//   },
//   {
//     title: 'Section 3',
//     content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
//   },
// ]

// class App extends Component {

//   render() {
//     return (

//       <Accordion sections={sections}/>

//     );
//   }
// }

// export default App;



// import React, { Component } from 'react';
// import './App.css';
// import Tabs from './state/Tabs';


// const tabsProp = [
//   { name: 'First tab',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
//   { name: 'Second tab',
//     content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
//   { name: 'Third tab',
//     content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
// ];
// class App extends Component {

//   render() {
//     return (

//       <Tabs tabs={tabsProp}/>

//     );
//   }
// }

// export default App;





// import React, { Component } from 'react';
// import './App.css';
// import TheDate from './state/TheDate';
// import Counter from './state/Counter';


// class App extends Component {
//   render() {
//     return (
//       <>
//         <TheDate />
//         <Counter count={123} step={1} />
//       </>

//     );
//   }
// }

// export default App;






































































// import React, { Component } from 'react';
// import './App.css';
// import Messages from './Messages';
// import TheDate from './state/TheDate';


// class App extends Component {
//   render() {
//     return (
//       <TheDate />    

//       // <div className="App">
//       //   <h1>YOUR APPLICATION NAME!</h1>
//       //   <Messages name="Messages" unread={0} />
//       //   <Messages name="Notifications" unread={10} />  
//       // </div>

//     );
//   }
// }

// export default App;


// import React from 'react';
// import Split from './composition/Split';
// import './App.css';
// import Tooltip from './composition/Tooltip';

// const firstTooltip = (
//   <Tooltip color='hotpink' message='tooltip message'>
//    ipsum
//   </Tooltip>
// )
// const secondTooltip = (
//   <Tooltip color='#126BCC' message='another tooltip message'>
//     officiis
//   </Tooltip>
// )

// function App() {
//   return (
//     <main className='App'>
//       <Split className='left' flexBasis='2'>
//         This is the casdfe left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
//         <Tooltip message='one more tooltip message'>
//           Necessitatibus?
//         </Tooltip>
//       </Split>
//       <Split className='right'>
//         This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
//       </Split>

//     </main>
//   )
// }
// export default App;