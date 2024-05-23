import { useArray, useMount } from "./utils";
export const TestArrayHooks = () => {
    const persons: { name: string; age: number }[] = [
        { name: "John", age: 20 },
        { name: "Jack", age: 22 },
    ];
    const { value, clear, removeIndex, add } = useArray(persons);
    useMount(() => {
        // console.log(value.isempty);
        // add({ name: "Jane" });
        // removeIndex("1");
    });
    return (
        <div>
            {value.map((person, index) => (
                <p key={index}>
                    Name: {person.name}, Age: {person.age}
                </p>
            ))}
            <button onClick={() => clear()}>Clear</button>
            <button onClick={() => removeIndex(0)}>Remove 1nd person</button>
            <button onClick={() => add({ name: "Jane", age: 30 })}>
                Add new person
            </button>
        </div>
    );
};
