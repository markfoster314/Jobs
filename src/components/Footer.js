import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; Copyright 2021 Jobs, Inc. All Rights Reserved</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/privacy">Privacy</a>
          </li>
          <li className="list-inline-item">
            <a href="/tos">Terms</a>
          </li>
          {/* <li className="list-inline-item">
            <a href="/#">FAQ</a>
          </li> */}
        </ul>
      </div>
    </footer>
  );
}
