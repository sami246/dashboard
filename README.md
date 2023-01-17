Deplyed Site: https://sami-dashboard.netlify.app/

Built and Deployed a React Admin Dashboard App With Theming, Tables, Charts, Calendar, Kanban and More

Key Features:
- Tailwind CSS
- React Context API
- Syncfusion
        - Multiple different types of tables with minimal code but amazing features
        - Sorting, Filtering, Editing, all made easy with one or two lines of code
- Deployed using Netlify


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
        - Use context to decide component to render, based on what is sent to handleClick e.g. {isClicked.cart && <Cart />} -- Navbar.jsx
- UseEffect
        - Second argument is a depencedncy array that means the useEffect is only put into affect once the variale is changed e.g. empty would mean it runs only at the opening of page, screenSize would mean when screen size changes however constantly checking screen size would be heavy for the application so no do
        - When using an event listener you need to close it
- TailWind CSS
        - Don't style dynamically e.g `text-${item.text}` would not work
- SyncFusion
        - "<Inject service={[Legend, Category, StackingColumnSeries, Tooltip]}/>" services allow you to specify what you want your chart to have as 'extra features'
        - Normally works by having a singular Directive wrapped by a plural Directive
- Deploy
        - Have to run npm run build to create optimised production build
        - Drag and drop into Netlify, going to Domain Settings to change site name
