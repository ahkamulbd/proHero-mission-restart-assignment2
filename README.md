Question: What is JSX, and why is it used?

Answer: JSX (JavaScript XML) is a syntax used in React that allows developers to write HTML-like code inside JavaScript to describe the user interface.

Why JSX is used: 

    1. Easy to read and write – It looks like HTML, so UI code is simpler.

    2. Combines JavaScript and UI – You can use JavaScript logic inside the markup.

    3. Helps create dynamic interfaces – Data can easily be displayed and updated in the UI.

    4. Improves code maintainability – The structure of the interface is clear.


Question: What is the difference between State and Props?

Answer: State and Props are used to manage data in components.

    State: 

       1. Data that belongs to a component.

       2. Can change over time.

       3. Updated using useState or setState.

    Props: 

       4. Data passed from a parent component to a child component.

       5. Read-only (cannot be changed by the child).

    In shortly, state is the internal and changeable data and props is external data passed to a component.


Question: What is the useState hook, and how does it work?

Answer: In React, useState is a hook used to add and manage state in functional components.

    useState returns two values:

    1. The current state value

    2. A function to update that state
   
   In short, useState stores data in a component. When the state changes, React re-renders the component.


Question: How can you share state between components in React?

Answer: In React, state can be shared between components by lifting the state up. This means the state is moved to the closest common parent component, and then passed to child components using props.

In short, the state moves to a parent component and pass it to children using props. 


Question: How is event handling done in React?

Answer: In React, event handling is done by passing event handler functions as props to elements, using camelCase syntax for event names (e.g. onClick, onChange). Instead of traditional HTML strings, you provide a function reference. Events in React are wrapped in a synthetic event system for cross-browser compatibility, but they behave like native events.