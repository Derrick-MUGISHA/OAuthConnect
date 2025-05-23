"use client";

export const SignOutButton = (props: {
    children?: React.ReactNode;
    className?: string;
}) => {
    return (
        <button className={props.className}
            style={{ cursor: "pointer" }}
            onClick={() => {
                // TODO: Add sign-out logic here
            }}
        >
            {props.children || "Sign Out"}
        </button>
    );
};
