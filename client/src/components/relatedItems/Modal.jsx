/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '20px',
  zIndex: 1000,
  cursor: 'pointer',
};

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
};

const textStyle = {
  textAlign: 'center',
};

function Modal({ open, closeModal, currOutfit, id }) {
  if (!open) return null;

  const [siteIdInfo, setSiteIdInfo] = useState({});

  useEffect(() => {
    if (id) {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`, {
        headers: {
          Authorization: process.env.GITKEY,
        },
      })
        .then((res) => setSiteIdInfo(res.data))
        .catch((err) => console.log(err));
    }
  }, [id]);

  console.log(siteIdInfo);
  return (
    <>
      <div style={overlayStyle} />
      <div onClick={closeModal} style={modalStyle}>
        <section>
          <table style={{ width: '100%' }}>
            <tr>
              <th>{siteIdInfo.name}</th>
              <th />
              <th>{currOutfit.data.name}</th>
            </tr>
            {currOutfit.data.features.map((feature) => (
              <tbody>
                <tr>
                  <td style={textStyle}> X </td>
                  <td style={textStyle}>{feature.value}</td>
                  <td style={textStyle}> X </td>
                </tr>
              </tbody>
            ))}
          </table>
        </section>
      </div>
    </>
  );
}

export default Modal;