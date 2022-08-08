import { Fragment } from "preact";

export interface CourseInfos {
    id: number;
    name: string;
    parts: CoursePart[];
}

export interface CoursePart {
    name: string;
    exercises: number;
    id: number;
}

interface CourseProps {
    courses: CourseInfos[];
}

const Header = ({ name }: { name: string }) => {
    return <h1>{name}</h1>;
};

const Part = ({ name, exercises }: Omit<CoursePart, "id">) => {
    return <p>{name + " " + exercises}</p>;
};

const Content = ({ parts }: { parts: CoursePart[] }) => {
    const content = parts.map((part) => (
        <Fragment key={part.id}>
            <Part name={part.name} exercises={part.exercises} />
        </Fragment>
    ));

    const totalExercises = parts.reduce(
        (prev, curr) => prev + curr.exercises,
        0
    );

    return (
        <Fragment>
            {content}
            <p style={{ fontWeight: "bold" }}>
                total of{" "}
                {totalExercises +
                    " " +
                    (1 >= totalExercises ? "exercise" : "exercises")}
            </p>
        </Fragment>
    );
};

export default function Course(props: CourseProps) {
    return (
        <>
            {props.courses.map((course) => (
                <Fragment key={course.id}>
                    <Header name={course.name} />
                    <Content parts={course.parts} />
                </Fragment>
            ))}
        </>
    );
}
