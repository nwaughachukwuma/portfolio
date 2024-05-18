import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  link?: string;
  role?: string;
};

export function DescriptionCard({ title, children, link, role }: Props) {
  return (
    <div className="block h-full w-full gap-1">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {children}
        {link ? (
          <>
            {" "}
            &minus;{" "}
            <a href={link} target="_blank" className="text-blue-500">
              {link.replace(/(^\w+:|^)\/\//, "")}
            </a>
          </>
        ) : null}
        <br />
        <br />
        {role ? (
          <>
            <span className="font-medium">Role:</span> {role}
          </>
        ) : null}
      </p>
    </div>
  );
}
