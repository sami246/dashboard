Built and Deployed a React Admin Dashboard App With Theming, Tables, Charts, Calendar, Kanban and More

Key Features:
- Tailwind CSS
- React Context API


Key Lessons:
- File Structure
        - Index.jsx file to put all exports into one file in components/page folder for ease of import in another file
-  npm install --legacy-peers-deps
- isActive state is given to us from the NavLink component
- Context API
        - Use react state to create state for pop ups and page views
        - Create an initial state where everything is set to false
        - Use createContext to create a context and store in variable. Then use said variable .Provider with value of variable needing context
        - Have to pass through children when using context
        - Wrap the whole app with context provider to be able to use state