import Link from 'next/link';
import React from 'react';
import classes from './button.module.css';
export const Button = ({ children, link }) => {
  return (
    <Link href={link}>
      <a className={classes.btn}>{children}</a>
    </Link>
  );
};
