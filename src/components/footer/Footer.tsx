import * as React from "react";
import './style.scss';

interface IFooterProps {}

export const Footer: React.SFC<IFooterProps> = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; Copyright {year} - Pau Marfany</p>
      <p>All rights reserved</p>
    </footer>
  );
};