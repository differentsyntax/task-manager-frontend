// task-manager-frontend/src/App.js
import { ChakraProvider } from '@chakra-ui/react';
import TaskList from './TaskList';

function App() {
    return (
        <ChakraProvider>
            <div>
                <h1>Task Manager</h1>
                <TaskList />
            </div>
        </ChakraProvider>
    );
}

export default App;
