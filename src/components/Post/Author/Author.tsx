import React from "react";

import { useSiteMetadata } from "@/hooks";
import { getContactHref } from "@/utils";

import * as styles from "./Author.module.scss";

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles.author}>
      <p className={styles.nameContent}>
        {/* {author.bio}
        <span>&nbsp;&nbsp;</span> */}
        <a
          className={styles.twitter}
          href={getContactHref("github", author.contacts.github)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>@</span><strong>{author.name}</strong> on Github
        </a>
      </p>
    </div>
  );
};

export default Author;
