import React from "react";

import { Button } from "@/components/Button";

// import * as styles from "./Category.module.scss";

type Props = {
    categories: Array<{
      fieldValue: string;
      totalCount: number;
    }>;
};

const Category: React.FC<Props> = ({ categories }: Props) => (
    <div>
        {categories.map((category) => (
            // <Button title={category.fieldValue} key={category.fieldValue} to={"http://localhost:8000/category/" + category.fieldValue} />
            <Button title={category.fieldValue} key={category.fieldValue} to={"https://bbannoooo.github.io/category/" + category.fieldValue} />
        ))}
    </div>
);

export default Category;