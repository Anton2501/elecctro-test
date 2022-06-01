import React from 'react';

type Todo = {
    id: string;
    label: string;
    isCompleted: boolean;
}

interface ITodoContext {
    list: Todo[];
    addTodo: Function;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onDelete: (id: string) => void;
    onEdit: (text: string, id: string) => void;
}

export const TodoContext = React.createContext<ITodoContext>({
    list: [],
    addTodo: () => undefined,
    onChange: () => undefined,
    onDelete: () => undefined,
    onEdit: () => undefined,
});

TodoContext.displayName = 'TodoContext';

export function Provider({ children }: { children: React.ReactNode }) {
    const [list, updateList] = React.useState<Todo[]>([]);

    const addTodo = React.useCallback((text: string) => {
        const updatedList = [...list];
        updatedList.push({
            id: `${text}#`,
            label: text,
            isCompleted: false,
        });
        updateList(updatedList);
    }, [list, updateList]);

    const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedList = list.map(item => {
            if (e.target.id === item.id) {
                return { ...item, isCompleted: e.target.checked}
            }
            return item;
        });
        updateList(updatedList);
    }, [list, updateList]);

    const onDelete = React.useCallback((id: string) => {
        const updatedList = list.filter(item => id !== item.id);
        updateList(updatedList);
    }, [list, updateList]);

    const onEdit = React.useCallback((text: string, id: string) => {
        const updatedList = list.map(item => {
            if (id === item.id) {
                return { ...item, label: text }
            }
            return item;
        });
        updateList(updatedList);
    }, [list, updateList]);

    return (
        <TodoContext.Provider value={{ list, addTodo, onChange, onDelete, onEdit }}>
            {children}
        </TodoContext.Provider>
    )
}

// function withTodo(Component: React.Component) {
//     const value = React.useContext(TodoContext);
//     return <Component state={state} />;
// }