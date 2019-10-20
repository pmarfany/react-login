import * as React from "react";
import './footer.scss';

export const Footer: React.SFC = () => (
  <footer>
    <p>Pau Marfany - {new Date().getFullYear()}</p>
  </footer>
);
