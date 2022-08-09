import { useState } from "preact/hooks";

import { ComponentChild, Fragment, JSX } from "preact";

interface Person {
    name: string;
    number?: string;
    id?: number;
}

interface CardProps extends JSX.HTMLAttributes<HTMLDivElement> {
    children: ComponentChild;
}

const Card = ({ children, className }: CardProps) => {
    return (
        <Fragment>
            <div
                className={`flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 ${className}`.trim()}
            >
                {children}
            </div>
        </Fragment>
    );
};

const CardTitle = ({ title }: { title: string }) => {
    return (
        <Fragment>
            <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                {title}
            </div>
        </Fragment>
    );
};

const CardContent = ({ children }: { children: ComponentChild }) => {
    return (
        <Fragment>
            <div className="mt-8">{children}</div>
        </Fragment>
    );
};

const FormInput = ({
    placeholder,
    icon,
    value,
    onInput,
}: {
    placeholder: string;
    icon: ComponentChild;
    value?: string;
    onInput?: JSX.GenericEventHandler<HTMLInputElement>;
}) => {
    return (
        <Fragment>
            <div className="flex flex-col mb-2">
                <div className="flex relative">
                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        {icon}
                    </span>
                    <input
                        type="text"
                        id="newName"
                        className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder={placeholder}
                        value={value}
                        onInput={onInput}
                    />
                </div>
            </div>
        </Fragment>
    );
};

const FormSubmit = ({ children }: { children: ComponentChild }) => {
    return (
        <Fragment>
            <button
                type="submit"
                className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mt-4"
            >
                {children}
            </button>
        </Fragment>
    );
};

const UserIcon = () => {
    return (
        <Fragment>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                />
            </svg>
        </Fragment>
    );
};

const PhoneIcon = () => {
    return (
        <Fragment>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
        </Fragment>
    );
};

export function App() {
    const [persons, setPersons] = useState<Person[]>([
        { name: "Arto Hellas", number: "040-123456", id: 1 },
        { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
        { name: "Dan Abramov", number: "12-43-234345", id: 3 },
        { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
    ]);
    const [newName, setNewName] = useState<string>("");
    const [newPhoneNumber, setNewPhoneNumber] = useState<string>("");

    const [nameFilter, setNameFilter] = useState<string>("");
    const filteredNames = () =>
        persons
            .filter(
                (person) =>
                    person.name
                        .toLowerCase()
                        .search(nameFilter.toLowerCase()) >= 0
            )
            .sort((a, b) => a.name.localeCompare(b.name));

    const handleSubmit = (e: Event) => {
        e.preventDefault();

        if (
            persons.findIndex(
                (i) => i.name.toLowerCase() === newName.toLowerCase()
            ) === -1 &&
            newName !== ""
        ) {
            setPersons((prev) => [
                ...prev,
                { name: newName, number: newPhoneNumber },
            ]);
            resetFields();
        } else {
            newName === ""
                ? alert("You cannot leave the name field empty.")
                : alert(`${newName} is already added to the phonebook`);
        }
    };

    const resetFields = () => {
        setNewName("");
        setNewPhoneNumber("");
    };

    const nameSearch = (person: Person) => {
        const index = person.name
            .toLowerCase()
            .search(nameFilter.toLowerCase());
        const length = nameFilter.length;

        if (length !== 0) {
            const firstPart = person.name.slice(0, index);
            const searchResult = person.name.slice(index, index + length);
            const lastPart = person.name.slice(index + length);

            return (
                <>
                    {firstPart}
                    <span className="font-bold">{searchResult}</span>
                    {lastPart}
                </>
            );
        } else {
            return <>{person.name}</>;
        }
    };

    return (
        <>
            <div className="flex flex-col lg:flex-row w-screen h-screen items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-900 gap-2">
                <Card>
                    <CardTitle title="Phonebook" />
                    <CardContent>
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <FormInput
                                placeholder="Your name"
                                icon={<UserIcon />}
                                value={newName}
                                onInput={(e) =>
                                    setNewName(
                                        (e.target as HTMLInputElement).value
                                    )
                                }
                            />
                            <FormInput
                                placeholder="Your phone"
                                icon={<PhoneIcon />}
                                value={newPhoneNumber}
                                onInput={(e) =>
                                    setNewPhoneNumber(
                                        (e.target as HTMLInputElement).value
                                    )
                                }
                            />
                            <FormSubmit>Add</FormSubmit>
                        </form>
                    </CardContent>
                </Card>
                <Card className="grow lg:grow-0">
                    <CardTitle title="Numbers" />
                    <CardContent>
                        <FormInput
                            placeholder="Filter name by..."
                            icon={<UserIcon />}
                            value={nameFilter}
                            onInput={(e) => {
                                setNameFilter(
                                    (e.target as HTMLInputElement).value
                                );
                            }}
                        />
                        {filteredNames().length !== 0 && (
                            <table className="dark:text-white table-fixed w-full">
                                <thead className="text-left">
                                    <tr>
                                        <th>Name</th>
                                        <th>Phone Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredNames().map((person) => {
                                        const nameContent = nameSearch(person);

                                        return (
                                            <tr key={person.name}>
                                                <td>{nameContent}</td>
                                                <td>
                                                    {typeof person.number !==
                                                    "undefined"
                                                        ? person.number
                                                        : "No phone number"}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        )}
                        {filteredNames().length === 0 && (
                            <p className="italic">
                                No names matching criterias.
                            </p>
                        )}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
