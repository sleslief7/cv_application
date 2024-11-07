import Input from './Input.jsx';
import { useState } from 'react';
import Collapse from './Collapse.jsx';

export default function Personal({ personal, setPersonal }) {
  const [openId, setOpenId] = useState('personal');
  return (
    <Collapse
      id="personal"
      header="Personal Details"
      selectedId={openId}
      setSelectedId={setOpenId}
      bigHeader
    >
      <Input
        label="Full Name"
        id="name"
        value={personal.name}
        setValue={(v) => setPersonal({ ...personal, name: v })}
      />
      <Input
        label="Email"
        type="email"
        id="email"
        value={personal.email}
        setValue={(v) => setPersonal({ ...personal, email: v })}
      />
      <Input
        label="Phone number"
        type="tel"
        id="phone"
        value={personal.phoneNumber}
        setValue={(v) => setPersonal({ ...personal, phoneNumber: v })}
      />
      <Input
        label="Address"
        id="address"
        value={personal.address}
        setValue={(v) => setPersonal({ ...personal, address: v })}
      />
    </Collapse>
  );
}
