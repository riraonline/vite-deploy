import React from 'react';
import Navbar from './Navbar';

const User = () => {
  return (
    <>
      <div className="p-5 bg-light">
        <div className=" bg-white rounded p-4">
          <table className="table caption-top">
            <caption className="text-black fs-4">Recent Users</caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">1</td>
                <td>Richard</td>
                <td>Alvin</td>
                <td>rira.online@gmail.com</td>
              </tr>
              <tr>
                <td scope="row">2</td>
                <td>Gea</td>
                <td>Melany</td>
                <td>gea.alaye14@gmail.com</td>
              </tr>
              <tr>
                <td scope="row">3</td>
                <td>Jhon</td>
                <td>Doe</td>
                <td>loli.moe@yahoo.mail.com</td>
              </tr>
              <tr>
                <td scope="row">4</td>
                <td>Jhon</td>
                <td>Doe</td>
                <td>loli.moe@yahoo.mail.com</td>
              </tr>
              <tr>
                <td scope="row">5</td>
                <td>Jhon</td>
                <td>Doe</td>
                <td>loli.moe@yahoo.mail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User;
